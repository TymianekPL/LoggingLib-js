declare module "@tymianekpl/LoggingLib" {
     /**
      * Options for LoggingLib
      */
     type LogLibOptions = {
          /**
          * The category of the log. If null, the category is not printed.
          * @default null
          */
          category?: string;
          /**
           * If true, the timestamp will be displayed
           * @default true
           */
          includeTimestamp?: boolean;
          /**
           * The prefix of the log.
           * If null, the prefix is not printed.
           * @default ''
           */
          prefix?: string;
          /**
           * Should the log be wrote to file?
           * @default true
           */
          writeToFile?: boolean;
          /**
           * The file to write the log to.
           * Use $time$ to insert the current time.
           * @default "logs/$time$.log"
           */
          fileName?: string;
     };


     /**
      * The LoggingLib class.
      */
     class LoggingLib {
          /**
           * Creates a new instance of the LoggingLib.
           * @param options The options for the logging library.
           */
          constructor(options?: LogLibOptions);

          /**
           * Logs a message.
           * @param message The message to log.
           */
          public info(message: string): void;
          /**
           * Logs a message.
           * @param message The message to log.
           * @param category The category of the log. If null, the category is not printed.
           */
          public info(message: string, category: string): void;

          /**
           * Logs a warning.
           * @param message The message to log.
           */
          public warn(message: string): void;
          /**
           * Logs a warning.
           * @param message The message to log.
           * @param category The category of the log. If null, the category is not printed
           */
          public warn(message: string, category: string): void;

          /**
           * Logs an error.
           * @param message The message to log.
           */
          public error(message: string): void;
          /**
           * Logs an error.
           * @param message The message to log.
           * @param category The category of the log. If null, the category is not printed
           */
          public error(message: string, category: string): void;

          /**
           * Logs a debug message.
           * @param message The message to log.
           */
          public debug(message: string): void;
          /**
           * Logs a debug message.
           * @param message The message to log.
           * @param category The category of the log. If null, the category is not printed
           */
          public debug(message: string, category: string): void;

          /**
           * Logs a success message.
           * @param message The message to log.
           */
          public success(message: string): void;
          /**
           * Logs a success message.
           * @param message The message to log.
           * @param category The category of the log. If null, the category is not printed
           */
          public success(message: string, category: string): void;

          /**
           * Logs a notice.
           * @param message The message to log.
           */
          public notice(message: string): void;
          /**
           * Logs a notice.
           * @param message The message to log.
           * @param category The category of the log. If null, the category is not printed
           */
          public notice(message: string, category: string): void;
     }

     // export LoggingLib as default
     export = LoggingLib;
}