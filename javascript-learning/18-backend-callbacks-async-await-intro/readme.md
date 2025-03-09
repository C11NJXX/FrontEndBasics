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

```
fetch() : better way to make HTTP requests
```

```
!!!IMPORTANT
Async Await:
even better way to handle asynchronous code
```

```
Async await is a shortcut for promises
```

```
async = makes a function return a promise
```
![alt text](img/image-13.png);
![alt text](img/image-14.png)

```
The point of async feature is that async lets us ues await
```

```
await:
lets us wait for a promise to finish, 
before going to the next line.
```
![alt text](img/image-15.png)
![alt text](img/image-16.png)
```
we can only use await, when we're inside an async function.
But the closest function has to be async function.
```
![alt text](img/image-17.png)
```
async await can only be used with promises.
```

```
It's easier to save value
```
![alt text](img/image-18.png)