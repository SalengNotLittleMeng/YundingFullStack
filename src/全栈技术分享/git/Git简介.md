## Git简介

### 版本控制

版本控制是一种`记录一个或若干文件内容变化`，以便将来查阅特定版本修订情况的系统。 

是一种在开发的过程中用于管理我们对文件、目录或工程等内容的修改历史，

方便查看更改历史记录，备份以便恢复以前的版本的软件工程技术。 

实现跨区域多人协同开发 

追踪和记载一个或者多个文件的历史记录 

组织和保护你的源代码和文档 

统计工作量 

并行开发、提高开发效率 跟踪记录整个软件的开发过程 

减轻开发人员的负担，节省时间，同时降低人为错误

`是一种用于管理多人协同开发项目的技术`

------

主流的版本控制器有如下这些：

 Git 

SVN（Subversion）

 CVS（Concurrent Versions System）

 VSS（Micorosoft Visual SourceSafe）

 TFS（Team Foundation Server）

 Visual Studio Online 

版本控制产品非常的多（Perforce、Rational ClearCase、RCS（GNU Revision Control System）、 Serena Dimention、SVK、BitKeeper、Monotone、Bazaar、Mercurial、SourceGear Vault）

现在 影响力最大且使用最广泛的是Git与SVN

#### 本地版本控制系统

本地版本控制系统，大多都是采用某种简单的数据库来记录文件的历次更新差异。

其中最流行的一种叫做 RCS，现今许多计算机系统上都还看得到它的踪影。 

RCS 的工作原理是在硬盘上保存补丁集（补丁是指文件修订前后的变化）

通过应用所有的补丁，可以重新计算出各个版本的文件内容。

<img src="https://gitee.com/xiaoWenZhuo/picgo/raw/master/imgs/image-20220116165833398.png" alt="image-20220116165833398" style="zoom:33%;" />

#### 集中化的版本控制系统

集中化的版本控制系统 （Centralized Version Control Systems，简称 CVCS）这类系统，诸如 CVS、Subversion 以及 Perforce 等，都有一个单一的集中管理的服务器，保存所有文件的修订版本，而协同工作的人们都通过客户端连到这台服务器，取出最新的文件或者提交更新。

<img src="https://gitee.com/xiaoWenZhuo/picgo/raw/master/imgs/image-20220116165847340.png" alt="image-20220116165847340" style="zoom:33%;" />

#### 分布式版本控制系统

分布式版本控制系统（Distributed Version Control System，简称 DVCS）在这类系统中，像 Git、Mercurial、Bazaar 以及 Darcs 等，客户端并不只提取最新版本的文件快照， 而是把代码仓库完整地镜像 下来，包括完整的历史记录。 这么一来，任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像 出来的本地仓库恢复。 因为每一次的克隆操作，实际上都是一次对代码仓库的完整备份。



<img src="../AppData/Roaming/Typora/typora-user-images/image-20220116215445451.png" alt="image-20220116215445451" style="zoom:33%;" />

### 发展历史

2005年开发 BitKeeper 的商业公司同 Linux 内核开源社区的合作关系结束他们收回了 Linux 内核社区 免费使用 BitKeeper 的权力。 

这就迫使 Linux 开源社区（特别是 Linux 的缔造者 Linus Torvalds）基于使用 BitKeeper 时的经验教训，开发出自己的版本系统。 

他们对新的系统制订了若干目标：

 • 速度

 • 简单的设计 

• 对非线性开发模式的强力支持（允许成千上万个并行开发的分支） 

• 完全分布式 

• 有能力高效管理类似 Linux 内核一样的超大规模项目（速度和数据量）

 自诞生于 2005 年以来，Git 日臻成熟完善，在高度易用的同时，仍然保留着初期设定的目标。 它的速度飞快， 极其适合管理大项目，有着令人难以置信的非线性分支管理系统

### 特点

- 直接记录快照，而非差异比较

  在 Git 中，每当你提交更新或保存项目状态时，它基本上就会对当时的全部文件创建一个快照并保存这个快照的索引。 为了效率，如果文件没有修改，Git 不再重新存储该文件，而是只保留一个链接指向之前存储的文件。 Git 对待 数据更像是一个 快照流。

- 近乎所有操作都是本地执行

  因为你在本地磁盘上就有项目的完整历史，所以大部分操作看起来瞬间完成。

- Git 保证完整性

  Git 中所有的数据在存储前都计算校验和，然后以校验和来引用。 

  Git 用以计算校验和的机制叫做 SHA-1 散列（hash，哈希）。 这是一个由 40 个十六进制字符（0-9 和 a-f）组 成的字符串，基于 Git 中文件的内容或目录结构计算出来。 

  SHA-1 哈希看起来是这样： 24b9da6552252987aa493b52f8696cd6d3b00373

  Git 中使用这种哈希值的情况很多，你将经常看到这种哈希值。 实际上，Git 数据库中保存的信息都是以文件内容的哈希值来索引，而不是文件名。

- Git 一般只添加数据

  一旦你提交快照到 Git 中， 就难以再丢失数据，特别是如果你定期的推送数据库到其它仓库的话。

  

### 工作区域

Git本地有三个工作区域：

`工作目录`（Working Directory）

`暂存区`(Stage/Index)

`资源库`(Repository 或Git Directory)。

如果在加上`远程的git仓库`(Remote Directory)

就可以分为四个工作区域。

文件在这四个区域之间的转换关系如下：

Workspace：工作区，就是你平时存放项目代码的地方

Index / Stage：暂存区，用于临时存放你的改动，事实上它只是一个文件，保存即将提交到文件列表信息 

Repository：仓库区（或本地仓库），就是安全存放数据的位置，这里面有你提交到所有版本的数 据。其中HEAD指向最新放入仓库的版本 

Remote：远程仓库，托管代码的服务器，可以简单的认为是你项目组中的一台电脑用于远程数据 交换

<img src="https://gitee.com/xiaoWenZhuo/picgo/raw/master/imgs/image-20220116171035317.png" alt="image-20220116171035317" style="zoom:50%;" />

### 工作流程

git的工作流程一般是这样的： 

１、在工作目录中添加、修改文件；

 ２、将需要进行版本管理的文件放入暂存区域； 

３、将暂存区域的文件提交到git仓库。

 因此，git管理的文件有三种状态：已修改（modified）,已暂存（staged）,已提交(committed)

• 已修改表示修改了文件，但还没保存到数据库中。

 • 已暂存表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。

 • 已提交表示数据已经安全地保存在本地数据库中。

<img src="https://gitee.com/xiaoWenZhuo/picgo/raw/master/imgs/image-20220116171653855.png" alt="image-20220116171653855" style="zoom:50%;" />

### 命令行/GUI操作

> MacOS 终端（Terminal）

> Windows 命令窗口（Command Prompt）或 PowerShell

### 安装GIT

####  MACOS

 最简单的方法是安装 Xcode Command Line Tools。 

Mavericks （10.9） 或 更高版本的系统中，在 Terminal 里尝试首次运行 git 命令即可。

> $ git --version 

如果没有安装过命令行开发者工具，将会提示你安装。

#### WINDOWS

打开 git官网 https://git-scm.com/，

下载git对应操作系统的版本。 官网下载太慢，我们可以使用淘宝镜像下载：http://npm.taobao.org/mirrors/git-for-windows

安装成功后在开始菜单中会有Git项，菜单下有3个程序： 

<img src="https://gitee.com/xiaoWenZhuo/picgo/raw/master/imgs/image-20220117101850809.png" alt="image-20220117101850809" style="zoom:50%;" />

Git Bash：Unix与Linux风格的命令行，使用最多，推荐最多 

Git CMD：Windows风格的命令行 

Git GUI：图形界面的Git，不建议初学者使用，尽量先熟悉常用命令

### 首次配置

安装完 Git 之后，要做的第一件事就是设置你的用户名和邮件地址。

 这一点很重要，因为每一个 Git 提交都会使用这些信息，它们会写入到你的每一次提交中，不可更改：

```bash
git config --global user.name "John Doe" 

git config --global user.email johndoe@example.com 
```

再次强调，如果使用了 --global 选项，那么该命令只需要运行一次，因为之后无论你在该系统上做任何事 情， Git 都会使用那些信息。 当你想针对特定项目使用不同的用户名称与邮件地址时，可以在那个项目目录下运行没有 --global 选项的命令来配置。 很多 GUI 工具都会在第一次运行时帮助你配置这些信息。

查看配置

```bash
git config -l
```

### 生成/添加SSH公钥

Gitee 提供了基于SSH协议的Git服务，在使用SSH协议访问仓库之前，需要先配置好账户/仓库的SSH公钥。

你可以按如下命令来生成 sshkey:

```
ssh-keygen -t ed25519 -C "xxxxx@xxxxx.com"  
# Generating public/private ed25519 key pair...
```

> 注意：这里的 `xxxxx@xxxxx.com` 只是生成的 sshkey 的名称，并不约束或要求具体命名为某个邮箱。
> 现网的大部分教程均讲解的使用邮箱生成，其一开始的初衷仅仅是为了便于辨识所以使用了邮箱。

按照提示完成三次回车，即可生成 ssh key。通过查看 `~/.ssh/id_ed25519.pub` 文件内容，获取到你的 public key

```
cat ~/.ssh/id_ed25519.pub
# ssh-ed25519 AAAAB3NzaC1yc2EAAAADAQABAAABAQC6eNtGpNGwstc....
```

![SSH生成](https://images.gitee.com/uploads/images/2021/0827/165113_8e58f0e1_551147.png)

![输入图片说明](https://images.gitee.com/uploads/images/2021/0827/165455_ec7dbd09_551147.png)

复制生成后的 ssh key，通过仓库主页 **「管理」->「部署公钥管理」->「添加部署公钥」** ，添加生成的 public key 添加到仓库中。

![添加部署公钥](https://images.gitee.com/uploads/images/2018/0814/233212_29a62378_551147.png)

添加后，在终端（Terminal）中输入

```
ssh -T git@gitee.com
```

首次使用需要确认并添加主机到本机SSH可信列表。若返回 `Hi XXX! You've successfully authenticated, but Gitee.com does not provide shell access.` 内容，则证明添加成功。

![SSH添加提示](https://images.gitee.com/uploads/images/2018/0814/170837_4c5ef029_551147.png)

添加成功后，就可以使用SSH协议对仓库进行操作了。

## GIT基础

> 掌握git的基础命令 

<img src="https://gitee.com/xiaoWenZhuo/picgo/raw/master/imgs/image-20220116172811814.png" alt="image-20220116172811814" style="zoom:50%;" />

### 获取GIT仓库

通常有两种获取 Git 项目仓库的方式： 

1. 将尚未进行版本控制的本地目录转换为 Git 仓库； 
2. 从其它服务器 克隆 一个已存在的 Git 仓库。 

两种方式都会在你的本地机器上得到一个工作就绪的 Git 仓库。

##### 在已存在目录中初始化仓库

使用命令 cd 到目标文件夹

然后使用命令

```bash
git init
```

<img src="https://gitee.com/xiaoWenZhuo/picgo/raw/master/imgs/image-20220116173249082.png" alt="image-20220116173249082" style="zoom:50%;" />

该命令将创建一个名为 .git 的子目录，这个子目录含有你初始化的 Git 仓库中所有的必须文件，这些文件是 Git 仓库的骨干。

如果在一个已存在文件的文件夹（而非空文件夹）中进行版本控制

你应该开始追踪这些文件并进行初始提交。 

可以通过 git add 命令来指定所需的文件来进行追踪，

然后执行 git commit ： 

$ git add *.c 

$ git add LICENSE 

$ git commit -m 'initial project version' 

 现在，你已经得到了一个存在被追踪文件与初始提交的 Git 仓库。



添加当前目录下的所有文件到暂存区：

```bash
git add .
```

##### 克隆现有的仓库

克隆仓库的命令是 git clone  

比如，要克隆 Git 的链接库 libgit2，可以用下面的命令：

```bash
 git clone https://github.com/libgit2/libgit2 
```

这会在当前目录下创建一个名为 “libgit2” 的目录，并在这个目录下初始化一个 .git 文件夹，从远程仓库拉取下所有数据放入 .git 文件夹，然后从中读取最新版本的文件的拷贝。 

如果你进入到这个新建的 libgit2 文 件夹，你会发现所有的项目文件已经在里面了，准备就绪等待后续的开发和使用。

### 操作GIT仓库

#### 检查文件状态

```bash
git status
```

#### 跟踪文件至暂存区/暂存已经修改的文件

```bash
git add
```

可以用它开始跟踪新文件，或者把已跟踪的文件放到暂存区，还能用于合并时把有冲突的文件标记为已解决状态等。 

将这个命令理解为“精确地将内容添加到下一次提交中”而不是“将一个文件添加到项目中”要更加合适。 

#### 忽略文件

一般我们总会有些文件无需纳入 Git 的管理，也不希望它们总出现在未跟踪文件列表。

 在这种情况下，我们可以创建一个名为 .gitignore 的文件，列出要忽略的文件的模式。

文件 .gitignore 的格式规范如下： • 所有空行或者以 # 开头的行都会被 Git 忽略。 • 可以使用标准的 glob 模式匹配，它会递归地应用在整个工作区中。 • 匹配模式可以以（/）开头防止递归。 • 匹配模式可以以（/）结尾指定目录。 • 要忽略指定模式以外的文件或目录，可以在模式前加上叹号（!）取反。 所谓的 glob 模式是指 shell 所使用的简化了的正则表达式。 星号（*）匹配零个或多个任意字符；[abc] 匹配 任何一个列在方括号中的字符 （这个例子要么匹配一个 a，要么匹配一个 b，要么匹配一个 c）； 问号（?）只 匹配一个任意字符；如果在方括号中使用短划线分隔两个字符， 表示所有在这两个字符范围内的都可以匹配 （比如 [0-9] 表示匹配所有 0 到 9 的数字）。 

```
使用两个星号（**）表示匹配任意中间目录，比如 a/**/z 可以 匹配 a/z 、 a/b/z 或 a/b/c/z 等。
```

```
# 忽略所有的 .a 文件
*.a
# 但跟踪所有的 lib.a，即便你在前面忽略了 .a 文件
!lib.a
# 只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO
/TODO
# 忽略任何目录下名为 build 的文件夹
build/
# 忽略 doc/notes.txt，但不忽略 doc/server/arch.txt
doc/*.txt
# 忽略 doc/ 目录及其所有子目录下的 .pdf 文件
doc/**/*.pdf
```

#### 查看更新部分

```bash
git diff
```

此命令比较的是工作目录中当前文件和暂存区域快照之间的差异。 

也就是修改之后还没有暂存起来的变化内容。 

若要查看已暂存的将要添加到下次提交里的内容，可以用 

git diff --staged 

命令。 

这条命令将比对已暂存文件与最后一次提交的文件差异

#### 提交更新

现在的暂存区已经准备就绪，可以提交了。

 在此之前，请务必确认还有什么已修改或新建的文件还没有 git add 过，否则提交的时候不会记录这些尚未暂存的变化。 

这些已修改但未暂存的文件只会保留在本地磁盘。 所 以每次准备提交前，先用 git status 看下，你所需要的文件是不是都已暂存起来了， 然后再运行提交命令 git commit

```bash
git commit
```

另外，你也可以在 commit 命令后添加 -m 选项，将提交信息与命令放在同一行，如下所示：

```bash
git commit -m "helloGit"
```

#### 跳过使用暂存区域

尽管使用暂存区域的方式可以精心准备要提交的细节，但有时候这么做略显繁琐。 Git 提供了一个跳过使用暂 存区域的方式， 只要在提交的时候，给 git commit 加上 -a 选项，Git 就会自动把所有已经跟踪过的文件暂存 起来一并提交，从而跳过 git add 步骤

```bash
git commit -a
```

#### 移除文件

```bash
git rm
```

下一次提交时，该文件就不再纳入版本管理了。如果要删除之前修改过或已经放到暂存区的文件，则必须使用 强制删除选项 -f（译注：即 force 的首字母）。 

另外一种情况是，我们想把文件从 Git 仓库中删除（亦即从暂存区域移除），但仍然希望保留在当前工作目录 中。 换句话说，你想让文件保留在磁盘，但是并不想让 Git 继续跟踪。 当你忘记添加 .gitignore 文件，不小心把一个很大的日志文件或一堆 .a 这样的编译生成文件添加到暂存区时，这一做法尤其有用。 

为达到这一目的，使用 --cached 选项： 

```bash
git rm --cached 文件名
```

也可以使用glob模式

#### 文件改名/移动文件

```bash
git mv file_from file_to
```

#### 查看提交历史

```bash
git log
```

#### 撤销重新提交

```bash
git commit --amend
```

这个命令会将暂存区中的文件提交。

 如果自上次提交以来你还未做任何修改（例如，在上次提交后马上执行了此命令）， 那么快照会保持不变，而你所修改的只是提交信息。

 文本编辑器启动后，可以看到之前的提交信息。 编辑后保存会覆盖原来的提交信息。

 例如，你提交后发现忘记了暂存某些需要的修改，可以像下面这样操作： 

$ git commit -m 'initial commit' 

$ git add forgotten_file

 $ git commit --amend 

最终你只会有一个提交——第二次提交将代替第一次提交的结果。



#### 取消暂存文件

```bash
git reset HEAD <file>
```

#### 查看远程仓库

```bash
 git remote 
```

它会列出你指定的每一个远程服务器 的简写

指定选项 -v，会显示需要读写远程仓库使用的 Git 保存的简写与其对应的 URL。

#### 添加远程仓库

```bash
git clone <url> /  git remote add <shortname> <url>
```

#### 从远程仓库抓取与拉取

```bash
git fetch <remote>
```

你使用 clone 命令克隆了一个仓库，命令会自动将其添加为远程仓库并默认以 “origin” 为简写。

如果你的当前分支设置了跟踪远程分支， 那么可以用 git pull 命令 来自动抓取后合并该远程分支到当前分支。

默认情况下，git clone 命令会自动设置本地 master 分支跟踪克隆的远程仓库的 master 分支（或其它名字的默认分支）。

 运行 git pull 通常会从最初克隆的服务器上抓取数据并自动尝试合并到当前所在的分支。

#### 推送到远程仓库

```bash
git push <remote> <branch>
```

 当你 想要将 master 分支推送到 origin 服务器时（再次说明，克隆时通常会自动帮你设置好那两个名字）， 

 那么 运行这个命令就可以将你所做的备份到服务器：

```bash
git push origin master
```

### 打标签

##### 附注标签

> git tag -a v1.4 -m "my version 1.4"

-m 选项指定了一条将会存储在标签中的信息。 如果没有为附注标签指定一条信息，

Git 会启动编辑器要求你输入信息。 通过使用 git show 命令可以看到标签信息和与之对应的提交信息

#### 轻量标签

```bash
git tag v1.4-lw
```

### GIT分支 (平行宇宙)

> 使用分支      你可以把你的工作从开发主线上分离开来

Git 保存的不是文件的变化或者差异，而是一系列不同时刻的 快照 

##### 分支创建

```bash
git branch testing
```

<img src="../AppData/Roaming/Typora/typora-user-images/image-20220116203011888.png" alt="image-20220116203011888" style="zoom:50%;" />

那么，Git 又是怎么知道当前在哪一个分支上呢？ 也很简单，它有一个名为 HEAD 的特殊指针。 在 Git 中，它是一个指针，指向当前所在的本地分支（译注：将 HEAD 想象为当前分支的别名）。 在本例中，你仍然在 master 分支上。 因为 git branch 命令仅仅 创建 一个新分支，并不会自动切换到新分支中去。

##### 分支切换

```bash
git checkout testing
```

<img src="https://gitee.com/xiaoWenZhuo/picgo/raw/master/imgs/image-20220116203351056.png" alt="image-20220116203351056" style="zoom:33%;" />

那么，这样的实现方式会给我们带来什么好处呢？ 现在不妨再提交一次：

```bash
vim test.rb
git commit -a -m 'made a change'
```

<img src="https://gitee.com/xiaoWenZhuo/picgo/raw/master/imgs/image-20220116203445775.png" alt="image-20220116203445775" style="zoom:50%;" />

如图所示，你的 testing 分支向前移动了，但是 master 分支却没有，它仍然指向运行 git checkout 时所 指的对象。 这就有意思了，现在我们切换回 master 分支看看

```bash
git checkout master
```

一是使 HEAD 指回 master 分支

二是将工作目录恢复成 master 分支所指向的快照内容。 

也就是说你现在做修改的话，项目将始于一个较旧的版本。 本质上来讲，这就是忽略 testing 分支所做的修改，以便于向另一个方向进行开发。

##### 创建分支并且切换到此分支

```bash
git branch -b <分支名>
```

##### 删除分支

```bash
git branch -d <branch-name>
```

##### 分支的合并

```bash
git merge <分支名>
```

## GIT进阶

### GUI

### 冲突解决

### rebase 变基

