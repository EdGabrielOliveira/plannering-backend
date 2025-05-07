import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DateFormatInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(
      map((data: unknown): unknown => {
        return this.transformDates(data);
      }),
    );
  }

  private transformDates(data: unknown): unknown {
    if (data === null || data === undefined) {
      return data;
    }

    if (data instanceof Date) {
      const day = String(data.getDate()).padStart(2, '0');
      const month = String(data.getMonth() + 1).padStart(2, '0');
      const year = data.getFullYear();
      return `${day}/${month}/${year}`;
    }

    if (Array.isArray(data)) {
      return data.map((item) => this.transformDates(item));
    }

    if (typeof data === 'object' && data !== null) {
      const result: Record<string, unknown> = {};
      Object.entries(data as Record<string, unknown>).forEach(
        ([key, value]) => {
          result[key] = this.transformDates(value);
        },
      );
      return result;
    }
    return data;
  }
}
