import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";
import { NextFunction, Request, Response } from "express";
import * as console from "node:console";

@Middleware({ type: "before" })
export class HttpRequestLogger implements ExpressMiddlewareInterface {
  use(req: Request, _res: Response, next: NextFunction): void {
    const { originalUrl, method, body } = req;

    console.log(
      `Received request: method=${method} path=${originalUrl}`,
      JSON.stringify(body),
    );

    next();
  }
}
