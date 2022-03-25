# rsshub-reverse
1. 为DIYgod/RSSHub添加了反向代理的功能，已经有RSS订阅的网站可以使用RSSHub的通用参数进行内容过滤
2. 添加了Okteto自动布署

## 添加Okteto自动布署
1. fork本项目
2. 添加两个secrets：`OKTETO_NAMESPACE`和`OKTETO_TOKEN`
3. 在Action栏下运行`deploy-on-okteto`
