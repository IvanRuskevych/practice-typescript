import { ExpressMiddlewareInterface } from "routing-controllers";
import { Request, Response, NextFunction } from "express";

export class HTTPResponseLogger implements ExpressMiddlewareInterface {
  use(req: Request, res: Response, next: NextFunction): void {
    const { originalUrl, method } = req;
    const { statusCode } = res;

    console.log(
      `Response request: method=${method} path=${originalUrl} statusCode=${statusCode}`,
    );

    next();
  }
}
