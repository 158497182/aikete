// var moduleA = (function() {
//     //1、定义一个对象
//     var obj = {}
//         //2、在对象内部定义变量和方法
//     obj.flag = true;
//     obj.myFunction = function(info) {
//             console.log(info);
//         }
//         //3、将对象返回
//     return obj;
// })()
// console.log(moduleA);

moduleA.exports = {
    flag: true,
    test(a, b) {
        return a + b;
    },
    demo(a, b) {
        return a * b;
    }
}
let { test, demo, flag } = require('moduleA');
console.log(test);