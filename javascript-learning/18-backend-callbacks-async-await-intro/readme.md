```
终于进入了一个我之前没有详细学习过的知识部分
XMLHttpRequest: This is a built-in class(Provided by JavaScript)
method:GET => get some information from the backend
```
![alt text](img/image-1.png)

```
Status Code
```
![alt text](img/image-2.png)
![alt text](img/image-3.png)

```
Backend API(Application Programming Interface)
Interface: How we interact with something
```
![alt text](img/image-4.png)

```
use browser to send GET request
```
![alt text](img/image-5.png)

```
Promises:
- better way to handle asynchronous code 
- similar to done() function => done() is provided by the test framework Jasmine
- let us wait for some code to finish before going to the next step
```

```
resolve() :
- similar to done() function
- lets us control when to go to the next step
```
![alt text](img/image-6.png)
![alt text](img/image-7.png)
![alt text](img/image-8.png)
![alt text](img/image-9.png)
```
Multiple callbacks cause a lot of nesting!!!
```
![alt text](img/image-10.png)
![alt text](img/image-11.png)
![alt text](img/image-12.png)
```
Promise.all() :
- lets us run multiple promises at the same time
- and wait for all of them to finish
```