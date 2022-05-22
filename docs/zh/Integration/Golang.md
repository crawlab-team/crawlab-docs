## 与通用 Golang 爬虫集成

在使用 Golang 爬虫时，请保证您在 Crawlab 环境里安装了 Golang 的运行环境。如何安装请参考 [节点-安装章节](../Node/Installation.md)。

创建 `go.mod`，输入以下内容， 加入 SDK 依赖。

```
module package_name

go 1.13

require (
	github.com/crawlab-team/crawlab-go-sdk v0.0.6
)
```

创建一个 `main.go` 文件，输入以下内容

```go
package main

// 引入 SDK 依赖
import (
  "fmt"
  "github.com/crawlab-team/crawlab-go-sdk"
	"github.com/crawlab-team/crawlab-go-sdk/entity"
)

func main() {
  // 创建 Item, 此处 entity.Item 实际为 map[string]interface{}
  item := entity.Item{}
  item["url"] = "http://example.com"
  item["title"] = "test"
  
  // 调用 SaveItem 保存结果到 Crawlab
  if err := crawlab.SaveItem(item); err != nil {
    fmt.Println("error: " + err.Error())
    return
  }
  
  return
}
```

在爬虫详情的 “执行命令” 输入 `go run main.go`。

然后，启动爬虫，运行完成之后，您就应该能看到抓取结果出现在 **任务详情-结果** 里。