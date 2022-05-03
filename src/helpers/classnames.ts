function classnames(...names: (string | Record<string, boolean>)[]) {
  const className: string[] = [];
  names.forEach((name) => {
    if (!name) return;

    if (typeof name === 'string') {
      className.push(name);
    } else if (typeof name === 'object') {
      Object.keys(name!).forEach((key) => {
        if ((name as Record<string, boolean>)[key]) {
          className.push(key);
        }
      });
    }
  });

  return className.join(' ');
}

export default classnames;
