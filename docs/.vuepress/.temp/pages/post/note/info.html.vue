<template><div><p>你可以在页面的 frontmatter 配置以下选项设置页面相关信息。</p>
<h2 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h2>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>必填: 否</li>
</ul>
<p>当前页面内容标题，默认为 Markdown 文件中的第一个 h1 标签内容。</p>
<h2 id="shorttitle" tabindex="-1"><a class="header-anchor" href="#shorttitle" aria-hidden="true">#</a> shortTitle</h2>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Required: No</li>
</ul>
<p>当前页面的短标题，会在导航栏、侧边栏和路径导航中作为首选。</p>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h2>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>必填: 否</li>
</ul>
<p>当前页面内容描述。</p>
<h2 id="icon" tabindex="-1"><a class="header-anchor" href="#icon" aria-hidden="true">#</a> icon</h2>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>必填: 否</li>
</ul>
<p>当前页面图标的 FontClass (建议填写)。</p>
<h2 id="author" tabindex="-1"><a class="header-anchor" href="#author" aria-hidden="true">#</a> author</h2>
<ul>
<li>类型: <code v-pre>Author | boolean</code></li>
<li>必填: 否</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">AuthorInfo</span> <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Author</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> AuthorInfo <span class="token operator">|</span> AuthorInfo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>作者，如果不填，则会回退到默认作者。</p>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>在主题选项中指定默认作者时，可以设置 <code v-pre>false</code> 以防止显示默认作者。</p>
</div>
<h2 id="isoriginal" tabindex="-1"><a class="header-anchor" href="#isoriginal" aria-hidden="true">#</a> isOriginal</h2>
<ul>
<li>类型: <code v-pre>boolean</code></li>
<li>默认: <code v-pre>false</code></li>
</ul>
<p>当前文章是否为原创。</p>
<h2 id="date" tabindex="-1"><a class="header-anchor" href="#date" aria-hidden="true">#</a> date</h2>
<ul>
<li>类型: <code v-pre>DateString</code></li>
<li>必填: 否</li>
<li>格式: <code v-pre>YYYY-MM-DD</code> 或 <code v-pre>YYYY/MM/DD hh:mm:ss</code></li>
</ul>
<p>写作时间。</p>
<h2 id="category" tabindex="-1"><a class="header-anchor" href="#category" aria-hidden="true">#</a> category</h2>
<ul>
<li>类型: <code v-pre>string | string[]</code></li>
<li>必填: 否</li>
</ul>
<p>分类。</p>
<h2 id="tag" tabindex="-1"><a class="header-anchor" href="#tag" aria-hidden="true">#</a> tag</h2>
<ul>
<li>类型: <code v-pre>string | string[]</code></li>
<li>必填: 否</li>
</ul>
<p>标签。</p>
<h2 id="sticky" tabindex="-1"><a class="header-anchor" href="#sticky" aria-hidden="true">#</a> sticky</h2>
<ul>
<li>类型: <code v-pre>boolean | number</code></li>
<li>默认值: <code v-pre>false</code></li>
</ul>
<p>是否在列表中置顶。当填入数字时，数字越大，排名越靠前。</p>
<h2 id="star" tabindex="-1"><a class="header-anchor" href="#star" aria-hidden="true">#</a> star</h2>
<ul>
<li>类型: <code v-pre>boolean | number</code></li>
<li>默认值: <code v-pre>false</code></li>
</ul>
<p>是否收藏在博客主题的文章列表中。当填入数字时，数字越大，排名越靠前。</p>
<h2 id="article" tabindex="-1"><a class="header-anchor" href="#article" aria-hidden="true">#</a> article</h2>
<ul>
<li>类型: <code v-pre>boolean</code></li>
<li>默认: <code v-pre>true</code></li>
</ul>
<p>是否将该文章添加至文章列表中。</p>
<h2 id="timeline" tabindex="-1"><a class="header-anchor" href="#timeline" aria-hidden="true">#</a> timeline</h2>
<ul>
<li>类型: <code v-pre>boolean</code></li>
<li>默认: <code v-pre>true</code></li>
</ul>
<p>是否将该文章添加至时间线中。</p>
<h2 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h2>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>必填: 否</li>
</ul>
<p>设置预览图 (分享图)，请填入绝对路径。</p>
<h2 id="banner" tabindex="-1"><a class="header-anchor" href="#banner" aria-hidden="true">#</a> banner</h2>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>必填: 否</li>
</ul>
<p>设置横幅图片 (宽屏分享图)，请填入绝对路径。</p>
</div></template>


