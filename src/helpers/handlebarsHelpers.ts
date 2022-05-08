import Handlebars from 'handlebars';

Handlebars.registerHelper('ifEquals', function A(
  arg1: string,
  arg2: string,
  options: { fn: Function, inverse: Function },
) {
  return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
});
