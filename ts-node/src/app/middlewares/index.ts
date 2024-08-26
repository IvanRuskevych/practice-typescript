import { HttpRequestLogger } from "./HTTPRequestLogger";
import { HTTPResponseLogger } from "./HTTPResponseLogger";

type Middleware = typeof HttpRequestLogger | typeof HTTPResponseLogger;

const middlewares = <Middleware[]>[HttpRequestLogger, HTTPResponseLogger];

export { middlewares };
