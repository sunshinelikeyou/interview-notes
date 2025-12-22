# Shell Part

[[toc]]

## shell 常用的命令有哪些？ <Badge type="tip" text="primary" />

::: details 展开查看

```bash
  以下终端命令示例都是在macOS终端执行的结果，可能不适用于其他操作系统。
  echo: 终端打印
      tput setab N - 设置背景色 (N: 0=黑, 1=红, 2=绿, 3=黄, 4=蓝, 5=紫, 6=青, 7=白)
      tput setaf N - 设置前景色 (文字颜色)
      tput bold - 粗体
      tput smul - 下划线开始
      tput rmul - 下划线结束
      tput sgr0 - 重置所有格式
      输入: echo "$(tput setab 2) Green Background $(tput sgr0)"
      输出: Green Background 绿色背景
      -e: 启用反斜杠转义 输入: echo -e "1\t2\t3"  输出: 1	2	3
        \e[0m: 恢复默认颜色
        字体颜色:(\e 在.sh 文件中使用可能不被识别)
           \e[1;30m: 黑色
           \e[1;31m: 红色
           \e[1;32m: 绿色
           \e[1;33m: 黄色
           \e[1;34m: 蓝色
           \e[1;35m: 洋红
           \e[1;36m: 青色
           \e[1;37m: 白色
        背景颜色:
           \e[1;40m: 黑色
           \e[1;41m: 红色
           \e[1;42m: 绿色
           \e[1;43m: 黄色
           \e[1;44m: 蓝色
           \e[1;45m: 洋红
           \e[1;46m: 青色
           \e[1;47m: 白色
      输入:  echo -e "\e[1;31m This is red text \e[0m"
      输出: This is red text 红色字体
      输入: echo -e "\e[1;42m Green Background \e[0m"
      输出: Green Background 绿色背景
      $PATH: 环境变量
      $PWD: 当前工作目录
      $USER: 当前用户
      $SHELL: 当前所使用 shell
      $UID: 当前用户ID
      文件内容 > 文件名:  清空之前的文件内容并将文件内容输出到文件中
      文件内容 >> 文件名:  将文件内容追加到文件中
      cat(concatenate) 文件名:  显示文件内容
  printf: 格式化终端打印 与java 的format方法类似
      %s: string 字符串
      %c: character 字符
      %d: digital 十进制
      %f: float 浮点数
      %o: octal 八进制
      %x: hexadecimal 十六进制 %x: 小写 %X: 大写
      %p: pointer 精度 输入: printf "%.2f\n" 123.456 # 输出 "123.46"
      %-5s : - 表示左对齐且宽为5的字符串, 不使用“-”默认右对齐 %5s
      输入: printf "my name is %5s, %3d year old. " james 18
      输出: my name is james,  18 year old.
  pgrep + app name: 根据名称查找进程ID
  find + 目录 + 文件名: 在目录下查找文件(包括子目录)
      -name: 根据文件名查找
      -path: 根据文件路径查找
      -regex: 根据文件名正则表达式查找
      -iregex: 根据文件名正则表达式查找(忽略大小写)
      -print: 输出文件名
      -maxdepth: 限制查找深度
      -mindepth: 限制查找深度
      !: 取反
      -type: 根据文件类型查找
        f: 普通文件
        d: 目录
        l: 软链接
        p: 管道
        s: 套接字
        c: 字符设备
        b: 块设备
      -atime: 根据访问时间查找
      -mtime: 根据修改时间查找
      -ctime: 根据创建时间查找
      -size: 根据文件大小查找
        -: 小于
        +: 大于
        b: 块(512 字节)
        c: 字节
        w: 字
        k: 1024 字节
        M: 1024K 字节
        G: 1024M 字节
      -delete: 删除文件
      -perm: 根据文件权限查找
      -user: 根据文件所有者查找
      -exec: 与其他命令结合
      -prune: 排除目录
      xargs: 将标准输入转换为命令行参数
      tr: 字符转换
      md5sum: 计算文件的 MD5 校验和
      sha1sum: 计算文件的 SHA-1 校验和
      rename: 重命名文件
      输入: find demo  \( -name "*.html" -o -name "*react*" \) -print
      输出: demo/index.html demo/react.development.js demo/react-dom.development.js
  ls(list) + 目录: 列出目录内容

```

:::
