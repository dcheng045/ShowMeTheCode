## Babel
* babel除了可以把ES6编译成ES5，还可以把JSX编译成JS
* react本身也是一个独立的 npm包

## Webpack 更适合于React社区
* Webpack用于打包我们的代码，并且包含进我们需要的包，然后输出为浏览器可运行的 文件。因为我们使用JSX和ES6，因此我们需要相应的工具来将其转换为ES5。事实上, Babel能够同时做这两件事。使用Webpack能够很轻松的完成这些任务，因为Webpack 是面向配置的。

		npm init
		npm install webpack --save-dev
		npm install babel --save-dev
		npm install babel-loader --save-dev

* 你可以使用 node-static 来存放你的静态资源文件，使用 

		npm install -g node-static 来安装，并使用 static .来启动)。
		
		
浏览器中输入http://ruanyf.github.io/es-checker/，查看该浏览器对ES6的支持程度。Terminal 中输入以下，查看本机对ES6的支持程度。Npm install –g es-checkerEs-checker首先要有一个项目目录，比如tryBable文件夹安装babel的命令行版本npm install - -global babel-clinpm install - -save babel-preset-es2015babel node 命令babel 命令babel –o babel - - out-filebabel的浏览器版本，安装npm install babel-core@5npm install 



