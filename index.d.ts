declare module "@tymianekpl/LoggingLib" {
     type LogLibOptions = {
          /**
          * The category of the log. If null, the category is not printed.
          * @default null
          */
          category: string;
          /**
           * If true, the timestamp will be displayed
           * @default true
           */
          includeTimestamp: boolean;
          /**
           * The prefix of the log.
           * If null, the prefix is not printed.
           * @default ''
           */
          prefix: string;
          /**
           * Should the log be wrote to file?
           * @default true
           */
          writeToFile: boolean;
          /**
           * The file to write the log to.
           * Use $time$ to insert the current time.
           * @default "logs/$time$.log"
           */
          fileName: string;
     };


     class LoggingLib {
          constructor(options?: LogLibOptions);
          public info(message: string): void;
          public info(message: string, category: string): void;

          public warn(message: string): void;
          public warn(message: string, category: string): void;

          public error(message: string): void;
          public error(message: string, category: string): void;

          public debug(message: string): void;
          public debug(message: string, category: string): void;

          public error(message: string): void;
          public error(message: string, category: string): void;

          public success(message: string): void;
          public success(message: string, category: string): void;

          public notice(message: string): void;
          public notice(message: string, category: string): void;
     }

     export = LoggingLib;
}