import { Injectable, NestMiddleware, Logger } from '@nestjs/common';

@Injectable()
export class SecurityLoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('SecurityLogger');

  use(req: any, res: any, next: any): void {
    const startTime = Date.now();
    const { method, originalUrl, ip } = req;
    const userAgent = req.headers['user-agent'] || 'Unknown';
    const userId = req.user?.id || 'Anonymous';
    const hasAuth = !!req.headers.authorization;

    this.logger.log(
      `[${method}] ${originalUrl} - IP: ${ip} - User: ${userId} - Auth: ${hasAuth} - UserAgent: ${userAgent}`,
    );

    this.detectSuspiciousActivity(req);

    res.on('finish', () => {
      const responseTime = Date.now() - startTime;
      const { statusCode } = res;

      if (statusCode >= 400) {
        this.logger.warn(
          `[${method}] ${originalUrl} - ${statusCode} - ${responseTime}ms - IP: ${ip} - User: ${userId}`,
        );

        if (statusCode === 401) {
          this.logger.error(
            `SECURITY ALERT: Unauthorized access attempt - IP: ${ip} - URL: ${originalUrl}`,
          );
        }
      } else {
        this.logger.log(
          `[${method}] ${originalUrl} - ${statusCode} - ${responseTime}ms`,
        );
      }
    });

    next();
  }

  private detectSuspiciousActivity(req: any): void {
    const { originalUrl, headers, ip } = req;

    const sqlInjectionPatterns = [
      /('|(';|';)|(;|;)|(--|--)|(\||\|)|(\*|\*)).*(=|=)/gi,
      /(union|select|insert|delete|update|drop|create|alter|exec|script)/gi,
    ];

    const checkForSqlInjection = (value: string) => {
      return sqlInjectionPatterns.some((pattern) => pattern.test(value));
    };

    if (checkForSqlInjection(originalUrl)) {
      this.logger.error(
        `SECURITY ALERT: Possible SQL Injection attempt - IP: ${ip} - URL: ${originalUrl}`,
      );
    }

    const xssPatterns = [
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
    ];

    const checkForXss = (value: string) => {
      return xssPatterns.some((pattern) => pattern.test(value));
    };

    if (checkForXss(originalUrl)) {
      this.logger.error(
        `SECURITY ALERT: Possible XSS attempt - IP: ${ip} - URL: ${originalUrl}`,
      );
    }

    const userAgent = headers['user-agent'] || '';
    const suspiciousUserAgents = [
      /sqlmap/i,
      /nikto/i,
      /nmap/i,
      /burp/i,
      /curl/i,
      /wget/i,
    ];

    if (suspiciousUserAgents.some((pattern) => pattern.test(userAgent))) {
      this.logger.error(
        `SECURITY ALERT: Suspicious User-Agent detected - IP: ${ip} - UserAgent: ${userAgent}`,
      );
    }

    if (originalUrl.includes('..') || originalUrl.includes('%2e%2e')) {
      this.logger.error(
        `SECURITY ALERT: Path traversal attempt - IP: ${ip} - URL: ${originalUrl}`,
      );
    }
  }
}
