# Git
## git常用命令
### 状态图

<img width="500" src="https://raw.githubusercontent.com/ChuckWangzz/Others/master/git/imgs/2.png"/>

<img width="500" src="https://raw.githubusercontent.com/ChuckWangzz/Others/master/git/imgs/3.png"/>

### 初始化
```````````````
// 初始化目录为git项目，添加readme和.gitignore配置等
git init

// 本地git与远程git关联
git remote add origin git_url

// 将本地分支与远程分支关联
git push -u origin 远程分支

// 将远程git项目clone到本地，推荐clone时采用ssh格式的url，经过配置之后，不用每次输入密码
git clone git_url 本地文件夹名称（可省略）

```````````````

### 提交
```````````````

// 查看状态
git status

// 添加到暂存区
git add .
git add -a

// 提交到本地仓库
git commit -m '描述'

// 查看日志
git log --pretty=oneline

// 与某个提交节点进行对比
git diff [sha_commit]

```````````````

### 查看分支，创建分支
```````````````
// 列出本地所有分支
git branch

// 列出远程所有分支
git branch -r

// 列出所有分支
git branch -a

// 查看本地分支与远程分支的关联关系
git branch -vv

// 拉取远程分支并创建本地分支，同时把新分支与远程分支建立追踪关系
git checkout -b branch_name origin/branch_name

// 基于当前状态创建一个本地分支
git checkout -b branch_name

// 手动建立本地分支与远程分支的追踪关系
git checkout branch_name
git branch -u origin/branch_name
// 或
git branch --set-upstream origin/branch_name

```````````````

### 推送和拉取远程分支
```````````````
// 将本地的远端和远端进行同步
git fetch origin

// 将本地的远端合并到本地分支
git merge origin/branch_name

// 相当于以上两条命令
git pull origin

// 如果当前分支与远程分支存在追踪关系，git pull/push就可以省略远程分支
git push origin

// 如果当前分支与远程分支不存在追踪关系
git push origin locate_branch_name:origin_branch_name
// 或
git push -u origin branch_name
// 或
git push --set-upstream origin branch_name

```````````````

### 分支的删除
```````````````
// 删除本地分支
git branch -D branch_name

// 删除远程分支
git push origin -D branch_name
git push :origin/branch_name

// 删除与已删除的远程分支相对应的本地分支
git remote prune origin

```````````````

### 分支的合并
分支介绍：假如基于master，创建了新的分支test
#### fast-forward合并
如果master上没有修改，test上做了一些改动，master 合并test，即如果待合并的分支在当前分支的下游，也就是说没有分叉时，会发生快速合并。这种方法相当于直接把master分支移动到test分支所在的地方，并移动HEAD指针。
<img width="500" src="https://raw.githubusercontent.com/ChuckWangzz/Others/master/git/imgs/4.gif"/>

#### 分支出现分叉之后的合并
如果master上有修改，test上也做了一些改动，这时候两个分支出现了分叉，合并时，被合入的分支会创建一个新的节点。
<img width="500" src="https://raw.githubusercontent.com/ChuckWangzz/Others/master/git/imgs/1.png"/>

##### 没有冲突的合并
但是如果两个分支改动的不是同一个文件，不管是master合并test，还是test合并master，都不会有冲突,合并时提示：

``````````````
Merge made by the 'recursive' strategy.
``````````````

##### 存在冲突的合并
如果master上有修改，test上做了一些改动，同一个文件在两个分支上都有修改，合并时就会出现冲突，提示：

```````````````
CONFLICT (content): Merge conflict in xxxx. Automatic merge failed; fix conflicts and then commit the result.
```````````````

### 解决冲突的方法
#### 合并时发现处理有误，需要重新来过，而且没有commit
处理策略：终止合并操作，abort the current in-progress merge 终止正在进行中的合并操作，回到合并之前

`````````````
git merge --abort
`````````````

#### 合并之后已经commit过，但是commit之后没有新的commit
处理策略：返回到merge之前的点,重新merge
解决方法：

方法1:

``````````````````
// 切到合并之前的点，重新进行合并
git checkout [sha_of_before_merge]

// 重新合并
git merge branch_name

// 重新另存为一个分支，之前的分支不能用了
git checkout -b new_branch_name

``````````````````

方法2:

``````````````````
// 回退到合并之前的节点
git reset --hard [sha_of_before_merge]

// 重新合并
git merge branch_name

``````````````````

#### 合并之后已经commit过了，同时又进行了新的commit，发现之前的合并有问题
先回退到合并之前的节点，创建临时分支，重新合并，再合并最新的修改

方法1:

```````````````````
// 同上方法1，checkout到合并之前的节点，然后另存为另外一个分支
git checkout -b branch_tmp [sha_of_before_merge]

// 重新进行合并操作
git merge branch_name

// 切到current_branch，重新merge下branch_tmp
git checkout current_branch
git merge current_branch

```````````````````

方法2:

revert合并操作，然后手动再合并一次

```````````````````
// 把合并带来的变化撤销掉
git revert -m l [sha_of_wrong_merge]

// 手动对比与需要合并的分支之间的不同，把不同的地方同步过来，重新提交
git commit -m 'manual merge master fix merge error'

```````````````````

### tag

```````````````````
// 创建tag
git tag -a 版本号 -m '版本信息'

// 生成tag快照，不允许修改
git checkout tag_name

// 基于tag拉取一个分支，可进行修改
git checkout -b branch_name tag_name

```````````````````

	
## 其它
1. [git & beyond compare](https://github.com/ChuckWangzz/Others/blob/master/git/1.md)