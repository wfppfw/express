### 安装

```sh
mkdir myapp
cd myapp

npm init

npm install express --save

node hello.js
```

例子

```js
// example hello.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hello,world');
});

app.listen(port, () => {
  console.log('Example app listening on');
});
```

生成器

```sh
npx express-generator
express -h
express  myapp
npm install
npm start
```

基本路由

```js
// app.METHOD(PATH, HANDLER) 基本路由
app.get('/', (req, res) => {
  res.send('hello,world');
});
app.post('/', function (req, res) {
  res.send('Got a POST request');
});
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});
```

静态文件

```js
app.use('/static',express.static('public'))； //访问public下面的文件,路径带上/static
// http://localhost:3000/static/images/kitten.jpg
// http://localhost:3000/css/style.css
// http://localhost:3000/js/app.js
// http://localhost:3000/images/bg.png
// http://localhost:3000/hello.html
```
