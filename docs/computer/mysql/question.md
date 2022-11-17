---
# 这是文章的标题
title: mysql问题
# 这是页面的图标
icon: page
# 这是侧边栏的顺序
# order: 1
# 设置作者
author: nxg
# 设置写作时间
date: 2022-11-17
# 一个页面可以有多个分类
category:
  - mysql
# 一个页面可以有多个标签
tag:
  - 后端
  - mysql
---

## 问题1-提示1251- Client does not support authentication protocol requested by server

原因：mysql8 之前的版本中加密规则是mysql_native_password,而在mysql8之后,加密规则是caching_sha2_password, 

解决办法：

```
方法1.升级navicat驱动；

方法2.把mysql用户登录密码加密规则还原成mysql_native_password. 
```

使用命令方式解决：

```
方法1：
# 更新user为root，host为% 的密码为123456
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';

 # 更新user为root，host为localhost 的密码为123456
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';

# 方法2：
# 修改加密规则 （这行我没有写，不过貌似也可以）
ALTER USER 'root'@'localhost' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER; 
# 更新一下用户的密码 
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; 
 #刷新权限
FLUSH PRIVILEGES; 
```





## 附件

参考：https://blog.csdn.net/pengfeng111833/article/details/124399404

参考2：https://huaweicloud.csdn.net/63355d9ed3efff3090b54464.html