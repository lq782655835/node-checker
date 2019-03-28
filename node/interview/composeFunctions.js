// 函数组合运行
// 说明：实现一个方法，可将多个函数方法按从左到右的方式组合运行。
// 如composeFunctions(fn1,fn2,fn3,fn4)等价于fn4(fn3(fn2(fn1))。 示例：
// const add = x => x + 1;
// const multiply = (x, y) => x * y;
// const multiplyAdd = composeFunctions(multiply, add);
// multiplyAdd(3, 4) // 返回 13

let loopItem = (prevFn, nextFn) => (...args) => prevFn(nextFn(...args))

// compose(fn1,fn2,fn3,fn4)等价于fn1(fn2(fn3(fn4))
const compose = (...fns) => fns.reduce(loopItem);

// pipe(fn1,fn2,fn3,fn4)等价于fn4(fn3(fn2(fn1))
const pipe = (...fns) => fns.reduceRight(loopItem)

const example = pipe(
    (x, y) => x * y,
    x => x + 1
);
console.log(example(3, 4))
