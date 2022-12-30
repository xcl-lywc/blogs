1. 推荐使用 Git Bash 运行命令
2. 第一次使用需要：git init
3. 打开Git Bash，输入ssh-keygen 或者 ssh-keygen -t rsa -C "xiaochuanlin941109@163.com"，生成公钥；
   打开`id_rsa.pub`[[C:\Users\29860\.ssh\id_rsa.pub](C:\Users\29860\.ssh\id_rsa.pub)]文件，复制里面的内容；
   最后粘贴到github中相关的位置中[[https://github.com/settings/ssh/new](https://github.com/settings/ssh/new ) 的SSH keys / Add new --> Key]。
   补充：ssh-keygen -t rsa -b 4096 -C "xiaochuanlin941109@163.com"：这条命令的目的是为了让本地机器ssh登录远程机器上的GitHub账户无需输入密码。


4. 使用 ssh-add ~/.ssh/id_rsa 将产生的新ssh key添加到ssh-agent中
   补充： 如果出现“Could not open a connection to your authentication agent.”的错误可以使用以下两种方式解决：eval "$(ssh-agent -s)" 或者 eval `ssh-agent`

5. 使用 ssh -T git@github.com 对ssh key 进行验证


