这一章就是把之前的知识点用到一个纯HTML CSS项目里
加入了很多JS代码来实现交互性，但看来还是需要后续的知识来完善的，很多的功能都没有实现
```
比较新的知识点，比如一个HTML Attribute叫 data attribute
直接在html标签里加入 以下列格式命名
必须以这个起始
data-
后续用kebab-name
data-kebab-name
后续访问的时候(kebab-name 自动转换成camo case => kebabName)
htmlElement.dataset.kebabName
```