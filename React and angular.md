# AngualarJS 

![AngularJS icon](http://www.runoob.com/wp-content/uploads/2014/06/angular.jpg)
## 如何客观评价React
<http://www.zhihu.com/question/31613336?sort=created>
知乎

**Know Javascript well**, talk is cheap, show me your code __web developers__.

### AngualarJS & ReactJS
**Ember**

**react + backbone, 个人感觉非常灵活**

**react用的是redux框架**

**Flux**： Facebook做的，给React作为补充的客户观框架，主要是架构思想，Flux应用主要包括三部分：dispatcher、store和views（React components），另外，action creators - dispatcher辅助方法。

单向的数据流是Flux应用的核心特性。

Facebook目前在生产环境中使用的flux可以分别在npm, Bower，or Gihub中获取。

**Angular**
1. 首先Angular的背后是Google，angularjs是一个m-v-whateever framework
2. Angular1.0性能差，Angular的2.0几乎是一个推翻重做的框架
3. $开头的service，$http, $route, $q(defer),$cookie等等，基本上只要你在做web开发用过的东西，它都有一个。

**React**
1. React很大的特点就是“轻”，VDOM虚拟DOM, 这种思路衍生出了react native，有可能会统一WEB/NATIVE开发（虽然我觉得阻力重重）。
2. React和Angular一个很大的不同就是React采用的是one-way data flow。
3. React的缺点嘛，大概就是现在还太新了很难说将来有没有大的API变化，目前在大的稳定的项目上采用React的，我也就只知道有Yahoo的Email。所以现在很少有批评React的声音也许不是他真的就没有坑，而是那些坑还没有被踩出来而已。
4. 还有就是React本身只是一个V而已，所以如果是大型项目想要一套完整的框架的话，也许还需要引入Flux和routing相关的东西
5. reactjs用了jsx，这个相当于半个新语言了。React可以直接用Js ES6语法了，然后通过webpack编译成浏览器兼容的ES5，开发效率上有些优势
6. 

**Angualar && React**

1. react是用来构建可重复使用的UI组件的
2. angular 是MV* 框架
3. react 可以和 angular 的 directive做比较

做界面，其实是在和状态打交道。你点击一个按钮，出现一个下拉菜单，这里界面的状态从下拉菜单隐藏变到了下拉菜单显示，你可以用 { dropdown: true/false } 来表示这个状态。 前面这个对象在 angular 里面就是 $scope，在 react 里面就是 this.state。这里是两者相思的地方，维护背后的状态，界面能自动更新。 而 react 的好处在于，它够简单直观。所有的状态改变都只有唯一一个入口 this.setState()，angular 就太复杂，我搞不清状态是在哪改变了，也不知道它背后都用了哪些黑魔法。

<http://www.zhihu.com/question/23444167>

参考链接

#### Angular的依赖注入是怎么回事
对象都是被inject的，也就是说每个对象都可以轻易被替换而不影响其他对象。

依赖注入是一个在组件中给出的替代了硬的组件内的编码它们的依赖关系的软件设计模式

<http://www.yiibai.com/angularjs/angularjs_dependency_injection.html>

<http://sentsin.com/web/663.html>
容易读懂

<http://www.zhihu.com/question/28097646/answer/39981791>
知乎实例

好处：

0. 项目声明依赖配置，IoC 容器根据配置做好相关的依赖创建工作即可。

1.  有助于提高可测性的好处


缺点：
未能和模块加载器结合。 在浏览器环境中，很多场景都是异步的过程，我们需要的依赖模块并不是一开始就加载好的，或许我们在创建的时候才会去加载依赖模块，再进行依赖创建，而 angualr 的 IoC 容器没法做到这点。

