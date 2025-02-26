这一章也是基本上都学过，不过有几个知识点还是可以记录一下的
```
 区别 == 和 === : double equals converts both values into same type first and then compare
 更新了一下Orders of operations:
 1. (...)
 2. * /
 3. + -
 4. comparison operators
 5. logical operators

 var为什么被淘汰: var doesn't really follow the rule of scope

 Falsy values:
 0 '' NaN undefined(something that doesn't have a value) null
 对于undefined 使用let定义一个变量后不赋值就是undefined，但是使用const必须手动赋值undefined，否则就会报错

 Shortcuts for If-Statements:
 1.Ternary Operator ? : 
    利用三元(ternary)运算，当根据问号左边的表达式的布尔值来决定执行哪个分支
 2.Guard Operator && 
 这个命名还是蛮有意思的，防守，当该运算符左侧的值为假的时候，不会让右侧的语句执行，相当于一个Stop early或者short circuit evaluation短路评估
 3. Default Operator || 
 这个也是利用了这个特性，保底一个值为真，那么这个值可以放在末尾，保证至少有一个默认值为真，并可以被存储

```