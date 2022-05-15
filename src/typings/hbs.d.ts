/* eslint-disable no-unused-vars,no-undef,no-shadow */
declare class SafeString {
  constructor(str: string);

  static toString(): string;
}

interface Logger {
  Debug: number;
  Info: number;
  Warn: number;
  Error: number;
  level: number;

  methodMap: { [level: number]: string };

  log(level: number, obj: string): void;
}

interface HandlebarsStatic {
  registerHelper(name: string, fn: Function, inverse?: boolean): void;
  registerPartial(name: string, str: any): void;
  K(): void;
  createFrame(object: any): any;
  Exception(message: string): void;
  SafeString: typeof SafeString;
  parse(input: string): boolean;
  logger: Logger;
  log(level: number, obj: any): void;
  compile(input: any, options?: any): (context: any, options?: any) => string;
}

// @ts-ignore
let Handlebars: HandlebarsStatic;

declare module 'handlebars/dist/handlebars.runtime' {
  export = Handlebars;
}

declare module '*.hbs';
