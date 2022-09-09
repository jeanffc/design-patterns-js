import "./logger1.js";
import "./logger2.js";
import Observer from "./observer.js";

Observer.notify("✨ New data ✨");

setTimeout(() => {
  Observer.notify("✨ New data after timeout ✨");
}, 1000);
