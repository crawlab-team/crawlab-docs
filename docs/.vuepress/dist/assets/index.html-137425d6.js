import{_ as c,E as s,Z as d,$ as h,a0 as e,a3 as t,a1 as o,a4 as r}from"./framework-64cb0dab.js";const i="/assets/notification-menu-1d353f85.png",_="/assets/email-config-7a413924.png",p="/assets/mobile-config-d191cff8.png",g="/assets/template-b6a592a1.png",m={},f=e("h1",{id:"消息通知",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#消息通知","aria-hidden":"true"},"#"),t(" 消息通知")],-1),u={class:"hint-container info"},b=e("p",{class:"hint-container-title"},"注意",-1),S={href:"https://www.crawlab.cn/prices",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,"Crawlab 允许用户接收邮件或手机消息通知。",-1),P=r('<h2 id="邮件" tabindex="-1"><a class="header-anchor" href="#邮件" aria-hidden="true">#</a> 邮件</h2><ol><li>导航到 <code>消息通知</code> 页面 <br><img src="'+i+'" alt="notifications-menu.png"></li><li>点击 <code>邮件</code> 类型的消息通知配置</li><li>填写配置表单 <br><img src="'+_+'" alt="email-config.png"></li><li>点击 <code>保存</code> 按钮</li></ol><p>SMTP 配置:</p><ul><li><strong>SMTP Server</strong>: SMTP 服务器地址</li><li><strong>SMTP Port</strong>: SMTP 服务器端口</li><li><strong>SMTP User</strong>: SMTP 服务器用户名</li><li><strong>SMTP Password</strong>: SMTP 服务器密码</li><li><strong>Sender Email</strong>: SMTP 服务器发送者邮箱</li><li><strong>Sender Identity</strong>: SMTP 服务器发送者身份</li><li><strong>To</strong>: 接收者邮箱</li><li><strong>CC</strong>: 抄送邮箱</li></ul><h2 id="移动端" tabindex="-1"><a class="header-anchor" href="#移动端" aria-hidden="true">#</a> 移动端</h2><ol><li>导航到 <code>消息通知</code> 页面 <br><img src="'+i+'" alt="notifications-menu.png"></li><li>点击 <code>移动端</code> 类型的消息通知配置</li><li>填写配置表单 <br><img src="'+p+'" alt="mobile-config.png"></li><li>点击 <code>保存</code> 按钮</li></ol>',6),T={class:"hint-container tip"},k=e("p",{class:"hint-container-title"},"提示",-1),w=e("p",null,"请参考相关文档了解如何获取 webhook token。",-1),M={href:"https://open.dingtalk.com/document/robots/custom-robot-access",target:"_blank",rel:"noopener noreferrer"},v={href:"https://developer.work.weixin.qq.com/document/path/91770",target:"_blank",rel:"noopener noreferrer"},C=r('<h2 id="触发" tabindex="-1"><a class="header-anchor" href="#触发" aria-hidden="true">#</a> 触发</h2><ol><li>导航到 <code>消息通知</code> 页面 <br><img src="'+i+'" alt="notifications-menu.png"></li><li>点击 <code>触发</code> 标签</li><li>选择需要触发的事件类型</li></ol><h2 id="模板" tabindex="-1"><a class="header-anchor" href="#模板" aria-hidden="true">#</a> 模板</h2><ol><li>导航到 <code>消息通知</code> 页面 <br><img src="'+i+'" alt="notifications-menu.png"></li><li>点击任意类型的消息通知配置</li><li>点击 <code>模板</code> 标签 <br><img src="'+g+'" alt="template.png"></li></ol>',4),E={class:"hint-container tip"},L=e("p",{class:"hint-container-title"},"提示",-1),N={href:"https://github.com/crawlab-team/template-parser",target:"_blank",rel:"noopener noreferrer"};function V(l,B){const n=s("ExternalLinkIcon"),a=s("SlideList");return d(),h("div",null,[f,e("div",u,[b,e("p",null,[t("该功能仅适用于 "),e("a",S,[t("Crawlab 专业版"),o(n)]),t("。")])]),x,o(a,{slides:l.$page.frontmatter.slides},null,8,["slides"]),P,e("div",T,[k,w,e("ul",null,[e("li",null,[e("a",M,[t("钉钉"),o(n)])]),e("li",null,[e("a",v,[t("企业微信"),o(n)])])])]),C,e("div",E,[L,e("p",null,[t("如果想了解模板语法和变量，请参考 "),e("a",N,[t("template-parser"),o(n)])])])])}const q=c(m,[["render",V],["__file","index.html.vue"]]);export{q as default};