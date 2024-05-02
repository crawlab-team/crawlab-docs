import{_ as e,E as t,Z as p,$ as o,a0 as n,a3 as s,a1 as i,a4 as c}from"./framework-64cb0dab.js";const l={},u=n("h1",{id:"selenium-爬虫集成",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#selenium-爬虫集成","aria-hidden":"true"},"#"),s(" Selenium 爬虫集成")],-1),r=n("h2",{id:"selenium-简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#selenium-简介","aria-hidden":"true"},"#"),s(" Selenium 简介")],-1),d={href:"https://selenium-python.readthedocs.io/index.html",target:"_blank",rel:"noopener noreferrer"},k=c(`<h2 id="在-crawlab-中集成-selenium-爬虫" tabindex="-1"><a class="header-anchor" href="#在-crawlab-中集成-selenium-爬虫" aria-hidden="true">#</a> 在 Crawlab 中集成 Selenium 爬虫</h2><p>下面，我们将介绍如何在 Crawlab 中集成 Selenium 爬虫，并在 Crawlab 前端界面中显示抓取结果。我们将以36氪为例进行演示。</p><h3 id="创建爬虫" tabindex="-1"><a class="header-anchor" href="#创建爬虫" aria-hidden="true">#</a> 创建爬虫</h3><p>在 Crawlab 爬虫列表中，创建名为 &quot;36kr&quot; 的爬虫，执行命令为 <code>python main.py</code>。</p><h3 id="编辑爬虫文件" tabindex="-1"><a class="header-anchor" href="#编辑爬虫文件" aria-hidden="true">#</a> 编辑爬虫文件</h3><p>创建并打开 <code>main.py</code>，输入以下内容。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>chrome<span class="token punctuation">.</span>options <span class="token keyword">import</span> Options
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>common<span class="token punctuation">.</span>by <span class="token keyword">import</span> By
<span class="token keyword">from</span> crawlab <span class="token keyword">import</span> save_item

<span class="token comment"># create web driver with chrome</span>
chrome_options <span class="token operator">=</span> Options<span class="token punctuation">(</span><span class="token punctuation">)</span>
chrome_options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&#39;--headless&#39;</span><span class="token punctuation">)</span>
chrome_options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&#39;--no-sandbox&#39;</span><span class="token punctuation">)</span>
chrome_options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&#39;--disable-dev-shm-usage&#39;</span><span class="token punctuation">)</span>
browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span>options<span class="token operator">=</span>chrome_options<span class="token punctuation">)</span>

<span class="token comment"># navigate to news list page</span>
browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;https://36kr.com/information/web_news/&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># get article items</span>
items <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_elements<span class="token punctuation">(</span>by<span class="token operator">=</span>By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;.information-flow-list &gt; .information-flow-item&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># iterate items</span>
<span class="token keyword">for</span> item <span class="token keyword">in</span> items<span class="token punctuation">:</span>
    <span class="token comment"># fields</span>
    el_title <span class="token operator">=</span> item<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>by<span class="token operator">=</span>By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;.article-item-title&#39;</span><span class="token punctuation">)</span>
    title <span class="token operator">=</span> el_title<span class="token punctuation">.</span>text
    url <span class="token operator">=</span> el_title<span class="token punctuation">.</span>get_attribute<span class="token punctuation">(</span><span class="token string">&#39;href&#39;</span><span class="token punctuation">)</span>
    topic <span class="token operator">=</span> item<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>by<span class="token operator">=</span>By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;.kr-flow-bar-motif &gt; a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>text
    description <span class="token operator">=</span> item<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>by<span class="token operator">=</span>By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;.article-item-description&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>text
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        pic_url <span class="token operator">=</span> item<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>by<span class="token operator">=</span>By<span class="token punctuation">.</span>CSS_SELECTOR<span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;.article-item-pic &gt; img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get_attribute<span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span><span class="token punctuation">:</span>
        pic_url <span class="token operator">=</span> <span class="token boolean">None</span>

    <span class="token comment"># save to crawlab</span>
    save_item<span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token string">&#39;title&#39;</span><span class="token punctuation">:</span> title<span class="token punctuation">,</span>
        <span class="token string">&#39;url&#39;</span><span class="token punctuation">:</span> url<span class="token punctuation">,</span>
        <span class="token string">&#39;topic&#39;</span><span class="token punctuation">:</span> topic<span class="token punctuation">,</span>
        <span class="token string">&#39;description&#39;</span><span class="token punctuation">:</span> description<span class="token punctuation">,</span>
        <span class="token string">&#39;pic_url&#39;</span><span class="token punctuation">:</span> pic_url<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，我们定义了 Chrome 浏览器的 <code>chrome_options</code>，并需要加入以下参数。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>这很重要，否则在 Crawlab 中将无法正常运行！</p></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>chrome_options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&#39;--headless&#39;</span><span class="token punctuation">)</span>
chrome_options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&#39;--no-sandbox&#39;</span><span class="token punctuation">)</span>
chrome_options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&#39;--disable-dev-shm-usage&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，我们用 Crawlab SDK 中的 <code>save_item</code> 方法保存爬虫抓取获得的结果。</p><h3 id="运行爬虫" tabindex="-1"><a class="header-anchor" href="#运行爬虫" aria-hidden="true">#</a> 运行爬虫</h3><p>在 &quot;36kr&quot; 爬虫中运行爬虫，即可以获取得到抓取结果。</p>`,13);function m(v,b){const a=t("ExternalLinkIcon");return p(),o("div",null,[u,r,n("p",null,[n("a",d,[s("Selenium"),i(a)]),s(" 是一个用于 Web 应用程序测试的工具，但也可以用于编写 Web 爬虫。与传统的 HTTP 请求库（如 Requests）不同，Selenium 允许您模拟浏览器行为，实际上自动化浏览器来获取数据。这对于那些需要 JavaScript 渲染的动态网页非常有用。")]),k])}const _=e(l,[["render",m],["__file","selenium.html.vue"]]);export{_ as default};