# 环境准备

### 确保本地已正确安装 node 环境

nodejs 官网下载安装包：https://nodejs.org/en/
也可以使用 nvm 来做版本管理：https://github.com/nvm-sh/nvm
如已安装 nvm，可在项目目录下使用`nvm use`来快速将 node 版本同步至开发推荐版本。

### 配置测试环境以太坊

浏览器安装 matemask 插件，并注册使用一个开发 wallet：https://metamask.io/
在 metamask 设置中添加 localhost 的开发网络环境配置：
网络名称：Localhost 8545
新增 RPC URL：http://localhost:8545
链 ID：1337
货币符号：ETH

### 个人私钥写入 env

在项目目录下的.env 文件(没有的话请创建)中输入 metamask 的地址和私钥，
具体的 key 在.env.example 中有示例。如果有修改`.env`文件内容,请运行命令进行同步`npm run update:env`

# 使用 localhost 环境

### 安装项目依赖

```bash
cd project-pepper
npm run setup
```

### 运行合约 node 服务

```bash
npm run backend:start
```

### 部署合约

terminal 新开窗口

```bash
# 部署到localhost
npm run backend:deploy:local

# 部署到goerli
npm run backend:deploy:goerli
```

部署前会自动打包，打包内容写入`backend/artifacts`里，同时合约地址和打包结果也会备份至`frontend/contracts`下以便前端调用。

### 启动前端项目

terminal 新开窗口,启动前端页面

```bash
# 对应部署到localhost的合约
npm run frontend:dev:local

# 对应部署到goerli的合约
npm run frontend:dev:goerli
```

# goerli 执行 mint 脚本

详细步骤见参考文档 https://rounded-peony-e3f.notion.site/7-NFT-development-797d471bdc7546019d9ceecee8fb9a13

# quickStart - Goerli

1. 配置环境：在该目录中新建.env 文件，根据 env.examples 文件中的内容进行补齐
2. 合约编译：`npm run backend:compile`编译合约文件会在项目目录中生成 artifacts，将生成的`backend/artifacts/contracts/TripNFT.sol/TripNFT.json`内容，拷贝至`frontend/src/contracts/TripNFT.json`中
3. 合约部署：`npm run backend:deploy:goerli`生成的合约地址拷贝至`frontend/src/contracts/contract-address.json`中的`TripNFT`属性
4. 启动 web：`npm run frontend:dev:goerli`启动前端应用
5. 进行铸币过程中提示 gas out 请在钱包交易时修改 gas limit = 300000

# 前端发布

- [01.Deploy_FrontEnd](./docs/01.Deploy_FrontEnd.md)

# 如需debug sst

1. 在根目录的`.vscode`文件夹新建`launch.json`文件
2. 在文件中加入

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug SST Start",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/sst",
      "runtimeArgs": ["start", "--increase-timeout"],
      "console": "integratedTerminal",
      "skipFiles": ["<node_internals>/**"],
      "env": {}
    }
  ]
}
```

# 关于前端i18n使用规范

1. 为每个页面每个语言设置单独的翻译JSON包。现有common/home，后续为mint也等新增语言包
2. 每个新增的语言包在i18n/index.js抛出翻译方法。如t_common/t_home，对于与common/home语言包
3. 给翻译方法t_common/t_home传入翻译的key以获取i18n内容

```javascript
t_common("guide_text_3");
t_home("successful");
```
