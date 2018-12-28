#!/usr/bin/python
# -*- coding: utf-8 -*-
# import module1 # 全部导入
from module1 import print_func # 局部导入

def hello():
    print 'Hello, Python!'

    str = 'Hello World!'
    print str[2:5]      # 输出字符串中第三个至第五个之间的字符串

    list = [ 'runoob', 786 , 2.23, 'john', 70.2 ]
    print list[1:3]          # 输出第二个至第三个元素

def fun1():
    print 'this is function'
    return 2

# fun1Result = fun1()
# print fun1Result # 2
# hello()

# module1.print_func('123')
print_func('123')