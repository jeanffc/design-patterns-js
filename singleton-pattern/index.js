import singletonCounter from "./singleton.js";

singletonCounter.increment(); // 1
singletonCounter.increment(); // 2
singletonCounter.increment(); // 3
singletonCounter.decrement(); // 2
console.log(singletonCounter.getCount()); // 2
