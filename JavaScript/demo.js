/*手写节流函数*/

function throttle(fn,interval = 500) {
  let timer = null;
  let firstTime = true;
  return function () {
    const args = arguments;
    const self = this;
    if (firstTime){
      fn.apply(self,args);
      firstTime = false;
      return false;
    }
    if(timer){
      return false;
    }
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      fn.apply(self,args);
    },interval)
  }
}


/*手写防抖函数*/
function debounce(fn, delay) {
  var timer = null;
  return function () {
    var context = this;
    if(timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.call(context, ...arguments);
    }, delay || 500);
  }
}
window.onresize = debounce(function() {
  console.log('window onresize end');
}, 500)


/*
* 对象当作函数参数
* */
function testPerson(person) {
  person.age = 52;
  person = {
    name: '李四',
    age: 18
  }
  return person;
}
var p1 = {
  name: '张三',
  age: 23
}
var p2 = testPerson(p1);
console.log(p1.age);  // 输出52
console.log(p2.age);  // 输出18

/*
* 判断数组的方法
* */

/*1、instanceof 运算符
* 这个运算符可以判断一个对象是否是在其原型链上原型构造函数中的属性
* */
let arr = [];
console.log(arr instanceof Array); //true

/*
* 2、constructor
* 这个属性是返回对象相对应的构造函数。
* */
let arr = [];
console.log(arr.constructor === Array)

/*
* 3、对象原型方法
* */
Object.prototype.toString.call();
let arr = [];
Object.prototype.toString.call(arr); // "[object Array]"

/*
* 4、数组自带的isArray方法
* */
let arr = [];
console.log(Array.isArray(arr)); //true

/*
* 5、原型方法 __proto__
* */
arr.__proto__ === Array.prototype // true
Array.prototype.isPrototypeOf(arr) // true


/*
* 对象转原始类型
* */
var a = {
  value: 0,
  valueOf() {
    this.value++;
    console.log("这时候的value值是",value)
    return this.value;
  }
}
if(a==1 && a==2 && a==3) {
  console.log('true'); // 输出true
}



/*
* 代理设置
* */

