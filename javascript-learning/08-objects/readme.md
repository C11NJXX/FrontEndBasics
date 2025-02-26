这一章的内容可谓是多，也有很多我没学习过的，或者是不太熟练的
截了很多碎片的图，现在记在这里
```
object : An object groups multiple values together and let us use multiple values together
[] : square brackets
bracket Notation : 这个学过，但是这里加深了印象，像一些property的命名带有特殊符号比如dash(-),会被视作是minus
                    使用['property-name'] : value 和 object.['property-name]'来访问
Built in Objects: objects(like JSON,LocalStorage) that provided by the language
JSON: JavaScript Object Notation()
JSON.stringify() JSON.Parse()
localStorage.setItem(key,value) localStorage.getItem(key) localStorage.removeItem;
Method : function inside object(在对象内的函数叫方法)
对象实际是创建了reference
destructing : 解构赋值
Shorthand property:这个还是蛮新颖的，如果变量名和后面的变量名相同，写一个就够了 propertyName : propertyName  => propertyName
Shorthand method: 正常写方法: obj{
    method : function fun() {
        ...
    }
    使用Shorthand method :
    obj {
        fun() {
            ...
        }
    }
区别null和undefined
null = intentionally want something to be empty;
Auto boxing:自动装箱
boxing does not work with null and undefined

}
```