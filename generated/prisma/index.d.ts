
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Perfil
 * 
 */
export type Perfil = $Result.DefaultSelection<Prisma.$PerfilPayload>
/**
 * Model Materia
 * 
 */
export type Materia = $Result.DefaultSelection<Prisma.$MateriaPayload>
/**
 * Model Tarefa
 * 
 */
export type Tarefa = $Result.DefaultSelection<Prisma.$TarefaPayload>
/**
 * Model Evento
 * 
 */
export type Evento = $Result.DefaultSelection<Prisma.$EventoPayload>
/**
 * Model Prova
 * 
 */
export type Prova = $Result.DefaultSelection<Prisma.$ProvaPayload>
/**
 * Model Atividade
 * 
 */
export type Atividade = $Result.DefaultSelection<Prisma.$AtividadePayload>
/**
 * Model Notificacao
 * 
 */
export type Notificacao = $Result.DefaultSelection<Prisma.$NotificacaoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  PENDENTE: 'PENDENTE',
  EM_ANDAMENTO: 'EM_ANDAMENTO',
  CONCLUIDO: 'CONCLUIDO',
  CANCELADO: 'CANCELADO'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Prioridade: {
  BAIXA: 'BAIXA',
  MEDIA: 'MEDIA',
  ALTA: 'ALTA',
  URGENTE: 'URGENTE'
};

export type Prioridade = (typeof Prioridade)[keyof typeof Prioridade]


export const TipoNotificacao: {
  INFORMACAO: 'INFORMACAO',
  AVISO: 'AVISO',
  ALERTA: 'ALERTA'
};

export type TipoNotificacao = (typeof TipoNotificacao)[keyof typeof TipoNotificacao]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Prioridade = $Enums.Prioridade

export const Prioridade: typeof $Enums.Prioridade

export type TipoNotificacao = $Enums.TipoNotificacao

export const TipoNotificacao: typeof $Enums.TipoNotificacao

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.perfil`: Exposes CRUD operations for the **Perfil** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Perfils
    * const perfils = await prisma.perfil.findMany()
    * ```
    */
  get perfil(): Prisma.PerfilDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materia`: Exposes CRUD operations for the **Materia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materias
    * const materias = await prisma.materia.findMany()
    * ```
    */
  get materia(): Prisma.MateriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tarefa`: Exposes CRUD operations for the **Tarefa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tarefas
    * const tarefas = await prisma.tarefa.findMany()
    * ```
    */
  get tarefa(): Prisma.TarefaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evento`: Exposes CRUD operations for the **Evento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos
    * const eventos = await prisma.evento.findMany()
    * ```
    */
  get evento(): Prisma.EventoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prova`: Exposes CRUD operations for the **Prova** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prova
    * const prova = await prisma.prova.findMany()
    * ```
    */
  get prova(): Prisma.ProvaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.atividade`: Exposes CRUD operations for the **Atividade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atividades
    * const atividades = await prisma.atividade.findMany()
    * ```
    */
  get atividade(): Prisma.AtividadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificacao`: Exposes CRUD operations for the **Notificacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notificacaos
    * const notificacaos = await prisma.notificacao.findMany()
    * ```
    */
  get notificacao(): Prisma.NotificacaoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Perfil: 'Perfil',
    Materia: 'Materia',
    Tarefa: 'Tarefa',
    Evento: 'Evento',
    Prova: 'Prova',
    Atividade: 'Atividade',
    Notificacao: 'Notificacao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "perfil" | "materia" | "tarefa" | "evento" | "prova" | "atividade" | "notificacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Perfil: {
        payload: Prisma.$PerfilPayload<ExtArgs>
        fields: Prisma.PerfilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PerfilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PerfilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          findFirst: {
            args: Prisma.PerfilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PerfilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          findMany: {
            args: Prisma.PerfilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>[]
          }
          create: {
            args: Prisma.PerfilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          createMany: {
            args: Prisma.PerfilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PerfilCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>[]
          }
          delete: {
            args: Prisma.PerfilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          update: {
            args: Prisma.PerfilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          deleteMany: {
            args: Prisma.PerfilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PerfilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PerfilUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>[]
          }
          upsert: {
            args: Prisma.PerfilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          aggregate: {
            args: Prisma.PerfilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerfil>
          }
          groupBy: {
            args: Prisma.PerfilGroupByArgs<ExtArgs>
            result: $Utils.Optional<PerfilGroupByOutputType>[]
          }
          count: {
            args: Prisma.PerfilCountArgs<ExtArgs>
            result: $Utils.Optional<PerfilCountAggregateOutputType> | number
          }
        }
      }
      Materia: {
        payload: Prisma.$MateriaPayload<ExtArgs>
        fields: Prisma.MateriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MateriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MateriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          findFirst: {
            args: Prisma.MateriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MateriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          findMany: {
            args: Prisma.MateriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          create: {
            args: Prisma.MateriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          createMany: {
            args: Prisma.MateriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MateriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          delete: {
            args: Prisma.MateriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          update: {
            args: Prisma.MateriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          deleteMany: {
            args: Prisma.MateriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MateriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MateriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          upsert: {
            args: Prisma.MateriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          aggregate: {
            args: Prisma.MateriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMateria>
          }
          groupBy: {
            args: Prisma.MateriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MateriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MateriaCountArgs<ExtArgs>
            result: $Utils.Optional<MateriaCountAggregateOutputType> | number
          }
        }
      }
      Tarefa: {
        payload: Prisma.$TarefaPayload<ExtArgs>
        fields: Prisma.TarefaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TarefaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TarefaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          findFirst: {
            args: Prisma.TarefaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TarefaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          findMany: {
            args: Prisma.TarefaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>[]
          }
          create: {
            args: Prisma.TarefaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          createMany: {
            args: Prisma.TarefaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TarefaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>[]
          }
          delete: {
            args: Prisma.TarefaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          update: {
            args: Prisma.TarefaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          deleteMany: {
            args: Prisma.TarefaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TarefaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TarefaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>[]
          }
          upsert: {
            args: Prisma.TarefaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          aggregate: {
            args: Prisma.TarefaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTarefa>
          }
          groupBy: {
            args: Prisma.TarefaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TarefaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TarefaCountArgs<ExtArgs>
            result: $Utils.Optional<TarefaCountAggregateOutputType> | number
          }
        }
      }
      Evento: {
        payload: Prisma.$EventoPayload<ExtArgs>
        fields: Prisma.EventoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findFirst: {
            args: Prisma.EventoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findMany: {
            args: Prisma.EventoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          create: {
            args: Prisma.EventoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          createMany: {
            args: Prisma.EventoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          delete: {
            args: Prisma.EventoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          update: {
            args: Prisma.EventoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          deleteMany: {
            args: Prisma.EventoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          upsert: {
            args: Prisma.EventoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          aggregate: {
            args: Prisma.EventoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvento>
          }
          groupBy: {
            args: Prisma.EventoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventoCountArgs<ExtArgs>
            result: $Utils.Optional<EventoCountAggregateOutputType> | number
          }
        }
      }
      Prova: {
        payload: Prisma.$ProvaPayload<ExtArgs>
        fields: Prisma.ProvaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProvaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProvaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvaPayload>
          }
          findFirst: {
            args: Prisma.ProvaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProvaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvaPayload>
          }
          findMany: {
            args: Prisma.ProvaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvaPayload>[]
          }
          create: {
            args: Prisma.ProvaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvaPayload>
          }
          createMany: {
            args: Prisma.ProvaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProvaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvaPayload>[]
          }
          delete: {
            args: Prisma.ProvaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvaPayload>
          }
          update: {
            args: Prisma.ProvaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvaPayload>
          }
          deleteMany: {
            args: Prisma.ProvaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProvaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProvaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvaPayload>[]
          }
          upsert: {
            args: Prisma.ProvaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvaPayload>
          }
          aggregate: {
            args: Prisma.ProvaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProva>
          }
          groupBy: {
            args: Prisma.ProvaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProvaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProvaCountArgs<ExtArgs>
            result: $Utils.Optional<ProvaCountAggregateOutputType> | number
          }
        }
      }
      Atividade: {
        payload: Prisma.$AtividadePayload<ExtArgs>
        fields: Prisma.AtividadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtividadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtividadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          findFirst: {
            args: Prisma.AtividadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtividadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          findMany: {
            args: Prisma.AtividadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>[]
          }
          create: {
            args: Prisma.AtividadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          createMany: {
            args: Prisma.AtividadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AtividadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>[]
          }
          delete: {
            args: Prisma.AtividadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          update: {
            args: Prisma.AtividadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          deleteMany: {
            args: Prisma.AtividadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtividadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AtividadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>[]
          }
          upsert: {
            args: Prisma.AtividadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          aggregate: {
            args: Prisma.AtividadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtividade>
          }
          groupBy: {
            args: Prisma.AtividadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtividadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtividadeCountArgs<ExtArgs>
            result: $Utils.Optional<AtividadeCountAggregateOutputType> | number
          }
        }
      }
      Notificacao: {
        payload: Prisma.$NotificacaoPayload<ExtArgs>
        fields: Prisma.NotificacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findFirst: {
            args: Prisma.NotificacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findMany: {
            args: Prisma.NotificacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          create: {
            args: Prisma.NotificacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          createMany: {
            args: Prisma.NotificacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          delete: {
            args: Prisma.NotificacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          update: {
            args: Prisma.NotificacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          deleteMany: {
            args: Prisma.NotificacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          upsert: {
            args: Prisma.NotificacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          aggregate: {
            args: Prisma.NotificacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificacao>
          }
          groupBy: {
            args: Prisma.NotificacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificacaoCountArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    perfil?: PerfilOmit
    materia?: MateriaOmit
    tarefa?: TarefaOmit
    evento?: EventoOmit
    prova?: ProvaOmit
    atividade?: AtividadeOmit
    notificacao?: NotificacaoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    tarefas: number
    materias: number
    eventos: number
    provas: number
    atividades: number
    notificacoes: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tarefas?: boolean | UsuarioCountOutputTypeCountTarefasArgs
    materias?: boolean | UsuarioCountOutputTypeCountMateriasArgs
    eventos?: boolean | UsuarioCountOutputTypeCountEventosArgs
    provas?: boolean | UsuarioCountOutputTypeCountProvasArgs
    atividades?: boolean | UsuarioCountOutputTypeCountAtividadesArgs
    notificacoes?: boolean | UsuarioCountOutputTypeCountNotificacoesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountTarefasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TarefaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountMateriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountEventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountProvasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProvaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAtividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtividadeWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountNotificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
  }


  /**
   * Count Type MateriaCountOutputType
   */

  export type MateriaCountOutputType = {
    tarefas: number
    provas: number
    atividades: number
  }

  export type MateriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tarefas?: boolean | MateriaCountOutputTypeCountTarefasArgs
    provas?: boolean | MateriaCountOutputTypeCountProvasArgs
    atividades?: boolean | MateriaCountOutputTypeCountAtividadesArgs
  }

  // Custom InputTypes
  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaCountOutputType
     */
    select?: MateriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeCountTarefasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TarefaWhereInput
  }

  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeCountProvasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProvaWhereInput
  }

  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeCountAtividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtividadeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    telefone: string | null
    senha: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    telefone: string | null
    senha: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    telefone: number
    senha: number
    dataCriacao: number
    dataAtualizacao: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    senha?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    senha?: true
    dataCriacao?: true
    dataAtualizacao?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    senha?: true
    dataCriacao?: true
    dataAtualizacao?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nome: string
    email: string
    telefone: string | null
    senha: string
    dataCriacao: Date
    dataAtualizacao: Date
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    senha?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    tarefas?: boolean | Usuario$tarefasArgs<ExtArgs>
    materias?: boolean | Usuario$materiasArgs<ExtArgs>
    eventos?: boolean | Usuario$eventosArgs<ExtArgs>
    provas?: boolean | Usuario$provasArgs<ExtArgs>
    atividades?: boolean | Usuario$atividadesArgs<ExtArgs>
    perfil?: boolean | Usuario$perfilArgs<ExtArgs>
    notificacoes?: boolean | Usuario$notificacoesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    senha?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    senha?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    senha?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "telefone" | "senha" | "dataCriacao" | "dataAtualizacao", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tarefas?: boolean | Usuario$tarefasArgs<ExtArgs>
    materias?: boolean | Usuario$materiasArgs<ExtArgs>
    eventos?: boolean | Usuario$eventosArgs<ExtArgs>
    provas?: boolean | Usuario$provasArgs<ExtArgs>
    atividades?: boolean | Usuario$atividadesArgs<ExtArgs>
    perfil?: boolean | Usuario$perfilArgs<ExtArgs>
    notificacoes?: boolean | Usuario$notificacoesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      tarefas: Prisma.$TarefaPayload<ExtArgs>[]
      materias: Prisma.$MateriaPayload<ExtArgs>[]
      eventos: Prisma.$EventoPayload<ExtArgs>[]
      provas: Prisma.$ProvaPayload<ExtArgs>[]
      atividades: Prisma.$AtividadePayload<ExtArgs>[]
      perfil: Prisma.$PerfilPayload<ExtArgs> | null
      notificacoes: Prisma.$NotificacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      telefone: string | null
      senha: string
      dataCriacao: Date
      dataAtualizacao: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tarefas<T extends Usuario$tarefasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$tarefasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    materias<T extends Usuario$materiasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$materiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventos<T extends Usuario$eventosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$eventosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    provas<T extends Usuario$provasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$provasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    atividades<T extends Usuario$atividadesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$atividadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    perfil<T extends Usuario$perfilArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$perfilArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notificacoes<T extends Usuario$notificacoesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$notificacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly telefone: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly dataCriacao: FieldRef<"Usuario", 'DateTime'>
    readonly dataAtualizacao: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.tarefas
   */
  export type Usuario$tarefasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    where?: TarefaWhereInput
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    cursor?: TarefaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TarefaScalarFieldEnum | TarefaScalarFieldEnum[]
  }

  /**
   * Usuario.materias
   */
  export type Usuario$materiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    where?: MateriaWhereInput
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    cursor?: MateriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Usuario.eventos
   */
  export type Usuario$eventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    where?: EventoWhereInput
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    cursor?: EventoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Usuario.provas
   */
  export type Usuario$provasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova
     */
    select?: ProvaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prova
     */
    omit?: ProvaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvaInclude<ExtArgs> | null
    where?: ProvaWhereInput
    orderBy?: ProvaOrderByWithRelationInput | ProvaOrderByWithRelationInput[]
    cursor?: ProvaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProvaScalarFieldEnum | ProvaScalarFieldEnum[]
  }

  /**
   * Usuario.atividades
   */
  export type Usuario$atividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    where?: AtividadeWhereInput
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    cursor?: AtividadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * Usuario.perfil
   */
  export type Usuario$perfilArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    where?: PerfilWhereInput
  }

  /**
   * Usuario.notificacoes
   */
  export type Usuario$notificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    cursor?: NotificacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Perfil
   */

  export type AggregatePerfil = {
    _count: PerfilCountAggregateOutputType | null
    _min: PerfilMinAggregateOutputType | null
    _max: PerfilMaxAggregateOutputType | null
  }

  export type PerfilMinAggregateOutputType = {
    id: string | null
    biografia: string | null
    avatar: string | null
    tema: string | null
    usuarioId: string | null
  }

  export type PerfilMaxAggregateOutputType = {
    id: string | null
    biografia: string | null
    avatar: string | null
    tema: string | null
    usuarioId: string | null
  }

  export type PerfilCountAggregateOutputType = {
    id: number
    biografia: number
    avatar: number
    tema: number
    usuarioId: number
    _all: number
  }


  export type PerfilMinAggregateInputType = {
    id?: true
    biografia?: true
    avatar?: true
    tema?: true
    usuarioId?: true
  }

  export type PerfilMaxAggregateInputType = {
    id?: true
    biografia?: true
    avatar?: true
    tema?: true
    usuarioId?: true
  }

  export type PerfilCountAggregateInputType = {
    id?: true
    biografia?: true
    avatar?: true
    tema?: true
    usuarioId?: true
    _all?: true
  }

  export type PerfilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perfil to aggregate.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Perfils
    **/
    _count?: true | PerfilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerfilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerfilMaxAggregateInputType
  }

  export type GetPerfilAggregateType<T extends PerfilAggregateArgs> = {
        [P in keyof T & keyof AggregatePerfil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerfil[P]>
      : GetScalarType<T[P], AggregatePerfil[P]>
  }




  export type PerfilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerfilWhereInput
    orderBy?: PerfilOrderByWithAggregationInput | PerfilOrderByWithAggregationInput[]
    by: PerfilScalarFieldEnum[] | PerfilScalarFieldEnum
    having?: PerfilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerfilCountAggregateInputType | true
    _min?: PerfilMinAggregateInputType
    _max?: PerfilMaxAggregateInputType
  }

  export type PerfilGroupByOutputType = {
    id: string
    biografia: string | null
    avatar: string | null
    tema: string
    usuarioId: string
    _count: PerfilCountAggregateOutputType | null
    _min: PerfilMinAggregateOutputType | null
    _max: PerfilMaxAggregateOutputType | null
  }

  type GetPerfilGroupByPayload<T extends PerfilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerfilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerfilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerfilGroupByOutputType[P]>
            : GetScalarType<T[P], PerfilGroupByOutputType[P]>
        }
      >
    >


  export type PerfilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    biografia?: boolean
    avatar?: boolean
    tema?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perfil"]>

  export type PerfilSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    biografia?: boolean
    avatar?: boolean
    tema?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perfil"]>

  export type PerfilSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    biografia?: boolean
    avatar?: boolean
    tema?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perfil"]>

  export type PerfilSelectScalar = {
    id?: boolean
    biografia?: boolean
    avatar?: boolean
    tema?: boolean
    usuarioId?: boolean
  }

  export type PerfilOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "biografia" | "avatar" | "tema" | "usuarioId", ExtArgs["result"]["perfil"]>
  export type PerfilInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type PerfilIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type PerfilIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $PerfilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Perfil"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      biografia: string | null
      avatar: string | null
      tema: string
      usuarioId: string
    }, ExtArgs["result"]["perfil"]>
    composites: {}
  }

  type PerfilGetPayload<S extends boolean | null | undefined | PerfilDefaultArgs> = $Result.GetResult<Prisma.$PerfilPayload, S>

  type PerfilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PerfilFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PerfilCountAggregateInputType | true
    }

  export interface PerfilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Perfil'], meta: { name: 'Perfil' } }
    /**
     * Find zero or one Perfil that matches the filter.
     * @param {PerfilFindUniqueArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PerfilFindUniqueArgs>(args: SelectSubset<T, PerfilFindUniqueArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Perfil that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PerfilFindUniqueOrThrowArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PerfilFindUniqueOrThrowArgs>(args: SelectSubset<T, PerfilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perfil that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilFindFirstArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PerfilFindFirstArgs>(args?: SelectSubset<T, PerfilFindFirstArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perfil that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilFindFirstOrThrowArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PerfilFindFirstOrThrowArgs>(args?: SelectSubset<T, PerfilFindFirstOrThrowArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Perfils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Perfils
     * const perfils = await prisma.perfil.findMany()
     * 
     * // Get first 10 Perfils
     * const perfils = await prisma.perfil.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const perfilWithIdOnly = await prisma.perfil.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PerfilFindManyArgs>(args?: SelectSubset<T, PerfilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Perfil.
     * @param {PerfilCreateArgs} args - Arguments to create a Perfil.
     * @example
     * // Create one Perfil
     * const Perfil = await prisma.perfil.create({
     *   data: {
     *     // ... data to create a Perfil
     *   }
     * })
     * 
     */
    create<T extends PerfilCreateArgs>(args: SelectSubset<T, PerfilCreateArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Perfils.
     * @param {PerfilCreateManyArgs} args - Arguments to create many Perfils.
     * @example
     * // Create many Perfils
     * const perfil = await prisma.perfil.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PerfilCreateManyArgs>(args?: SelectSubset<T, PerfilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Perfils and returns the data saved in the database.
     * @param {PerfilCreateManyAndReturnArgs} args - Arguments to create many Perfils.
     * @example
     * // Create many Perfils
     * const perfil = await prisma.perfil.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Perfils and only return the `id`
     * const perfilWithIdOnly = await prisma.perfil.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PerfilCreateManyAndReturnArgs>(args?: SelectSubset<T, PerfilCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Perfil.
     * @param {PerfilDeleteArgs} args - Arguments to delete one Perfil.
     * @example
     * // Delete one Perfil
     * const Perfil = await prisma.perfil.delete({
     *   where: {
     *     // ... filter to delete one Perfil
     *   }
     * })
     * 
     */
    delete<T extends PerfilDeleteArgs>(args: SelectSubset<T, PerfilDeleteArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Perfil.
     * @param {PerfilUpdateArgs} args - Arguments to update one Perfil.
     * @example
     * // Update one Perfil
     * const perfil = await prisma.perfil.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PerfilUpdateArgs>(args: SelectSubset<T, PerfilUpdateArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Perfils.
     * @param {PerfilDeleteManyArgs} args - Arguments to filter Perfils to delete.
     * @example
     * // Delete a few Perfils
     * const { count } = await prisma.perfil.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PerfilDeleteManyArgs>(args?: SelectSubset<T, PerfilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perfils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Perfils
     * const perfil = await prisma.perfil.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PerfilUpdateManyArgs>(args: SelectSubset<T, PerfilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perfils and returns the data updated in the database.
     * @param {PerfilUpdateManyAndReturnArgs} args - Arguments to update many Perfils.
     * @example
     * // Update many Perfils
     * const perfil = await prisma.perfil.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Perfils and only return the `id`
     * const perfilWithIdOnly = await prisma.perfil.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PerfilUpdateManyAndReturnArgs>(args: SelectSubset<T, PerfilUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Perfil.
     * @param {PerfilUpsertArgs} args - Arguments to update or create a Perfil.
     * @example
     * // Update or create a Perfil
     * const perfil = await prisma.perfil.upsert({
     *   create: {
     *     // ... data to create a Perfil
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Perfil we want to update
     *   }
     * })
     */
    upsert<T extends PerfilUpsertArgs>(args: SelectSubset<T, PerfilUpsertArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Perfils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilCountArgs} args - Arguments to filter Perfils to count.
     * @example
     * // Count the number of Perfils
     * const count = await prisma.perfil.count({
     *   where: {
     *     // ... the filter for the Perfils we want to count
     *   }
     * })
    **/
    count<T extends PerfilCountArgs>(
      args?: Subset<T, PerfilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerfilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Perfil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PerfilAggregateArgs>(args: Subset<T, PerfilAggregateArgs>): Prisma.PrismaPromise<GetPerfilAggregateType<T>>

    /**
     * Group by Perfil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PerfilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerfilGroupByArgs['orderBy'] }
        : { orderBy?: PerfilGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PerfilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerfilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Perfil model
   */
  readonly fields: PerfilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Perfil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerfilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Perfil model
   */
  interface PerfilFieldRefs {
    readonly id: FieldRef<"Perfil", 'String'>
    readonly biografia: FieldRef<"Perfil", 'String'>
    readonly avatar: FieldRef<"Perfil", 'String'>
    readonly tema: FieldRef<"Perfil", 'String'>
    readonly usuarioId: FieldRef<"Perfil", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Perfil findUnique
   */
  export type PerfilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil findUniqueOrThrow
   */
  export type PerfilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil findFirst
   */
  export type PerfilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perfils.
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perfils.
     */
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * Perfil findFirstOrThrow
   */
  export type PerfilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perfils.
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perfils.
     */
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * Perfil findMany
   */
  export type PerfilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfils to fetch.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Perfils.
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * Perfil create
   */
  export type PerfilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * The data needed to create a Perfil.
     */
    data: XOR<PerfilCreateInput, PerfilUncheckedCreateInput>
  }

  /**
   * Perfil createMany
   */
  export type PerfilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Perfils.
     */
    data: PerfilCreateManyInput | PerfilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Perfil createManyAndReturn
   */
  export type PerfilCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * The data used to create many Perfils.
     */
    data: PerfilCreateManyInput | PerfilCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Perfil update
   */
  export type PerfilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * The data needed to update a Perfil.
     */
    data: XOR<PerfilUpdateInput, PerfilUncheckedUpdateInput>
    /**
     * Choose, which Perfil to update.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil updateMany
   */
  export type PerfilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Perfils.
     */
    data: XOR<PerfilUpdateManyMutationInput, PerfilUncheckedUpdateManyInput>
    /**
     * Filter which Perfils to update
     */
    where?: PerfilWhereInput
    /**
     * Limit how many Perfils to update.
     */
    limit?: number
  }

  /**
   * Perfil updateManyAndReturn
   */
  export type PerfilUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * The data used to update Perfils.
     */
    data: XOR<PerfilUpdateManyMutationInput, PerfilUncheckedUpdateManyInput>
    /**
     * Filter which Perfils to update
     */
    where?: PerfilWhereInput
    /**
     * Limit how many Perfils to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Perfil upsert
   */
  export type PerfilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * The filter to search for the Perfil to update in case it exists.
     */
    where: PerfilWhereUniqueInput
    /**
     * In case the Perfil found by the `where` argument doesn't exist, create a new Perfil with this data.
     */
    create: XOR<PerfilCreateInput, PerfilUncheckedCreateInput>
    /**
     * In case the Perfil was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerfilUpdateInput, PerfilUncheckedUpdateInput>
  }

  /**
   * Perfil delete
   */
  export type PerfilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter which Perfil to delete.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil deleteMany
   */
  export type PerfilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perfils to delete
     */
    where?: PerfilWhereInput
    /**
     * Limit how many Perfils to delete.
     */
    limit?: number
  }

  /**
   * Perfil without action
   */
  export type PerfilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
  }


  /**
   * Model Materia
   */

  export type AggregateMateria = {
    _count: MateriaCountAggregateOutputType | null
    _min: MateriaMinAggregateOutputType | null
    _max: MateriaMaxAggregateOutputType | null
  }

  export type MateriaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    cor: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
    usuarioId: string | null
  }

  export type MateriaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    cor: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
    usuarioId: string | null
  }

  export type MateriaCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    cor: number
    dataCriacao: number
    dataAtualizacao: number
    usuarioId: number
    _all: number
  }


  export type MateriaMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    cor?: true
    dataCriacao?: true
    dataAtualizacao?: true
    usuarioId?: true
  }

  export type MateriaMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    cor?: true
    dataCriacao?: true
    dataAtualizacao?: true
    usuarioId?: true
  }

  export type MateriaCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    cor?: true
    dataCriacao?: true
    dataAtualizacao?: true
    usuarioId?: true
    _all?: true
  }

  export type MateriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materia to aggregate.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materias
    **/
    _count?: true | MateriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MateriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MateriaMaxAggregateInputType
  }

  export type GetMateriaAggregateType<T extends MateriaAggregateArgs> = {
        [P in keyof T & keyof AggregateMateria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMateria[P]>
      : GetScalarType<T[P], AggregateMateria[P]>
  }




  export type MateriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaWhereInput
    orderBy?: MateriaOrderByWithAggregationInput | MateriaOrderByWithAggregationInput[]
    by: MateriaScalarFieldEnum[] | MateriaScalarFieldEnum
    having?: MateriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MateriaCountAggregateInputType | true
    _min?: MateriaMinAggregateInputType
    _max?: MateriaMaxAggregateInputType
  }

  export type MateriaGroupByOutputType = {
    id: string
    nome: string
    descricao: string | null
    cor: string | null
    dataCriacao: Date
    dataAtualizacao: Date
    usuarioId: string
    _count: MateriaCountAggregateOutputType | null
    _min: MateriaMinAggregateOutputType | null
    _max: MateriaMaxAggregateOutputType | null
  }

  type GetMateriaGroupByPayload<T extends MateriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MateriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MateriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MateriaGroupByOutputType[P]>
            : GetScalarType<T[P], MateriaGroupByOutputType[P]>
        }
      >
    >


  export type MateriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    cor?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    tarefas?: boolean | Materia$tarefasArgs<ExtArgs>
    provas?: boolean | Materia$provasArgs<ExtArgs>
    atividades?: boolean | Materia$atividadesArgs<ExtArgs>
    _count?: boolean | MateriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    cor?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    cor?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    cor?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    usuarioId?: boolean
  }

  export type MateriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "cor" | "dataCriacao" | "dataAtualizacao" | "usuarioId", ExtArgs["result"]["materia"]>
  export type MateriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    tarefas?: boolean | Materia$tarefasArgs<ExtArgs>
    provas?: boolean | Materia$provasArgs<ExtArgs>
    atividades?: boolean | Materia$atividadesArgs<ExtArgs>
    _count?: boolean | MateriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MateriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type MateriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $MateriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Materia"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      tarefas: Prisma.$TarefaPayload<ExtArgs>[]
      provas: Prisma.$ProvaPayload<ExtArgs>[]
      atividades: Prisma.$AtividadePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      descricao: string | null
      cor: string | null
      dataCriacao: Date
      dataAtualizacao: Date
      usuarioId: string
    }, ExtArgs["result"]["materia"]>
    composites: {}
  }

  type MateriaGetPayload<S extends boolean | null | undefined | MateriaDefaultArgs> = $Result.GetResult<Prisma.$MateriaPayload, S>

  type MateriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MateriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MateriaCountAggregateInputType | true
    }

  export interface MateriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Materia'], meta: { name: 'Materia' } }
    /**
     * Find zero or one Materia that matches the filter.
     * @param {MateriaFindUniqueArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MateriaFindUniqueArgs>(args: SelectSubset<T, MateriaFindUniqueArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Materia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MateriaFindUniqueOrThrowArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MateriaFindUniqueOrThrowArgs>(args: SelectSubset<T, MateriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindFirstArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MateriaFindFirstArgs>(args?: SelectSubset<T, MateriaFindFirstArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindFirstOrThrowArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MateriaFindFirstOrThrowArgs>(args?: SelectSubset<T, MateriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materias
     * const materias = await prisma.materia.findMany()
     * 
     * // Get first 10 Materias
     * const materias = await prisma.materia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materiaWithIdOnly = await prisma.materia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MateriaFindManyArgs>(args?: SelectSubset<T, MateriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Materia.
     * @param {MateriaCreateArgs} args - Arguments to create a Materia.
     * @example
     * // Create one Materia
     * const Materia = await prisma.materia.create({
     *   data: {
     *     // ... data to create a Materia
     *   }
     * })
     * 
     */
    create<T extends MateriaCreateArgs>(args: SelectSubset<T, MateriaCreateArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materias.
     * @param {MateriaCreateManyArgs} args - Arguments to create many Materias.
     * @example
     * // Create many Materias
     * const materia = await prisma.materia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MateriaCreateManyArgs>(args?: SelectSubset<T, MateriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materias and returns the data saved in the database.
     * @param {MateriaCreateManyAndReturnArgs} args - Arguments to create many Materias.
     * @example
     * // Create many Materias
     * const materia = await prisma.materia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materias and only return the `id`
     * const materiaWithIdOnly = await prisma.materia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MateriaCreateManyAndReturnArgs>(args?: SelectSubset<T, MateriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Materia.
     * @param {MateriaDeleteArgs} args - Arguments to delete one Materia.
     * @example
     * // Delete one Materia
     * const Materia = await prisma.materia.delete({
     *   where: {
     *     // ... filter to delete one Materia
     *   }
     * })
     * 
     */
    delete<T extends MateriaDeleteArgs>(args: SelectSubset<T, MateriaDeleteArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Materia.
     * @param {MateriaUpdateArgs} args - Arguments to update one Materia.
     * @example
     * // Update one Materia
     * const materia = await prisma.materia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MateriaUpdateArgs>(args: SelectSubset<T, MateriaUpdateArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materias.
     * @param {MateriaDeleteManyArgs} args - Arguments to filter Materias to delete.
     * @example
     * // Delete a few Materias
     * const { count } = await prisma.materia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MateriaDeleteManyArgs>(args?: SelectSubset<T, MateriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materias
     * const materia = await prisma.materia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MateriaUpdateManyArgs>(args: SelectSubset<T, MateriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materias and returns the data updated in the database.
     * @param {MateriaUpdateManyAndReturnArgs} args - Arguments to update many Materias.
     * @example
     * // Update many Materias
     * const materia = await prisma.materia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materias and only return the `id`
     * const materiaWithIdOnly = await prisma.materia.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MateriaUpdateManyAndReturnArgs>(args: SelectSubset<T, MateriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Materia.
     * @param {MateriaUpsertArgs} args - Arguments to update or create a Materia.
     * @example
     * // Update or create a Materia
     * const materia = await prisma.materia.upsert({
     *   create: {
     *     // ... data to create a Materia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materia we want to update
     *   }
     * })
     */
    upsert<T extends MateriaUpsertArgs>(args: SelectSubset<T, MateriaUpsertArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaCountArgs} args - Arguments to filter Materias to count.
     * @example
     * // Count the number of Materias
     * const count = await prisma.materia.count({
     *   where: {
     *     // ... the filter for the Materias we want to count
     *   }
     * })
    **/
    count<T extends MateriaCountArgs>(
      args?: Subset<T, MateriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MateriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MateriaAggregateArgs>(args: Subset<T, MateriaAggregateArgs>): Prisma.PrismaPromise<GetMateriaAggregateType<T>>

    /**
     * Group by Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MateriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MateriaGroupByArgs['orderBy'] }
        : { orderBy?: MateriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MateriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMateriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Materia model
   */
  readonly fields: MateriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Materia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MateriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tarefas<T extends Materia$tarefasArgs<ExtArgs> = {}>(args?: Subset<T, Materia$tarefasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    provas<T extends Materia$provasArgs<ExtArgs> = {}>(args?: Subset<T, Materia$provasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    atividades<T extends Materia$atividadesArgs<ExtArgs> = {}>(args?: Subset<T, Materia$atividadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Materia model
   */
  interface MateriaFieldRefs {
    readonly id: FieldRef<"Materia", 'String'>
    readonly nome: FieldRef<"Materia", 'String'>
    readonly descricao: FieldRef<"Materia", 'String'>
    readonly cor: FieldRef<"Materia", 'String'>
    readonly dataCriacao: FieldRef<"Materia", 'DateTime'>
    readonly dataAtualizacao: FieldRef<"Materia", 'DateTime'>
    readonly usuarioId: FieldRef<"Materia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Materia findUnique
   */
  export type MateriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia findUniqueOrThrow
   */
  export type MateriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia findFirst
   */
  export type MateriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materias.
     */
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia findFirstOrThrow
   */
  export type MateriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materias.
     */
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia findMany
   */
  export type MateriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materias to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia create
   */
  export type MateriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Materia.
     */
    data: XOR<MateriaCreateInput, MateriaUncheckedCreateInput>
  }

  /**
   * Materia createMany
   */
  export type MateriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materias.
     */
    data: MateriaCreateManyInput | MateriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Materia createManyAndReturn
   */
  export type MateriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * The data used to create many Materias.
     */
    data: MateriaCreateManyInput | MateriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Materia update
   */
  export type MateriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Materia.
     */
    data: XOR<MateriaUpdateInput, MateriaUncheckedUpdateInput>
    /**
     * Choose, which Materia to update.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia updateMany
   */
  export type MateriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materias.
     */
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyInput>
    /**
     * Filter which Materias to update
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to update.
     */
    limit?: number
  }

  /**
   * Materia updateManyAndReturn
   */
  export type MateriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * The data used to update Materias.
     */
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyInput>
    /**
     * Filter which Materias to update
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Materia upsert
   */
  export type MateriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Materia to update in case it exists.
     */
    where: MateriaWhereUniqueInput
    /**
     * In case the Materia found by the `where` argument doesn't exist, create a new Materia with this data.
     */
    create: XOR<MateriaCreateInput, MateriaUncheckedCreateInput>
    /**
     * In case the Materia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MateriaUpdateInput, MateriaUncheckedUpdateInput>
  }

  /**
   * Materia delete
   */
  export type MateriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter which Materia to delete.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia deleteMany
   */
  export type MateriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materias to delete
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to delete.
     */
    limit?: number
  }

  /**
   * Materia.tarefas
   */
  export type Materia$tarefasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    where?: TarefaWhereInput
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    cursor?: TarefaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TarefaScalarFieldEnum | TarefaScalarFieldEnum[]
  }

  /**
   * Materia.provas
   */
  export type Materia$provasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova
     */
    select?: ProvaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prova
     */
    omit?: ProvaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvaInclude<ExtArgs> | null
    where?: ProvaWhereInput
    orderBy?: ProvaOrderByWithRelationInput | ProvaOrderByWithRelationInput[]
    cursor?: ProvaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProvaScalarFieldEnum | ProvaScalarFieldEnum[]
  }

  /**
   * Materia.atividades
   */
  export type Materia$atividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    where?: AtividadeWhereInput
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    cursor?: AtividadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * Materia without action
   */
  export type MateriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
  }


  /**
   * Model Tarefa
   */

  export type AggregateTarefa = {
    _count: TarefaCountAggregateOutputType | null
    _min: TarefaMinAggregateOutputType | null
    _max: TarefaMaxAggregateOutputType | null
  }

  export type TarefaMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    dataVencimento: Date | null
    prioridade: $Enums.Prioridade | null
    status: $Enums.Status | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
    usuarioId: string | null
    materiaId: string | null
  }

  export type TarefaMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    dataVencimento: Date | null
    prioridade: $Enums.Prioridade | null
    status: $Enums.Status | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
    usuarioId: string | null
    materiaId: string | null
  }

  export type TarefaCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    dataVencimento: number
    prioridade: number
    status: number
    dataCriacao: number
    dataAtualizacao: number
    usuarioId: number
    materiaId: number
    _all: number
  }


  export type TarefaMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    dataVencimento?: true
    prioridade?: true
    status?: true
    dataCriacao?: true
    dataAtualizacao?: true
    usuarioId?: true
    materiaId?: true
  }

  export type TarefaMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    dataVencimento?: true
    prioridade?: true
    status?: true
    dataCriacao?: true
    dataAtualizacao?: true
    usuarioId?: true
    materiaId?: true
  }

  export type TarefaCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    dataVencimento?: true
    prioridade?: true
    status?: true
    dataCriacao?: true
    dataAtualizacao?: true
    usuarioId?: true
    materiaId?: true
    _all?: true
  }

  export type TarefaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tarefa to aggregate.
     */
    where?: TarefaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarefas to fetch.
     */
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TarefaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarefas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarefas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tarefas
    **/
    _count?: true | TarefaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TarefaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TarefaMaxAggregateInputType
  }

  export type GetTarefaAggregateType<T extends TarefaAggregateArgs> = {
        [P in keyof T & keyof AggregateTarefa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTarefa[P]>
      : GetScalarType<T[P], AggregateTarefa[P]>
  }




  export type TarefaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TarefaWhereInput
    orderBy?: TarefaOrderByWithAggregationInput | TarefaOrderByWithAggregationInput[]
    by: TarefaScalarFieldEnum[] | TarefaScalarFieldEnum
    having?: TarefaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TarefaCountAggregateInputType | true
    _min?: TarefaMinAggregateInputType
    _max?: TarefaMaxAggregateInputType
  }

  export type TarefaGroupByOutputType = {
    id: string
    titulo: string
    descricao: string | null
    dataVencimento: Date | null
    prioridade: $Enums.Prioridade
    status: $Enums.Status
    dataCriacao: Date
    dataAtualizacao: Date
    usuarioId: string
    materiaId: string | null
    _count: TarefaCountAggregateOutputType | null
    _min: TarefaMinAggregateOutputType | null
    _max: TarefaMaxAggregateOutputType | null
  }

  type GetTarefaGroupByPayload<T extends TarefaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TarefaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TarefaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TarefaGroupByOutputType[P]>
            : GetScalarType<T[P], TarefaGroupByOutputType[P]>
        }
      >
    >


  export type TarefaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    dataVencimento?: boolean
    prioridade?: boolean
    status?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    usuarioId?: boolean
    materiaId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    materia?: boolean | Tarefa$materiaArgs<ExtArgs>
  }, ExtArgs["result"]["tarefa"]>

  export type TarefaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    dataVencimento?: boolean
    prioridade?: boolean
    status?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    usuarioId?: boolean
    materiaId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    materia?: boolean | Tarefa$materiaArgs<ExtArgs>
  }, ExtArgs["result"]["tarefa"]>

  export type TarefaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    dataVencimento?: boolean
    prioridade?: boolean
    status?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    usuarioId?: boolean
    materiaId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    materia?: boolean | Tarefa$materiaArgs<ExtArgs>
  }, ExtArgs["result"]["tarefa"]>

  export type TarefaSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    dataVencimento?: boolean
    prioridade?: boolean
    status?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    usuarioId?: boolean
    materiaId?: boolean
  }

  export type TarefaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "dataVencimento" | "prioridade" | "status" | "dataCriacao" | "dataAtualizacao" | "usuarioId" | "materiaId", ExtArgs["result"]["tarefa"]>
  export type TarefaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    materia?: boolean | Tarefa$materiaArgs<ExtArgs>
  }
  export type TarefaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    materia?: boolean | Tarefa$materiaArgs<ExtArgs>
  }
  export type TarefaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    materia?: boolean | Tarefa$materiaArgs<ExtArgs>
  }

  export type $TarefaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tarefa"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      materia: Prisma.$MateriaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      descricao: string | null
      dataVencimento: Date | null
      prioridade: $Enums.Prioridade
      status: $Enums.Status
      dataCriacao: Date
      dataAtualizacao: Date
      usuarioId: string
      materiaId: string | null
    }, ExtArgs["result"]["tarefa"]>
    composites: {}
  }

  type TarefaGetPayload<S extends boolean | null | undefined | TarefaDefaultArgs> = $Result.GetResult<Prisma.$TarefaPayload, S>

  type TarefaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TarefaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TarefaCountAggregateInputType | true
    }

  export interface TarefaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tarefa'], meta: { name: 'Tarefa' } }
    /**
     * Find zero or one Tarefa that matches the filter.
     * @param {TarefaFindUniqueArgs} args - Arguments to find a Tarefa
     * @example
     * // Get one Tarefa
     * const tarefa = await prisma.tarefa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TarefaFindUniqueArgs>(args: SelectSubset<T, TarefaFindUniqueArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tarefa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TarefaFindUniqueOrThrowArgs} args - Arguments to find a Tarefa
     * @example
     * // Get one Tarefa
     * const tarefa = await prisma.tarefa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TarefaFindUniqueOrThrowArgs>(args: SelectSubset<T, TarefaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tarefa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaFindFirstArgs} args - Arguments to find a Tarefa
     * @example
     * // Get one Tarefa
     * const tarefa = await prisma.tarefa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TarefaFindFirstArgs>(args?: SelectSubset<T, TarefaFindFirstArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tarefa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaFindFirstOrThrowArgs} args - Arguments to find a Tarefa
     * @example
     * // Get one Tarefa
     * const tarefa = await prisma.tarefa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TarefaFindFirstOrThrowArgs>(args?: SelectSubset<T, TarefaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tarefas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tarefas
     * const tarefas = await prisma.tarefa.findMany()
     * 
     * // Get first 10 Tarefas
     * const tarefas = await prisma.tarefa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tarefaWithIdOnly = await prisma.tarefa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TarefaFindManyArgs>(args?: SelectSubset<T, TarefaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tarefa.
     * @param {TarefaCreateArgs} args - Arguments to create a Tarefa.
     * @example
     * // Create one Tarefa
     * const Tarefa = await prisma.tarefa.create({
     *   data: {
     *     // ... data to create a Tarefa
     *   }
     * })
     * 
     */
    create<T extends TarefaCreateArgs>(args: SelectSubset<T, TarefaCreateArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tarefas.
     * @param {TarefaCreateManyArgs} args - Arguments to create many Tarefas.
     * @example
     * // Create many Tarefas
     * const tarefa = await prisma.tarefa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TarefaCreateManyArgs>(args?: SelectSubset<T, TarefaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tarefas and returns the data saved in the database.
     * @param {TarefaCreateManyAndReturnArgs} args - Arguments to create many Tarefas.
     * @example
     * // Create many Tarefas
     * const tarefa = await prisma.tarefa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tarefas and only return the `id`
     * const tarefaWithIdOnly = await prisma.tarefa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TarefaCreateManyAndReturnArgs>(args?: SelectSubset<T, TarefaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tarefa.
     * @param {TarefaDeleteArgs} args - Arguments to delete one Tarefa.
     * @example
     * // Delete one Tarefa
     * const Tarefa = await prisma.tarefa.delete({
     *   where: {
     *     // ... filter to delete one Tarefa
     *   }
     * })
     * 
     */
    delete<T extends TarefaDeleteArgs>(args: SelectSubset<T, TarefaDeleteArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tarefa.
     * @param {TarefaUpdateArgs} args - Arguments to update one Tarefa.
     * @example
     * // Update one Tarefa
     * const tarefa = await prisma.tarefa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TarefaUpdateArgs>(args: SelectSubset<T, TarefaUpdateArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tarefas.
     * @param {TarefaDeleteManyArgs} args - Arguments to filter Tarefas to delete.
     * @example
     * // Delete a few Tarefas
     * const { count } = await prisma.tarefa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TarefaDeleteManyArgs>(args?: SelectSubset<T, TarefaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tarefas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tarefas
     * const tarefa = await prisma.tarefa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TarefaUpdateManyArgs>(args: SelectSubset<T, TarefaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tarefas and returns the data updated in the database.
     * @param {TarefaUpdateManyAndReturnArgs} args - Arguments to update many Tarefas.
     * @example
     * // Update many Tarefas
     * const tarefa = await prisma.tarefa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tarefas and only return the `id`
     * const tarefaWithIdOnly = await prisma.tarefa.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TarefaUpdateManyAndReturnArgs>(args: SelectSubset<T, TarefaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tarefa.
     * @param {TarefaUpsertArgs} args - Arguments to update or create a Tarefa.
     * @example
     * // Update or create a Tarefa
     * const tarefa = await prisma.tarefa.upsert({
     *   create: {
     *     // ... data to create a Tarefa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tarefa we want to update
     *   }
     * })
     */
    upsert<T extends TarefaUpsertArgs>(args: SelectSubset<T, TarefaUpsertArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tarefas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaCountArgs} args - Arguments to filter Tarefas to count.
     * @example
     * // Count the number of Tarefas
     * const count = await prisma.tarefa.count({
     *   where: {
     *     // ... the filter for the Tarefas we want to count
     *   }
     * })
    **/
    count<T extends TarefaCountArgs>(
      args?: Subset<T, TarefaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TarefaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tarefa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TarefaAggregateArgs>(args: Subset<T, TarefaAggregateArgs>): Prisma.PrismaPromise<GetTarefaAggregateType<T>>

    /**
     * Group by Tarefa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TarefaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TarefaGroupByArgs['orderBy'] }
        : { orderBy?: TarefaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TarefaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTarefaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tarefa model
   */
  readonly fields: TarefaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tarefa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TarefaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    materia<T extends Tarefa$materiaArgs<ExtArgs> = {}>(args?: Subset<T, Tarefa$materiaArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tarefa model
   */
  interface TarefaFieldRefs {
    readonly id: FieldRef<"Tarefa", 'String'>
    readonly titulo: FieldRef<"Tarefa", 'String'>
    readonly descricao: FieldRef<"Tarefa", 'String'>
    readonly dataVencimento: FieldRef<"Tarefa", 'DateTime'>
    readonly prioridade: FieldRef<"Tarefa", 'Prioridade'>
    readonly status: FieldRef<"Tarefa", 'Status'>
    readonly dataCriacao: FieldRef<"Tarefa", 'DateTime'>
    readonly dataAtualizacao: FieldRef<"Tarefa", 'DateTime'>
    readonly usuarioId: FieldRef<"Tarefa", 'String'>
    readonly materiaId: FieldRef<"Tarefa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tarefa findUnique
   */
  export type TarefaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter, which Tarefa to fetch.
     */
    where: TarefaWhereUniqueInput
  }

  /**
   * Tarefa findUniqueOrThrow
   */
  export type TarefaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter, which Tarefa to fetch.
     */
    where: TarefaWhereUniqueInput
  }

  /**
   * Tarefa findFirst
   */
  export type TarefaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter, which Tarefa to fetch.
     */
    where?: TarefaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarefas to fetch.
     */
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tarefas.
     */
    cursor?: TarefaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarefas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarefas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tarefas.
     */
    distinct?: TarefaScalarFieldEnum | TarefaScalarFieldEnum[]
  }

  /**
   * Tarefa findFirstOrThrow
   */
  export type TarefaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter, which Tarefa to fetch.
     */
    where?: TarefaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarefas to fetch.
     */
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tarefas.
     */
    cursor?: TarefaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarefas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarefas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tarefas.
     */
    distinct?: TarefaScalarFieldEnum | TarefaScalarFieldEnum[]
  }

  /**
   * Tarefa findMany
   */
  export type TarefaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter, which Tarefas to fetch.
     */
    where?: TarefaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarefas to fetch.
     */
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tarefas.
     */
    cursor?: TarefaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarefas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarefas.
     */
    skip?: number
    distinct?: TarefaScalarFieldEnum | TarefaScalarFieldEnum[]
  }

  /**
   * Tarefa create
   */
  export type TarefaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * The data needed to create a Tarefa.
     */
    data: XOR<TarefaCreateInput, TarefaUncheckedCreateInput>
  }

  /**
   * Tarefa createMany
   */
  export type TarefaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tarefas.
     */
    data: TarefaCreateManyInput | TarefaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tarefa createManyAndReturn
   */
  export type TarefaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * The data used to create many Tarefas.
     */
    data: TarefaCreateManyInput | TarefaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tarefa update
   */
  export type TarefaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * The data needed to update a Tarefa.
     */
    data: XOR<TarefaUpdateInput, TarefaUncheckedUpdateInput>
    /**
     * Choose, which Tarefa to update.
     */
    where: TarefaWhereUniqueInput
  }

  /**
   * Tarefa updateMany
   */
  export type TarefaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tarefas.
     */
    data: XOR<TarefaUpdateManyMutationInput, TarefaUncheckedUpdateManyInput>
    /**
     * Filter which Tarefas to update
     */
    where?: TarefaWhereInput
    /**
     * Limit how many Tarefas to update.
     */
    limit?: number
  }

  /**
   * Tarefa updateManyAndReturn
   */
  export type TarefaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * The data used to update Tarefas.
     */
    data: XOR<TarefaUpdateManyMutationInput, TarefaUncheckedUpdateManyInput>
    /**
     * Filter which Tarefas to update
     */
    where?: TarefaWhereInput
    /**
     * Limit how many Tarefas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tarefa upsert
   */
  export type TarefaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * The filter to search for the Tarefa to update in case it exists.
     */
    where: TarefaWhereUniqueInput
    /**
     * In case the Tarefa found by the `where` argument doesn't exist, create a new Tarefa with this data.
     */
    create: XOR<TarefaCreateInput, TarefaUncheckedCreateInput>
    /**
     * In case the Tarefa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TarefaUpdateInput, TarefaUncheckedUpdateInput>
  }

  /**
   * Tarefa delete
   */
  export type TarefaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter which Tarefa to delete.
     */
    where: TarefaWhereUniqueInput
  }

  /**
   * Tarefa deleteMany
   */
  export type TarefaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tarefas to delete
     */
    where?: TarefaWhereInput
    /**
     * Limit how many Tarefas to delete.
     */
    limit?: number
  }

  /**
   * Tarefa.materia
   */
  export type Tarefa$materiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    where?: MateriaWhereInput
  }

  /**
   * Tarefa without action
   */
  export type TarefaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
  }


  /**
   * Model Evento
   */

  export type AggregateEvento = {
    _count: EventoCountAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  export type EventoMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    dataInicio: Date | null
    dataFim: Date | null
    diaInteiro: boolean | null
    local: string | null
    cor: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
    usuarioId: string | null
  }

  export type EventoMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    dataInicio: Date | null
    dataFim: Date | null
    diaInteiro: boolean | null
    local: string | null
    cor: string | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
    usuarioId: string | null
  }

  export type EventoCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    dataInicio: number
    dataFim: number
    diaInteiro: number
    local: number
    cor: number
    dataCriacao: number
    dataAtualizacao: number
    usuarioId: number
    _all: number
  }


  export type EventoMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    dataInicio?: true
    dataFim?: true
    diaInteiro?: true
    local?: true
    cor?: true
    dataCriacao?: true
    dataAtualizacao?: true
    usuarioId?: true
  }

  export type EventoMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    dataInicio?: true
    dataFim?: true
    diaInteiro?: true
    local?: true
    cor?: true
    dataCriacao?: true
    dataAtualizacao?: true
    usuarioId?: true
  }

  export type EventoCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    dataInicio?: true
    dataFim?: true
    diaInteiro?: true
    local?: true
    cor?: true
    dataCriacao?: true
    dataAtualizacao?: true
    usuarioId?: true
    _all?: true
  }

  export type EventoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evento to aggregate.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Eventos
    **/
    _count?: true | EventoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventoMaxAggregateInputType
  }

  export type GetEventoAggregateType<T extends EventoAggregateArgs> = {
        [P in keyof T & keyof AggregateEvento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvento[P]>
      : GetScalarType<T[P], AggregateEvento[P]>
  }




  export type EventoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventoWhereInput
    orderBy?: EventoOrderByWithAggregationInput | EventoOrderByWithAggregationInput[]
    by: EventoScalarFieldEnum[] | EventoScalarFieldEnum
    having?: EventoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventoCountAggregateInputType | true
    _min?: EventoMinAggregateInputType
    _max?: EventoMaxAggregateInputType
  }

  export type EventoGroupByOutputType = {
    id: string
    titulo: string
    descricao: string | null
    dataInicio: Date
    dataFim: Date | null
    diaInteiro: boolean
    local: string | null
    cor: string | null
    dataCriacao: Date
    dataAtualizacao: Date
    usuarioId: string
    _count: EventoCountAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  type GetEventoGroupByPayload<T extends EventoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventoGroupByOutputType[P]>
            : GetScalarType<T[P], EventoGroupByOutputType[P]>
        }
      >
    >


  export type EventoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    diaInteiro?: boolean
    local?: boolean
    cor?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    diaInteiro?: boolean
    local?: boolean
    cor?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    diaInteiro?: boolean
    local?: boolean
    cor?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    diaInteiro?: boolean
    local?: boolean
    cor?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    usuarioId?: boolean
  }

  export type EventoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "dataInicio" | "dataFim" | "diaInteiro" | "local" | "cor" | "dataCriacao" | "dataAtualizacao" | "usuarioId", ExtArgs["result"]["evento"]>
  export type EventoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type EventoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type EventoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $EventoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evento"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      descricao: string | null
      dataInicio: Date
      dataFim: Date | null
      diaInteiro: boolean
      local: string | null
      cor: string | null
      dataCriacao: Date
      dataAtualizacao: Date
      usuarioId: string
    }, ExtArgs["result"]["evento"]>
    composites: {}
  }

  type EventoGetPayload<S extends boolean | null | undefined | EventoDefaultArgs> = $Result.GetResult<Prisma.$EventoPayload, S>

  type EventoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventoCountAggregateInputType | true
    }

  export interface EventoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evento'], meta: { name: 'Evento' } }
    /**
     * Find zero or one Evento that matches the filter.
     * @param {EventoFindUniqueArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventoFindUniqueArgs>(args: SelectSubset<T, EventoFindUniqueArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventoFindUniqueOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventoFindUniqueOrThrowArgs>(args: SelectSubset<T, EventoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventoFindFirstArgs>(args?: SelectSubset<T, EventoFindFirstArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventoFindFirstOrThrowArgs>(args?: SelectSubset<T, EventoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos
     * const eventos = await prisma.evento.findMany()
     * 
     * // Get first 10 Eventos
     * const eventos = await prisma.evento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventoWithIdOnly = await prisma.evento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventoFindManyArgs>(args?: SelectSubset<T, EventoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evento.
     * @param {EventoCreateArgs} args - Arguments to create a Evento.
     * @example
     * // Create one Evento
     * const Evento = await prisma.evento.create({
     *   data: {
     *     // ... data to create a Evento
     *   }
     * })
     * 
     */
    create<T extends EventoCreateArgs>(args: SelectSubset<T, EventoCreateArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventos.
     * @param {EventoCreateManyArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventoCreateManyArgs>(args?: SelectSubset<T, EventoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eventos and returns the data saved in the database.
     * @param {EventoCreateManyAndReturnArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eventos and only return the `id`
     * const eventoWithIdOnly = await prisma.evento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventoCreateManyAndReturnArgs>(args?: SelectSubset<T, EventoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evento.
     * @param {EventoDeleteArgs} args - Arguments to delete one Evento.
     * @example
     * // Delete one Evento
     * const Evento = await prisma.evento.delete({
     *   where: {
     *     // ... filter to delete one Evento
     *   }
     * })
     * 
     */
    delete<T extends EventoDeleteArgs>(args: SelectSubset<T, EventoDeleteArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evento.
     * @param {EventoUpdateArgs} args - Arguments to update one Evento.
     * @example
     * // Update one Evento
     * const evento = await prisma.evento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventoUpdateArgs>(args: SelectSubset<T, EventoUpdateArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventos.
     * @param {EventoDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.evento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventoDeleteManyArgs>(args?: SelectSubset<T, EventoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventoUpdateManyArgs>(args: SelectSubset<T, EventoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos and returns the data updated in the database.
     * @param {EventoUpdateManyAndReturnArgs} args - Arguments to update many Eventos.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eventos and only return the `id`
     * const eventoWithIdOnly = await prisma.evento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventoUpdateManyAndReturnArgs>(args: SelectSubset<T, EventoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evento.
     * @param {EventoUpsertArgs} args - Arguments to update or create a Evento.
     * @example
     * // Update or create a Evento
     * const evento = await prisma.evento.upsert({
     *   create: {
     *     // ... data to create a Evento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evento we want to update
     *   }
     * })
     */
    upsert<T extends EventoUpsertArgs>(args: SelectSubset<T, EventoUpsertArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.evento.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
    **/
    count<T extends EventoCountArgs>(
      args?: Subset<T, EventoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventoAggregateArgs>(args: Subset<T, EventoAggregateArgs>): Prisma.PrismaPromise<GetEventoAggregateType<T>>

    /**
     * Group by Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventoGroupByArgs['orderBy'] }
        : { orderBy?: EventoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evento model
   */
  readonly fields: EventoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Evento model
   */
  interface EventoFieldRefs {
    readonly id: FieldRef<"Evento", 'String'>
    readonly titulo: FieldRef<"Evento", 'String'>
    readonly descricao: FieldRef<"Evento", 'String'>
    readonly dataInicio: FieldRef<"Evento", 'DateTime'>
    readonly dataFim: FieldRef<"Evento", 'DateTime'>
    readonly diaInteiro: FieldRef<"Evento", 'Boolean'>
    readonly local: FieldRef<"Evento", 'String'>
    readonly cor: FieldRef<"Evento", 'String'>
    readonly dataCriacao: FieldRef<"Evento", 'DateTime'>
    readonly dataAtualizacao: FieldRef<"Evento", 'DateTime'>
    readonly usuarioId: FieldRef<"Evento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Evento findUnique
   */
  export type EventoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento findUniqueOrThrow
   */
  export type EventoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento findFirst
   */
  export type EventoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento findFirstOrThrow
   */
  export type EventoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento findMany
   */
  export type EventoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento create
   */
  export type EventoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to create a Evento.
     */
    data: XOR<EventoCreateInput, EventoUncheckedCreateInput>
  }

  /**
   * Evento createMany
   */
  export type EventoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evento createManyAndReturn
   */
  export type EventoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evento update
   */
  export type EventoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to update a Evento.
     */
    data: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
    /**
     * Choose, which Evento to update.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento updateMany
   */
  export type EventoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
  }

  /**
   * Evento updateManyAndReturn
   */
  export type EventoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evento upsert
   */
  export type EventoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The filter to search for the Evento to update in case it exists.
     */
    where: EventoWhereUniqueInput
    /**
     * In case the Evento found by the `where` argument doesn't exist, create a new Evento with this data.
     */
    create: XOR<EventoCreateInput, EventoUncheckedCreateInput>
    /**
     * In case the Evento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
  }

  /**
   * Evento delete
   */
  export type EventoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter which Evento to delete.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento deleteMany
   */
  export type EventoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eventos to delete
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to delete.
     */
    limit?: number
  }

  /**
   * Evento without action
   */
  export type EventoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
  }


  /**
   * Model Prova
   */

  export type AggregateProva = {
    _count: ProvaCountAggregateOutputType | null
    _avg: ProvaAvgAggregateOutputType | null
    _sum: ProvaSumAggregateOutputType | null
    _min: ProvaMinAggregateOutputType | null
    _max: ProvaMaxAggregateOutputType | null
  }

  export type ProvaAvgAggregateOutputType = {
    nota: number | null
  }

  export type ProvaSumAggregateOutputType = {
    nota: number | null
  }

  export type ProvaMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    data: Date | null
    local: string | null
    nota: number | null
    status: $Enums.Status | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
    usuarioId: string | null
    materiaId: string | null
  }

  export type ProvaMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    data: Date | null
    local: string | null
    nota: number | null
    status: $Enums.Status | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
    usuarioId: string | null
    materiaId: string | null
  }

  export type ProvaCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    data: number
    local: number
    nota: number
    status: number
    dataCriacao: number
    dataAtualizacao: number
    usuarioId: number
    materiaId: number
    _all: number
  }


  export type ProvaAvgAggregateInputType = {
    nota?: true
  }

  export type ProvaSumAggregateInputType = {
    nota?: true
  }

  export type ProvaMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    data?: true
    local?: true
    nota?: true
    status?: true
    dataCriacao?: true
    dataAtualizacao?: true
    usuarioId?: true
    materiaId?: true
  }

  export type ProvaMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    data?: true
    local?: true
    nota?: true
    status?: true
    dataCriacao?: true
    dataAtualizacao?: true
    usuarioId?: true
    materiaId?: true
  }

  export type ProvaCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    data?: true
    local?: true
    nota?: true
    status?: true
    dataCriacao?: true
    dataAtualizacao?: true
    usuarioId?: true
    materiaId?: true
    _all?: true
  }

  export type ProvaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prova to aggregate.
     */
    where?: ProvaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prova to fetch.
     */
    orderBy?: ProvaOrderByWithRelationInput | ProvaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProvaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prova from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prova.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prova
    **/
    _count?: true | ProvaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProvaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProvaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvaMaxAggregateInputType
  }

  export type GetProvaAggregateType<T extends ProvaAggregateArgs> = {
        [P in keyof T & keyof AggregateProva]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProva[P]>
      : GetScalarType<T[P], AggregateProva[P]>
  }




  export type ProvaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProvaWhereInput
    orderBy?: ProvaOrderByWithAggregationInput | ProvaOrderByWithAggregationInput[]
    by: ProvaScalarFieldEnum[] | ProvaScalarFieldEnum
    having?: ProvaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvaCountAggregateInputType | true
    _avg?: ProvaAvgAggregateInputType
    _sum?: ProvaSumAggregateInputType
    _min?: ProvaMinAggregateInputType
    _max?: ProvaMaxAggregateInputType
  }

  export type ProvaGroupByOutputType = {
    id: string
    titulo: string
    descricao: string | null
    data: Date
    local: string | null
    nota: number | null
    status: $Enums.Status
    dataCriacao: Date
    dataAtualizacao: Date
    usuarioId: string
    materiaId: string | null
    _count: ProvaCountAggregateOutputType | null
    _avg: ProvaAvgAggregateOutputType | null
    _sum: ProvaSumAggregateOutputType | null
    _min: ProvaMinAggregateOutputType | null
    _max: ProvaMaxAggregateOutputType | null
  }

  type GetProvaGroupByPayload<T extends ProvaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProvaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvaGroupByOutputType[P]>
            : GetScalarType<T[P], ProvaGroupByOutputType[P]>
        }
      >
    >


  export type ProvaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    data?: boolean
    local?: boolean
    nota?: boolean
    status?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    usuarioId?: boolean
    materiaId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    materia?: boolean | Prova$materiaArgs<ExtArgs>
  }, ExtArgs["result"]["prova"]>

  export type ProvaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    data?: boolean
    local?: boolean
    nota?: boolean
    status?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    usuarioId?: boolean
    materiaId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    materia?: boolean | Prova$materiaArgs<ExtArgs>
  }, ExtArgs["result"]["prova"]>

  export type ProvaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    data?: boolean
    local?: boolean
    nota?: boolean
    status?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    usuarioId?: boolean
    materiaId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    materia?: boolean | Prova$materiaArgs<ExtArgs>
  }, ExtArgs["result"]["prova"]>

  export type ProvaSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    data?: boolean
    local?: boolean
    nota?: boolean
    status?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    usuarioId?: boolean
    materiaId?: boolean
  }

  export type ProvaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "data" | "local" | "nota" | "status" | "dataCriacao" | "dataAtualizacao" | "usuarioId" | "materiaId", ExtArgs["result"]["prova"]>
  export type ProvaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    materia?: boolean | Prova$materiaArgs<ExtArgs>
  }
  export type ProvaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    materia?: boolean | Prova$materiaArgs<ExtArgs>
  }
  export type ProvaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    materia?: boolean | Prova$materiaArgs<ExtArgs>
  }

  export type $ProvaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prova"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      materia: Prisma.$MateriaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      descricao: string | null
      data: Date
      local: string | null
      nota: number | null
      status: $Enums.Status
      dataCriacao: Date
      dataAtualizacao: Date
      usuarioId: string
      materiaId: string | null
    }, ExtArgs["result"]["prova"]>
    composites: {}
  }

  type ProvaGetPayload<S extends boolean | null | undefined | ProvaDefaultArgs> = $Result.GetResult<Prisma.$ProvaPayload, S>

  type ProvaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProvaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProvaCountAggregateInputType | true
    }

  export interface ProvaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prova'], meta: { name: 'Prova' } }
    /**
     * Find zero or one Prova that matches the filter.
     * @param {ProvaFindUniqueArgs} args - Arguments to find a Prova
     * @example
     * // Get one Prova
     * const prova = await prisma.prova.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProvaFindUniqueArgs>(args: SelectSubset<T, ProvaFindUniqueArgs<ExtArgs>>): Prisma__ProvaClient<$Result.GetResult<Prisma.$ProvaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prova that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProvaFindUniqueOrThrowArgs} args - Arguments to find a Prova
     * @example
     * // Get one Prova
     * const prova = await prisma.prova.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProvaFindUniqueOrThrowArgs>(args: SelectSubset<T, ProvaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProvaClient<$Result.GetResult<Prisma.$ProvaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prova that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvaFindFirstArgs} args - Arguments to find a Prova
     * @example
     * // Get one Prova
     * const prova = await prisma.prova.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProvaFindFirstArgs>(args?: SelectSubset<T, ProvaFindFirstArgs<ExtArgs>>): Prisma__ProvaClient<$Result.GetResult<Prisma.$ProvaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prova that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvaFindFirstOrThrowArgs} args - Arguments to find a Prova
     * @example
     * // Get one Prova
     * const prova = await prisma.prova.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProvaFindFirstOrThrowArgs>(args?: SelectSubset<T, ProvaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProvaClient<$Result.GetResult<Prisma.$ProvaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prova that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prova
     * const prova = await prisma.prova.findMany()
     * 
     * // Get first 10 Prova
     * const prova = await prisma.prova.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const provaWithIdOnly = await prisma.prova.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProvaFindManyArgs>(args?: SelectSubset<T, ProvaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prova.
     * @param {ProvaCreateArgs} args - Arguments to create a Prova.
     * @example
     * // Create one Prova
     * const Prova = await prisma.prova.create({
     *   data: {
     *     // ... data to create a Prova
     *   }
     * })
     * 
     */
    create<T extends ProvaCreateArgs>(args: SelectSubset<T, ProvaCreateArgs<ExtArgs>>): Prisma__ProvaClient<$Result.GetResult<Prisma.$ProvaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prova.
     * @param {ProvaCreateManyArgs} args - Arguments to create many Prova.
     * @example
     * // Create many Prova
     * const prova = await prisma.prova.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProvaCreateManyArgs>(args?: SelectSubset<T, ProvaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prova and returns the data saved in the database.
     * @param {ProvaCreateManyAndReturnArgs} args - Arguments to create many Prova.
     * @example
     * // Create many Prova
     * const prova = await prisma.prova.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prova and only return the `id`
     * const provaWithIdOnly = await prisma.prova.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProvaCreateManyAndReturnArgs>(args?: SelectSubset<T, ProvaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prova.
     * @param {ProvaDeleteArgs} args - Arguments to delete one Prova.
     * @example
     * // Delete one Prova
     * const Prova = await prisma.prova.delete({
     *   where: {
     *     // ... filter to delete one Prova
     *   }
     * })
     * 
     */
    delete<T extends ProvaDeleteArgs>(args: SelectSubset<T, ProvaDeleteArgs<ExtArgs>>): Prisma__ProvaClient<$Result.GetResult<Prisma.$ProvaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prova.
     * @param {ProvaUpdateArgs} args - Arguments to update one Prova.
     * @example
     * // Update one Prova
     * const prova = await prisma.prova.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProvaUpdateArgs>(args: SelectSubset<T, ProvaUpdateArgs<ExtArgs>>): Prisma__ProvaClient<$Result.GetResult<Prisma.$ProvaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prova.
     * @param {ProvaDeleteManyArgs} args - Arguments to filter Prova to delete.
     * @example
     * // Delete a few Prova
     * const { count } = await prisma.prova.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProvaDeleteManyArgs>(args?: SelectSubset<T, ProvaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prova.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prova
     * const prova = await prisma.prova.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProvaUpdateManyArgs>(args: SelectSubset<T, ProvaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prova and returns the data updated in the database.
     * @param {ProvaUpdateManyAndReturnArgs} args - Arguments to update many Prova.
     * @example
     * // Update many Prova
     * const prova = await prisma.prova.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prova and only return the `id`
     * const provaWithIdOnly = await prisma.prova.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProvaUpdateManyAndReturnArgs>(args: SelectSubset<T, ProvaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prova.
     * @param {ProvaUpsertArgs} args - Arguments to update or create a Prova.
     * @example
     * // Update or create a Prova
     * const prova = await prisma.prova.upsert({
     *   create: {
     *     // ... data to create a Prova
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prova we want to update
     *   }
     * })
     */
    upsert<T extends ProvaUpsertArgs>(args: SelectSubset<T, ProvaUpsertArgs<ExtArgs>>): Prisma__ProvaClient<$Result.GetResult<Prisma.$ProvaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prova.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvaCountArgs} args - Arguments to filter Prova to count.
     * @example
     * // Count the number of Prova
     * const count = await prisma.prova.count({
     *   where: {
     *     // ... the filter for the Prova we want to count
     *   }
     * })
    **/
    count<T extends ProvaCountArgs>(
      args?: Subset<T, ProvaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prova.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProvaAggregateArgs>(args: Subset<T, ProvaAggregateArgs>): Prisma.PrismaPromise<GetProvaAggregateType<T>>

    /**
     * Group by Prova.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProvaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProvaGroupByArgs['orderBy'] }
        : { orderBy?: ProvaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProvaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prova model
   */
  readonly fields: ProvaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prova.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProvaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    materia<T extends Prova$materiaArgs<ExtArgs> = {}>(args?: Subset<T, Prova$materiaArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prova model
   */
  interface ProvaFieldRefs {
    readonly id: FieldRef<"Prova", 'String'>
    readonly titulo: FieldRef<"Prova", 'String'>
    readonly descricao: FieldRef<"Prova", 'String'>
    readonly data: FieldRef<"Prova", 'DateTime'>
    readonly local: FieldRef<"Prova", 'String'>
    readonly nota: FieldRef<"Prova", 'Float'>
    readonly status: FieldRef<"Prova", 'Status'>
    readonly dataCriacao: FieldRef<"Prova", 'DateTime'>
    readonly dataAtualizacao: FieldRef<"Prova", 'DateTime'>
    readonly usuarioId: FieldRef<"Prova", 'String'>
    readonly materiaId: FieldRef<"Prova", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Prova findUnique
   */
  export type ProvaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova
     */
    select?: ProvaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prova
     */
    omit?: ProvaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvaInclude<ExtArgs> | null
    /**
     * Filter, which Prova to fetch.
     */
    where: ProvaWhereUniqueInput
  }

  /**
   * Prova findUniqueOrThrow
   */
  export type ProvaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova
     */
    select?: ProvaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prova
     */
    omit?: ProvaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvaInclude<ExtArgs> | null
    /**
     * Filter, which Prova to fetch.
     */
    where: ProvaWhereUniqueInput
  }

  /**
   * Prova findFirst
   */
  export type ProvaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova
     */
    select?: ProvaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prova
     */
    omit?: ProvaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvaInclude<ExtArgs> | null
    /**
     * Filter, which Prova to fetch.
     */
    where?: ProvaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prova to fetch.
     */
    orderBy?: ProvaOrderByWithRelationInput | ProvaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prova.
     */
    cursor?: ProvaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prova from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prova.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prova.
     */
    distinct?: ProvaScalarFieldEnum | ProvaScalarFieldEnum[]
  }

  /**
   * Prova findFirstOrThrow
   */
  export type ProvaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova
     */
    select?: ProvaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prova
     */
    omit?: ProvaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvaInclude<ExtArgs> | null
    /**
     * Filter, which Prova to fetch.
     */
    where?: ProvaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prova to fetch.
     */
    orderBy?: ProvaOrderByWithRelationInput | ProvaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prova.
     */
    cursor?: ProvaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prova from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prova.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prova.
     */
    distinct?: ProvaScalarFieldEnum | ProvaScalarFieldEnum[]
  }

  /**
   * Prova findMany
   */
  export type ProvaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova
     */
    select?: ProvaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prova
     */
    omit?: ProvaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvaInclude<ExtArgs> | null
    /**
     * Filter, which Prova to fetch.
     */
    where?: ProvaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prova to fetch.
     */
    orderBy?: ProvaOrderByWithRelationInput | ProvaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prova.
     */
    cursor?: ProvaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prova from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prova.
     */
    skip?: number
    distinct?: ProvaScalarFieldEnum | ProvaScalarFieldEnum[]
  }

  /**
   * Prova create
   */
  export type ProvaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova
     */
    select?: ProvaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prova
     */
    omit?: ProvaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvaInclude<ExtArgs> | null
    /**
     * The data needed to create a Prova.
     */
    data: XOR<ProvaCreateInput, ProvaUncheckedCreateInput>
  }

  /**
   * Prova createMany
   */
  export type ProvaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prova.
     */
    data: ProvaCreateManyInput | ProvaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prova createManyAndReturn
   */
  export type ProvaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova
     */
    select?: ProvaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prova
     */
    omit?: ProvaOmit<ExtArgs> | null
    /**
     * The data used to create many Prova.
     */
    data: ProvaCreateManyInput | ProvaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prova update
   */
  export type ProvaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova
     */
    select?: ProvaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prova
     */
    omit?: ProvaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvaInclude<ExtArgs> | null
    /**
     * The data needed to update a Prova.
     */
    data: XOR<ProvaUpdateInput, ProvaUncheckedUpdateInput>
    /**
     * Choose, which Prova to update.
     */
    where: ProvaWhereUniqueInput
  }

  /**
   * Prova updateMany
   */
  export type ProvaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prova.
     */
    data: XOR<ProvaUpdateManyMutationInput, ProvaUncheckedUpdateManyInput>
    /**
     * Filter which Prova to update
     */
    where?: ProvaWhereInput
    /**
     * Limit how many Prova to update.
     */
    limit?: number
  }

  /**
   * Prova updateManyAndReturn
   */
  export type ProvaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova
     */
    select?: ProvaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prova
     */
    omit?: ProvaOmit<ExtArgs> | null
    /**
     * The data used to update Prova.
     */
    data: XOR<ProvaUpdateManyMutationInput, ProvaUncheckedUpdateManyInput>
    /**
     * Filter which Prova to update
     */
    where?: ProvaWhereInput
    /**
     * Limit how many Prova to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prova upsert
   */
  export type ProvaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova
     */
    select?: ProvaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prova
     */
    omit?: ProvaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvaInclude<ExtArgs> | null
    /**
     * The filter to search for the Prova to update in case it exists.
     */
    where: ProvaWhereUniqueInput
    /**
     * In case the Prova found by the `where` argument doesn't exist, create a new Prova with this data.
     */
    create: XOR<ProvaCreateInput, ProvaUncheckedCreateInput>
    /**
     * In case the Prova was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProvaUpdateInput, ProvaUncheckedUpdateInput>
  }

  /**
   * Prova delete
   */
  export type ProvaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova
     */
    select?: ProvaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prova
     */
    omit?: ProvaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvaInclude<ExtArgs> | null
    /**
     * Filter which Prova to delete.
     */
    where: ProvaWhereUniqueInput
  }

  /**
   * Prova deleteMany
   */
  export type ProvaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prova to delete
     */
    where?: ProvaWhereInput
    /**
     * Limit how many Prova to delete.
     */
    limit?: number
  }

  /**
   * Prova.materia
   */
  export type Prova$materiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    where?: MateriaWhereInput
  }

  /**
   * Prova without action
   */
  export type ProvaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prova
     */
    select?: ProvaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prova
     */
    omit?: ProvaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvaInclude<ExtArgs> | null
  }


  /**
   * Model Atividade
   */

  export type AggregateAtividade = {
    _count: AtividadeCountAggregateOutputType | null
    _avg: AtividadeAvgAggregateOutputType | null
    _sum: AtividadeSumAggregateOutputType | null
    _min: AtividadeMinAggregateOutputType | null
    _max: AtividadeMaxAggregateOutputType | null
  }

  export type AtividadeAvgAggregateOutputType = {
    peso: number | null
    nota: number | null
  }

  export type AtividadeSumAggregateOutputType = {
    peso: number | null
    nota: number | null
  }

  export type AtividadeMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    dataVencimento: Date | null
    peso: number | null
    nota: number | null
    status: $Enums.Status | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
    usuarioId: string | null
    materiaId: string | null
  }

  export type AtividadeMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    dataVencimento: Date | null
    peso: number | null
    nota: number | null
    status: $Enums.Status | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
    usuarioId: string | null
    materiaId: string | null
  }

  export type AtividadeCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    dataVencimento: number
    peso: number
    nota: number
    status: number
    dataCriacao: number
    dataAtualizacao: number
    usuarioId: number
    materiaId: number
    _all: number
  }


  export type AtividadeAvgAggregateInputType = {
    peso?: true
    nota?: true
  }

  export type AtividadeSumAggregateInputType = {
    peso?: true
    nota?: true
  }

  export type AtividadeMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    dataVencimento?: true
    peso?: true
    nota?: true
    status?: true
    dataCriacao?: true
    dataAtualizacao?: true
    usuarioId?: true
    materiaId?: true
  }

  export type AtividadeMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    dataVencimento?: true
    peso?: true
    nota?: true
    status?: true
    dataCriacao?: true
    dataAtualizacao?: true
    usuarioId?: true
    materiaId?: true
  }

  export type AtividadeCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    dataVencimento?: true
    peso?: true
    nota?: true
    status?: true
    dataCriacao?: true
    dataAtualizacao?: true
    usuarioId?: true
    materiaId?: true
    _all?: true
  }

  export type AtividadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atividade to aggregate.
     */
    where?: AtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atividades to fetch.
     */
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Atividades
    **/
    _count?: true | AtividadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtividadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtividadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtividadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtividadeMaxAggregateInputType
  }

  export type GetAtividadeAggregateType<T extends AtividadeAggregateArgs> = {
        [P in keyof T & keyof AggregateAtividade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtividade[P]>
      : GetScalarType<T[P], AggregateAtividade[P]>
  }




  export type AtividadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtividadeWhereInput
    orderBy?: AtividadeOrderByWithAggregationInput | AtividadeOrderByWithAggregationInput[]
    by: AtividadeScalarFieldEnum[] | AtividadeScalarFieldEnum
    having?: AtividadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtividadeCountAggregateInputType | true
    _avg?: AtividadeAvgAggregateInputType
    _sum?: AtividadeSumAggregateInputType
    _min?: AtividadeMinAggregateInputType
    _max?: AtividadeMaxAggregateInputType
  }

  export type AtividadeGroupByOutputType = {
    id: string
    titulo: string
    descricao: string | null
    dataVencimento: Date | null
    peso: number | null
    nota: number | null
    status: $Enums.Status
    dataCriacao: Date
    dataAtualizacao: Date
    usuarioId: string
    materiaId: string | null
    _count: AtividadeCountAggregateOutputType | null
    _avg: AtividadeAvgAggregateOutputType | null
    _sum: AtividadeSumAggregateOutputType | null
    _min: AtividadeMinAggregateOutputType | null
    _max: AtividadeMaxAggregateOutputType | null
  }

  type GetAtividadeGroupByPayload<T extends AtividadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtividadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtividadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtividadeGroupByOutputType[P]>
            : GetScalarType<T[P], AtividadeGroupByOutputType[P]>
        }
      >
    >


  export type AtividadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    dataVencimento?: boolean
    peso?: boolean
    nota?: boolean
    status?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    usuarioId?: boolean
    materiaId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    materia?: boolean | Atividade$materiaArgs<ExtArgs>
  }, ExtArgs["result"]["atividade"]>

  export type AtividadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    dataVencimento?: boolean
    peso?: boolean
    nota?: boolean
    status?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    usuarioId?: boolean
    materiaId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    materia?: boolean | Atividade$materiaArgs<ExtArgs>
  }, ExtArgs["result"]["atividade"]>

  export type AtividadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    dataVencimento?: boolean
    peso?: boolean
    nota?: boolean
    status?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    usuarioId?: boolean
    materiaId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    materia?: boolean | Atividade$materiaArgs<ExtArgs>
  }, ExtArgs["result"]["atividade"]>

  export type AtividadeSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    dataVencimento?: boolean
    peso?: boolean
    nota?: boolean
    status?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    usuarioId?: boolean
    materiaId?: boolean
  }

  export type AtividadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "dataVencimento" | "peso" | "nota" | "status" | "dataCriacao" | "dataAtualizacao" | "usuarioId" | "materiaId", ExtArgs["result"]["atividade"]>
  export type AtividadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    materia?: boolean | Atividade$materiaArgs<ExtArgs>
  }
  export type AtividadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    materia?: boolean | Atividade$materiaArgs<ExtArgs>
  }
  export type AtividadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    materia?: boolean | Atividade$materiaArgs<ExtArgs>
  }

  export type $AtividadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Atividade"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      materia: Prisma.$MateriaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      descricao: string | null
      dataVencimento: Date | null
      peso: number | null
      nota: number | null
      status: $Enums.Status
      dataCriacao: Date
      dataAtualizacao: Date
      usuarioId: string
      materiaId: string | null
    }, ExtArgs["result"]["atividade"]>
    composites: {}
  }

  type AtividadeGetPayload<S extends boolean | null | undefined | AtividadeDefaultArgs> = $Result.GetResult<Prisma.$AtividadePayload, S>

  type AtividadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtividadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtividadeCountAggregateInputType | true
    }

  export interface AtividadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Atividade'], meta: { name: 'Atividade' } }
    /**
     * Find zero or one Atividade that matches the filter.
     * @param {AtividadeFindUniqueArgs} args - Arguments to find a Atividade
     * @example
     * // Get one Atividade
     * const atividade = await prisma.atividade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtividadeFindUniqueArgs>(args: SelectSubset<T, AtividadeFindUniqueArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Atividade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtividadeFindUniqueOrThrowArgs} args - Arguments to find a Atividade
     * @example
     * // Get one Atividade
     * const atividade = await prisma.atividade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtividadeFindUniqueOrThrowArgs>(args: SelectSubset<T, AtividadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atividade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeFindFirstArgs} args - Arguments to find a Atividade
     * @example
     * // Get one Atividade
     * const atividade = await prisma.atividade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtividadeFindFirstArgs>(args?: SelectSubset<T, AtividadeFindFirstArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atividade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeFindFirstOrThrowArgs} args - Arguments to find a Atividade
     * @example
     * // Get one Atividade
     * const atividade = await prisma.atividade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtividadeFindFirstOrThrowArgs>(args?: SelectSubset<T, AtividadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Atividades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Atividades
     * const atividades = await prisma.atividade.findMany()
     * 
     * // Get first 10 Atividades
     * const atividades = await prisma.atividade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atividadeWithIdOnly = await prisma.atividade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtividadeFindManyArgs>(args?: SelectSubset<T, AtividadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Atividade.
     * @param {AtividadeCreateArgs} args - Arguments to create a Atividade.
     * @example
     * // Create one Atividade
     * const Atividade = await prisma.atividade.create({
     *   data: {
     *     // ... data to create a Atividade
     *   }
     * })
     * 
     */
    create<T extends AtividadeCreateArgs>(args: SelectSubset<T, AtividadeCreateArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Atividades.
     * @param {AtividadeCreateManyArgs} args - Arguments to create many Atividades.
     * @example
     * // Create many Atividades
     * const atividade = await prisma.atividade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtividadeCreateManyArgs>(args?: SelectSubset<T, AtividadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Atividades and returns the data saved in the database.
     * @param {AtividadeCreateManyAndReturnArgs} args - Arguments to create many Atividades.
     * @example
     * // Create many Atividades
     * const atividade = await prisma.atividade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Atividades and only return the `id`
     * const atividadeWithIdOnly = await prisma.atividade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AtividadeCreateManyAndReturnArgs>(args?: SelectSubset<T, AtividadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Atividade.
     * @param {AtividadeDeleteArgs} args - Arguments to delete one Atividade.
     * @example
     * // Delete one Atividade
     * const Atividade = await prisma.atividade.delete({
     *   where: {
     *     // ... filter to delete one Atividade
     *   }
     * })
     * 
     */
    delete<T extends AtividadeDeleteArgs>(args: SelectSubset<T, AtividadeDeleteArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Atividade.
     * @param {AtividadeUpdateArgs} args - Arguments to update one Atividade.
     * @example
     * // Update one Atividade
     * const atividade = await prisma.atividade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtividadeUpdateArgs>(args: SelectSubset<T, AtividadeUpdateArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Atividades.
     * @param {AtividadeDeleteManyArgs} args - Arguments to filter Atividades to delete.
     * @example
     * // Delete a few Atividades
     * const { count } = await prisma.atividade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtividadeDeleteManyArgs>(args?: SelectSubset<T, AtividadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Atividades
     * const atividade = await prisma.atividade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtividadeUpdateManyArgs>(args: SelectSubset<T, AtividadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atividades and returns the data updated in the database.
     * @param {AtividadeUpdateManyAndReturnArgs} args - Arguments to update many Atividades.
     * @example
     * // Update many Atividades
     * const atividade = await prisma.atividade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Atividades and only return the `id`
     * const atividadeWithIdOnly = await prisma.atividade.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AtividadeUpdateManyAndReturnArgs>(args: SelectSubset<T, AtividadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Atividade.
     * @param {AtividadeUpsertArgs} args - Arguments to update or create a Atividade.
     * @example
     * // Update or create a Atividade
     * const atividade = await prisma.atividade.upsert({
     *   create: {
     *     // ... data to create a Atividade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Atividade we want to update
     *   }
     * })
     */
    upsert<T extends AtividadeUpsertArgs>(args: SelectSubset<T, AtividadeUpsertArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Atividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeCountArgs} args - Arguments to filter Atividades to count.
     * @example
     * // Count the number of Atividades
     * const count = await prisma.atividade.count({
     *   where: {
     *     // ... the filter for the Atividades we want to count
     *   }
     * })
    **/
    count<T extends AtividadeCountArgs>(
      args?: Subset<T, AtividadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtividadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Atividade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AtividadeAggregateArgs>(args: Subset<T, AtividadeAggregateArgs>): Prisma.PrismaPromise<GetAtividadeAggregateType<T>>

    /**
     * Group by Atividade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AtividadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtividadeGroupByArgs['orderBy'] }
        : { orderBy?: AtividadeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AtividadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtividadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Atividade model
   */
  readonly fields: AtividadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Atividade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtividadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    materia<T extends Atividade$materiaArgs<ExtArgs> = {}>(args?: Subset<T, Atividade$materiaArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Atividade model
   */
  interface AtividadeFieldRefs {
    readonly id: FieldRef<"Atividade", 'String'>
    readonly titulo: FieldRef<"Atividade", 'String'>
    readonly descricao: FieldRef<"Atividade", 'String'>
    readonly dataVencimento: FieldRef<"Atividade", 'DateTime'>
    readonly peso: FieldRef<"Atividade", 'Float'>
    readonly nota: FieldRef<"Atividade", 'Float'>
    readonly status: FieldRef<"Atividade", 'Status'>
    readonly dataCriacao: FieldRef<"Atividade", 'DateTime'>
    readonly dataAtualizacao: FieldRef<"Atividade", 'DateTime'>
    readonly usuarioId: FieldRef<"Atividade", 'String'>
    readonly materiaId: FieldRef<"Atividade", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Atividade findUnique
   */
  export type AtividadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter, which Atividade to fetch.
     */
    where: AtividadeWhereUniqueInput
  }

  /**
   * Atividade findUniqueOrThrow
   */
  export type AtividadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter, which Atividade to fetch.
     */
    where: AtividadeWhereUniqueInput
  }

  /**
   * Atividade findFirst
   */
  export type AtividadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter, which Atividade to fetch.
     */
    where?: AtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atividades to fetch.
     */
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atividades.
     */
    cursor?: AtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atividades.
     */
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * Atividade findFirstOrThrow
   */
  export type AtividadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter, which Atividade to fetch.
     */
    where?: AtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atividades to fetch.
     */
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atividades.
     */
    cursor?: AtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atividades.
     */
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * Atividade findMany
   */
  export type AtividadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter, which Atividades to fetch.
     */
    where?: AtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atividades to fetch.
     */
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Atividades.
     */
    cursor?: AtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atividades.
     */
    skip?: number
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * Atividade create
   */
  export type AtividadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Atividade.
     */
    data: XOR<AtividadeCreateInput, AtividadeUncheckedCreateInput>
  }

  /**
   * Atividade createMany
   */
  export type AtividadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Atividades.
     */
    data: AtividadeCreateManyInput | AtividadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Atividade createManyAndReturn
   */
  export type AtividadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * The data used to create many Atividades.
     */
    data: AtividadeCreateManyInput | AtividadeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Atividade update
   */
  export type AtividadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Atividade.
     */
    data: XOR<AtividadeUpdateInput, AtividadeUncheckedUpdateInput>
    /**
     * Choose, which Atividade to update.
     */
    where: AtividadeWhereUniqueInput
  }

  /**
   * Atividade updateMany
   */
  export type AtividadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Atividades.
     */
    data: XOR<AtividadeUpdateManyMutationInput, AtividadeUncheckedUpdateManyInput>
    /**
     * Filter which Atividades to update
     */
    where?: AtividadeWhereInput
    /**
     * Limit how many Atividades to update.
     */
    limit?: number
  }

  /**
   * Atividade updateManyAndReturn
   */
  export type AtividadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * The data used to update Atividades.
     */
    data: XOR<AtividadeUpdateManyMutationInput, AtividadeUncheckedUpdateManyInput>
    /**
     * Filter which Atividades to update
     */
    where?: AtividadeWhereInput
    /**
     * Limit how many Atividades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Atividade upsert
   */
  export type AtividadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Atividade to update in case it exists.
     */
    where: AtividadeWhereUniqueInput
    /**
     * In case the Atividade found by the `where` argument doesn't exist, create a new Atividade with this data.
     */
    create: XOR<AtividadeCreateInput, AtividadeUncheckedCreateInput>
    /**
     * In case the Atividade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtividadeUpdateInput, AtividadeUncheckedUpdateInput>
  }

  /**
   * Atividade delete
   */
  export type AtividadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter which Atividade to delete.
     */
    where: AtividadeWhereUniqueInput
  }

  /**
   * Atividade deleteMany
   */
  export type AtividadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atividades to delete
     */
    where?: AtividadeWhereInput
    /**
     * Limit how many Atividades to delete.
     */
    limit?: number
  }

  /**
   * Atividade.materia
   */
  export type Atividade$materiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    where?: MateriaWhereInput
  }

  /**
   * Atividade without action
   */
  export type AtividadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
  }


  /**
   * Model Notificacao
   */

  export type AggregateNotificacao = {
    _count: NotificacaoCountAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  export type NotificacaoMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    mensagem: string | null
    lida: boolean | null
    tipo: $Enums.TipoNotificacao | null
    dataCriacao: Date | null
    usuarioId: string | null
  }

  export type NotificacaoMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    mensagem: string | null
    lida: boolean | null
    tipo: $Enums.TipoNotificacao | null
    dataCriacao: Date | null
    usuarioId: string | null
  }

  export type NotificacaoCountAggregateOutputType = {
    id: number
    titulo: number
    mensagem: number
    lida: number
    tipo: number
    dataCriacao: number
    usuarioId: number
    _all: number
  }


  export type NotificacaoMinAggregateInputType = {
    id?: true
    titulo?: true
    mensagem?: true
    lida?: true
    tipo?: true
    dataCriacao?: true
    usuarioId?: true
  }

  export type NotificacaoMaxAggregateInputType = {
    id?: true
    titulo?: true
    mensagem?: true
    lida?: true
    tipo?: true
    dataCriacao?: true
    usuarioId?: true
  }

  export type NotificacaoCountAggregateInputType = {
    id?: true
    titulo?: true
    mensagem?: true
    lida?: true
    tipo?: true
    dataCriacao?: true
    usuarioId?: true
    _all?: true
  }

  export type NotificacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacao to aggregate.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notificacaos
    **/
    _count?: true | NotificacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificacaoMaxAggregateInputType
  }

  export type GetNotificacaoAggregateType<T extends NotificacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificacao[P]>
      : GetScalarType<T[P], AggregateNotificacao[P]>
  }




  export type NotificacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithAggregationInput | NotificacaoOrderByWithAggregationInput[]
    by: NotificacaoScalarFieldEnum[] | NotificacaoScalarFieldEnum
    having?: NotificacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificacaoCountAggregateInputType | true
    _min?: NotificacaoMinAggregateInputType
    _max?: NotificacaoMaxAggregateInputType
  }

  export type NotificacaoGroupByOutputType = {
    id: string
    titulo: string
    mensagem: string
    lida: boolean
    tipo: $Enums.TipoNotificacao
    dataCriacao: Date
    usuarioId: string
    _count: NotificacaoCountAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  type GetNotificacaoGroupByPayload<T extends NotificacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
            : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
        }
      >
    >


  export type NotificacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    mensagem?: boolean
    lida?: boolean
    tipo?: boolean
    dataCriacao?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    mensagem?: boolean
    lida?: boolean
    tipo?: boolean
    dataCriacao?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    mensagem?: boolean
    lida?: boolean
    tipo?: boolean
    dataCriacao?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectScalar = {
    id?: boolean
    titulo?: boolean
    mensagem?: boolean
    lida?: boolean
    tipo?: boolean
    dataCriacao?: boolean
    usuarioId?: boolean
  }

  export type NotificacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "mensagem" | "lida" | "tipo" | "dataCriacao" | "usuarioId", ExtArgs["result"]["notificacao"]>
  export type NotificacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type NotificacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type NotificacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $NotificacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notificacao"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      mensagem: string
      lida: boolean
      tipo: $Enums.TipoNotificacao
      dataCriacao: Date
      usuarioId: string
    }, ExtArgs["result"]["notificacao"]>
    composites: {}
  }

  type NotificacaoGetPayload<S extends boolean | null | undefined | NotificacaoDefaultArgs> = $Result.GetResult<Prisma.$NotificacaoPayload, S>

  type NotificacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificacaoCountAggregateInputType | true
    }

  export interface NotificacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notificacao'], meta: { name: 'Notificacao' } }
    /**
     * Find zero or one Notificacao that matches the filter.
     * @param {NotificacaoFindUniqueArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificacaoFindUniqueArgs>(args: SelectSubset<T, NotificacaoFindUniqueArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notificacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificacaoFindUniqueOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificacaoFindFirstArgs>(args?: SelectSubset<T, NotificacaoFindFirstArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notificacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notificacaos
     * const notificacaos = await prisma.notificacao.findMany()
     * 
     * // Get first 10 Notificacaos
     * const notificacaos = await prisma.notificacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificacaoFindManyArgs>(args?: SelectSubset<T, NotificacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notificacao.
     * @param {NotificacaoCreateArgs} args - Arguments to create a Notificacao.
     * @example
     * // Create one Notificacao
     * const Notificacao = await prisma.notificacao.create({
     *   data: {
     *     // ... data to create a Notificacao
     *   }
     * })
     * 
     */
    create<T extends NotificacaoCreateArgs>(args: SelectSubset<T, NotificacaoCreateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notificacaos.
     * @param {NotificacaoCreateManyArgs} args - Arguments to create many Notificacaos.
     * @example
     * // Create many Notificacaos
     * const notificacao = await prisma.notificacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificacaoCreateManyArgs>(args?: SelectSubset<T, NotificacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notificacaos and returns the data saved in the database.
     * @param {NotificacaoCreateManyAndReturnArgs} args - Arguments to create many Notificacaos.
     * @example
     * // Create many Notificacaos
     * const notificacao = await prisma.notificacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notificacaos and only return the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notificacao.
     * @param {NotificacaoDeleteArgs} args - Arguments to delete one Notificacao.
     * @example
     * // Delete one Notificacao
     * const Notificacao = await prisma.notificacao.delete({
     *   where: {
     *     // ... filter to delete one Notificacao
     *   }
     * })
     * 
     */
    delete<T extends NotificacaoDeleteArgs>(args: SelectSubset<T, NotificacaoDeleteArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notificacao.
     * @param {NotificacaoUpdateArgs} args - Arguments to update one Notificacao.
     * @example
     * // Update one Notificacao
     * const notificacao = await prisma.notificacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificacaoUpdateArgs>(args: SelectSubset<T, NotificacaoUpdateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notificacaos.
     * @param {NotificacaoDeleteManyArgs} args - Arguments to filter Notificacaos to delete.
     * @example
     * // Delete a few Notificacaos
     * const { count } = await prisma.notificacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificacaoDeleteManyArgs>(args?: SelectSubset<T, NotificacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notificacaos
     * const notificacao = await prisma.notificacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificacaoUpdateManyArgs>(args: SelectSubset<T, NotificacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacaos and returns the data updated in the database.
     * @param {NotificacaoUpdateManyAndReturnArgs} args - Arguments to update many Notificacaos.
     * @example
     * // Update many Notificacaos
     * const notificacao = await prisma.notificacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notificacaos and only return the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notificacao.
     * @param {NotificacaoUpsertArgs} args - Arguments to update or create a Notificacao.
     * @example
     * // Update or create a Notificacao
     * const notificacao = await prisma.notificacao.upsert({
     *   create: {
     *     // ... data to create a Notificacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notificacao we want to update
     *   }
     * })
     */
    upsert<T extends NotificacaoUpsertArgs>(args: SelectSubset<T, NotificacaoUpsertArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoCountArgs} args - Arguments to filter Notificacaos to count.
     * @example
     * // Count the number of Notificacaos
     * const count = await prisma.notificacao.count({
     *   where: {
     *     // ... the filter for the Notificacaos we want to count
     *   }
     * })
    **/
    count<T extends NotificacaoCountArgs>(
      args?: Subset<T, NotificacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificacaoAggregateArgs>(args: Subset<T, NotificacaoAggregateArgs>): Prisma.PrismaPromise<GetNotificacaoAggregateType<T>>

    /**
     * Group by Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificacaoGroupByArgs['orderBy'] }
        : { orderBy?: NotificacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notificacao model
   */
  readonly fields: NotificacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notificacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notificacao model
   */
  interface NotificacaoFieldRefs {
    readonly id: FieldRef<"Notificacao", 'String'>
    readonly titulo: FieldRef<"Notificacao", 'String'>
    readonly mensagem: FieldRef<"Notificacao", 'String'>
    readonly lida: FieldRef<"Notificacao", 'Boolean'>
    readonly tipo: FieldRef<"Notificacao", 'TipoNotificacao'>
    readonly dataCriacao: FieldRef<"Notificacao", 'DateTime'>
    readonly usuarioId: FieldRef<"Notificacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notificacao findUnique
   */
  export type NotificacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findUniqueOrThrow
   */
  export type NotificacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findFirst
   */
  export type NotificacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findFirstOrThrow
   */
  export type NotificacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findMany
   */
  export type NotificacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacaos to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao create
   */
  export type NotificacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Notificacao.
     */
    data: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
  }

  /**
   * Notificacao createMany
   */
  export type NotificacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notificacaos.
     */
    data: NotificacaoCreateManyInput | NotificacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notificacao createManyAndReturn
   */
  export type NotificacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Notificacaos.
     */
    data: NotificacaoCreateManyInput | NotificacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notificacao update
   */
  export type NotificacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Notificacao.
     */
    data: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
    /**
     * Choose, which Notificacao to update.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao updateMany
   */
  export type NotificacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notificacaos.
     */
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyInput>
    /**
     * Filter which Notificacaos to update
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to update.
     */
    limit?: number
  }

  /**
   * Notificacao updateManyAndReturn
   */
  export type NotificacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * The data used to update Notificacaos.
     */
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyInput>
    /**
     * Filter which Notificacaos to update
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notificacao upsert
   */
  export type NotificacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Notificacao to update in case it exists.
     */
    where: NotificacaoWhereUniqueInput
    /**
     * In case the Notificacao found by the `where` argument doesn't exist, create a new Notificacao with this data.
     */
    create: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
    /**
     * In case the Notificacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
  }

  /**
   * Notificacao delete
   */
  export type NotificacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter which Notificacao to delete.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao deleteMany
   */
  export type NotificacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacaos to delete
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to delete.
     */
    limit?: number
  }

  /**
   * Notificacao without action
   */
  export type NotificacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    senha: 'senha',
    dataCriacao: 'dataCriacao',
    dataAtualizacao: 'dataAtualizacao'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const PerfilScalarFieldEnum: {
    id: 'id',
    biografia: 'biografia',
    avatar: 'avatar',
    tema: 'tema',
    usuarioId: 'usuarioId'
  };

  export type PerfilScalarFieldEnum = (typeof PerfilScalarFieldEnum)[keyof typeof PerfilScalarFieldEnum]


  export const MateriaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    cor: 'cor',
    dataCriacao: 'dataCriacao',
    dataAtualizacao: 'dataAtualizacao',
    usuarioId: 'usuarioId'
  };

  export type MateriaScalarFieldEnum = (typeof MateriaScalarFieldEnum)[keyof typeof MateriaScalarFieldEnum]


  export const TarefaScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    dataVencimento: 'dataVencimento',
    prioridade: 'prioridade',
    status: 'status',
    dataCriacao: 'dataCriacao',
    dataAtualizacao: 'dataAtualizacao',
    usuarioId: 'usuarioId',
    materiaId: 'materiaId'
  };

  export type TarefaScalarFieldEnum = (typeof TarefaScalarFieldEnum)[keyof typeof TarefaScalarFieldEnum]


  export const EventoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    dataInicio: 'dataInicio',
    dataFim: 'dataFim',
    diaInteiro: 'diaInteiro',
    local: 'local',
    cor: 'cor',
    dataCriacao: 'dataCriacao',
    dataAtualizacao: 'dataAtualizacao',
    usuarioId: 'usuarioId'
  };

  export type EventoScalarFieldEnum = (typeof EventoScalarFieldEnum)[keyof typeof EventoScalarFieldEnum]


  export const ProvaScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    data: 'data',
    local: 'local',
    nota: 'nota',
    status: 'status',
    dataCriacao: 'dataCriacao',
    dataAtualizacao: 'dataAtualizacao',
    usuarioId: 'usuarioId',
    materiaId: 'materiaId'
  };

  export type ProvaScalarFieldEnum = (typeof ProvaScalarFieldEnum)[keyof typeof ProvaScalarFieldEnum]


  export const AtividadeScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    dataVencimento: 'dataVencimento',
    peso: 'peso',
    nota: 'nota',
    status: 'status',
    dataCriacao: 'dataCriacao',
    dataAtualizacao: 'dataAtualizacao',
    usuarioId: 'usuarioId',
    materiaId: 'materiaId'
  };

  export type AtividadeScalarFieldEnum = (typeof AtividadeScalarFieldEnum)[keyof typeof AtividadeScalarFieldEnum]


  export const NotificacaoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    mensagem: 'mensagem',
    lida: 'lida',
    tipo: 'tipo',
    dataCriacao: 'dataCriacao',
    usuarioId: 'usuarioId'
  };

  export type NotificacaoScalarFieldEnum = (typeof NotificacaoScalarFieldEnum)[keyof typeof NotificacaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Prioridade'
   */
  export type EnumPrioridadeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Prioridade'>
    


  /**
   * Reference to a field of type 'Prioridade[]'
   */
  export type ListEnumPrioridadeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Prioridade[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TipoNotificacao'
   */
  export type EnumTipoNotificacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoNotificacao'>
    


  /**
   * Reference to a field of type 'TipoNotificacao[]'
   */
  export type ListEnumTipoNotificacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoNotificacao[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    telefone?: StringNullableFilter<"Usuario"> | string | null
    senha?: StringFilter<"Usuario"> | string
    dataCriacao?: DateTimeFilter<"Usuario"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Usuario"> | Date | string
    tarefas?: TarefaListRelationFilter
    materias?: MateriaListRelationFilter
    eventos?: EventoListRelationFilter
    provas?: ProvaListRelationFilter
    atividades?: AtividadeListRelationFilter
    perfil?: XOR<PerfilNullableScalarRelationFilter, PerfilWhereInput> | null
    notificacoes?: NotificacaoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrderInput | SortOrder
    senha?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    tarefas?: TarefaOrderByRelationAggregateInput
    materias?: MateriaOrderByRelationAggregateInput
    eventos?: EventoOrderByRelationAggregateInput
    provas?: ProvaOrderByRelationAggregateInput
    atividades?: AtividadeOrderByRelationAggregateInput
    perfil?: PerfilOrderByWithRelationInput
    notificacoes?: NotificacaoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    telefone?: StringNullableFilter<"Usuario"> | string | null
    senha?: StringFilter<"Usuario"> | string
    dataCriacao?: DateTimeFilter<"Usuario"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Usuario"> | Date | string
    tarefas?: TarefaListRelationFilter
    materias?: MateriaListRelationFilter
    eventos?: EventoListRelationFilter
    provas?: ProvaListRelationFilter
    atividades?: AtividadeListRelationFilter
    perfil?: XOR<PerfilNullableScalarRelationFilter, PerfilWhereInput> | null
    notificacoes?: NotificacaoListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrderInput | SortOrder
    senha?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    telefone?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    dataCriacao?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    dataAtualizacao?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type PerfilWhereInput = {
    AND?: PerfilWhereInput | PerfilWhereInput[]
    OR?: PerfilWhereInput[]
    NOT?: PerfilWhereInput | PerfilWhereInput[]
    id?: StringFilter<"Perfil"> | string
    biografia?: StringNullableFilter<"Perfil"> | string | null
    avatar?: StringNullableFilter<"Perfil"> | string | null
    tema?: StringFilter<"Perfil"> | string
    usuarioId?: StringFilter<"Perfil"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type PerfilOrderByWithRelationInput = {
    id?: SortOrder
    biografia?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    tema?: SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type PerfilWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    usuarioId?: string
    AND?: PerfilWhereInput | PerfilWhereInput[]
    OR?: PerfilWhereInput[]
    NOT?: PerfilWhereInput | PerfilWhereInput[]
    biografia?: StringNullableFilter<"Perfil"> | string | null
    avatar?: StringNullableFilter<"Perfil"> | string | null
    tema?: StringFilter<"Perfil"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "usuarioId">

  export type PerfilOrderByWithAggregationInput = {
    id?: SortOrder
    biografia?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    tema?: SortOrder
    usuarioId?: SortOrder
    _count?: PerfilCountOrderByAggregateInput
    _max?: PerfilMaxOrderByAggregateInput
    _min?: PerfilMinOrderByAggregateInput
  }

  export type PerfilScalarWhereWithAggregatesInput = {
    AND?: PerfilScalarWhereWithAggregatesInput | PerfilScalarWhereWithAggregatesInput[]
    OR?: PerfilScalarWhereWithAggregatesInput[]
    NOT?: PerfilScalarWhereWithAggregatesInput | PerfilScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Perfil"> | string
    biografia?: StringNullableWithAggregatesFilter<"Perfil"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Perfil"> | string | null
    tema?: StringWithAggregatesFilter<"Perfil"> | string
    usuarioId?: StringWithAggregatesFilter<"Perfil"> | string
  }

  export type MateriaWhereInput = {
    AND?: MateriaWhereInput | MateriaWhereInput[]
    OR?: MateriaWhereInput[]
    NOT?: MateriaWhereInput | MateriaWhereInput[]
    id?: StringFilter<"Materia"> | string
    nome?: StringFilter<"Materia"> | string
    descricao?: StringNullableFilter<"Materia"> | string | null
    cor?: StringNullableFilter<"Materia"> | string | null
    dataCriacao?: DateTimeFilter<"Materia"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Materia"> | Date | string
    usuarioId?: StringFilter<"Materia"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    tarefas?: TarefaListRelationFilter
    provas?: ProvaListRelationFilter
    atividades?: AtividadeListRelationFilter
  }

  export type MateriaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    cor?: SortOrderInput | SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    tarefas?: TarefaOrderByRelationAggregateInput
    provas?: ProvaOrderByRelationAggregateInput
    atividades?: AtividadeOrderByRelationAggregateInput
  }

  export type MateriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MateriaWhereInput | MateriaWhereInput[]
    OR?: MateriaWhereInput[]
    NOT?: MateriaWhereInput | MateriaWhereInput[]
    nome?: StringFilter<"Materia"> | string
    descricao?: StringNullableFilter<"Materia"> | string | null
    cor?: StringNullableFilter<"Materia"> | string | null
    dataCriacao?: DateTimeFilter<"Materia"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Materia"> | Date | string
    usuarioId?: StringFilter<"Materia"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    tarefas?: TarefaListRelationFilter
    provas?: ProvaListRelationFilter
    atividades?: AtividadeListRelationFilter
  }, "id">

  export type MateriaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    cor?: SortOrderInput | SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    usuarioId?: SortOrder
    _count?: MateriaCountOrderByAggregateInput
    _max?: MateriaMaxOrderByAggregateInput
    _min?: MateriaMinOrderByAggregateInput
  }

  export type MateriaScalarWhereWithAggregatesInput = {
    AND?: MateriaScalarWhereWithAggregatesInput | MateriaScalarWhereWithAggregatesInput[]
    OR?: MateriaScalarWhereWithAggregatesInput[]
    NOT?: MateriaScalarWhereWithAggregatesInput | MateriaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Materia"> | string
    nome?: StringWithAggregatesFilter<"Materia"> | string
    descricao?: StringNullableWithAggregatesFilter<"Materia"> | string | null
    cor?: StringNullableWithAggregatesFilter<"Materia"> | string | null
    dataCriacao?: DateTimeWithAggregatesFilter<"Materia"> | Date | string
    dataAtualizacao?: DateTimeWithAggregatesFilter<"Materia"> | Date | string
    usuarioId?: StringWithAggregatesFilter<"Materia"> | string
  }

  export type TarefaWhereInput = {
    AND?: TarefaWhereInput | TarefaWhereInput[]
    OR?: TarefaWhereInput[]
    NOT?: TarefaWhereInput | TarefaWhereInput[]
    id?: StringFilter<"Tarefa"> | string
    titulo?: StringFilter<"Tarefa"> | string
    descricao?: StringNullableFilter<"Tarefa"> | string | null
    dataVencimento?: DateTimeNullableFilter<"Tarefa"> | Date | string | null
    prioridade?: EnumPrioridadeFilter<"Tarefa"> | $Enums.Prioridade
    status?: EnumStatusFilter<"Tarefa"> | $Enums.Status
    dataCriacao?: DateTimeFilter<"Tarefa"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Tarefa"> | Date | string
    usuarioId?: StringFilter<"Tarefa"> | string
    materiaId?: StringNullableFilter<"Tarefa"> | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    materia?: XOR<MateriaNullableScalarRelationFilter, MateriaWhereInput> | null
  }

  export type TarefaOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    dataVencimento?: SortOrderInput | SortOrder
    prioridade?: SortOrder
    status?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    usuarioId?: SortOrder
    materiaId?: SortOrderInput | SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    materia?: MateriaOrderByWithRelationInput
  }

  export type TarefaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TarefaWhereInput | TarefaWhereInput[]
    OR?: TarefaWhereInput[]
    NOT?: TarefaWhereInput | TarefaWhereInput[]
    titulo?: StringFilter<"Tarefa"> | string
    descricao?: StringNullableFilter<"Tarefa"> | string | null
    dataVencimento?: DateTimeNullableFilter<"Tarefa"> | Date | string | null
    prioridade?: EnumPrioridadeFilter<"Tarefa"> | $Enums.Prioridade
    status?: EnumStatusFilter<"Tarefa"> | $Enums.Status
    dataCriacao?: DateTimeFilter<"Tarefa"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Tarefa"> | Date | string
    usuarioId?: StringFilter<"Tarefa"> | string
    materiaId?: StringNullableFilter<"Tarefa"> | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    materia?: XOR<MateriaNullableScalarRelationFilter, MateriaWhereInput> | null
  }, "id">

  export type TarefaOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    dataVencimento?: SortOrderInput | SortOrder
    prioridade?: SortOrder
    status?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    usuarioId?: SortOrder
    materiaId?: SortOrderInput | SortOrder
    _count?: TarefaCountOrderByAggregateInput
    _max?: TarefaMaxOrderByAggregateInput
    _min?: TarefaMinOrderByAggregateInput
  }

  export type TarefaScalarWhereWithAggregatesInput = {
    AND?: TarefaScalarWhereWithAggregatesInput | TarefaScalarWhereWithAggregatesInput[]
    OR?: TarefaScalarWhereWithAggregatesInput[]
    NOT?: TarefaScalarWhereWithAggregatesInput | TarefaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tarefa"> | string
    titulo?: StringWithAggregatesFilter<"Tarefa"> | string
    descricao?: StringNullableWithAggregatesFilter<"Tarefa"> | string | null
    dataVencimento?: DateTimeNullableWithAggregatesFilter<"Tarefa"> | Date | string | null
    prioridade?: EnumPrioridadeWithAggregatesFilter<"Tarefa"> | $Enums.Prioridade
    status?: EnumStatusWithAggregatesFilter<"Tarefa"> | $Enums.Status
    dataCriacao?: DateTimeWithAggregatesFilter<"Tarefa"> | Date | string
    dataAtualizacao?: DateTimeWithAggregatesFilter<"Tarefa"> | Date | string
    usuarioId?: StringWithAggregatesFilter<"Tarefa"> | string
    materiaId?: StringNullableWithAggregatesFilter<"Tarefa"> | string | null
  }

  export type EventoWhereInput = {
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    id?: StringFilter<"Evento"> | string
    titulo?: StringFilter<"Evento"> | string
    descricao?: StringNullableFilter<"Evento"> | string | null
    dataInicio?: DateTimeFilter<"Evento"> | Date | string
    dataFim?: DateTimeNullableFilter<"Evento"> | Date | string | null
    diaInteiro?: BoolFilter<"Evento"> | boolean
    local?: StringNullableFilter<"Evento"> | string | null
    cor?: StringNullableFilter<"Evento"> | string | null
    dataCriacao?: DateTimeFilter<"Evento"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Evento"> | Date | string
    usuarioId?: StringFilter<"Evento"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type EventoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrderInput | SortOrder
    diaInteiro?: SortOrder
    local?: SortOrderInput | SortOrder
    cor?: SortOrderInput | SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type EventoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    titulo?: StringFilter<"Evento"> | string
    descricao?: StringNullableFilter<"Evento"> | string | null
    dataInicio?: DateTimeFilter<"Evento"> | Date | string
    dataFim?: DateTimeNullableFilter<"Evento"> | Date | string | null
    diaInteiro?: BoolFilter<"Evento"> | boolean
    local?: StringNullableFilter<"Evento"> | string | null
    cor?: StringNullableFilter<"Evento"> | string | null
    dataCriacao?: DateTimeFilter<"Evento"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Evento"> | Date | string
    usuarioId?: StringFilter<"Evento"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type EventoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrderInput | SortOrder
    diaInteiro?: SortOrder
    local?: SortOrderInput | SortOrder
    cor?: SortOrderInput | SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    usuarioId?: SortOrder
    _count?: EventoCountOrderByAggregateInput
    _max?: EventoMaxOrderByAggregateInput
    _min?: EventoMinOrderByAggregateInput
  }

  export type EventoScalarWhereWithAggregatesInput = {
    AND?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    OR?: EventoScalarWhereWithAggregatesInput[]
    NOT?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Evento"> | string
    titulo?: StringWithAggregatesFilter<"Evento"> | string
    descricao?: StringNullableWithAggregatesFilter<"Evento"> | string | null
    dataInicio?: DateTimeWithAggregatesFilter<"Evento"> | Date | string
    dataFim?: DateTimeNullableWithAggregatesFilter<"Evento"> | Date | string | null
    diaInteiro?: BoolWithAggregatesFilter<"Evento"> | boolean
    local?: StringNullableWithAggregatesFilter<"Evento"> | string | null
    cor?: StringNullableWithAggregatesFilter<"Evento"> | string | null
    dataCriacao?: DateTimeWithAggregatesFilter<"Evento"> | Date | string
    dataAtualizacao?: DateTimeWithAggregatesFilter<"Evento"> | Date | string
    usuarioId?: StringWithAggregatesFilter<"Evento"> | string
  }

  export type ProvaWhereInput = {
    AND?: ProvaWhereInput | ProvaWhereInput[]
    OR?: ProvaWhereInput[]
    NOT?: ProvaWhereInput | ProvaWhereInput[]
    id?: StringFilter<"Prova"> | string
    titulo?: StringFilter<"Prova"> | string
    descricao?: StringNullableFilter<"Prova"> | string | null
    data?: DateTimeFilter<"Prova"> | Date | string
    local?: StringNullableFilter<"Prova"> | string | null
    nota?: FloatNullableFilter<"Prova"> | number | null
    status?: EnumStatusFilter<"Prova"> | $Enums.Status
    dataCriacao?: DateTimeFilter<"Prova"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Prova"> | Date | string
    usuarioId?: StringFilter<"Prova"> | string
    materiaId?: StringNullableFilter<"Prova"> | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    materia?: XOR<MateriaNullableScalarRelationFilter, MateriaWhereInput> | null
  }

  export type ProvaOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    data?: SortOrder
    local?: SortOrderInput | SortOrder
    nota?: SortOrderInput | SortOrder
    status?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    usuarioId?: SortOrder
    materiaId?: SortOrderInput | SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    materia?: MateriaOrderByWithRelationInput
  }

  export type ProvaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProvaWhereInput | ProvaWhereInput[]
    OR?: ProvaWhereInput[]
    NOT?: ProvaWhereInput | ProvaWhereInput[]
    titulo?: StringFilter<"Prova"> | string
    descricao?: StringNullableFilter<"Prova"> | string | null
    data?: DateTimeFilter<"Prova"> | Date | string
    local?: StringNullableFilter<"Prova"> | string | null
    nota?: FloatNullableFilter<"Prova"> | number | null
    status?: EnumStatusFilter<"Prova"> | $Enums.Status
    dataCriacao?: DateTimeFilter<"Prova"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Prova"> | Date | string
    usuarioId?: StringFilter<"Prova"> | string
    materiaId?: StringNullableFilter<"Prova"> | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    materia?: XOR<MateriaNullableScalarRelationFilter, MateriaWhereInput> | null
  }, "id">

  export type ProvaOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    data?: SortOrder
    local?: SortOrderInput | SortOrder
    nota?: SortOrderInput | SortOrder
    status?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    usuarioId?: SortOrder
    materiaId?: SortOrderInput | SortOrder
    _count?: ProvaCountOrderByAggregateInput
    _avg?: ProvaAvgOrderByAggregateInput
    _max?: ProvaMaxOrderByAggregateInput
    _min?: ProvaMinOrderByAggregateInput
    _sum?: ProvaSumOrderByAggregateInput
  }

  export type ProvaScalarWhereWithAggregatesInput = {
    AND?: ProvaScalarWhereWithAggregatesInput | ProvaScalarWhereWithAggregatesInput[]
    OR?: ProvaScalarWhereWithAggregatesInput[]
    NOT?: ProvaScalarWhereWithAggregatesInput | ProvaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prova"> | string
    titulo?: StringWithAggregatesFilter<"Prova"> | string
    descricao?: StringNullableWithAggregatesFilter<"Prova"> | string | null
    data?: DateTimeWithAggregatesFilter<"Prova"> | Date | string
    local?: StringNullableWithAggregatesFilter<"Prova"> | string | null
    nota?: FloatNullableWithAggregatesFilter<"Prova"> | number | null
    status?: EnumStatusWithAggregatesFilter<"Prova"> | $Enums.Status
    dataCriacao?: DateTimeWithAggregatesFilter<"Prova"> | Date | string
    dataAtualizacao?: DateTimeWithAggregatesFilter<"Prova"> | Date | string
    usuarioId?: StringWithAggregatesFilter<"Prova"> | string
    materiaId?: StringNullableWithAggregatesFilter<"Prova"> | string | null
  }

  export type AtividadeWhereInput = {
    AND?: AtividadeWhereInput | AtividadeWhereInput[]
    OR?: AtividadeWhereInput[]
    NOT?: AtividadeWhereInput | AtividadeWhereInput[]
    id?: StringFilter<"Atividade"> | string
    titulo?: StringFilter<"Atividade"> | string
    descricao?: StringNullableFilter<"Atividade"> | string | null
    dataVencimento?: DateTimeNullableFilter<"Atividade"> | Date | string | null
    peso?: FloatNullableFilter<"Atividade"> | number | null
    nota?: FloatNullableFilter<"Atividade"> | number | null
    status?: EnumStatusFilter<"Atividade"> | $Enums.Status
    dataCriacao?: DateTimeFilter<"Atividade"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Atividade"> | Date | string
    usuarioId?: StringFilter<"Atividade"> | string
    materiaId?: StringNullableFilter<"Atividade"> | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    materia?: XOR<MateriaNullableScalarRelationFilter, MateriaWhereInput> | null
  }

  export type AtividadeOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    dataVencimento?: SortOrderInput | SortOrder
    peso?: SortOrderInput | SortOrder
    nota?: SortOrderInput | SortOrder
    status?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    usuarioId?: SortOrder
    materiaId?: SortOrderInput | SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    materia?: MateriaOrderByWithRelationInput
  }

  export type AtividadeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AtividadeWhereInput | AtividadeWhereInput[]
    OR?: AtividadeWhereInput[]
    NOT?: AtividadeWhereInput | AtividadeWhereInput[]
    titulo?: StringFilter<"Atividade"> | string
    descricao?: StringNullableFilter<"Atividade"> | string | null
    dataVencimento?: DateTimeNullableFilter<"Atividade"> | Date | string | null
    peso?: FloatNullableFilter<"Atividade"> | number | null
    nota?: FloatNullableFilter<"Atividade"> | number | null
    status?: EnumStatusFilter<"Atividade"> | $Enums.Status
    dataCriacao?: DateTimeFilter<"Atividade"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Atividade"> | Date | string
    usuarioId?: StringFilter<"Atividade"> | string
    materiaId?: StringNullableFilter<"Atividade"> | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    materia?: XOR<MateriaNullableScalarRelationFilter, MateriaWhereInput> | null
  }, "id">

  export type AtividadeOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    dataVencimento?: SortOrderInput | SortOrder
    peso?: SortOrderInput | SortOrder
    nota?: SortOrderInput | SortOrder
    status?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    usuarioId?: SortOrder
    materiaId?: SortOrderInput | SortOrder
    _count?: AtividadeCountOrderByAggregateInput
    _avg?: AtividadeAvgOrderByAggregateInput
    _max?: AtividadeMaxOrderByAggregateInput
    _min?: AtividadeMinOrderByAggregateInput
    _sum?: AtividadeSumOrderByAggregateInput
  }

  export type AtividadeScalarWhereWithAggregatesInput = {
    AND?: AtividadeScalarWhereWithAggregatesInput | AtividadeScalarWhereWithAggregatesInput[]
    OR?: AtividadeScalarWhereWithAggregatesInput[]
    NOT?: AtividadeScalarWhereWithAggregatesInput | AtividadeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Atividade"> | string
    titulo?: StringWithAggregatesFilter<"Atividade"> | string
    descricao?: StringNullableWithAggregatesFilter<"Atividade"> | string | null
    dataVencimento?: DateTimeNullableWithAggregatesFilter<"Atividade"> | Date | string | null
    peso?: FloatNullableWithAggregatesFilter<"Atividade"> | number | null
    nota?: FloatNullableWithAggregatesFilter<"Atividade"> | number | null
    status?: EnumStatusWithAggregatesFilter<"Atividade"> | $Enums.Status
    dataCriacao?: DateTimeWithAggregatesFilter<"Atividade"> | Date | string
    dataAtualizacao?: DateTimeWithAggregatesFilter<"Atividade"> | Date | string
    usuarioId?: StringWithAggregatesFilter<"Atividade"> | string
    materiaId?: StringNullableWithAggregatesFilter<"Atividade"> | string | null
  }

  export type NotificacaoWhereInput = {
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    id?: StringFilter<"Notificacao"> | string
    titulo?: StringFilter<"Notificacao"> | string
    mensagem?: StringFilter<"Notificacao"> | string
    lida?: BoolFilter<"Notificacao"> | boolean
    tipo?: EnumTipoNotificacaoFilter<"Notificacao"> | $Enums.TipoNotificacao
    dataCriacao?: DateTimeFilter<"Notificacao"> | Date | string
    usuarioId?: StringFilter<"Notificacao"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type NotificacaoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrder
    lida?: SortOrder
    tipo?: SortOrder
    dataCriacao?: SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type NotificacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    titulo?: StringFilter<"Notificacao"> | string
    mensagem?: StringFilter<"Notificacao"> | string
    lida?: BoolFilter<"Notificacao"> | boolean
    tipo?: EnumTipoNotificacaoFilter<"Notificacao"> | $Enums.TipoNotificacao
    dataCriacao?: DateTimeFilter<"Notificacao"> | Date | string
    usuarioId?: StringFilter<"Notificacao"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type NotificacaoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrder
    lida?: SortOrder
    tipo?: SortOrder
    dataCriacao?: SortOrder
    usuarioId?: SortOrder
    _count?: NotificacaoCountOrderByAggregateInput
    _max?: NotificacaoMaxOrderByAggregateInput
    _min?: NotificacaoMinOrderByAggregateInput
  }

  export type NotificacaoScalarWhereWithAggregatesInput = {
    AND?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    OR?: NotificacaoScalarWhereWithAggregatesInput[]
    NOT?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notificacao"> | string
    titulo?: StringWithAggregatesFilter<"Notificacao"> | string
    mensagem?: StringWithAggregatesFilter<"Notificacao"> | string
    lida?: BoolWithAggregatesFilter<"Notificacao"> | boolean
    tipo?: EnumTipoNotificacaoWithAggregatesFilter<"Notificacao"> | $Enums.TipoNotificacao
    dataCriacao?: DateTimeWithAggregatesFilter<"Notificacao"> | Date | string
    usuarioId?: StringWithAggregatesFilter<"Notificacao"> | string
  }

  export type UsuarioCreateInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    senha: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    tarefas?: TarefaCreateNestedManyWithoutUsuarioInput
    materias?: MateriaCreateNestedManyWithoutUsuarioInput
    eventos?: EventoCreateNestedManyWithoutUsuarioInput
    provas?: ProvaCreateNestedManyWithoutUsuarioInput
    atividades?: AtividadeCreateNestedManyWithoutUsuarioInput
    perfil?: PerfilCreateNestedOneWithoutUsuarioInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    senha: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    tarefas?: TarefaUncheckedCreateNestedManyWithoutUsuarioInput
    materias?: MateriaUncheckedCreateNestedManyWithoutUsuarioInput
    eventos?: EventoUncheckedCreateNestedManyWithoutUsuarioInput
    provas?: ProvaUncheckedCreateNestedManyWithoutUsuarioInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutUsuarioInput
    perfil?: PerfilUncheckedCreateNestedOneWithoutUsuarioInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefas?: TarefaUpdateManyWithoutUsuarioNestedInput
    materias?: MateriaUpdateManyWithoutUsuarioNestedInput
    eventos?: EventoUpdateManyWithoutUsuarioNestedInput
    provas?: ProvaUpdateManyWithoutUsuarioNestedInput
    atividades?: AtividadeUpdateManyWithoutUsuarioNestedInput
    perfil?: PerfilUpdateOneWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefas?: TarefaUncheckedUpdateManyWithoutUsuarioNestedInput
    materias?: MateriaUncheckedUpdateManyWithoutUsuarioNestedInput
    eventos?: EventoUncheckedUpdateManyWithoutUsuarioNestedInput
    provas?: ProvaUncheckedUpdateManyWithoutUsuarioNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutUsuarioNestedInput
    perfil?: PerfilUncheckedUpdateOneWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    senha: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerfilCreateInput = {
    id?: string
    biografia?: string | null
    avatar?: string | null
    tema?: string
    usuario: UsuarioCreateNestedOneWithoutPerfilInput
  }

  export type PerfilUncheckedCreateInput = {
    id?: string
    biografia?: string | null
    avatar?: string | null
    tema?: string
    usuarioId: string
  }

  export type PerfilUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    tema?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutPerfilNestedInput
  }

  export type PerfilUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    tema?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type PerfilCreateManyInput = {
    id?: string
    biografia?: string | null
    avatar?: string | null
    tema?: string
    usuarioId: string
  }

  export type PerfilUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    tema?: StringFieldUpdateOperationsInput | string
  }

  export type PerfilUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    tema?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type MateriaCreateInput = {
    id?: string
    nome: string
    descricao?: string | null
    cor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuario: UsuarioCreateNestedOneWithoutMateriasInput
    tarefas?: TarefaCreateNestedManyWithoutMateriaInput
    provas?: ProvaCreateNestedManyWithoutMateriaInput
    atividades?: AtividadeCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUncheckedCreateInput = {
    id?: string
    nome: string
    descricao?: string | null
    cor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuarioId: string
    tarefas?: TarefaUncheckedCreateNestedManyWithoutMateriaInput
    provas?: ProvaUncheckedCreateNestedManyWithoutMateriaInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutMateriasNestedInput
    tarefas?: TarefaUpdateManyWithoutMateriaNestedInput
    provas?: ProvaUpdateManyWithoutMateriaNestedInput
    atividades?: AtividadeUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    tarefas?: TarefaUncheckedUpdateManyWithoutMateriaNestedInput
    provas?: ProvaUncheckedUpdateManyWithoutMateriaNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaCreateManyInput = {
    id?: string
    nome: string
    descricao?: string | null
    cor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuarioId: string
  }

  export type MateriaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MateriaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type TarefaCreateInput = {
    id?: string
    titulo: string
    descricao?: string | null
    dataVencimento?: Date | string | null
    prioridade?: $Enums.Prioridade
    status?: $Enums.Status
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuario: UsuarioCreateNestedOneWithoutTarefasInput
    materia?: MateriaCreateNestedOneWithoutTarefasInput
  }

  export type TarefaUncheckedCreateInput = {
    id?: string
    titulo: string
    descricao?: string | null
    dataVencimento?: Date | string | null
    prioridade?: $Enums.Prioridade
    status?: $Enums.Status
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuarioId: string
    materiaId?: string | null
  }

  export type TarefaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutTarefasNestedInput
    materia?: MateriaUpdateOneWithoutTarefasNestedInput
  }

  export type TarefaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    materiaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TarefaCreateManyInput = {
    id?: string
    titulo: string
    descricao?: string | null
    dataVencimento?: Date | string | null
    prioridade?: $Enums.Prioridade
    status?: $Enums.Status
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuarioId: string
    materiaId?: string | null
  }

  export type TarefaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TarefaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    materiaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventoCreateInput = {
    id?: string
    titulo: string
    descricao?: string | null
    dataInicio: Date | string
    dataFim?: Date | string | null
    diaInteiro?: boolean
    local?: string | null
    cor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuario: UsuarioCreateNestedOneWithoutEventosInput
  }

  export type EventoUncheckedCreateInput = {
    id?: string
    titulo: string
    descricao?: string | null
    dataInicio: Date | string
    dataFim?: Date | string | null
    diaInteiro?: boolean
    local?: string | null
    cor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuarioId: string
  }

  export type EventoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diaInteiro?: BoolFieldUpdateOperationsInput | boolean
    local?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutEventosNestedInput
  }

  export type EventoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diaInteiro?: BoolFieldUpdateOperationsInput | boolean
    local?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type EventoCreateManyInput = {
    id?: string
    titulo: string
    descricao?: string | null
    dataInicio: Date | string
    dataFim?: Date | string | null
    diaInteiro?: boolean
    local?: string | null
    cor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuarioId: string
  }

  export type EventoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diaInteiro?: BoolFieldUpdateOperationsInput | boolean
    local?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diaInteiro?: BoolFieldUpdateOperationsInput | boolean
    local?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type ProvaCreateInput = {
    id?: string
    titulo: string
    descricao?: string | null
    data: Date | string
    local?: string | null
    nota?: number | null
    status?: $Enums.Status
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuario: UsuarioCreateNestedOneWithoutProvasInput
    materia?: MateriaCreateNestedOneWithoutProvasInput
  }

  export type ProvaUncheckedCreateInput = {
    id?: string
    titulo: string
    descricao?: string | null
    data: Date | string
    local?: string | null
    nota?: number | null
    status?: $Enums.Status
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuarioId: string
    materiaId?: string | null
  }

  export type ProvaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutProvasNestedInput
    materia?: MateriaUpdateOneWithoutProvasNestedInput
  }

  export type ProvaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    materiaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProvaCreateManyInput = {
    id?: string
    titulo: string
    descricao?: string | null
    data: Date | string
    local?: string | null
    nota?: number | null
    status?: $Enums.Status
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuarioId: string
    materiaId?: string | null
  }

  export type ProvaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProvaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    materiaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtividadeCreateInput = {
    id?: string
    titulo: string
    descricao?: string | null
    dataVencimento?: Date | string | null
    peso?: number | null
    nota?: number | null
    status?: $Enums.Status
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuario: UsuarioCreateNestedOneWithoutAtividadesInput
    materia?: MateriaCreateNestedOneWithoutAtividadesInput
  }

  export type AtividadeUncheckedCreateInput = {
    id?: string
    titulo: string
    descricao?: string | null
    dataVencimento?: Date | string | null
    peso?: number | null
    nota?: number | null
    status?: $Enums.Status
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuarioId: string
    materiaId?: string | null
  }

  export type AtividadeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutAtividadesNestedInput
    materia?: MateriaUpdateOneWithoutAtividadesNestedInput
  }

  export type AtividadeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    materiaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtividadeCreateManyInput = {
    id?: string
    titulo: string
    descricao?: string | null
    dataVencimento?: Date | string | null
    peso?: number | null
    nota?: number | null
    status?: $Enums.Status
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuarioId: string
    materiaId?: string | null
  }

  export type AtividadeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtividadeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    materiaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificacaoCreateInput = {
    id?: string
    titulo: string
    mensagem: string
    lida?: boolean
    tipo?: $Enums.TipoNotificacao
    dataCriacao?: Date | string
    usuario: UsuarioCreateNestedOneWithoutNotificacoesInput
  }

  export type NotificacaoUncheckedCreateInput = {
    id?: string
    titulo: string
    mensagem: string
    lida?: boolean
    tipo?: $Enums.TipoNotificacao
    dataCriacao?: Date | string
    usuarioId: string
  }

  export type NotificacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutNotificacoesNestedInput
  }

  export type NotificacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificacaoCreateManyInput = {
    id?: string
    titulo: string
    mensagem: string
    lida?: boolean
    tipo?: $Enums.TipoNotificacao
    dataCriacao?: Date | string
    usuarioId: string
  }

  export type NotificacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TarefaListRelationFilter = {
    every?: TarefaWhereInput
    some?: TarefaWhereInput
    none?: TarefaWhereInput
  }

  export type MateriaListRelationFilter = {
    every?: MateriaWhereInput
    some?: MateriaWhereInput
    none?: MateriaWhereInput
  }

  export type EventoListRelationFilter = {
    every?: EventoWhereInput
    some?: EventoWhereInput
    none?: EventoWhereInput
  }

  export type ProvaListRelationFilter = {
    every?: ProvaWhereInput
    some?: ProvaWhereInput
    none?: ProvaWhereInput
  }

  export type AtividadeListRelationFilter = {
    every?: AtividadeWhereInput
    some?: AtividadeWhereInput
    none?: AtividadeWhereInput
  }

  export type PerfilNullableScalarRelationFilter = {
    is?: PerfilWhereInput | null
    isNot?: PerfilWhereInput | null
  }

  export type NotificacaoListRelationFilter = {
    every?: NotificacaoWhereInput
    some?: NotificacaoWhereInput
    none?: NotificacaoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TarefaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MateriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProvaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AtividadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    senha?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    senha?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    senha?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type PerfilCountOrderByAggregateInput = {
    id?: SortOrder
    biografia?: SortOrder
    avatar?: SortOrder
    tema?: SortOrder
    usuarioId?: SortOrder
  }

  export type PerfilMaxOrderByAggregateInput = {
    id?: SortOrder
    biografia?: SortOrder
    avatar?: SortOrder
    tema?: SortOrder
    usuarioId?: SortOrder
  }

  export type PerfilMinOrderByAggregateInput = {
    id?: SortOrder
    biografia?: SortOrder
    avatar?: SortOrder
    tema?: SortOrder
    usuarioId?: SortOrder
  }

  export type MateriaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    cor?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    usuarioId?: SortOrder
  }

  export type MateriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    cor?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    usuarioId?: SortOrder
  }

  export type MateriaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    cor?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    usuarioId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumPrioridadeFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridade | EnumPrioridadeFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridade[] | ListEnumPrioridadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Prioridade[] | ListEnumPrioridadeFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadeFilter<$PrismaModel> | $Enums.Prioridade
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type MateriaNullableScalarRelationFilter = {
    is?: MateriaWhereInput | null
    isNot?: MateriaWhereInput | null
  }

  export type TarefaCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    dataVencimento?: SortOrder
    prioridade?: SortOrder
    status?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    usuarioId?: SortOrder
    materiaId?: SortOrder
  }

  export type TarefaMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    dataVencimento?: SortOrder
    prioridade?: SortOrder
    status?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    usuarioId?: SortOrder
    materiaId?: SortOrder
  }

  export type TarefaMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    dataVencimento?: SortOrder
    prioridade?: SortOrder
    status?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    usuarioId?: SortOrder
    materiaId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumPrioridadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridade | EnumPrioridadeFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridade[] | ListEnumPrioridadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Prioridade[] | ListEnumPrioridadeFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadeWithAggregatesFilter<$PrismaModel> | $Enums.Prioridade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrioridadeFilter<$PrismaModel>
    _max?: NestedEnumPrioridadeFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EventoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    diaInteiro?: SortOrder
    local?: SortOrder
    cor?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    usuarioId?: SortOrder
  }

  export type EventoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    diaInteiro?: SortOrder
    local?: SortOrder
    cor?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    usuarioId?: SortOrder
  }

  export type EventoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    diaInteiro?: SortOrder
    local?: SortOrder
    cor?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    usuarioId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ProvaCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    local?: SortOrder
    nota?: SortOrder
    status?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    usuarioId?: SortOrder
    materiaId?: SortOrder
  }

  export type ProvaAvgOrderByAggregateInput = {
    nota?: SortOrder
  }

  export type ProvaMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    local?: SortOrder
    nota?: SortOrder
    status?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    usuarioId?: SortOrder
    materiaId?: SortOrder
  }

  export type ProvaMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    local?: SortOrder
    nota?: SortOrder
    status?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    usuarioId?: SortOrder
    materiaId?: SortOrder
  }

  export type ProvaSumOrderByAggregateInput = {
    nota?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type AtividadeCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    dataVencimento?: SortOrder
    peso?: SortOrder
    nota?: SortOrder
    status?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    usuarioId?: SortOrder
    materiaId?: SortOrder
  }

  export type AtividadeAvgOrderByAggregateInput = {
    peso?: SortOrder
    nota?: SortOrder
  }

  export type AtividadeMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    dataVencimento?: SortOrder
    peso?: SortOrder
    nota?: SortOrder
    status?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    usuarioId?: SortOrder
    materiaId?: SortOrder
  }

  export type AtividadeMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    dataVencimento?: SortOrder
    peso?: SortOrder
    nota?: SortOrder
    status?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    usuarioId?: SortOrder
    materiaId?: SortOrder
  }

  export type AtividadeSumOrderByAggregateInput = {
    peso?: SortOrder
    nota?: SortOrder
  }

  export type EnumTipoNotificacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoNotificacao | EnumTipoNotificacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoNotificacao[] | ListEnumTipoNotificacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoNotificacao[] | ListEnumTipoNotificacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoNotificacaoFilter<$PrismaModel> | $Enums.TipoNotificacao
  }

  export type NotificacaoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrder
    lida?: SortOrder
    tipo?: SortOrder
    dataCriacao?: SortOrder
    usuarioId?: SortOrder
  }

  export type NotificacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrder
    lida?: SortOrder
    tipo?: SortOrder
    dataCriacao?: SortOrder
    usuarioId?: SortOrder
  }

  export type NotificacaoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrder
    lida?: SortOrder
    tipo?: SortOrder
    dataCriacao?: SortOrder
    usuarioId?: SortOrder
  }

  export type EnumTipoNotificacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoNotificacao | EnumTipoNotificacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoNotificacao[] | ListEnumTipoNotificacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoNotificacao[] | ListEnumTipoNotificacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoNotificacaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoNotificacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoNotificacaoFilter<$PrismaModel>
    _max?: NestedEnumTipoNotificacaoFilter<$PrismaModel>
  }

  export type TarefaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<TarefaCreateWithoutUsuarioInput, TarefaUncheckedCreateWithoutUsuarioInput> | TarefaCreateWithoutUsuarioInput[] | TarefaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutUsuarioInput | TarefaCreateOrConnectWithoutUsuarioInput[]
    createMany?: TarefaCreateManyUsuarioInputEnvelope
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
  }

  export type MateriaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<MateriaCreateWithoutUsuarioInput, MateriaUncheckedCreateWithoutUsuarioInput> | MateriaCreateWithoutUsuarioInput[] | MateriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutUsuarioInput | MateriaCreateOrConnectWithoutUsuarioInput[]
    createMany?: MateriaCreateManyUsuarioInputEnvelope
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type EventoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EventoCreateWithoutUsuarioInput, EventoUncheckedCreateWithoutUsuarioInput> | EventoCreateWithoutUsuarioInput[] | EventoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutUsuarioInput | EventoCreateOrConnectWithoutUsuarioInput[]
    createMany?: EventoCreateManyUsuarioInputEnvelope
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
  }

  export type ProvaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ProvaCreateWithoutUsuarioInput, ProvaUncheckedCreateWithoutUsuarioInput> | ProvaCreateWithoutUsuarioInput[] | ProvaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProvaCreateOrConnectWithoutUsuarioInput | ProvaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ProvaCreateManyUsuarioInputEnvelope
    connect?: ProvaWhereUniqueInput | ProvaWhereUniqueInput[]
  }

  export type AtividadeCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AtividadeCreateWithoutUsuarioInput, AtividadeUncheckedCreateWithoutUsuarioInput> | AtividadeCreateWithoutUsuarioInput[] | AtividadeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutUsuarioInput | AtividadeCreateOrConnectWithoutUsuarioInput[]
    createMany?: AtividadeCreateManyUsuarioInputEnvelope
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
  }

  export type PerfilCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<PerfilCreateWithoutUsuarioInput, PerfilUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutUsuarioInput
    connect?: PerfilWhereUniqueInput
  }

  export type NotificacaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput> | NotificacaoCreateWithoutUsuarioInput[] | NotificacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUsuarioInput | NotificacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: NotificacaoCreateManyUsuarioInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type TarefaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<TarefaCreateWithoutUsuarioInput, TarefaUncheckedCreateWithoutUsuarioInput> | TarefaCreateWithoutUsuarioInput[] | TarefaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutUsuarioInput | TarefaCreateOrConnectWithoutUsuarioInput[]
    createMany?: TarefaCreateManyUsuarioInputEnvelope
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
  }

  export type MateriaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<MateriaCreateWithoutUsuarioInput, MateriaUncheckedCreateWithoutUsuarioInput> | MateriaCreateWithoutUsuarioInput[] | MateriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutUsuarioInput | MateriaCreateOrConnectWithoutUsuarioInput[]
    createMany?: MateriaCreateManyUsuarioInputEnvelope
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type EventoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EventoCreateWithoutUsuarioInput, EventoUncheckedCreateWithoutUsuarioInput> | EventoCreateWithoutUsuarioInput[] | EventoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutUsuarioInput | EventoCreateOrConnectWithoutUsuarioInput[]
    createMany?: EventoCreateManyUsuarioInputEnvelope
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
  }

  export type ProvaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ProvaCreateWithoutUsuarioInput, ProvaUncheckedCreateWithoutUsuarioInput> | ProvaCreateWithoutUsuarioInput[] | ProvaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProvaCreateOrConnectWithoutUsuarioInput | ProvaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ProvaCreateManyUsuarioInputEnvelope
    connect?: ProvaWhereUniqueInput | ProvaWhereUniqueInput[]
  }

  export type AtividadeUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AtividadeCreateWithoutUsuarioInput, AtividadeUncheckedCreateWithoutUsuarioInput> | AtividadeCreateWithoutUsuarioInput[] | AtividadeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutUsuarioInput | AtividadeCreateOrConnectWithoutUsuarioInput[]
    createMany?: AtividadeCreateManyUsuarioInputEnvelope
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
  }

  export type PerfilUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<PerfilCreateWithoutUsuarioInput, PerfilUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutUsuarioInput
    connect?: PerfilWhereUniqueInput
  }

  export type NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput> | NotificacaoCreateWithoutUsuarioInput[] | NotificacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUsuarioInput | NotificacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: NotificacaoCreateManyUsuarioInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TarefaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<TarefaCreateWithoutUsuarioInput, TarefaUncheckedCreateWithoutUsuarioInput> | TarefaCreateWithoutUsuarioInput[] | TarefaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutUsuarioInput | TarefaCreateOrConnectWithoutUsuarioInput[]
    upsert?: TarefaUpsertWithWhereUniqueWithoutUsuarioInput | TarefaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: TarefaCreateManyUsuarioInputEnvelope
    set?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    disconnect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    delete?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    update?: TarefaUpdateWithWhereUniqueWithoutUsuarioInput | TarefaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: TarefaUpdateManyWithWhereWithoutUsuarioInput | TarefaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: TarefaScalarWhereInput | TarefaScalarWhereInput[]
  }

  export type MateriaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<MateriaCreateWithoutUsuarioInput, MateriaUncheckedCreateWithoutUsuarioInput> | MateriaCreateWithoutUsuarioInput[] | MateriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutUsuarioInput | MateriaCreateOrConnectWithoutUsuarioInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutUsuarioInput | MateriaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: MateriaCreateManyUsuarioInputEnvelope
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutUsuarioInput | MateriaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutUsuarioInput | MateriaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
  }

  export type EventoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EventoCreateWithoutUsuarioInput, EventoUncheckedCreateWithoutUsuarioInput> | EventoCreateWithoutUsuarioInput[] | EventoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutUsuarioInput | EventoCreateOrConnectWithoutUsuarioInput[]
    upsert?: EventoUpsertWithWhereUniqueWithoutUsuarioInput | EventoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EventoCreateManyUsuarioInputEnvelope
    set?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    disconnect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    delete?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    update?: EventoUpdateWithWhereUniqueWithoutUsuarioInput | EventoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EventoUpdateManyWithWhereWithoutUsuarioInput | EventoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EventoScalarWhereInput | EventoScalarWhereInput[]
  }

  export type ProvaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ProvaCreateWithoutUsuarioInput, ProvaUncheckedCreateWithoutUsuarioInput> | ProvaCreateWithoutUsuarioInput[] | ProvaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProvaCreateOrConnectWithoutUsuarioInput | ProvaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ProvaUpsertWithWhereUniqueWithoutUsuarioInput | ProvaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ProvaCreateManyUsuarioInputEnvelope
    set?: ProvaWhereUniqueInput | ProvaWhereUniqueInput[]
    disconnect?: ProvaWhereUniqueInput | ProvaWhereUniqueInput[]
    delete?: ProvaWhereUniqueInput | ProvaWhereUniqueInput[]
    connect?: ProvaWhereUniqueInput | ProvaWhereUniqueInput[]
    update?: ProvaUpdateWithWhereUniqueWithoutUsuarioInput | ProvaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ProvaUpdateManyWithWhereWithoutUsuarioInput | ProvaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ProvaScalarWhereInput | ProvaScalarWhereInput[]
  }

  export type AtividadeUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AtividadeCreateWithoutUsuarioInput, AtividadeUncheckedCreateWithoutUsuarioInput> | AtividadeCreateWithoutUsuarioInput[] | AtividadeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutUsuarioInput | AtividadeCreateOrConnectWithoutUsuarioInput[]
    upsert?: AtividadeUpsertWithWhereUniqueWithoutUsuarioInput | AtividadeUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AtividadeCreateManyUsuarioInputEnvelope
    set?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    disconnect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    delete?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    update?: AtividadeUpdateWithWhereUniqueWithoutUsuarioInput | AtividadeUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AtividadeUpdateManyWithWhereWithoutUsuarioInput | AtividadeUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
  }

  export type PerfilUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<PerfilCreateWithoutUsuarioInput, PerfilUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutUsuarioInput
    upsert?: PerfilUpsertWithoutUsuarioInput
    disconnect?: PerfilWhereInput | boolean
    delete?: PerfilWhereInput | boolean
    connect?: PerfilWhereUniqueInput
    update?: XOR<XOR<PerfilUpdateToOneWithWhereWithoutUsuarioInput, PerfilUpdateWithoutUsuarioInput>, PerfilUncheckedUpdateWithoutUsuarioInput>
  }

  export type NotificacaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput> | NotificacaoCreateWithoutUsuarioInput[] | NotificacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUsuarioInput | NotificacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutUsuarioInput | NotificacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: NotificacaoCreateManyUsuarioInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutUsuarioInput | NotificacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutUsuarioInput | NotificacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type TarefaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<TarefaCreateWithoutUsuarioInput, TarefaUncheckedCreateWithoutUsuarioInput> | TarefaCreateWithoutUsuarioInput[] | TarefaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutUsuarioInput | TarefaCreateOrConnectWithoutUsuarioInput[]
    upsert?: TarefaUpsertWithWhereUniqueWithoutUsuarioInput | TarefaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: TarefaCreateManyUsuarioInputEnvelope
    set?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    disconnect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    delete?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    update?: TarefaUpdateWithWhereUniqueWithoutUsuarioInput | TarefaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: TarefaUpdateManyWithWhereWithoutUsuarioInput | TarefaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: TarefaScalarWhereInput | TarefaScalarWhereInput[]
  }

  export type MateriaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<MateriaCreateWithoutUsuarioInput, MateriaUncheckedCreateWithoutUsuarioInput> | MateriaCreateWithoutUsuarioInput[] | MateriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutUsuarioInput | MateriaCreateOrConnectWithoutUsuarioInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutUsuarioInput | MateriaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: MateriaCreateManyUsuarioInputEnvelope
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutUsuarioInput | MateriaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutUsuarioInput | MateriaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
  }

  export type EventoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EventoCreateWithoutUsuarioInput, EventoUncheckedCreateWithoutUsuarioInput> | EventoCreateWithoutUsuarioInput[] | EventoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutUsuarioInput | EventoCreateOrConnectWithoutUsuarioInput[]
    upsert?: EventoUpsertWithWhereUniqueWithoutUsuarioInput | EventoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EventoCreateManyUsuarioInputEnvelope
    set?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    disconnect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    delete?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    update?: EventoUpdateWithWhereUniqueWithoutUsuarioInput | EventoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EventoUpdateManyWithWhereWithoutUsuarioInput | EventoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EventoScalarWhereInput | EventoScalarWhereInput[]
  }

  export type ProvaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ProvaCreateWithoutUsuarioInput, ProvaUncheckedCreateWithoutUsuarioInput> | ProvaCreateWithoutUsuarioInput[] | ProvaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProvaCreateOrConnectWithoutUsuarioInput | ProvaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ProvaUpsertWithWhereUniqueWithoutUsuarioInput | ProvaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ProvaCreateManyUsuarioInputEnvelope
    set?: ProvaWhereUniqueInput | ProvaWhereUniqueInput[]
    disconnect?: ProvaWhereUniqueInput | ProvaWhereUniqueInput[]
    delete?: ProvaWhereUniqueInput | ProvaWhereUniqueInput[]
    connect?: ProvaWhereUniqueInput | ProvaWhereUniqueInput[]
    update?: ProvaUpdateWithWhereUniqueWithoutUsuarioInput | ProvaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ProvaUpdateManyWithWhereWithoutUsuarioInput | ProvaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ProvaScalarWhereInput | ProvaScalarWhereInput[]
  }

  export type AtividadeUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AtividadeCreateWithoutUsuarioInput, AtividadeUncheckedCreateWithoutUsuarioInput> | AtividadeCreateWithoutUsuarioInput[] | AtividadeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutUsuarioInput | AtividadeCreateOrConnectWithoutUsuarioInput[]
    upsert?: AtividadeUpsertWithWhereUniqueWithoutUsuarioInput | AtividadeUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AtividadeCreateManyUsuarioInputEnvelope
    set?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    disconnect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    delete?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    update?: AtividadeUpdateWithWhereUniqueWithoutUsuarioInput | AtividadeUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AtividadeUpdateManyWithWhereWithoutUsuarioInput | AtividadeUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
  }

  export type PerfilUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<PerfilCreateWithoutUsuarioInput, PerfilUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutUsuarioInput
    upsert?: PerfilUpsertWithoutUsuarioInput
    disconnect?: PerfilWhereInput | boolean
    delete?: PerfilWhereInput | boolean
    connect?: PerfilWhereUniqueInput
    update?: XOR<XOR<PerfilUpdateToOneWithWhereWithoutUsuarioInput, PerfilUpdateWithoutUsuarioInput>, PerfilUncheckedUpdateWithoutUsuarioInput>
  }

  export type NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput> | NotificacaoCreateWithoutUsuarioInput[] | NotificacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUsuarioInput | NotificacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutUsuarioInput | NotificacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: NotificacaoCreateManyUsuarioInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutUsuarioInput | NotificacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutUsuarioInput | NotificacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutPerfilInput = {
    create?: XOR<UsuarioCreateWithoutPerfilInput, UsuarioUncheckedCreateWithoutPerfilInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPerfilInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutPerfilNestedInput = {
    create?: XOR<UsuarioCreateWithoutPerfilInput, UsuarioUncheckedCreateWithoutPerfilInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPerfilInput
    upsert?: UsuarioUpsertWithoutPerfilInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPerfilInput, UsuarioUpdateWithoutPerfilInput>, UsuarioUncheckedUpdateWithoutPerfilInput>
  }

  export type UsuarioCreateNestedOneWithoutMateriasInput = {
    create?: XOR<UsuarioCreateWithoutMateriasInput, UsuarioUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMateriasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type TarefaCreateNestedManyWithoutMateriaInput = {
    create?: XOR<TarefaCreateWithoutMateriaInput, TarefaUncheckedCreateWithoutMateriaInput> | TarefaCreateWithoutMateriaInput[] | TarefaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutMateriaInput | TarefaCreateOrConnectWithoutMateriaInput[]
    createMany?: TarefaCreateManyMateriaInputEnvelope
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
  }

  export type ProvaCreateNestedManyWithoutMateriaInput = {
    create?: XOR<ProvaCreateWithoutMateriaInput, ProvaUncheckedCreateWithoutMateriaInput> | ProvaCreateWithoutMateriaInput[] | ProvaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: ProvaCreateOrConnectWithoutMateriaInput | ProvaCreateOrConnectWithoutMateriaInput[]
    createMany?: ProvaCreateManyMateriaInputEnvelope
    connect?: ProvaWhereUniqueInput | ProvaWhereUniqueInput[]
  }

  export type AtividadeCreateNestedManyWithoutMateriaInput = {
    create?: XOR<AtividadeCreateWithoutMateriaInput, AtividadeUncheckedCreateWithoutMateriaInput> | AtividadeCreateWithoutMateriaInput[] | AtividadeUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutMateriaInput | AtividadeCreateOrConnectWithoutMateriaInput[]
    createMany?: AtividadeCreateManyMateriaInputEnvelope
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
  }

  export type TarefaUncheckedCreateNestedManyWithoutMateriaInput = {
    create?: XOR<TarefaCreateWithoutMateriaInput, TarefaUncheckedCreateWithoutMateriaInput> | TarefaCreateWithoutMateriaInput[] | TarefaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutMateriaInput | TarefaCreateOrConnectWithoutMateriaInput[]
    createMany?: TarefaCreateManyMateriaInputEnvelope
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
  }

  export type ProvaUncheckedCreateNestedManyWithoutMateriaInput = {
    create?: XOR<ProvaCreateWithoutMateriaInput, ProvaUncheckedCreateWithoutMateriaInput> | ProvaCreateWithoutMateriaInput[] | ProvaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: ProvaCreateOrConnectWithoutMateriaInput | ProvaCreateOrConnectWithoutMateriaInput[]
    createMany?: ProvaCreateManyMateriaInputEnvelope
    connect?: ProvaWhereUniqueInput | ProvaWhereUniqueInput[]
  }

  export type AtividadeUncheckedCreateNestedManyWithoutMateriaInput = {
    create?: XOR<AtividadeCreateWithoutMateriaInput, AtividadeUncheckedCreateWithoutMateriaInput> | AtividadeCreateWithoutMateriaInput[] | AtividadeUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutMateriaInput | AtividadeCreateOrConnectWithoutMateriaInput[]
    createMany?: AtividadeCreateManyMateriaInputEnvelope
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutMateriasNestedInput = {
    create?: XOR<UsuarioCreateWithoutMateriasInput, UsuarioUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMateriasInput
    upsert?: UsuarioUpsertWithoutMateriasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutMateriasInput, UsuarioUpdateWithoutMateriasInput>, UsuarioUncheckedUpdateWithoutMateriasInput>
  }

  export type TarefaUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<TarefaCreateWithoutMateriaInput, TarefaUncheckedCreateWithoutMateriaInput> | TarefaCreateWithoutMateriaInput[] | TarefaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutMateriaInput | TarefaCreateOrConnectWithoutMateriaInput[]
    upsert?: TarefaUpsertWithWhereUniqueWithoutMateriaInput | TarefaUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: TarefaCreateManyMateriaInputEnvelope
    set?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    disconnect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    delete?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    update?: TarefaUpdateWithWhereUniqueWithoutMateriaInput | TarefaUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: TarefaUpdateManyWithWhereWithoutMateriaInput | TarefaUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: TarefaScalarWhereInput | TarefaScalarWhereInput[]
  }

  export type ProvaUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<ProvaCreateWithoutMateriaInput, ProvaUncheckedCreateWithoutMateriaInput> | ProvaCreateWithoutMateriaInput[] | ProvaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: ProvaCreateOrConnectWithoutMateriaInput | ProvaCreateOrConnectWithoutMateriaInput[]
    upsert?: ProvaUpsertWithWhereUniqueWithoutMateriaInput | ProvaUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: ProvaCreateManyMateriaInputEnvelope
    set?: ProvaWhereUniqueInput | ProvaWhereUniqueInput[]
    disconnect?: ProvaWhereUniqueInput | ProvaWhereUniqueInput[]
    delete?: ProvaWhereUniqueInput | ProvaWhereUniqueInput[]
    connect?: ProvaWhereUniqueInput | ProvaWhereUniqueInput[]
    update?: ProvaUpdateWithWhereUniqueWithoutMateriaInput | ProvaUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: ProvaUpdateManyWithWhereWithoutMateriaInput | ProvaUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: ProvaScalarWhereInput | ProvaScalarWhereInput[]
  }

  export type AtividadeUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<AtividadeCreateWithoutMateriaInput, AtividadeUncheckedCreateWithoutMateriaInput> | AtividadeCreateWithoutMateriaInput[] | AtividadeUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutMateriaInput | AtividadeCreateOrConnectWithoutMateriaInput[]
    upsert?: AtividadeUpsertWithWhereUniqueWithoutMateriaInput | AtividadeUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: AtividadeCreateManyMateriaInputEnvelope
    set?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    disconnect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    delete?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    update?: AtividadeUpdateWithWhereUniqueWithoutMateriaInput | AtividadeUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: AtividadeUpdateManyWithWhereWithoutMateriaInput | AtividadeUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
  }

  export type TarefaUncheckedUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<TarefaCreateWithoutMateriaInput, TarefaUncheckedCreateWithoutMateriaInput> | TarefaCreateWithoutMateriaInput[] | TarefaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutMateriaInput | TarefaCreateOrConnectWithoutMateriaInput[]
    upsert?: TarefaUpsertWithWhereUniqueWithoutMateriaInput | TarefaUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: TarefaCreateManyMateriaInputEnvelope
    set?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    disconnect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    delete?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    update?: TarefaUpdateWithWhereUniqueWithoutMateriaInput | TarefaUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: TarefaUpdateManyWithWhereWithoutMateriaInput | TarefaUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: TarefaScalarWhereInput | TarefaScalarWhereInput[]
  }

  export type ProvaUncheckedUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<ProvaCreateWithoutMateriaInput, ProvaUncheckedCreateWithoutMateriaInput> | ProvaCreateWithoutMateriaInput[] | ProvaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: ProvaCreateOrConnectWithoutMateriaInput | ProvaCreateOrConnectWithoutMateriaInput[]
    upsert?: ProvaUpsertWithWhereUniqueWithoutMateriaInput | ProvaUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: ProvaCreateManyMateriaInputEnvelope
    set?: ProvaWhereUniqueInput | ProvaWhereUniqueInput[]
    disconnect?: ProvaWhereUniqueInput | ProvaWhereUniqueInput[]
    delete?: ProvaWhereUniqueInput | ProvaWhereUniqueInput[]
    connect?: ProvaWhereUniqueInput | ProvaWhereUniqueInput[]
    update?: ProvaUpdateWithWhereUniqueWithoutMateriaInput | ProvaUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: ProvaUpdateManyWithWhereWithoutMateriaInput | ProvaUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: ProvaScalarWhereInput | ProvaScalarWhereInput[]
  }

  export type AtividadeUncheckedUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<AtividadeCreateWithoutMateriaInput, AtividadeUncheckedCreateWithoutMateriaInput> | AtividadeCreateWithoutMateriaInput[] | AtividadeUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutMateriaInput | AtividadeCreateOrConnectWithoutMateriaInput[]
    upsert?: AtividadeUpsertWithWhereUniqueWithoutMateriaInput | AtividadeUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: AtividadeCreateManyMateriaInputEnvelope
    set?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    disconnect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    delete?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    update?: AtividadeUpdateWithWhereUniqueWithoutMateriaInput | AtividadeUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: AtividadeUpdateManyWithWhereWithoutMateriaInput | AtividadeUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutTarefasInput = {
    create?: XOR<UsuarioCreateWithoutTarefasInput, UsuarioUncheckedCreateWithoutTarefasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTarefasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type MateriaCreateNestedOneWithoutTarefasInput = {
    create?: XOR<MateriaCreateWithoutTarefasInput, MateriaUncheckedCreateWithoutTarefasInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutTarefasInput
    connect?: MateriaWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumPrioridadeFieldUpdateOperationsInput = {
    set?: $Enums.Prioridade
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type UsuarioUpdateOneRequiredWithoutTarefasNestedInput = {
    create?: XOR<UsuarioCreateWithoutTarefasInput, UsuarioUncheckedCreateWithoutTarefasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTarefasInput
    upsert?: UsuarioUpsertWithoutTarefasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutTarefasInput, UsuarioUpdateWithoutTarefasInput>, UsuarioUncheckedUpdateWithoutTarefasInput>
  }

  export type MateriaUpdateOneWithoutTarefasNestedInput = {
    create?: XOR<MateriaCreateWithoutTarefasInput, MateriaUncheckedCreateWithoutTarefasInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutTarefasInput
    upsert?: MateriaUpsertWithoutTarefasInput
    disconnect?: MateriaWhereInput | boolean
    delete?: MateriaWhereInput | boolean
    connect?: MateriaWhereUniqueInput
    update?: XOR<XOR<MateriaUpdateToOneWithWhereWithoutTarefasInput, MateriaUpdateWithoutTarefasInput>, MateriaUncheckedUpdateWithoutTarefasInput>
  }

  export type UsuarioCreateNestedOneWithoutEventosInput = {
    create?: XOR<UsuarioCreateWithoutEventosInput, UsuarioUncheckedCreateWithoutEventosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEventosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsuarioUpdateOneRequiredWithoutEventosNestedInput = {
    create?: XOR<UsuarioCreateWithoutEventosInput, UsuarioUncheckedCreateWithoutEventosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEventosInput
    upsert?: UsuarioUpsertWithoutEventosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutEventosInput, UsuarioUpdateWithoutEventosInput>, UsuarioUncheckedUpdateWithoutEventosInput>
  }

  export type UsuarioCreateNestedOneWithoutProvasInput = {
    create?: XOR<UsuarioCreateWithoutProvasInput, UsuarioUncheckedCreateWithoutProvasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProvasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type MateriaCreateNestedOneWithoutProvasInput = {
    create?: XOR<MateriaCreateWithoutProvasInput, MateriaUncheckedCreateWithoutProvasInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutProvasInput
    connect?: MateriaWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUpdateOneRequiredWithoutProvasNestedInput = {
    create?: XOR<UsuarioCreateWithoutProvasInput, UsuarioUncheckedCreateWithoutProvasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProvasInput
    upsert?: UsuarioUpsertWithoutProvasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutProvasInput, UsuarioUpdateWithoutProvasInput>, UsuarioUncheckedUpdateWithoutProvasInput>
  }

  export type MateriaUpdateOneWithoutProvasNestedInput = {
    create?: XOR<MateriaCreateWithoutProvasInput, MateriaUncheckedCreateWithoutProvasInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutProvasInput
    upsert?: MateriaUpsertWithoutProvasInput
    disconnect?: MateriaWhereInput | boolean
    delete?: MateriaWhereInput | boolean
    connect?: MateriaWhereUniqueInput
    update?: XOR<XOR<MateriaUpdateToOneWithWhereWithoutProvasInput, MateriaUpdateWithoutProvasInput>, MateriaUncheckedUpdateWithoutProvasInput>
  }

  export type UsuarioCreateNestedOneWithoutAtividadesInput = {
    create?: XOR<UsuarioCreateWithoutAtividadesInput, UsuarioUncheckedCreateWithoutAtividadesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAtividadesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type MateriaCreateNestedOneWithoutAtividadesInput = {
    create?: XOR<MateriaCreateWithoutAtividadesInput, MateriaUncheckedCreateWithoutAtividadesInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutAtividadesInput
    connect?: MateriaWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutAtividadesNestedInput = {
    create?: XOR<UsuarioCreateWithoutAtividadesInput, UsuarioUncheckedCreateWithoutAtividadesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAtividadesInput
    upsert?: UsuarioUpsertWithoutAtividadesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAtividadesInput, UsuarioUpdateWithoutAtividadesInput>, UsuarioUncheckedUpdateWithoutAtividadesInput>
  }

  export type MateriaUpdateOneWithoutAtividadesNestedInput = {
    create?: XOR<MateriaCreateWithoutAtividadesInput, MateriaUncheckedCreateWithoutAtividadesInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutAtividadesInput
    upsert?: MateriaUpsertWithoutAtividadesInput
    disconnect?: MateriaWhereInput | boolean
    delete?: MateriaWhereInput | boolean
    connect?: MateriaWhereUniqueInput
    update?: XOR<XOR<MateriaUpdateToOneWithWhereWithoutAtividadesInput, MateriaUpdateWithoutAtividadesInput>, MateriaUncheckedUpdateWithoutAtividadesInput>
  }

  export type UsuarioCreateNestedOneWithoutNotificacoesInput = {
    create?: XOR<UsuarioCreateWithoutNotificacoesInput, UsuarioUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutNotificacoesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EnumTipoNotificacaoFieldUpdateOperationsInput = {
    set?: $Enums.TipoNotificacao
  }

  export type UsuarioUpdateOneRequiredWithoutNotificacoesNestedInput = {
    create?: XOR<UsuarioCreateWithoutNotificacoesInput, UsuarioUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutNotificacoesInput
    upsert?: UsuarioUpsertWithoutNotificacoesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutNotificacoesInput, UsuarioUpdateWithoutNotificacoesInput>, UsuarioUncheckedUpdateWithoutNotificacoesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumPrioridadeFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridade | EnumPrioridadeFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridade[] | ListEnumPrioridadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Prioridade[] | ListEnumPrioridadeFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadeFilter<$PrismaModel> | $Enums.Prioridade
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPrioridadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridade | EnumPrioridadeFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridade[] | ListEnumPrioridadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Prioridade[] | ListEnumPrioridadeFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadeWithAggregatesFilter<$PrismaModel> | $Enums.Prioridade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrioridadeFilter<$PrismaModel>
    _max?: NestedEnumPrioridadeFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumTipoNotificacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoNotificacao | EnumTipoNotificacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoNotificacao[] | ListEnumTipoNotificacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoNotificacao[] | ListEnumTipoNotificacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoNotificacaoFilter<$PrismaModel> | $Enums.TipoNotificacao
  }

  export type NestedEnumTipoNotificacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoNotificacao | EnumTipoNotificacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoNotificacao[] | ListEnumTipoNotificacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoNotificacao[] | ListEnumTipoNotificacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoNotificacaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoNotificacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoNotificacaoFilter<$PrismaModel>
    _max?: NestedEnumTipoNotificacaoFilter<$PrismaModel>
  }

  export type TarefaCreateWithoutUsuarioInput = {
    id?: string
    titulo: string
    descricao?: string | null
    dataVencimento?: Date | string | null
    prioridade?: $Enums.Prioridade
    status?: $Enums.Status
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    materia?: MateriaCreateNestedOneWithoutTarefasInput
  }

  export type TarefaUncheckedCreateWithoutUsuarioInput = {
    id?: string
    titulo: string
    descricao?: string | null
    dataVencimento?: Date | string | null
    prioridade?: $Enums.Prioridade
    status?: $Enums.Status
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    materiaId?: string | null
  }

  export type TarefaCreateOrConnectWithoutUsuarioInput = {
    where: TarefaWhereUniqueInput
    create: XOR<TarefaCreateWithoutUsuarioInput, TarefaUncheckedCreateWithoutUsuarioInput>
  }

  export type TarefaCreateManyUsuarioInputEnvelope = {
    data: TarefaCreateManyUsuarioInput | TarefaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type MateriaCreateWithoutUsuarioInput = {
    id?: string
    nome: string
    descricao?: string | null
    cor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    tarefas?: TarefaCreateNestedManyWithoutMateriaInput
    provas?: ProvaCreateNestedManyWithoutMateriaInput
    atividades?: AtividadeCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUncheckedCreateWithoutUsuarioInput = {
    id?: string
    nome: string
    descricao?: string | null
    cor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    tarefas?: TarefaUncheckedCreateNestedManyWithoutMateriaInput
    provas?: ProvaUncheckedCreateNestedManyWithoutMateriaInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaCreateOrConnectWithoutUsuarioInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutUsuarioInput, MateriaUncheckedCreateWithoutUsuarioInput>
  }

  export type MateriaCreateManyUsuarioInputEnvelope = {
    data: MateriaCreateManyUsuarioInput | MateriaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type EventoCreateWithoutUsuarioInput = {
    id?: string
    titulo: string
    descricao?: string | null
    dataInicio: Date | string
    dataFim?: Date | string | null
    diaInteiro?: boolean
    local?: string | null
    cor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type EventoUncheckedCreateWithoutUsuarioInput = {
    id?: string
    titulo: string
    descricao?: string | null
    dataInicio: Date | string
    dataFim?: Date | string | null
    diaInteiro?: boolean
    local?: string | null
    cor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type EventoCreateOrConnectWithoutUsuarioInput = {
    where: EventoWhereUniqueInput
    create: XOR<EventoCreateWithoutUsuarioInput, EventoUncheckedCreateWithoutUsuarioInput>
  }

  export type EventoCreateManyUsuarioInputEnvelope = {
    data: EventoCreateManyUsuarioInput | EventoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ProvaCreateWithoutUsuarioInput = {
    id?: string
    titulo: string
    descricao?: string | null
    data: Date | string
    local?: string | null
    nota?: number | null
    status?: $Enums.Status
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    materia?: MateriaCreateNestedOneWithoutProvasInput
  }

  export type ProvaUncheckedCreateWithoutUsuarioInput = {
    id?: string
    titulo: string
    descricao?: string | null
    data: Date | string
    local?: string | null
    nota?: number | null
    status?: $Enums.Status
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    materiaId?: string | null
  }

  export type ProvaCreateOrConnectWithoutUsuarioInput = {
    where: ProvaWhereUniqueInput
    create: XOR<ProvaCreateWithoutUsuarioInput, ProvaUncheckedCreateWithoutUsuarioInput>
  }

  export type ProvaCreateManyUsuarioInputEnvelope = {
    data: ProvaCreateManyUsuarioInput | ProvaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type AtividadeCreateWithoutUsuarioInput = {
    id?: string
    titulo: string
    descricao?: string | null
    dataVencimento?: Date | string | null
    peso?: number | null
    nota?: number | null
    status?: $Enums.Status
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    materia?: MateriaCreateNestedOneWithoutAtividadesInput
  }

  export type AtividadeUncheckedCreateWithoutUsuarioInput = {
    id?: string
    titulo: string
    descricao?: string | null
    dataVencimento?: Date | string | null
    peso?: number | null
    nota?: number | null
    status?: $Enums.Status
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    materiaId?: string | null
  }

  export type AtividadeCreateOrConnectWithoutUsuarioInput = {
    where: AtividadeWhereUniqueInput
    create: XOR<AtividadeCreateWithoutUsuarioInput, AtividadeUncheckedCreateWithoutUsuarioInput>
  }

  export type AtividadeCreateManyUsuarioInputEnvelope = {
    data: AtividadeCreateManyUsuarioInput | AtividadeCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type PerfilCreateWithoutUsuarioInput = {
    id?: string
    biografia?: string | null
    avatar?: string | null
    tema?: string
  }

  export type PerfilUncheckedCreateWithoutUsuarioInput = {
    id?: string
    biografia?: string | null
    avatar?: string | null
    tema?: string
  }

  export type PerfilCreateOrConnectWithoutUsuarioInput = {
    where: PerfilWhereUniqueInput
    create: XOR<PerfilCreateWithoutUsuarioInput, PerfilUncheckedCreateWithoutUsuarioInput>
  }

  export type NotificacaoCreateWithoutUsuarioInput = {
    id?: string
    titulo: string
    mensagem: string
    lida?: boolean
    tipo?: $Enums.TipoNotificacao
    dataCriacao?: Date | string
  }

  export type NotificacaoUncheckedCreateWithoutUsuarioInput = {
    id?: string
    titulo: string
    mensagem: string
    lida?: boolean
    tipo?: $Enums.TipoNotificacao
    dataCriacao?: Date | string
  }

  export type NotificacaoCreateOrConnectWithoutUsuarioInput = {
    where: NotificacaoWhereUniqueInput
    create: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type NotificacaoCreateManyUsuarioInputEnvelope = {
    data: NotificacaoCreateManyUsuarioInput | NotificacaoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type TarefaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: TarefaWhereUniqueInput
    update: XOR<TarefaUpdateWithoutUsuarioInput, TarefaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<TarefaCreateWithoutUsuarioInput, TarefaUncheckedCreateWithoutUsuarioInput>
  }

  export type TarefaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: TarefaWhereUniqueInput
    data: XOR<TarefaUpdateWithoutUsuarioInput, TarefaUncheckedUpdateWithoutUsuarioInput>
  }

  export type TarefaUpdateManyWithWhereWithoutUsuarioInput = {
    where: TarefaScalarWhereInput
    data: XOR<TarefaUpdateManyMutationInput, TarefaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type TarefaScalarWhereInput = {
    AND?: TarefaScalarWhereInput | TarefaScalarWhereInput[]
    OR?: TarefaScalarWhereInput[]
    NOT?: TarefaScalarWhereInput | TarefaScalarWhereInput[]
    id?: StringFilter<"Tarefa"> | string
    titulo?: StringFilter<"Tarefa"> | string
    descricao?: StringNullableFilter<"Tarefa"> | string | null
    dataVencimento?: DateTimeNullableFilter<"Tarefa"> | Date | string | null
    prioridade?: EnumPrioridadeFilter<"Tarefa"> | $Enums.Prioridade
    status?: EnumStatusFilter<"Tarefa"> | $Enums.Status
    dataCriacao?: DateTimeFilter<"Tarefa"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Tarefa"> | Date | string
    usuarioId?: StringFilter<"Tarefa"> | string
    materiaId?: StringNullableFilter<"Tarefa"> | string | null
  }

  export type MateriaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: MateriaWhereUniqueInput
    update: XOR<MateriaUpdateWithoutUsuarioInput, MateriaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<MateriaCreateWithoutUsuarioInput, MateriaUncheckedCreateWithoutUsuarioInput>
  }

  export type MateriaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: MateriaWhereUniqueInput
    data: XOR<MateriaUpdateWithoutUsuarioInput, MateriaUncheckedUpdateWithoutUsuarioInput>
  }

  export type MateriaUpdateManyWithWhereWithoutUsuarioInput = {
    where: MateriaScalarWhereInput
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type MateriaScalarWhereInput = {
    AND?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
    OR?: MateriaScalarWhereInput[]
    NOT?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
    id?: StringFilter<"Materia"> | string
    nome?: StringFilter<"Materia"> | string
    descricao?: StringNullableFilter<"Materia"> | string | null
    cor?: StringNullableFilter<"Materia"> | string | null
    dataCriacao?: DateTimeFilter<"Materia"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Materia"> | Date | string
    usuarioId?: StringFilter<"Materia"> | string
  }

  export type EventoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: EventoWhereUniqueInput
    update: XOR<EventoUpdateWithoutUsuarioInput, EventoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<EventoCreateWithoutUsuarioInput, EventoUncheckedCreateWithoutUsuarioInput>
  }

  export type EventoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: EventoWhereUniqueInput
    data: XOR<EventoUpdateWithoutUsuarioInput, EventoUncheckedUpdateWithoutUsuarioInput>
  }

  export type EventoUpdateManyWithWhereWithoutUsuarioInput = {
    where: EventoScalarWhereInput
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type EventoScalarWhereInput = {
    AND?: EventoScalarWhereInput | EventoScalarWhereInput[]
    OR?: EventoScalarWhereInput[]
    NOT?: EventoScalarWhereInput | EventoScalarWhereInput[]
    id?: StringFilter<"Evento"> | string
    titulo?: StringFilter<"Evento"> | string
    descricao?: StringNullableFilter<"Evento"> | string | null
    dataInicio?: DateTimeFilter<"Evento"> | Date | string
    dataFim?: DateTimeNullableFilter<"Evento"> | Date | string | null
    diaInteiro?: BoolFilter<"Evento"> | boolean
    local?: StringNullableFilter<"Evento"> | string | null
    cor?: StringNullableFilter<"Evento"> | string | null
    dataCriacao?: DateTimeFilter<"Evento"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Evento"> | Date | string
    usuarioId?: StringFilter<"Evento"> | string
  }

  export type ProvaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ProvaWhereUniqueInput
    update: XOR<ProvaUpdateWithoutUsuarioInput, ProvaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ProvaCreateWithoutUsuarioInput, ProvaUncheckedCreateWithoutUsuarioInput>
  }

  export type ProvaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ProvaWhereUniqueInput
    data: XOR<ProvaUpdateWithoutUsuarioInput, ProvaUncheckedUpdateWithoutUsuarioInput>
  }

  export type ProvaUpdateManyWithWhereWithoutUsuarioInput = {
    where: ProvaScalarWhereInput
    data: XOR<ProvaUpdateManyMutationInput, ProvaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ProvaScalarWhereInput = {
    AND?: ProvaScalarWhereInput | ProvaScalarWhereInput[]
    OR?: ProvaScalarWhereInput[]
    NOT?: ProvaScalarWhereInput | ProvaScalarWhereInput[]
    id?: StringFilter<"Prova"> | string
    titulo?: StringFilter<"Prova"> | string
    descricao?: StringNullableFilter<"Prova"> | string | null
    data?: DateTimeFilter<"Prova"> | Date | string
    local?: StringNullableFilter<"Prova"> | string | null
    nota?: FloatNullableFilter<"Prova"> | number | null
    status?: EnumStatusFilter<"Prova"> | $Enums.Status
    dataCriacao?: DateTimeFilter<"Prova"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Prova"> | Date | string
    usuarioId?: StringFilter<"Prova"> | string
    materiaId?: StringNullableFilter<"Prova"> | string | null
  }

  export type AtividadeUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: AtividadeWhereUniqueInput
    update: XOR<AtividadeUpdateWithoutUsuarioInput, AtividadeUncheckedUpdateWithoutUsuarioInput>
    create: XOR<AtividadeCreateWithoutUsuarioInput, AtividadeUncheckedCreateWithoutUsuarioInput>
  }

  export type AtividadeUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: AtividadeWhereUniqueInput
    data: XOR<AtividadeUpdateWithoutUsuarioInput, AtividadeUncheckedUpdateWithoutUsuarioInput>
  }

  export type AtividadeUpdateManyWithWhereWithoutUsuarioInput = {
    where: AtividadeScalarWhereInput
    data: XOR<AtividadeUpdateManyMutationInput, AtividadeUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type AtividadeScalarWhereInput = {
    AND?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
    OR?: AtividadeScalarWhereInput[]
    NOT?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
    id?: StringFilter<"Atividade"> | string
    titulo?: StringFilter<"Atividade"> | string
    descricao?: StringNullableFilter<"Atividade"> | string | null
    dataVencimento?: DateTimeNullableFilter<"Atividade"> | Date | string | null
    peso?: FloatNullableFilter<"Atividade"> | number | null
    nota?: FloatNullableFilter<"Atividade"> | number | null
    status?: EnumStatusFilter<"Atividade"> | $Enums.Status
    dataCriacao?: DateTimeFilter<"Atividade"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Atividade"> | Date | string
    usuarioId?: StringFilter<"Atividade"> | string
    materiaId?: StringNullableFilter<"Atividade"> | string | null
  }

  export type PerfilUpsertWithoutUsuarioInput = {
    update: XOR<PerfilUpdateWithoutUsuarioInput, PerfilUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PerfilCreateWithoutUsuarioInput, PerfilUncheckedCreateWithoutUsuarioInput>
    where?: PerfilWhereInput
  }

  export type PerfilUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: PerfilWhereInput
    data: XOR<PerfilUpdateWithoutUsuarioInput, PerfilUncheckedUpdateWithoutUsuarioInput>
  }

  export type PerfilUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    tema?: StringFieldUpdateOperationsInput | string
  }

  export type PerfilUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    tema?: StringFieldUpdateOperationsInput | string
  }

  export type NotificacaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: NotificacaoWhereUniqueInput
    update: XOR<NotificacaoUpdateWithoutUsuarioInput, NotificacaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type NotificacaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: NotificacaoWhereUniqueInput
    data: XOR<NotificacaoUpdateWithoutUsuarioInput, NotificacaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type NotificacaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: NotificacaoScalarWhereInput
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type NotificacaoScalarWhereInput = {
    AND?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
    OR?: NotificacaoScalarWhereInput[]
    NOT?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
    id?: StringFilter<"Notificacao"> | string
    titulo?: StringFilter<"Notificacao"> | string
    mensagem?: StringFilter<"Notificacao"> | string
    lida?: BoolFilter<"Notificacao"> | boolean
    tipo?: EnumTipoNotificacaoFilter<"Notificacao"> | $Enums.TipoNotificacao
    dataCriacao?: DateTimeFilter<"Notificacao"> | Date | string
    usuarioId?: StringFilter<"Notificacao"> | string
  }

  export type UsuarioCreateWithoutPerfilInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    senha: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    tarefas?: TarefaCreateNestedManyWithoutUsuarioInput
    materias?: MateriaCreateNestedManyWithoutUsuarioInput
    eventos?: EventoCreateNestedManyWithoutUsuarioInput
    provas?: ProvaCreateNestedManyWithoutUsuarioInput
    atividades?: AtividadeCreateNestedManyWithoutUsuarioInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutPerfilInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    senha: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    tarefas?: TarefaUncheckedCreateNestedManyWithoutUsuarioInput
    materias?: MateriaUncheckedCreateNestedManyWithoutUsuarioInput
    eventos?: EventoUncheckedCreateNestedManyWithoutUsuarioInput
    provas?: ProvaUncheckedCreateNestedManyWithoutUsuarioInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutUsuarioInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutPerfilInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPerfilInput, UsuarioUncheckedCreateWithoutPerfilInput>
  }

  export type UsuarioUpsertWithoutPerfilInput = {
    update: XOR<UsuarioUpdateWithoutPerfilInput, UsuarioUncheckedUpdateWithoutPerfilInput>
    create: XOR<UsuarioCreateWithoutPerfilInput, UsuarioUncheckedCreateWithoutPerfilInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPerfilInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPerfilInput, UsuarioUncheckedUpdateWithoutPerfilInput>
  }

  export type UsuarioUpdateWithoutPerfilInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefas?: TarefaUpdateManyWithoutUsuarioNestedInput
    materias?: MateriaUpdateManyWithoutUsuarioNestedInput
    eventos?: EventoUpdateManyWithoutUsuarioNestedInput
    provas?: ProvaUpdateManyWithoutUsuarioNestedInput
    atividades?: AtividadeUpdateManyWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPerfilInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefas?: TarefaUncheckedUpdateManyWithoutUsuarioNestedInput
    materias?: MateriaUncheckedUpdateManyWithoutUsuarioNestedInput
    eventos?: EventoUncheckedUpdateManyWithoutUsuarioNestedInput
    provas?: ProvaUncheckedUpdateManyWithoutUsuarioNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateWithoutMateriasInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    senha: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    tarefas?: TarefaCreateNestedManyWithoutUsuarioInput
    eventos?: EventoCreateNestedManyWithoutUsuarioInput
    provas?: ProvaCreateNestedManyWithoutUsuarioInput
    atividades?: AtividadeCreateNestedManyWithoutUsuarioInput
    perfil?: PerfilCreateNestedOneWithoutUsuarioInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutMateriasInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    senha: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    tarefas?: TarefaUncheckedCreateNestedManyWithoutUsuarioInput
    eventos?: EventoUncheckedCreateNestedManyWithoutUsuarioInput
    provas?: ProvaUncheckedCreateNestedManyWithoutUsuarioInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutUsuarioInput
    perfil?: PerfilUncheckedCreateNestedOneWithoutUsuarioInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutMateriasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutMateriasInput, UsuarioUncheckedCreateWithoutMateriasInput>
  }

  export type TarefaCreateWithoutMateriaInput = {
    id?: string
    titulo: string
    descricao?: string | null
    dataVencimento?: Date | string | null
    prioridade?: $Enums.Prioridade
    status?: $Enums.Status
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuario: UsuarioCreateNestedOneWithoutTarefasInput
  }

  export type TarefaUncheckedCreateWithoutMateriaInput = {
    id?: string
    titulo: string
    descricao?: string | null
    dataVencimento?: Date | string | null
    prioridade?: $Enums.Prioridade
    status?: $Enums.Status
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuarioId: string
  }

  export type TarefaCreateOrConnectWithoutMateriaInput = {
    where: TarefaWhereUniqueInput
    create: XOR<TarefaCreateWithoutMateriaInput, TarefaUncheckedCreateWithoutMateriaInput>
  }

  export type TarefaCreateManyMateriaInputEnvelope = {
    data: TarefaCreateManyMateriaInput | TarefaCreateManyMateriaInput[]
    skipDuplicates?: boolean
  }

  export type ProvaCreateWithoutMateriaInput = {
    id?: string
    titulo: string
    descricao?: string | null
    data: Date | string
    local?: string | null
    nota?: number | null
    status?: $Enums.Status
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuario: UsuarioCreateNestedOneWithoutProvasInput
  }

  export type ProvaUncheckedCreateWithoutMateriaInput = {
    id?: string
    titulo: string
    descricao?: string | null
    data: Date | string
    local?: string | null
    nota?: number | null
    status?: $Enums.Status
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuarioId: string
  }

  export type ProvaCreateOrConnectWithoutMateriaInput = {
    where: ProvaWhereUniqueInput
    create: XOR<ProvaCreateWithoutMateriaInput, ProvaUncheckedCreateWithoutMateriaInput>
  }

  export type ProvaCreateManyMateriaInputEnvelope = {
    data: ProvaCreateManyMateriaInput | ProvaCreateManyMateriaInput[]
    skipDuplicates?: boolean
  }

  export type AtividadeCreateWithoutMateriaInput = {
    id?: string
    titulo: string
    descricao?: string | null
    dataVencimento?: Date | string | null
    peso?: number | null
    nota?: number | null
    status?: $Enums.Status
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuario: UsuarioCreateNestedOneWithoutAtividadesInput
  }

  export type AtividadeUncheckedCreateWithoutMateriaInput = {
    id?: string
    titulo: string
    descricao?: string | null
    dataVencimento?: Date | string | null
    peso?: number | null
    nota?: number | null
    status?: $Enums.Status
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuarioId: string
  }

  export type AtividadeCreateOrConnectWithoutMateriaInput = {
    where: AtividadeWhereUniqueInput
    create: XOR<AtividadeCreateWithoutMateriaInput, AtividadeUncheckedCreateWithoutMateriaInput>
  }

  export type AtividadeCreateManyMateriaInputEnvelope = {
    data: AtividadeCreateManyMateriaInput | AtividadeCreateManyMateriaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutMateriasInput = {
    update: XOR<UsuarioUpdateWithoutMateriasInput, UsuarioUncheckedUpdateWithoutMateriasInput>
    create: XOR<UsuarioCreateWithoutMateriasInput, UsuarioUncheckedCreateWithoutMateriasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutMateriasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutMateriasInput, UsuarioUncheckedUpdateWithoutMateriasInput>
  }

  export type UsuarioUpdateWithoutMateriasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefas?: TarefaUpdateManyWithoutUsuarioNestedInput
    eventos?: EventoUpdateManyWithoutUsuarioNestedInput
    provas?: ProvaUpdateManyWithoutUsuarioNestedInput
    atividades?: AtividadeUpdateManyWithoutUsuarioNestedInput
    perfil?: PerfilUpdateOneWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutMateriasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefas?: TarefaUncheckedUpdateManyWithoutUsuarioNestedInput
    eventos?: EventoUncheckedUpdateManyWithoutUsuarioNestedInput
    provas?: ProvaUncheckedUpdateManyWithoutUsuarioNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutUsuarioNestedInput
    perfil?: PerfilUncheckedUpdateOneWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type TarefaUpsertWithWhereUniqueWithoutMateriaInput = {
    where: TarefaWhereUniqueInput
    update: XOR<TarefaUpdateWithoutMateriaInput, TarefaUncheckedUpdateWithoutMateriaInput>
    create: XOR<TarefaCreateWithoutMateriaInput, TarefaUncheckedCreateWithoutMateriaInput>
  }

  export type TarefaUpdateWithWhereUniqueWithoutMateriaInput = {
    where: TarefaWhereUniqueInput
    data: XOR<TarefaUpdateWithoutMateriaInput, TarefaUncheckedUpdateWithoutMateriaInput>
  }

  export type TarefaUpdateManyWithWhereWithoutMateriaInput = {
    where: TarefaScalarWhereInput
    data: XOR<TarefaUpdateManyMutationInput, TarefaUncheckedUpdateManyWithoutMateriaInput>
  }

  export type ProvaUpsertWithWhereUniqueWithoutMateriaInput = {
    where: ProvaWhereUniqueInput
    update: XOR<ProvaUpdateWithoutMateriaInput, ProvaUncheckedUpdateWithoutMateriaInput>
    create: XOR<ProvaCreateWithoutMateriaInput, ProvaUncheckedCreateWithoutMateriaInput>
  }

  export type ProvaUpdateWithWhereUniqueWithoutMateriaInput = {
    where: ProvaWhereUniqueInput
    data: XOR<ProvaUpdateWithoutMateriaInput, ProvaUncheckedUpdateWithoutMateriaInput>
  }

  export type ProvaUpdateManyWithWhereWithoutMateriaInput = {
    where: ProvaScalarWhereInput
    data: XOR<ProvaUpdateManyMutationInput, ProvaUncheckedUpdateManyWithoutMateriaInput>
  }

  export type AtividadeUpsertWithWhereUniqueWithoutMateriaInput = {
    where: AtividadeWhereUniqueInput
    update: XOR<AtividadeUpdateWithoutMateriaInput, AtividadeUncheckedUpdateWithoutMateriaInput>
    create: XOR<AtividadeCreateWithoutMateriaInput, AtividadeUncheckedCreateWithoutMateriaInput>
  }

  export type AtividadeUpdateWithWhereUniqueWithoutMateriaInput = {
    where: AtividadeWhereUniqueInput
    data: XOR<AtividadeUpdateWithoutMateriaInput, AtividadeUncheckedUpdateWithoutMateriaInput>
  }

  export type AtividadeUpdateManyWithWhereWithoutMateriaInput = {
    where: AtividadeScalarWhereInput
    data: XOR<AtividadeUpdateManyMutationInput, AtividadeUncheckedUpdateManyWithoutMateriaInput>
  }

  export type UsuarioCreateWithoutTarefasInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    senha: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    materias?: MateriaCreateNestedManyWithoutUsuarioInput
    eventos?: EventoCreateNestedManyWithoutUsuarioInput
    provas?: ProvaCreateNestedManyWithoutUsuarioInput
    atividades?: AtividadeCreateNestedManyWithoutUsuarioInput
    perfil?: PerfilCreateNestedOneWithoutUsuarioInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutTarefasInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    senha: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    materias?: MateriaUncheckedCreateNestedManyWithoutUsuarioInput
    eventos?: EventoUncheckedCreateNestedManyWithoutUsuarioInput
    provas?: ProvaUncheckedCreateNestedManyWithoutUsuarioInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutUsuarioInput
    perfil?: PerfilUncheckedCreateNestedOneWithoutUsuarioInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutTarefasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutTarefasInput, UsuarioUncheckedCreateWithoutTarefasInput>
  }

  export type MateriaCreateWithoutTarefasInput = {
    id?: string
    nome: string
    descricao?: string | null
    cor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuario: UsuarioCreateNestedOneWithoutMateriasInput
    provas?: ProvaCreateNestedManyWithoutMateriaInput
    atividades?: AtividadeCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUncheckedCreateWithoutTarefasInput = {
    id?: string
    nome: string
    descricao?: string | null
    cor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuarioId: string
    provas?: ProvaUncheckedCreateNestedManyWithoutMateriaInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaCreateOrConnectWithoutTarefasInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutTarefasInput, MateriaUncheckedCreateWithoutTarefasInput>
  }

  export type UsuarioUpsertWithoutTarefasInput = {
    update: XOR<UsuarioUpdateWithoutTarefasInput, UsuarioUncheckedUpdateWithoutTarefasInput>
    create: XOR<UsuarioCreateWithoutTarefasInput, UsuarioUncheckedCreateWithoutTarefasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutTarefasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutTarefasInput, UsuarioUncheckedUpdateWithoutTarefasInput>
  }

  export type UsuarioUpdateWithoutTarefasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    materias?: MateriaUpdateManyWithoutUsuarioNestedInput
    eventos?: EventoUpdateManyWithoutUsuarioNestedInput
    provas?: ProvaUpdateManyWithoutUsuarioNestedInput
    atividades?: AtividadeUpdateManyWithoutUsuarioNestedInput
    perfil?: PerfilUpdateOneWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutTarefasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    materias?: MateriaUncheckedUpdateManyWithoutUsuarioNestedInput
    eventos?: EventoUncheckedUpdateManyWithoutUsuarioNestedInput
    provas?: ProvaUncheckedUpdateManyWithoutUsuarioNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutUsuarioNestedInput
    perfil?: PerfilUncheckedUpdateOneWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type MateriaUpsertWithoutTarefasInput = {
    update: XOR<MateriaUpdateWithoutTarefasInput, MateriaUncheckedUpdateWithoutTarefasInput>
    create: XOR<MateriaCreateWithoutTarefasInput, MateriaUncheckedCreateWithoutTarefasInput>
    where?: MateriaWhereInput
  }

  export type MateriaUpdateToOneWithWhereWithoutTarefasInput = {
    where?: MateriaWhereInput
    data: XOR<MateriaUpdateWithoutTarefasInput, MateriaUncheckedUpdateWithoutTarefasInput>
  }

  export type MateriaUpdateWithoutTarefasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutMateriasNestedInput
    provas?: ProvaUpdateManyWithoutMateriaNestedInput
    atividades?: AtividadeUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateWithoutTarefasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    provas?: ProvaUncheckedUpdateManyWithoutMateriaNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type UsuarioCreateWithoutEventosInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    senha: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    tarefas?: TarefaCreateNestedManyWithoutUsuarioInput
    materias?: MateriaCreateNestedManyWithoutUsuarioInput
    provas?: ProvaCreateNestedManyWithoutUsuarioInput
    atividades?: AtividadeCreateNestedManyWithoutUsuarioInput
    perfil?: PerfilCreateNestedOneWithoutUsuarioInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutEventosInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    senha: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    tarefas?: TarefaUncheckedCreateNestedManyWithoutUsuarioInput
    materias?: MateriaUncheckedCreateNestedManyWithoutUsuarioInput
    provas?: ProvaUncheckedCreateNestedManyWithoutUsuarioInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutUsuarioInput
    perfil?: PerfilUncheckedCreateNestedOneWithoutUsuarioInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutEventosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutEventosInput, UsuarioUncheckedCreateWithoutEventosInput>
  }

  export type UsuarioUpsertWithoutEventosInput = {
    update: XOR<UsuarioUpdateWithoutEventosInput, UsuarioUncheckedUpdateWithoutEventosInput>
    create: XOR<UsuarioCreateWithoutEventosInput, UsuarioUncheckedCreateWithoutEventosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutEventosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutEventosInput, UsuarioUncheckedUpdateWithoutEventosInput>
  }

  export type UsuarioUpdateWithoutEventosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefas?: TarefaUpdateManyWithoutUsuarioNestedInput
    materias?: MateriaUpdateManyWithoutUsuarioNestedInput
    provas?: ProvaUpdateManyWithoutUsuarioNestedInput
    atividades?: AtividadeUpdateManyWithoutUsuarioNestedInput
    perfil?: PerfilUpdateOneWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutEventosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefas?: TarefaUncheckedUpdateManyWithoutUsuarioNestedInput
    materias?: MateriaUncheckedUpdateManyWithoutUsuarioNestedInput
    provas?: ProvaUncheckedUpdateManyWithoutUsuarioNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutUsuarioNestedInput
    perfil?: PerfilUncheckedUpdateOneWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateWithoutProvasInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    senha: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    tarefas?: TarefaCreateNestedManyWithoutUsuarioInput
    materias?: MateriaCreateNestedManyWithoutUsuarioInput
    eventos?: EventoCreateNestedManyWithoutUsuarioInput
    atividades?: AtividadeCreateNestedManyWithoutUsuarioInput
    perfil?: PerfilCreateNestedOneWithoutUsuarioInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutProvasInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    senha: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    tarefas?: TarefaUncheckedCreateNestedManyWithoutUsuarioInput
    materias?: MateriaUncheckedCreateNestedManyWithoutUsuarioInput
    eventos?: EventoUncheckedCreateNestedManyWithoutUsuarioInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutUsuarioInput
    perfil?: PerfilUncheckedCreateNestedOneWithoutUsuarioInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutProvasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutProvasInput, UsuarioUncheckedCreateWithoutProvasInput>
  }

  export type MateriaCreateWithoutProvasInput = {
    id?: string
    nome: string
    descricao?: string | null
    cor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuario: UsuarioCreateNestedOneWithoutMateriasInput
    tarefas?: TarefaCreateNestedManyWithoutMateriaInput
    atividades?: AtividadeCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUncheckedCreateWithoutProvasInput = {
    id?: string
    nome: string
    descricao?: string | null
    cor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuarioId: string
    tarefas?: TarefaUncheckedCreateNestedManyWithoutMateriaInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaCreateOrConnectWithoutProvasInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutProvasInput, MateriaUncheckedCreateWithoutProvasInput>
  }

  export type UsuarioUpsertWithoutProvasInput = {
    update: XOR<UsuarioUpdateWithoutProvasInput, UsuarioUncheckedUpdateWithoutProvasInput>
    create: XOR<UsuarioCreateWithoutProvasInput, UsuarioUncheckedCreateWithoutProvasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutProvasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutProvasInput, UsuarioUncheckedUpdateWithoutProvasInput>
  }

  export type UsuarioUpdateWithoutProvasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefas?: TarefaUpdateManyWithoutUsuarioNestedInput
    materias?: MateriaUpdateManyWithoutUsuarioNestedInput
    eventos?: EventoUpdateManyWithoutUsuarioNestedInput
    atividades?: AtividadeUpdateManyWithoutUsuarioNestedInput
    perfil?: PerfilUpdateOneWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutProvasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefas?: TarefaUncheckedUpdateManyWithoutUsuarioNestedInput
    materias?: MateriaUncheckedUpdateManyWithoutUsuarioNestedInput
    eventos?: EventoUncheckedUpdateManyWithoutUsuarioNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutUsuarioNestedInput
    perfil?: PerfilUncheckedUpdateOneWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type MateriaUpsertWithoutProvasInput = {
    update: XOR<MateriaUpdateWithoutProvasInput, MateriaUncheckedUpdateWithoutProvasInput>
    create: XOR<MateriaCreateWithoutProvasInput, MateriaUncheckedCreateWithoutProvasInput>
    where?: MateriaWhereInput
  }

  export type MateriaUpdateToOneWithWhereWithoutProvasInput = {
    where?: MateriaWhereInput
    data: XOR<MateriaUpdateWithoutProvasInput, MateriaUncheckedUpdateWithoutProvasInput>
  }

  export type MateriaUpdateWithoutProvasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutMateriasNestedInput
    tarefas?: TarefaUpdateManyWithoutMateriaNestedInput
    atividades?: AtividadeUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateWithoutProvasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    tarefas?: TarefaUncheckedUpdateManyWithoutMateriaNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type UsuarioCreateWithoutAtividadesInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    senha: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    tarefas?: TarefaCreateNestedManyWithoutUsuarioInput
    materias?: MateriaCreateNestedManyWithoutUsuarioInput
    eventos?: EventoCreateNestedManyWithoutUsuarioInput
    provas?: ProvaCreateNestedManyWithoutUsuarioInput
    perfil?: PerfilCreateNestedOneWithoutUsuarioInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutAtividadesInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    senha: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    tarefas?: TarefaUncheckedCreateNestedManyWithoutUsuarioInput
    materias?: MateriaUncheckedCreateNestedManyWithoutUsuarioInput
    eventos?: EventoUncheckedCreateNestedManyWithoutUsuarioInput
    provas?: ProvaUncheckedCreateNestedManyWithoutUsuarioInput
    perfil?: PerfilUncheckedCreateNestedOneWithoutUsuarioInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutAtividadesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAtividadesInput, UsuarioUncheckedCreateWithoutAtividadesInput>
  }

  export type MateriaCreateWithoutAtividadesInput = {
    id?: string
    nome: string
    descricao?: string | null
    cor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuario: UsuarioCreateNestedOneWithoutMateriasInput
    tarefas?: TarefaCreateNestedManyWithoutMateriaInput
    provas?: ProvaCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUncheckedCreateWithoutAtividadesInput = {
    id?: string
    nome: string
    descricao?: string | null
    cor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuarioId: string
    tarefas?: TarefaUncheckedCreateNestedManyWithoutMateriaInput
    provas?: ProvaUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaCreateOrConnectWithoutAtividadesInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutAtividadesInput, MateriaUncheckedCreateWithoutAtividadesInput>
  }

  export type UsuarioUpsertWithoutAtividadesInput = {
    update: XOR<UsuarioUpdateWithoutAtividadesInput, UsuarioUncheckedUpdateWithoutAtividadesInput>
    create: XOR<UsuarioCreateWithoutAtividadesInput, UsuarioUncheckedCreateWithoutAtividadesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAtividadesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAtividadesInput, UsuarioUncheckedUpdateWithoutAtividadesInput>
  }

  export type UsuarioUpdateWithoutAtividadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefas?: TarefaUpdateManyWithoutUsuarioNestedInput
    materias?: MateriaUpdateManyWithoutUsuarioNestedInput
    eventos?: EventoUpdateManyWithoutUsuarioNestedInput
    provas?: ProvaUpdateManyWithoutUsuarioNestedInput
    perfil?: PerfilUpdateOneWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAtividadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefas?: TarefaUncheckedUpdateManyWithoutUsuarioNestedInput
    materias?: MateriaUncheckedUpdateManyWithoutUsuarioNestedInput
    eventos?: EventoUncheckedUpdateManyWithoutUsuarioNestedInput
    provas?: ProvaUncheckedUpdateManyWithoutUsuarioNestedInput
    perfil?: PerfilUncheckedUpdateOneWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type MateriaUpsertWithoutAtividadesInput = {
    update: XOR<MateriaUpdateWithoutAtividadesInput, MateriaUncheckedUpdateWithoutAtividadesInput>
    create: XOR<MateriaCreateWithoutAtividadesInput, MateriaUncheckedCreateWithoutAtividadesInput>
    where?: MateriaWhereInput
  }

  export type MateriaUpdateToOneWithWhereWithoutAtividadesInput = {
    where?: MateriaWhereInput
    data: XOR<MateriaUpdateWithoutAtividadesInput, MateriaUncheckedUpdateWithoutAtividadesInput>
  }

  export type MateriaUpdateWithoutAtividadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutMateriasNestedInput
    tarefas?: TarefaUpdateManyWithoutMateriaNestedInput
    provas?: ProvaUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateWithoutAtividadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    tarefas?: TarefaUncheckedUpdateManyWithoutMateriaNestedInput
    provas?: ProvaUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type UsuarioCreateWithoutNotificacoesInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    senha: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    tarefas?: TarefaCreateNestedManyWithoutUsuarioInput
    materias?: MateriaCreateNestedManyWithoutUsuarioInput
    eventos?: EventoCreateNestedManyWithoutUsuarioInput
    provas?: ProvaCreateNestedManyWithoutUsuarioInput
    atividades?: AtividadeCreateNestedManyWithoutUsuarioInput
    perfil?: PerfilCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutNotificacoesInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    senha: string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    tarefas?: TarefaUncheckedCreateNestedManyWithoutUsuarioInput
    materias?: MateriaUncheckedCreateNestedManyWithoutUsuarioInput
    eventos?: EventoUncheckedCreateNestedManyWithoutUsuarioInput
    provas?: ProvaUncheckedCreateNestedManyWithoutUsuarioInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutUsuarioInput
    perfil?: PerfilUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutNotificacoesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutNotificacoesInput, UsuarioUncheckedCreateWithoutNotificacoesInput>
  }

  export type UsuarioUpsertWithoutNotificacoesInput = {
    update: XOR<UsuarioUpdateWithoutNotificacoesInput, UsuarioUncheckedUpdateWithoutNotificacoesInput>
    create: XOR<UsuarioCreateWithoutNotificacoesInput, UsuarioUncheckedCreateWithoutNotificacoesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutNotificacoesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutNotificacoesInput, UsuarioUncheckedUpdateWithoutNotificacoesInput>
  }

  export type UsuarioUpdateWithoutNotificacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefas?: TarefaUpdateManyWithoutUsuarioNestedInput
    materias?: MateriaUpdateManyWithoutUsuarioNestedInput
    eventos?: EventoUpdateManyWithoutUsuarioNestedInput
    provas?: ProvaUpdateManyWithoutUsuarioNestedInput
    atividades?: AtividadeUpdateManyWithoutUsuarioNestedInput
    perfil?: PerfilUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutNotificacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefas?: TarefaUncheckedUpdateManyWithoutUsuarioNestedInput
    materias?: MateriaUncheckedUpdateManyWithoutUsuarioNestedInput
    eventos?: EventoUncheckedUpdateManyWithoutUsuarioNestedInput
    provas?: ProvaUncheckedUpdateManyWithoutUsuarioNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutUsuarioNestedInput
    perfil?: PerfilUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type TarefaCreateManyUsuarioInput = {
    id?: string
    titulo: string
    descricao?: string | null
    dataVencimento?: Date | string | null
    prioridade?: $Enums.Prioridade
    status?: $Enums.Status
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    materiaId?: string | null
  }

  export type MateriaCreateManyUsuarioInput = {
    id?: string
    nome: string
    descricao?: string | null
    cor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type EventoCreateManyUsuarioInput = {
    id?: string
    titulo: string
    descricao?: string | null
    dataInicio: Date | string
    dataFim?: Date | string | null
    diaInteiro?: boolean
    local?: string | null
    cor?: string | null
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
  }

  export type ProvaCreateManyUsuarioInput = {
    id?: string
    titulo: string
    descricao?: string | null
    data: Date | string
    local?: string | null
    nota?: number | null
    status?: $Enums.Status
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    materiaId?: string | null
  }

  export type AtividadeCreateManyUsuarioInput = {
    id?: string
    titulo: string
    descricao?: string | null
    dataVencimento?: Date | string | null
    peso?: number | null
    nota?: number | null
    status?: $Enums.Status
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    materiaId?: string | null
  }

  export type NotificacaoCreateManyUsuarioInput = {
    id?: string
    titulo: string
    mensagem: string
    lida?: boolean
    tipo?: $Enums.TipoNotificacao
    dataCriacao?: Date | string
  }

  export type TarefaUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    materia?: MateriaUpdateOneWithoutTarefasNestedInput
  }

  export type TarefaUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    materiaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TarefaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    materiaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MateriaUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefas?: TarefaUpdateManyWithoutMateriaNestedInput
    provas?: ProvaUpdateManyWithoutMateriaNestedInput
    atividades?: AtividadeUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tarefas?: TarefaUncheckedUpdateManyWithoutMateriaNestedInput
    provas?: ProvaUncheckedUpdateManyWithoutMateriaNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diaInteiro?: BoolFieldUpdateOperationsInput | boolean
    local?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diaInteiro?: BoolFieldUpdateOperationsInput | boolean
    local?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diaInteiro?: BoolFieldUpdateOperationsInput | boolean
    local?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProvaUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    materia?: MateriaUpdateOneWithoutProvasNestedInput
  }

  export type ProvaUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    materiaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProvaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    materiaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtividadeUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    materia?: MateriaUpdateOneWithoutAtividadesNestedInput
  }

  export type AtividadeUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    materiaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtividadeUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    materiaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificacaoUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    tipo?: EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TarefaCreateManyMateriaInput = {
    id?: string
    titulo: string
    descricao?: string | null
    dataVencimento?: Date | string | null
    prioridade?: $Enums.Prioridade
    status?: $Enums.Status
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuarioId: string
  }

  export type ProvaCreateManyMateriaInput = {
    id?: string
    titulo: string
    descricao?: string | null
    data: Date | string
    local?: string | null
    nota?: number | null
    status?: $Enums.Status
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuarioId: string
  }

  export type AtividadeCreateManyMateriaInput = {
    id?: string
    titulo: string
    descricao?: string | null
    dataVencimento?: Date | string | null
    peso?: number | null
    nota?: number | null
    status?: $Enums.Status
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    usuarioId: string
  }

  export type TarefaUpdateWithoutMateriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutTarefasNestedInput
  }

  export type TarefaUncheckedUpdateWithoutMateriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type TarefaUncheckedUpdateManyWithoutMateriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prioridade?: EnumPrioridadeFieldUpdateOperationsInput | $Enums.Prioridade
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type ProvaUpdateWithoutMateriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutProvasNestedInput
  }

  export type ProvaUncheckedUpdateWithoutMateriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type ProvaUncheckedUpdateManyWithoutMateriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type AtividadeUpdateWithoutMateriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutAtividadesNestedInput
  }

  export type AtividadeUncheckedUpdateWithoutMateriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type AtividadeUncheckedUpdateManyWithoutMateriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    nota?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}