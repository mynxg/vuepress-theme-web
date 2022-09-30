<template><div><p><code v-pre>vuepress-theme-hope</code> 允许你启用博客风格的首页。</p>
<p>你需要在相应的页面的 frontmatter 中，设置 <code v-pre>home: true</code> 和 <code v-pre>layout: Blog</code> 来使用博客主页。</p>
<!-- more -->
<p><img src="@source/guide/blog/assets/blog-light.png" alt="首页截图" data-mode="lightmode-only" loading="lazy">
<img src="@source/guide/blog/assets/blog-dark.png" alt="首页截图" data-mode="darkmode-only" loading="lazy"></p>
<h2 id="frontmatter-选项" tabindex="-1"><a class="header-anchor" href="#frontmatter-选项" aria-hidden="true">#</a> Frontmatter 选项</h2>
<h3 id="hero" tabindex="-1"><a class="header-anchor" href="#hero" aria-hidden="true">#</a> hero</h3>
<ul>
<li>类型: <code v-pre>boolean</code></li>
<li>默认: <code v-pre>true</code></li>
</ul>
<p>是否显示主页的图标与描述。主页的图标、描述设置同 <RouterLink to="/guide/layout/home.html">默认主页</RouterLink>。</p>
<h3 id="bgimage" tabindex="-1"><a class="header-anchor" href="#bgimage" aria-hidden="true">#</a> bgImage</h3>
<ul>
<li>类型: <code v-pre>string | false</code></li>
</ul>
<p>背景图片的地址，需填写绝对路径。如果不填写，会自动应用一张默认的风景图片。</p>
<h3 id="bgimagestyle" tabindex="-1"><a class="header-anchor" href="#bgimagestyle" aria-hidden="true">#</a> bgImageStyle</h3>
<ul>
<li>类型: <code v-pre>Record&lt;string, string&gt;</code></li>
</ul>
<p>背景图片的 CSS 样式。</p>
<h3 id="heroimagestyle" tabindex="-1"><a class="header-anchor" href="#heroimagestyle" aria-hidden="true">#</a> heroImageStyle</h3>
<ul>
<li>类型: <code v-pre>Record&lt;string, string&gt;</code></li>
</ul>
<p>首页图标的 CSS 样式</p>
<h3 id="herofullscreen" tabindex="-1"><a class="header-anchor" href="#herofullscreen" aria-hidden="true">#</a> heroFullScreen</h3>
<ul>
<li>类型: <code v-pre>boolean</code></li>
<li>默认: <code v-pre>false</code></li>
</ul>
<p>是否全屏显示 Hero</p>
<h3 id="项目" tabindex="-1"><a class="header-anchor" href="#项目" aria-hidden="true">#</a> 项目</h3>
<ul>
<li>类型: <code v-pre>ProjectOption[]</code></li>
</ul>
<p><code v-pre>ProjectOption</code> 包括以下键值:</p>
<ul>
<li>
<p><code v-pre>name</code>: 项目名称，必填</p>
</li>
<li>
<p><code v-pre>link</code>: 项目链接，必填，填入外部链接或绝对路径。</p>
</li>
<li>
<p><code v-pre>desc</code>: 项目描述，选填</p>
</li>
<li>
<p><code v-pre>icon</code>: 图标，可填入完整路径或绝对路径的图片链接、图标 FontClass 等。</p>
<p>同时提供了如下内置图标支持: <code v-pre>&quot;link&quot;</code>、<code v-pre>&quot;project&quot;</code>、<code v-pre>&quot;book&quot;</code>、<code v-pre>&quot;article&quot;</code>、<code v-pre>&quot;friend&quot;</code></p>
</li>
</ul>
</div></template>


