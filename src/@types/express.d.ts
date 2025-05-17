declare module 'express' {
  export interface Request {
    user?: {
      email: string;
      id: string;
      nome: string;
    };
  }
}
