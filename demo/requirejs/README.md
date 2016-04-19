require.js
>需要；要求；命令
==
## 优势
1. 防止js加载阻塞页面渲染
2. 使用程序调用的方式加载js，防出现如下丑陋的场景
```
<script type="text/javascript" src="a.js"></script>
<script type="text/javascript" src="b.js"></script>
<script type="text/javascript" src="c.js"></script>
<script type="text/javascript" src="d.js"></script>
<script type="text/javascript" src="e.js"></script>
<script type="text/javascript" src="f.js"></script>
<script type="text/javascript" src="g.js"></script>
<script type="text/javascript" src="h.js"></script>
<script type="text/javascript" src="i.js"></script>
<script type="text/javascript" src="j.js"></script>
```

## 基本API
- define 从名字就可以看出这个api是用来定义一个模块
- require 加载依赖模块，并执行加载完后的回调函数
```
require(["js/a"], function(){alert("load finished");});
```

## 加载文件
- 加载配置文件
```
require.config({
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery"]   
    }
})
require(["jquery","js/a"],function($){
    $(function(){
        alert("load finished");  
    })
})
```

- 加载优先策略配置
当百度的jquery没有加载成功后，会加载本地js目录下的jquery
```
require.config({
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery", "js/jquery"],
        "a" : "js/a"   
    }
})
require(["jquery","a"],function($){
    $(function(){
        alert("load finished");  
    })
})
```

## 全局配置
为了防止require.config在每个页面上重复配置，requirejs提供了一种叫"主数据"的功能，我们首先创建一个main.js：
```
require.config({
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery", "js/jquery"],
        "a" : "js/a"   
    }
})
```

然后再页面中使用下面的方式来使用requirejs：
```
<script data-main="js/main" src="js/require.js"></script>
```

## 第三方模块
采用shim形式， 待深入了解