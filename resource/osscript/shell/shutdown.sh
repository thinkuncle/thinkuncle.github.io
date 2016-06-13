#!/bin/sh

# this shell is to start tomcat

cd apache-tomcat-7.0.47/bin

JAVA_OPTS='-Xmx200m -Xms50m'
export JAVA_OPTS

./shutdown.sh


