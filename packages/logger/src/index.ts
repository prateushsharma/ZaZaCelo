import pino from "pino";

export type LogLevel = "trace" | "debug" | "info" | "warn" | "error" | "fatal";

export interface LoggerOptions {
  name: string;
  level?: LogLevel;
  pretty?: boolean;
}

export function createLogger(options: LoggerOptions): pino.Logger {
  const { name, level = "info", pretty = false } = options;

  const transport = pretty
    ? pino.transport({
        target: "pino-pretty",
        options: {
          colorize: true,
          translateTime: "HH:MM:ss.l",
          ignore: "pid,hostname",
        },
      })
    : undefined;

  return pino(
    {
      name,
      level,
      base: { service: name },
      timestamp: pino.stdTimeFunctions.isoTime,
      serializers: {
        err: pino.stdSerializers.err,
        req: pino.stdSerializers.req,
        res: pino.stdSerializers.res,
      },
      redact: {
        paths: ["*.private_key", "*.privateKey", "*.secret", "*.password", "*.apiKey"],
        censor: "[REDACTED]",
      },
    },
    transport
  );
}

export const rootLogger = createLogger({
  name: "agent-mesh",
  level: (process.env["LOG_LEVEL"] as LogLevel | undefined) ?? "info",
  pretty: process.env["NODE_ENV"] === "development",
});