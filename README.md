TypeScript Webpack Conditional Compile with Define Plugin Demo
=======================================

Webpack Define plugin可以让我们从外部改变代码逻辑分支，将结合内部插件对代码进行优化，从而在编译期就去掉了不会被运行的代码。

## 注意：

我一直有一个疑惑，webpack是怎么去替换Define Plugin中定义的key与value? 
是直接全局替换吗？如果是，则肯定可能替换掉意外的内容，比如字符串内，造成错误。

答案是“不是“。文档中规定了，key只能有某些固定的结构，比如是一个变量名，或者多个变量名用'.'结合。
见：https://webpack.js.org/plugins/define-plugin/#usage

## 原始代码：

```
$('#main').text(
  SHOW_SECRET
    ? 'yes, SHOW_SECRET! (111)'
    : 'no SHOW_SECRET! (222)'
);
```

在`webpack.config.ts`中改变`DefinePlugin`中定义的变量：

## SHOW_SECRET: true

```
jquery_1.default('#main').text(
  true
    ? 'yes, SHOW_SECRET! (111)'
    : undefined
);
```

## SHOW_SECRET: false

```
jquery_1.default('#main').text(
  false
    ? undefined
    : 'no SHOW_SECRET! (222)'
);
```

可见不仅替换了变量，也的确将走不进去的代码变成了`undefined`

```
npm install
npm run demo
```
