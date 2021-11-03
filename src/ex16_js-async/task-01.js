function httpRequest(url, method = 'GET', body, enctype = 'application/json; charset=utf-8') {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.open(method, url);
    request.timeout = 30000;
    request.ontimeout = function () {
      // eslint-disable-next-line
      reject('Out of time');
    };

    if (method === 'GET') {
      request.send();
    } else {
      request.send(body);
      request.setRequestHeader('Content-Type', enctype);
    }

    request.onreadystatechange = function () {
      if (this.readyState !== 4) {
        return;
      }

      if (this.status >= 200 && this.status <= 299) {
        resolve(this.responseText);
      }
      // eslint-disable-next-line
      reject(`${this.status}: ${this.statusText}`);
    };
  });
}

module.exports = httpRequest;
