import Observable from "./observer.js";

function logger(data) {
  console.log(`LOGGER 2 : ${Date.now()} ${data}`);
}

Observable.subscribe(logger);
