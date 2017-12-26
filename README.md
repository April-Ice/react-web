# April-Ice
综合运用了react+react-router+webpack+es2015。  React版本为15.4.1。

模板运用组件化的思想，以及样式的模块化（cssModules)。


1. 开发模式————有热替换功能，可以将错误信息捕捉并高亮显示到页面。
2. 生产模式————将你的资源进行打包，压缩等。

## 本模板用到的 __所有包__ 的相关简要说明

####[react.js](https://facebook.github.io/react/index.html) [必需]
> React是用来构建用户界面的js库，属于view层。
  它有两大特点：1，单向数据绑定；2，虚拟DOM
  安装：`npm install --save react`

---

####[react-dom.js](https://npm.taobao.org/package/react-dom) [必需]
> react.js 主要用来创建元素和组件，当你想在html中渲染你的组件的时候，
你还得需要react-dom.js。同时，react-dom.js依赖于react.js。
安装：`npm install --save react-dom`

---

####[webpack](https://npm.taobao.org/package/react-dom) [必需]
> 于人而言，尤其是当开发大型项目时，每个包每个模块每个静态资源都应尽可能的条理清晰的罗列出来，
这样方便我们开发；于机器而言，就不需要这么“条理清晰”了，此时应最大限度的压缩优化这些资源，
如何把这些资源模块“杂糅”在一起，这就是webpack要做的。
安装：`npm install --save-dev webpack`
备注：webpack 2.0 即将发布
webpack 最基本的启动webpack命令
webpack -w 提供watch方法，实时进行打包更新
webpack -p 压缩混淆脚本，这个非常非常重要！
webpack -d 生成map映射文件，告知哪些模块被最终打包到哪里了,方便调试
webpack --progress 显示打包进程，百分比显示
webpack --config XXX.js //使用另一份配置文件（比如webpack.config2.js）来打包
webpack --colors 输出结果带彩色，比如：会用红色显示耗时较长的步骤
webpack --profile 输出性能数据，可以看到每一步的耗时
webpack  --display-error-details 方便出错时能查阅更详尽的信息（比如 webpack 寻找模块的过程），从而更好定位到问题。
webpack --display-modules 默认情况下 node_modules 下的模块会被隐藏，加上这个参数可以显示这些被隐藏的模块
[webpack入门配置](https://segmentfault.com/a/1190000005089993)

---

####[webpack-dev-middleware](https://npm.taobao.org/package/webpack-dev-middleware) [开发需要]
> 它是一个用来组织包装webpack使其变成中间件的容器。（中间件的用途就是在输入和输出的过程中加工的一种手段）
webpack本身只负责打包编译，webpack-dev-server是协助我们开发的服务器，这个服务器底层是靠express操作的。
我们的页面如何在这个服务器上更新呢，首先是取得webpack打包好的资源，这就需要在`请求`到`响应`的过程中通过
express的中间件取得资料， 而方法就是通过webpack-dev-middleware来实现。
这个中间件只在开发环境中使用，切忌用在生产环境中。
安装：`npm install --save-dev webpack-dev-middleware`

####这个中间件有两点好处：

1. 直接在内存中操作文件，而非磁盘中。这样处理速度更快。
1. 在监视（watch）模式下，如果文件改变，中间件立即停止提供之前的bundle，并且会延迟
请求回应，直到新的编译完成，如此一来，文件修改后，你可以直接刷新页面，而不用等待编译。

---

####[webpack-hot-middleware](https://npm.taobao.org/package/webpack-hot-middleware) [开发需要]
>  `webpack-dev-middleware` + `webpack-hot-middleware` 即可让我们用 `express`
定制一个有热替换功能的 `webpack` 开发服务器。
安装：`npm install --save-dev webpack-hot-middleware`

---

####[babel-core](https://npm.taobao.org/package/babel-core) [必需]
> Babel是一个转换编译器，它能将ES6转换成可以在浏览器中运行的代码。
作为下一代javascript语言标准，请拥抱ES6(ES2015)吧！`babel-core` 是Babel编译器的核心。
安装：`npm install --save-dev babel-core`

---

####[babel-loader](https://npm.taobao.org/package/babel-loader) [必需]
> loader 用于转换应用程序的资源文件，他们是运行在nodejs下的函数，
使用参数来获取一个资源的来源并且返回一个新的来源针对webpack的babel加载器。
`babel-loader` 就是告诉webpack去加载我们写的使用了es6语法的js文件。
安装：`npm install --save-dev babel-loader`

---

#### [babel-runtime](http://babeljs.io/docs/plugins/transform-runtime/#why) [强烈推荐]
> Babel默认只转换新的JavaScript语法，而不是转换新的API，
比如Iterator、Generator、Set、Maps、Proxy、Reflect，Symbol、Promise等全局对象，
以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。
举例来说，ES6在Array对象上新增了Array.from方法。
[延伸阅读,强烈推荐](https://segmentfault.com/a/1190000006930013?utm_source=tuicool&utm_medium=referral)
安装：`npm install --save babel-runtime`

#### [babel-plugin-transform-runtime](http://babeljs.io/docs/plugins/transform-runtime/#why) [开发需要]
> 和上面的 `babel-runtime` 搭配使用
安装：`npm install --save-dev babel-plugin-transform-runtime`

####[babel-preset-latest](http://babeljs.io/docs/plugins/preset-latest/) [必需]
> es2015,es2016,es2017转码规则。为所有es6插件所设置的babel预设，
有了它，诸如，es6的箭头函数，类，等等语法特性才能向es5转换。
安装：`npm install --save-dev babel-preset-latest`

---

####[babel-preset-react](https://github.com/babel/babel) [必需]
> react转码规则。为所有react插件所设置的babel预设。有了它，才能识别转译jsx语法等。
安装：`npm install --save-dev babel-preset-react`

---

####[react-hot-loader](https://npm.taobao.org/package/react-hot-loader) [开发需要]
> 可以使react组件在浏览器上实时更新而无需手动刷新。
安装：`npm install --save-dev react-hot-loader@3.0.0-beta.3`
备注：用的是3.0最新版本，这版本很强大。

---

####[babel-preset-stage-X](https://npm.taobao.org/package/babel-preset-stage-0) [必需]
> ES7不同阶段语法提案的转码规则（共有4个阶段），选装**一个**
在进行实际开发时，可以根据需要来设置对应的stage。如果省事懒得折腾，一般设置为stage-0即可。
npm install --save-dev babel-preset-stage-0
npm install --save-dev babel-preset-stage-1
npm install --save-dev babel-preset-stage-2
npm install --save-dev babel-preset-stage-3
[stage-X详解](http://www.cnblogs.com/flyingzl/p/5501247.html)

---

####[redbox-react](https://github.com/KeywordBrain/redbox-react) [开发需要]
> 这个插件将会以一个非常优雅的方式（看demo演示）将你的错误呈现在页面上，这样就省去了查看console.log的麻烦；

---

####[html-webpack-plugin](https://npm.taobao.org/package/html-webpack-plugin) [小工具]
> 一个服务于webpack打包资源的简易的HTML文件生成器,它可以动态生成HTML
之所以要动态生成，主要是希望webpack在完成前端资源打包以后，自动将打包后的资源路径和版本号写入HTML中，达到自动化的效果
安装：`npm install --save-dev html-webpack-plugin`

---

####[express](https://npm.taobao.org/package/express) [开发需要]
> 基于 Node.js 平台，快速、开放、极简的 web 开发框架。
在这里用于配置开发服务器。
安装：`npm install --save-dev express`

---

####[rimraf](https://npm.taobao.org/package/rimraf) [小工具]
> 一个基于node的深层删除工具（楼主曾经用window自带的删除命令删node_modules花了十分钟，用这个删十秒搞定！）
安装：`npm install --save-dev rimraf`

---
---
---
---


####[css-loader](https://npm.taobao.org/package/css-loader) [必需]
> css-loader会遍历css文件，并将其处理。
  安装：`npm install css-loader --save-dev`

---

####[style-loader](https://npm.taobao.org/package/style-loader) [必需]
> style-loader会把所有的样式插入到你页面的style标签中。
  安装：`npm install style-loader --save-dev`

---

####[postcss-loader](https://npm.taobao.org/package/postcss) [强烈推荐]
> PostCSS是一个允许你使用各种JS插件来转换CSS的工具，这些插件可以优化你的CSS，
并且支持变量，混合，内嵌图片，甚至转译下一代CSS！其中，PostCSS中的 [Autoprefixer] (https://github.com/postcss/autoprefixer)
安装：`npm install postcss-loader --save-dev`

[PostCSS深入学习](http://www.w3cplus.com/PostCSS/postcss-deep-dive-what-you-need-to-know.html)

---

####[precss](https://npm.taobao.org/package/precss) [强烈推荐]
> 这是PostCSS插件，允许你在CSS文件中使用sass那样的语法，比如变量啦，混合啦，条件语句啦
安装：`npm install precss --save-dev`

---

####[postcss-scss](https://npm.taobao.org/package/postcss-scss) [推荐]
> 这是PostCSS插件，允许你使用scss的语法写样式，其实这个在precss中已经实现，但是捏，在
css中写这些东西webstorm并不会报各种错误（虽然运行没问题），为了不看到那密密麻麻的红色标注错误
所以用了这个模式，你可以把你的样式文件后缀改为 `.scss` 了，当然你也可以不用，不影响的，就是难看。
安装：`npm install postcss-scss --save-dev`

---

####[rucksack-css](https://simplaio.github.io/rucksack/) [强烈推荐]
> Rucksack 是一款有趣的CSS工具，让CSS的开发过程更加有趣了。
Rucksack 是基于PostCSS构建的，模块化设计，没有冗余，运行起来飞快。
由于它是基于PostCSS来构建的，所以它同其他的CSS处理工具都能很好的兼容
安装：`npm install rucksack-css --save-dev`
备注：安装到此，我们的css的已经可以进行各种风骚的写法了，具体写法请参考
[rucksack语法](https://simplaio.github.io/rucksack/)，[precss语法，类似于scss](https://github.com/jonathantneal/precss),[cssModules语法](https://css-modules.github.io/webpack-demo/)语法很简单，不难，别被吓倒了。
然而技术是激进的，很多IDE并没有缓过神儿来支持这些新兴的css语法，比如我的用webstorm（目前版本 2016.2）就不支持，
对这些新兴语法直接红色错误标注，但是插件运行良好，仅仅是有错误提示而已，希望后续版本能够支持这些语法，
如果你实在讨厌看到这些红色错误标注，我是说在webstorm中，你可以按 `Ctrl + Alt + Shift + H`,在弹出
的窗口中，在 Highlighting Level 选项中，将游标拉到最左侧，然后那些烦人的红色标注就消失了（其实就是忽略所有的错误。。）
这是我自己的方式，简单粗暴。当然也有国外网友的方法，你[可以看下](https://youtrack.jetbrains.com/issue/WEB-16601)

---

####[autoprefixer](https://npm.taobao.org/package/autoprefixer) [强烈推荐]
> 解析CSS并添加浏览器前缀，添加规则遵循[Can I Use](http://caniuse.com/)
安装：`npm install autoprefixer --save-dev`

---

####[classnames](https://github.com/JedWatson/classnames) [强烈推荐]
> classnames 是一个简单的 JavaScript 工具包用来有条件的将不同的 classNames 联合在一起。
安装：`npm install react-css-modules --save-dev`

---

####[json-loader](https://github.com/webpack/json-loader) [必需]
> webpack用来解析json文件的加载器。
安装：`npm install json-loader --save-dev`

---

####[url-loader](https://github.com/webpack/url-loader) [必需]
> 这个加载器的工作方式很像file-loader。只是当文件大小小于限制值时，它可以返回一个Data Url。限制值可以作为查询参数传入。默认不限制。
安装：`npm install url-loader --save-dev`

---

####[file-loader](https://github.com/webpack/file-loader) [必需]
> 修改文件名，放在输出目录下，并返其对应的 url .默认修改后的文件名，是文件内容的MD5哈希串。
你也可以自定义文件名。
安装：`npm install file-loader --save-dev`

---

####[react-addons-css-transition-group](https://facebook.github.io/react/docs/animation.html#getting-started) [如果你需要来点React动画]
> ReactCSSTransitionGroup是基于ReactTransitionGroup的，在React组件进入或者离开DOM的时候，它是一种简单地执行CSS过渡和动画的方式。
安装：`npm install react-addons-css-transition-group --save-dev`

---

####[browser-sync](https://npm.taobao.org/package/browser-sync) [开发需要]
> 使你可以在电脑上开发，手机上同步测试
安装：`npm install browser-sync --save-dev`

---

####[connect-history-api-fallback](https://github.com/bripkens/connect-history-api-fallback) [开发需要]
> Middleware to proxy requests through a specified index page, useful for Single Page Applications that utilise the HTML5 History API.
安装：`npm install connect-history-api-fallback --save-dev`

---

####[cross-env](https://npm.taobao.org/package/cross-env) [开发需要]
> 即设置跨平台的环境变量运行命令
安装：`npm install cross-env --save-dev`

---

####[babel-cli](http://www.ruanyifeng.com/blog/2016/01/babel.html) [开发需要]
> 命令行转码
安装：`npm install babel-cli --save-dev`

---

####[npm-run-all](https://npm.taobao.org/package/npm-run-all) [开发需要]
> 一个命令工具，可以并行运行多个 npm-scripts

```
# 继发执行
$ npm-run-all build:html build:js
# 等同于
$ npm run build:html && npm run build:js

# 并行执行
$ npm-run-all --parallel watch:html watch:js
# 等同于
$ npm run watch:html & npm run watch:js

# 混合执行
$ npm-run-all clean lint --parallel watch:html watch:js
# 等同于
$ npm-run-all clean lint
$ npm-run-all --parallel watch:html watch:js

# 通配符
$ npm-run-all --parallel watch:*
```

安装：`npm install npm-run-all --save-dev`

---
---
---
---

#### [react-router](https://github.com/reactjs/react-router) [必需]
> `React Router` 一个针对 `React` 而设计的路由解决方案、可以友好的帮你解决 `React components` 到 `URl` 之间的同步映射关系。  
推荐教程 [React Router 使用教程](http://www.ruanyifeng.com/blog/2016/05/react_router.html)  
安装：`npm install react-router --save`

---

#### [antd-mobile](http://mobile.ant.design/) [强烈推荐]
> antd的移动端版本  
  安装：`npm install antd-mobile --save`

---

#### [rc-form](http://mobile.ant.design/) [搭配antd-mobile必需]
> antd-mobile 表单组件需要  
  安装：`npm install rc-form --save-dev`

---

#### [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) [搭配antd-mobile必需]
> Modular antd build plugin for babel，让antd-mobile 中模块组件的引入实现**按需加载**  
  安装：`npm install babel-plugin-import --save-dev`

---

#### [postcss-pxtorem](https://npm.taobao.org/package/postcss-pxtorem) [antd-mobile高清方案需要]
> 顾名思义，就是将px转化为rem的小插件，实际生产中，我们完全可以直接写rem,这个小插件就是为antd-mobile 的样式服务的。  
使用方法参照[高清方案](https://github.com/ant-design/ant-design-mobile/wiki/antd-mobile-0.8%E9%AB%98%E6%B8%85%E6%96%B9%E6%A1%88%E5%AE%9E%E8%B7%B5),另外特别指出，在此基础上还需在webpack.config.js上配置
```
{
    test: /\.css$/,
    include: /node_modules/,
    loader: 'style!css!postcss'
}
```
安装：`npm install babel-plugin-antd --save-dev`

---

#### [react-cookie](https://github.com/thereactivestack/react-cookie)
>操作cookie
    安装：npm install react-cookie --save
    # 例子:

```
    import { Component } from 'react';
    import cookie from 'react-cookie';

    import LoginPanel from './LoginPanel';
    import Dashboard from './Dashboard';

    export default class MyApp extends Component {
      componentWillMount() {
        this.state =  { userId: cookie.load('userId') };
      }

      onLogin(userId) {
        this.setState({ userId });
        cookie.save('userId', userId, { path: '/' });
      }

      onLogout() {
        cookie.remove('userId', { path: '/' });
      }

      render() {
        if (!this.state.userId) {
          return <LoginPanel onSuccess={this.onLogin.bind(this)} />;
        }

        return <Dashboard userId={this.state.userId} />;
      }
    }
```
---
#### [whatwg-fetch](https://github.com/github/fetch) [fetch]
> 使fetch可以兼容IE  在引用的时候需要
  安装：`npm install whatwg-fetch --save`

**如果要兼容IE** 则必须做以下步骤

#### [es6-promise](https://github.com/stefanpenner/es6-promise) [搭配fetch兼容IE必须]
> 使fetch可以兼容IE  在引用的时候需要
  安装：`npm install es6-promise --save`
  use:
  ```
  //在文件开头必须按照如下顺序引入
  import ES6Promise from 'es6-promise';
  ES6Promise.polyfill();
  import 'whatwg-fetch'
  ```

---
#### [browserHistory](http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu) [路由方式]
> 使browserHistory的路由方式
  如果设为browserHistory，浏览器的路由就不再通过Hash完成了，而显示正常的路径example.com/some/path，背后调用的是浏览器的History API。
  但是，这种情况需要对**[服务器改造](https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#configuring-your-server)**。否则用户直接向服务器请求某个子路由，会显示网页找不到的404错误。

  ```
  //链接外js控制跳转
  import { browserHistory } from 'react-router';
  ...
  browserHistory.push(...);
  ```

---
#### [fixed-data-table-2](http://schrodinger.github.io/fixed-data-table-2/getting-started.html) [table 列表, 访问需要翻墙!!!!]
> facebook 提供的列表组件， 具体使用参考官方提供的例子

    注意：官方安装包没有右侧固定属性 rightFixed={true} ，在1.0版本后才会有，解决办法是使用这个fork版的包：https://github.com/lsentkiewicz/fixed-data-table-2

    配合react-dimensions 组件可以实现自适应宽、高的table列表
   安装： npm install fixed-data-table-2 --save

   引入：
        import {Table, Column, Cell} from 'fixed-data-table-2'

---

#### [react-dimensions](https://github.com/digidem/react-dimensions) [监听窗口变化]
> 提供一个监听窗口变化的增强组件
    安装：npm install react-dimensions --save
    例子：
```
export default Dimensions({
    getHeight: function(element) {
        return window.innerHeight - 200;
    },
    getWidth: function(element) {
        //window.innerWidth 窗口的宽度  widthOffset：根据页面需要减去的一个宽度
        let widthOffset = 310;
        return window.innerWidth - widthOffset;
    },
    //margin-left 需要写成 marginLeft
    containerStyle: {marginLeft: 5, marginRight: 5}
})(FlexGrow);

```
---
#### [react-treeview](https://github.com/chenglou/react-treeview) [树形结构]
> 一个树形组件的包

>   安装：npm install react-treeview
    例子：
```
const data = {
    name: 'root',
    toggled: true,
    children: [
        {
            name: 'parent',
            children: [
                { name: 'child1' },
                { name: 'child2' }
            ]
        },
        {
            name: 'loading parent',
            loading: true,
            children: []
        },
        {
            name: 'parent',
            children: [
                {
                    name: 'nested parent',
                    children: [
                        { name: 'nested child 1' },
                        { name: 'nested child 2' }
                    ]
                }
            ]
        }
    ]
};
///////////
<div className='treeBox'>
  <Treebeard
    data={data}
    onToggle={this.onToggle}
  />
</div>

```
---
#### [react-modal ](http://reactjs.github.io/react-modal/) [监听窗口变化]
> 提供一个监听窗口变化的增强组件
    安装：npm install --save react-modal
    例子：
```
import Modal from 'react-modal';

getInitialState: function() {
    return { modalIsOpen: false };
  },
 
  openModal: function() {
    this.setState({modalIsOpen: true});
  },
 
  afterOpenModal: function() {
    // references are now sync'd and can be accessed. 
    this.refs.subtitle.style.color = '#f00';
  },
 
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

//在render和return中间定义alert框样式
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

<button onClick={this.openModal}>Open Modal</button>
<Modal
    isOpen={this.state.modalIsOpen}
    onAfterOpen={this.afterOpenModal}
    onRequestClose={this.closeModal}
    style={customStyles}
    contentLabel="Example Modal"
>
    <h2 ref="subtitle">Hello</h2>
    <button onClick={this.closeModal}>close</button>
    <div>I am a modal</div>
    <form>
    <input />
    <button>tab navigation</button>
    <button>stays</button>
    <button>inside</button>
    <button>the modal</button>
    </form>
</Modal>
```

---
#### [antd： Ant Design of React ](https://ant.design/docs/react/introduce-cn) [蚂蚁金服 组件]
> 这里是 Ant Design 的 React 实现，开发和服务于企业级后台产品。
    安装：npm install antd --save

    配合 babel-plugin-import 实现js 和 css 的按需加载


---
#### [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) [按需加载]
> 实现 css  和  js 的按需加载
    安装：npm install babel-plugin-import --save-dev

    使用：
        1、配置.babelrc 文件
        ```
        // .babelrc or babel-loader option
        {
          "plugins": [
            ["import", { libraryName: "antd", style: "css" }] // `style: true` 会加载 less 文件；`style: css` 加载 css 文件
          ]
        }
        ```
        2、然后只需从 antd 引入模块即可，无需单独引入样式。等同于下面手动引入的方式。
        ```
        // babel-plugin-import 会帮助你加载 JS 和 CSS
        import { DatePicker } from 'antd';
        ```

        手动引入示例,等同于上面使用babel-plugin-import加载的方式
        ```
        import DatePicker from 'antd/lib/date-picker';  // 加载 JS
        import 'antd/lib/date-picker/style/css';        // 加载 CSS
        // import 'antd/lib/date-picker/style';         // 加载 LESS
        ```
#### react-highlight
> npm install react-highlight --save
  var Highlight = require('react-highlight');
  <link rel="stylesheet" href="/path/to/styles/theme-name.css">
  地址：https://github.com/akiran/react-highlight

  import Highlight from 'react-highlight';
  import 'highlight.js/styles/tomorrow-night.css'
  <Highlight search="brown">code</Highlight>

#### react-echarts
> npm install echarts --save
  npm install --save echarts-for-react
  import ReactEcharts from 'echarts-for-react';
  <ReactEcharts
    option={option}
    style={{height: '400px', width: '100%'}}
    className={'react_for_echarts'}
  />

#### react-clipboard  一键复制
  npm install --save react react-copy-to-clipboard
  import {CopyToClipboard} from 'react-copy-to-clipboard';
  <CopyToClipboard text={this.state.code} onCopy={() => this.setState({copied: true})}>
      <Button>复制 </Button>
  </CopyToClipboard>