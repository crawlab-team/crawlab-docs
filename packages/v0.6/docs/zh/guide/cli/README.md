# 命令行工具 (CLI)

命令行工具允许用户轻松管理 Crawlab，以及执行常规操作，例如上传爬虫。它是基于 Python 编写的，很容易安装。

## 安装

Crawlab 命令行工具集成于 [Crawlab SDK](https://pypi.org/project/crawlab-sdk) 。 您可以执行以下命令来安装 Crawlab 命令行工具。

```bash
pip install crawlab-sdk
```

::: warning
目前只有 beta 版本可用，因此我们必须在安装命令中注明版本。
:::

现在您可以使用命令行工具来程式化的与 Crawlab 进行交互了。

## 登陆

::: warning
您在进行其他任何操作前，**必须** 使用命令行工具登陆 Crawlab。
:::

您可以通过执行如下命令来使用命令行工具登陆 Crawlab。

```bash
crawlab-cli login --api_address <api_address> \
  --username <username> \
  --password <password>
```

- `--api_address` 或 `-a` 是 Crawlab API 地址. 默认: http://localhost:8080/api.
- `--username` 或 `-u` 是登陆用户名. 默认: admin.
- `--password` 或 `-p` 是登陆密码. 默认: admin.

## 上传

您可以用命令行工具上传爬虫。

#### 上传一个新爬虫

如果您希望上传一个新爬虫，您可以执行以下命令。

```bash
crawlab-cli upload \
  --dir <target_spider_dir> \
  [--name <spider_name>] \
  [--col_name <results_collection_name>] \
  --create
```

- `--create` 或 `-c` 即是否需要创建新爬虫. 如果没有注明, 必须注明 `--id` 或 `-i`.
- `--dir` 或 `-d` 是需要上传的爬虫目录. 默认: 当前工作目录.
- `--name` 或 `-n` 是需要创建爬虫的名称. 默认: 目录名称.
- `--col_name` 或 `-C` 是需要创建爬虫的结果储存集合名称. 默认: `results_<爬虫名称>`.
- `--cmd` or `-m` 是需要创建爬虫的执行命令. 默认: `echo "hello crawlab"`.

#### 上传到已存在爬虫

如果您希望上传到已存在爬虫，您可以执行以下命令。

```bash
crawlab-cli upload \
  --dir <target_spider_dir> \
  --id <spider_id>
```

- `--dir` 或 `-d` 是需要上传的爬虫目录. 默认: 当前工作目录.
- `--id` 或 `-i` 是需要上传爬虫的 ID.

## 配置

您可以用命令行工具查看或设置/取消设置配置。

#### 查看配置

```bash
crawlab-cli config
```

#### 设置配置项

```bash
crawlab-cli config --set <key>=<value>
```

- `--set` 或 `-s` 是需要设置的键值对配置.

#### 取消设置配置项

```bash
crawlab-cli config --unset <key>
```

- `--set` 或 `-s` 是需要取消设置的配置项的键.
