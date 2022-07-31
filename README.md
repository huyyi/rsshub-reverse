# rsshub-reverse
1. 为DIYgod/RSSHub添加了反向代理的功能：支持RSS订阅的网站可以使用RSSHub的通用参数进行内容过滤和全文输出
2. 添加了Okteto自动布署
  - 支持从webdav服务器获取.env文件（需要添加secrets`WEBDAV_AUTH`，格式为username:password）

## 添加Okteto自动布署
> 不要使用 Okteto 部署 RssHub 会被认为提供代理然后封号
1. fork本项目
2. 在github添加两个secrets：`OKTETO_NAMESPACE`和`OKTETO_TOKEN`
3. 在OKTETO添加secrets：`WEBDAV_AUTH`
4. 在Action栏下运行`deploy-on-okteto`
