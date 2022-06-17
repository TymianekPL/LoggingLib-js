const fs = require('fs');
const path = require('path');

class LoggingLib {
     constructor(options = {
          category: null,
          includeTimestamp: false,
          prefix: '',
          writeToFile: true,
          filePath: "logs/$time$.log",
     }) {
          this.options = options || {};
          this.options.includeTimestamp = this.options.includeTimestamp || false;
          this.options.writeToFile = this.options.writeToFile || true;
          this.options.filePath = this.options.filePath || "logs/$time$.log";
          this.options.prefix = this.options.prefix || '';
          this.options.category = this.options.category || null;

          this.#initializedTimeStamp = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '').replace(/:/g, '.');

          if (this.options.writeToFile && this.options.filePath == null)
               this.options.filePath = "logs/$time$.log";
     }

     #initializedTimeStamp;

     static get ascii() {
          return {
               cyan: "\x1b[36m",
               green: "\x1b[32m",
               red: "\x1b[31m",
               yellow: "\x1b[33m",
               reset: "\x1b[0m",
               bold: "\x1b[1m",
               dim: "\x1b[2m",
               blue: "\x1b[34m",
          };
     };

     info(msg, category = null) {
          category = category || this.options.category != null ? `${LoggingLib.ascii.dim}${this.options.category}${LoggingLib.ascii.reset}/` : '';
          console.info(`${this.prefix()}[${category}${LoggingLib.ascii.blue}INFO${LoggingLib.ascii.reset}] ${msg}`);

          this.appendLog(`${this.logPrefix()}[${this.options.category != null ? `${this.options.category}/` : ''}INFO] ${msg}`);
     }

     error(msg, category = null) {
          category = category || this.options.category != null ? `${LoggingLib.ascii.dim}${this.options.category}${LoggingLib.ascii.reset}/` : '';
          console.error(`${this.prefix()}[${category}${LoggingLib.ascii.red}ERROR${LoggingLib.ascii.reset}] ${msg}`);

          this.appendLog(`${this.logPrefix()}[${this.options.category != null ? `${this.options.category}/` : ''}ERROR] ${msg}`);
     }

     warn(msg, category = null) {
          category = vthis.options.category != null ? `${LoggingLib.ascii.dim}${this.options.category}${LoggingLib.ascii.reset}/` : '';
          console.warn(`${this.prefix()}[${category}${LoggingLib.ascii.yellow}WARN${LoggingLib.ascii.reset}] ${msg}`);

          this.appendLog(`${this.logPrefix()}[${this.options.category != null ? `${this.options.category}/` : ''}WARN] ${msg}`);
     }

     debug(msg, category = null) {
          category = category || this.options.category != null ? `${LoggingLib.ascii.dim}${this.options.category}${LoggingLib.ascii.reset}/` : '';
          console.debug(`${this.prefix()}[${category}${LoggingLib.ascii.cyan}DEBUG${LoggingLib.ascii.reset}] ${msg}`);

          this.appendLog(`${this.logPrefix()}[${this.options.category != null ? `${this.options.category}/` : ''}DEBUG] ${msg}`);
     }

     success(msg, category = null) {
          category = category || this.options.category != null ? `${LoggingLib.ascii.dim}${this.options.category}${LoggingLib.ascii.reset}/` : '';
          console.info(`${this.prefix()}[${category}${LoggingLib.ascii.green}SUCCESS${LoggingLib.ascii.reset}] ${msg}`);

          this.appendLog(`${this.logPrefix()}[${this.options.category != null ? `${this.options.category}/` : ''}SUCCESS] ${msg}`);
     }

     notice(msg, category = null) {
          category = category || this.options.category != null ? `${LoggingLib.ascii.dim}${this.options.category}${LoggingLib.ascii.reset}/` : '';
          console.info(`${this.prefix()}[${category}${LoggingLib.ascii.bold}${LoggingLib.ascii.blue}NOTICE${LoggingLib.ascii.reset}] ${msg}`);

          this.appendLog(`${this.logPrefix()}[${this.options.category != null ? `${this.options.category}/` : ''}NOTICE] ${msg}`);
     }

     prefix() {
          let prefix = '';
          if (this.options.prefix)
               prefix += `${this.options.prefix} `;
          if (this.options.includeTimestamp)
               prefix += `[${LoggingLib.ascii.dim}${new Date().toLocaleTimeString()}${LoggingLib.ascii.reset}] `;

          return prefix;
     }

     logPrefix() {
          let prefix = '';
          if (this.options.prefix)
               prefix += `${this.options.prefix} `;
          if (this.options.includeTimestamp)
               prefix += `[${new Date().toLocaleTimeString()}] `;

          return prefix;
     }

     appendLog(text) {
          if (this.options.writeToFile) {
               let filePath = this.options.filePath;
               filePath = filePath.replace('$time$', this.#initializedTimeStamp);

               // directory exists?
               if (!fs.existsSync(path.dirname(filePath))) {
                    fs.mkdirSync(path.dirname(filePath));
               }

               // file exists?
               if (!fs.existsSync(filePath)) {
                    fs.writeFileSync(filePath, '');
               }

               fs.appendFile(filePath, `${text}\n`, (err) => {
                    if (err) throw err;
               });
          }
     }
}

module.exports = LoggingLib;
module.exports.default = LoggingLib;