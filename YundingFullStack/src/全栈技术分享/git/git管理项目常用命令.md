### git Bash基础操作

常用命令：

```git
git add .
# 将修改提交到暂存区

git commit -m 修改信息
# 将修改信息提交到远程分支，但此时没有合并

git push [--set-upstream origin 分支名]
# 合并提交代码与远程分支代码

git push origin lht:lht
git push origin XXX:XXX
#推送到远程XXX分支

git push -u origin master 
#加了参数-u后，以后即可直接用git push 代替git push origin master

git checkout -b 分支名
# 创建并切换分支(本地)

git pull origin 分支名
# 分支名一般为master

git pull origin master --allow-unrelated-histories
#忽略历史冲突拉下来
```

流程

```git
git add .
git commit -m 巴拉巴拉
# 这里实际上已经交到远程了，所以新pull代码也不会丢失修改
git pull origin master  # 第二次再拉下来，解决冲突，避免提交的代码有冲突
# 切换到编辑器里，锁定大小写全局搜索HEAD (ctrl+shift+f)
# 如果有冲突，可以搜出来类似这种
# 
# <<<<<<<<<<<<HEAD
# 自己的代码
# ================
# 远程代码
# >>>>>>>>>>>>>>>
# 
# 看实际情况取舍
# 第二次提交
git add .
git commit -m 解决冲突
git push --set-upstream origin qin
# 加上参数表示绑定远程分支与本地分支，一般第一次加参数，此后可以直接git push
```





**前期准备工作：**

1.本地下载git并进行系统配置，生成sshkey

2.远程找个托管平台注册账号，配置秘钥

二、环境配置

    git安装好去GitHub上注册一个账号，注册好后，点击桌面上的Git Bash快捷图标，我们要用账号进行环境配置啦啦
    
    # 配置用户名
    git config --global user.name "username"    //（ "username"是自己的账户名，）
    # 配置邮箱
    git config --global user.email "username@email.com"     //("username@email.com"注册账号时用的邮箱)
    
    以上命令执行结束后，可用 git config --global --list 命令查看配置是否OK
    生成ssh
    继续刚才的操作，在命令框中输入以下命令，
    
    ssh-keygen -t rsa
        1
    
    然后连敲三次回车键，结束后去系统盘目录下（一般在 C:\Users\你的用户名.ssh）(mac: /Users/用户/.ssh）查看是否有。ssh文件夹生成，此文件夹中以下两个文件
    在这里插入图片描述
    4. 将ssh文件夹中的公钥（ id_rsa.pub）添加到GitHub管理平台中，在GitHub的个人账户的设置中找到如下界面
    在这里插入图片描述
    title随便起一个，将公钥（ id_rsa.pub）文件中内容复制粘贴到key中，然后点击Ass SSH key就好啦
    5. 测试一下配置是否成功，在Git Bush命令框（就是刚才配置账号和邮箱的命令框）中继续输入以下命令，回车
    
    ssh -T git@github.com
        1
    
    要是看见下面的这句话就说明配置好啦
    在这里插入图片描述

————————————————
版权声明：本文为CSDN博主「糖葫芦的小黑屋」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/huangqqdy/article/details/83032408

**第一种：远程有项目，本地没有代码的情况**

```
1.克隆远程仓库
	git clone 远程仓库地址
2.进入克隆下来的仓库
	cd 仓库名
3.新建本地分支
	git checkout -b 分支名
4.本地分支与远程仓库分支进行连接（先在远程仓库建好分支）
	git branch -u origin/远程分支名
	
然后测试一下 随便修改一个文件
git add .
git commit -m “文字说明”
git push

然后到远程看看有没有内容提交，有的话就没啥问题了
```

**第二种：本地有项目，远程没有仓库无内容的情况**

```
1.新建一个文件夹放本地仓库

2.新建一个本地仓库
	git init  
3.把本地的项目拉到这个仓库里边（只是拉进来并未提交到仓库）
4.把拉进来的项目提交到本地仓库
	git add 项目文件名
	git commit -m "文件名"
5.远程建一个仓库
6.本地仓库与远程仓库进行连接
	git remote add origin 仓库地址
7.远程和本地合并，保证一致
	git pull --rebase origin master

之后建本地分支和远程分支连接就和上边一样
```

------

第一二种情况没那么清楚，个人感觉第一种简单

**其他常见出现情况**

1.把master分支最新的代码拉到本地

第一种：命令：git pull origin master

第二种：在idea

![image-20210529175002096](https://gitee.com/wenjinrong/typora-gallery/raw/master/typora-gallery/image-20210529175002096.png)

2.将自己的分支和master合并

第一种：点击 远程仓库最新修改 有 “merge request” 按钮  然后需要master统一就好了

第二种：idea

![image-20210529175359917](https://gitee.com/wenjinrong/typora-gallery/raw/master/typora-gallery/image-20210529175359917.png)
