const Methods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

function queryStringify(data: any) {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }

  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`, '?');
}

interface Options {
  method: string,
  timeout?: number,
  data?: object,
  headers?: object
}
export class HTTPTransport {
  get = (url: string, options: Options) => {
    this.request(url, { ...options, method: Methods.GET }, options.timeout);
  };

  post = (url: string, options: Options) => {
    this.request(url, { ...options, method: Methods.POST }, options.timeout);
  };

  put = (url: string, options: Options) => {
    this.request(url, { ...options, method: Methods.PUT }, options.timeout);
  };

  delete = (url: string, options: Options) => {
    this.request(url, { ...options, method: Methods.DELETE }, options.timeout);
  };

  request = (url: string, options: Options, timeout = 5000) => {
    const { headers = {}, method, data } = options;

    return new Promise(((resolve, reject) => {
      if (!method) {
        reject('No method');
        return;
      }

      const xhr = new XMLHttpRequest();

      xhr.open(
        method,
        data
          ? `${url}${queryStringify(data)}`
          : url,
      );

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (data) {
        // @ts-ignore
        xhr.send(data);
      } else {
        xhr.send();
      }
    }));
  };
}
