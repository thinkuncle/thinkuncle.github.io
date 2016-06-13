#!/bin/sh

#ulimit -HSn 65535

export LANG=zh_CN.utf8

# this shell is to start tomcat

cd apache-tomcat-7.0.47/bin

JAVA_OPTS="-Xms512m -Xmx512m -Xss325K -XX:MaxNewSize=512m -XX:PermSize=512M -XX:MaxPermSize=512M"
#JAVA_OPTS='-Xmx2048m -Xms1024m -XX:MaxNewSize=512m -XX:PermSize=512M -XX:MaxPermSize=512M' 
#  -Dcom.sun.management.jmxremote 
#  -Dcom.sun.management.jmxremote.port=1090 
#  -Dcom.sun.management.jmxremote.ssl=false 
#  -Dcom.sun.management.jmxremote.authenticate=false
#  -Djava.rmi.server.hostname=192.168.56.102'
export JAVA_OPTS

./startup.sh

