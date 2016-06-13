rpm
====
RPM软件包管理器
英文原义：RPM Package Manager（原Red Hat Package Manager，现在是一个递归缩写）
注解：一种用于互联网下载包的打包及安装工具，它包含在某些Linux分发版中。它生成具有.RPM扩展名的文件。与Dpkg类似，用于安装、卸载、升级和管理软件。


## 参数列表
rpm 命令：遵循GPL协议且功能强大的包管理，它可以建立、安装、请求、确认、和卸载软件包。间接的提升了Linux 的易用性
| 关键字| 备注   |
|:------- |:---- |
|-vh|显示安装进度|
|-e| 卸载rpm包|
|-q| 查询已安装的软件信息|
|-i| 安装rpm包|
|-u| 升级rpm包|
|-c| 显示所有配置文件|
|-d| 显示所有文档文件|
|-h| 显示安装进度|
|-l| 列出软件包中的文件|
|-a| 显示出文件状态|
|-p| 查询/校验一个软件包文件|
|-v| 显示详细的处理信息|
|－qpl|列出RPM软件包内的文件信息；|
|－qpi|列出RPM软件包的描述信息；|
|－qf|查找指定文件属于哪个RPM软件包；|
|－Va|校验所有的RPM软件包，查找丢失的文件；|
|－qa |查找相应文件，如 rpm -qa mysql|
|--replacepkgs| 重新安装rpm包|
|--justdb| 升级数据库，不修改文件系统|
|--percent| 在软件包安装时输出百分比|
|--help| 帮助
|--version| 显示版本信息|
|--dump| 显示基本文件信息|
|--nomd5| 不验证文件的md5支持|
|--nofiles| 不验证软件包中的文件|
|--nodeps| 不验证软件包的依赖关系，无视依赖，强制删除|
|--whatrequires| 查询/验证需要一个依赖性的软件包|
|--whatprovides| 查询/验证提供一个依赖性的软件包|


### 卸载软件
> rpm -e 

比如卸载软件包proftpd-1.2.8-1，可以使用下列格式
```
rpm -e proftpd-1.2.8-1
rpm -e proftpd-1.2.8
rpm -e proftpd-
rpm -e proftpd
```
不可以是下列格式：
```
rpm -e proftpd-1.2.8-1.i386.rpm
rpm -e proftpd-1.2.8-1.i386
rpm -e proftpd-1.2
rpm -e proftpd-1
```

