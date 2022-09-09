import Observable from "./observer.js";

function logger(data) {
  console.log(`LOGGER 1 : ${Date.now()} ${data}`);
}

Observable.subscribe(logger);
