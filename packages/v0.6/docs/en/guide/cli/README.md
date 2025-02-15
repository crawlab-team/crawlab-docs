# CLI

The CLI tools allow users to easily manage Crawlab and perform common actions including uploading spiders. It is written
in Python and very easy to install.

## Install

Crawlab CLI tools is integrated with [Crawlab SDK](https://pypi.org/project/crawlab-sdk). You can install Crawlab CLI
tools by executing the command below.

```bash
pip install crawlab-sdk
```

::: warning
Currently only beta version is available, so we have to install by specifying the version.
:::

Now you are able to use CLI tools to programmatically interact with Crawlab.

## Login

::: warning
You **MUST** login to Crawlab with CLI tools before performing any other actions.
:::

You can login to Crawlab with CLI tools by executing the command below.

```bash
crawlab-cli login \
  --api_address <api_address> \
  --username <username> \
  --password <password>
```

- `--api_address` or `-a` is the API address of Crawlab. Default: http://localhost:8080/api.
- `--username` or `-u` is the username of login. Default: admin.
- `--password` or `-p` is the password of login. Default: admin.

## Upload

You can upload spiders using CLI tools.

#### Upload a new spider

If you would like to upload a new spider, you can execute the command below.

```bash
crawlab-cli upload \
  --dir <target_spider_dir> \
  [--name <spider_name>] \
  [--col_name <results_collection_name>] \
  --create
```

- `--create` or `-c` is whether to create a new spider. If unspecified, `--id` or `-i` must be specified.
- `--dir` or `-d` is the parameter of the spider directory to upload. Default: current working directory.
- `--name` or `-n` is the name of the spider to create. Default: directory name.
- `--col_name` or `-C` is the result collection name of the spider to create. Default: `results_<spider_name>`.
- `--cmd` or `-m` is the execute command of the spider to create. Default: `echo "hello crawlab"`.

#### Upload to an existing spider

If you would like to upload to an exiting spider, you can execute the command below.

```bash
crawlab-cli upload \
  --dir <target_spider_dir> \
  --id <spider_id>
```

- `--dir` or `-d` is the parameter of the spider directory to upload. Default: current working directory.
- `--id` or `-i` is the id of the spider to upload.

## Config

You can view and set/unset config with CLI tools.

#### View config

```bash
crawlab-cli config
```

#### Set config

```bash
crawlab-cli config --set <key>=<value>
```

- `--set` or `-s` is the key-value pair to set in the config.

#### Unset config

```bash
crawlab-cli config --unset <key>
```

- `--set` or `-s` is the key to unset from the config.
