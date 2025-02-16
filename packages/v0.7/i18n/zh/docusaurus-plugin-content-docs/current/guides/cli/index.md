

# CLI

CLI 工具允许用户轻松管理 Crawlab 并执行包括上传爬虫在内的常见操作。它用 Python 编写，安装非常简单。

## 安装

Crawlab CLI 工具与 [Crawlab SDK](https://pypi.org/project/crawlab-sdk) 集成。您可以通过执行以下命令来安装 Crawlab CLI 工具。

```bash
pip install crawlab-sdk
```

:::warning
目前只有测试版可用，所以我们必须指定版本进行安装。
:::

现在您可以使用 CLI 工具以编程方式与 Crawlab 交互。

## 登录

:::warning
在执行任何其他操作之前，您**必须**使用 CLI 工具登录到 Crawlab。
:::

您可以通过执行以下命令使用 CLI 工具登录到 Crawlab。

```bash
crawlab-cli login \
  --api_address <api_address> \
  --username <username> \
  --password <password>
```

- `--api_address` 或 `-a` 是 Crawlab 的 API 地址。默认值：http://localhost:8080/api。
- `--username` 或 `-u` 是登录的用户名。默认值：admin。
- `--password` 或 `-p` 是登录的密码。默认值：admin。

## 上传

您可以使用 CLI 工具上传爬虫。

#### 上传新爬虫

如果您想上传一个新爬虫，可以执行以下命令。

```bash
crawlab-cli upload \
  --dir <target_spider_dir> \
  [--name <spider_name>] \
  [--col_name <results_collection_name>] \
  --create
```

- `--create` 或 `-c` 是否创建新爬虫。如果未指定，则必须指定 `--id` 或 `-i`。
- `--dir` 或 `-d` 是要上传的爬虫目录的参数。默认值：当前工作目录。
- `--name` 或 `-n` 是要创建的爬虫名称。默认值：目录名称。
- `--col_name` 或 `-C` 是要创建的爬虫的结果集合名称。默认值：`results_<spider_name>`。
- `--cmd` 或 `-m` 是要创建的爬虫的执行命令。默认值：`echo "hello crawlab"`。

#### 上传到现有爬虫

如果您想上传到一个已存在的爬虫，可以执行以下命令。

```bash
crawlab-cli upload \
  --dir <target_spider_dir> \
  --id <spider_id>
```

- `--dir` 或 `-d` 是要上传的爬虫目录的参数。默认值：当前工作目录。
- `--id` 或 `-i` 是要上传的爬虫的 ID。

## 配置

您可以使用 CLI 工具查看和设置/取消设置配置。

#### 查看配置

```bash
crawlab-cli config
```

#### 设置配置

```bash
crawlab-cli config --set <key>=<value>
```

- `--set` 或 `-s` 是要在配置中设置的键值对。

#### 取消设置配置

```bash
crawlab-cli config --unset <key>
```

- `--set` 或 `-s` 是要从配置中取消设置的键。