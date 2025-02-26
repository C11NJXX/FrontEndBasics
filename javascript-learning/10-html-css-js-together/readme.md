```
这一章学习了如何把html css js合并到同一个文件中
有一个属性还是蛮有意思的，通过document.querySelector获取到Element之后，有一个classList属性，里面有几个方法，add() 和remove()，这两个方法可以通过动态添加或者删除一个元素的class属性来实现前后css样式的变化
同时这里我学习到了一个思想就是，对于同一个element，它的class根据被使用方的不同，可以设置成不一样的，比如用于js查询的，用js-class-name，用于css定位的，可以用class-name来区别

```