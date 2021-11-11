# 爬虫

在 Crawlab 中，爬虫是网络爬虫程序的基本单位。您可以将其看作一个爬虫软件项目，它由代码文件组成，例如 Scrapy 项目。请注意，这里提到的 *项目* 与 Crawlab 中的基础概念 [项目](./project) 是不同的。

::: info
*爬虫* 这个概念在 Crawlab 非常重要，因此我们强烈推荐您仔细阅读这一章节。
:::

## 典型流程

以下是用户在 Crawlab 操作爬虫的典型流程。

@startuml
!theme amiga

(*) -right-> "创建爬虫"
-right-> "上传爬虫"
-right-> "运行爬虫"
-right-> "查看结果"
-right-> (*)

@enduml

## 创建爬虫

1. 导航到 `Spiders` 页面，再点击左上方的 `New Spider` 按钮
2. 输入 `Name`、`Command` 等相关信息
3. 点击 `Confirm`

## 上传爬虫

有几种上传爬虫文件的方式。

### 上传目录
1. 导航到爬虫详情页
2. 点击 `Files` 标签
3. 点击导航条上的 `Upload` 按钮
4. 选择 `Folder`
5. 点击 `Click to Select Folder to Upload`.
6. 选择爬虫文件所在目录
7. 点击 `Confirm`.

### 上传文件
1. 导航到爬虫详情页
2. 点击 `Files` 标签
3. 点击导航条上的 `Upload` 按钮
4. 选择 `Files`
5. 拖拽爬虫文件到放置区，或直接点击放置区并选择爬虫文件
6. 点击 `Confirm`

### 上传文件 (拖拽)
1. 导航到爬虫详情页
2. 点击 `Files` 标签
3. 拖拽爬虫文件或目录到左侧导航栏的目录里

## 运行爬虫

您可以根据以下步骤来运行爬虫
1. 如果您在爬虫详情页，点击导航条上名为 `Run` 的播放按钮
2. 如果您在 `Spiders` 页面，点击右侧名为 `Run` 的播放按钮
3. 选择合适的爬虫运行设置
4. 点击 `Confirm`

之类是爬虫运行设置的解释。
- `Command`: 将被实际运行的 cmd/bash/shell 基础命令
- `Param`: 被传入 `Command` 的参数
- `Mode`: 运行模式，默认为 `Random Node`.
- `Priority`: 任务优先级，默认为 5

## 实体关系

@startuml
!theme amiga

rectangle "爬虫" as s
rectangle "项目" as p
rectangle "任务" as t
rectangle "定时任务" as sch

s "n" *-left- "1" p
s "1" *-right- "n" t
s "1" *-down- "n" sch

@enduml
