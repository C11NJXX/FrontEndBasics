这一章学习了其他两种定位
absolute 和 relative
和fixed相比
fixed = placed in the browser window
absolute = placed on the page
![alt text](diff-page-browserWindow.png)

一般来说absolute都是和fixed或者relative配合的，这样可以在其父容器内修改位置

z-index
默认的static都是z-index = 0
然后当属性设置成fixed或者relative之后，层级会由html代码先后顺序决定，后面的覆盖前面的，z-index也越大
可以通过手动修改实现理想的覆盖