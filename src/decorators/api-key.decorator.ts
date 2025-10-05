import { SetMetadata } from '@nestjs/common';
import { ApiKeyType, API_KEY_TYPES } from '../auth/api-key.guard';

/**
 * Decorator para especificar quais tipos de API Key são aceitos
 * @param types - Array de tipos de API Key aceitos
 */
export const RequireApiKey = (types: ApiKeyType[] = [ApiKeyType.ANY]) =>
  SetMetadata(API_KEY_TYPES, types);

/**
 * Decorator para endpoints que aceitam apenas o cliente web
 */
export const WebOnly = () => RequireApiKey([ApiKeyType.WEB]);

/**
 * Decorator para endpoints que aceitam apenas o app mobile
 */
export const MobileOnly = () => RequireApiKey([ApiKeyType.MOBILE]);

/**
 * Decorator para endpoints que aceitam qualquer cliente válido
 */
export const AnyClient = () => RequireApiKey([ApiKeyType.ANY]);
