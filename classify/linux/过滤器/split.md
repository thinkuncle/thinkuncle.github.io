split文件分割命令
================
    split [OPTION] [FILE [PREFIX]]

> split是以行为单位分割的

##FILE
要分割的文件名
##PREFIX
可以指定分割后的小文件的文件名前缀为**PREFIX**，缺省为**x**。
##OPTION
常用选项：`-d`、`-l`、`-a`
###-a
    split -a num FILE

表示将文件FILF分割后的小文件名中包含num位后缀，缺省为**2**位。
###-l
    split -l lines FILE

表示将文件每lines行分割成一个文件。缺省是**1000**行
###-d
无参数。表示文件分割后生成的小文件的名字以数字命名。  

在未指定**PREFIX**以及**-d**选项的时候，生成的文件名是：`xaa`、`xab`、`xac`……。  

指定了**-d**选项之后是：`x00`、`x01`、`x02`……
##综合实例
    split -l 10 -a 3 log `date +%F`. -d

分割log文件。分割后的文件名为：`2015-06-25.000`、`2015-06-25.001`、`2015-06-25.002`、
