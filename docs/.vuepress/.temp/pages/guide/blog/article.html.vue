<template><div><p>主题默认在 <code v-pre>/article/</code> 路径下为你提供了全部的文章列表。</p>
<!-- more -->
<h2 id="自动摘要" tabindex="-1"><a class="header-anchor" href="#自动摘要" aria-hidden="true">#</a> 自动摘要</h2>
<p>主题默认情况下只会在文章列表中展示你指定的摘要或描述。</p>
<p>如果你想要让主题自动提取摘要，请在主题选项中设置 <code v-pre>plugins.blog.autoExcerpt: true</code>。</p>
<h2 id="文章" tabindex="-1"><a class="header-anchor" href="#文章" aria-hidden="true">#</a> 文章</h2>
<p>所有文章都会默认被添加到文章列表中渲染在 <code v-pre>/article/</code> 路径下。</p>
<p><img src="@source/guide/blog/assets/article-list-light.png" alt="文章列表" data-mode="lightmode-only" loading="lazy">
<img src="@source/guide/blog/assets/article-list-dark.png" alt="文章列表" data-mode="darkmode-only" loading="lazy"></p>
<p>如果你不希望该列表包含一些特定的文章，只需在文章的 frontmatter 中将 <code v-pre>article</code> 设置为 <code v-pre>false</code>，或者你也可以通过主题选项中的 <code v-pre>plugins.blog.filter</code> 自定义哪些页面是文章。</p>
<p>如果你希望在文章列表中置顶特定文章，只需在文章的 frontmatter 中将 <code v-pre>sticky</code> 设置为 <code v-pre>true</code>。</p>
<div class="custom-container tip">
<p class="custom-container-title">置顶顺序</p>
<p>对于置顶文章，你可以将 <code v-pre>sticky</code> 设置为 <code v-pre>number</code> 来设置它们的顺序。数值大的文章会排列在前面。</p>
</div>
<h2 id="收藏文章" tabindex="-1"><a class="header-anchor" href="#收藏文章" aria-hidden="true">#</a> 收藏文章</h2>
<p>你可以通过在 frontmatter 中设置 <code v-pre>star</code> 为 <code v-pre>true</code> 收藏一个文章。收藏后，用户就可以在 <code v-pre>/star/</code> 页面中查看这些文章。</p>
<p>同时任何任何收藏的文章都会显示在博客主页侧边栏的文章栏目中。</p>
<div class="custom-container info">
<p class="custom-container-title">相关信息</p>
<p>我们提供收藏选项的考虑是: 主题使用者可能希望向访客展示一定数量的精品文章，而又不希望置顶文章充斥主页，导致用户不能看到最近更新的文章。</p>
</div>
<div class="custom-container tip">
<p class="custom-container-title">收藏顺序</p>
<p>类似置顶文章，你同样可以将 <code v-pre>star</code> 设置为 <code v-pre>number</code> 来设置它们的顺序。数值大的文章会排列在前面。</p>
</div>
<h2 id="加密与幻灯片" tabindex="-1"><a class="header-anchor" href="#加密与幻灯片" aria-hidden="true">#</a> 加密与幻灯片</h2>
<p>主题为加密文章页与幻灯片页这两个特殊页面提供了单独的列表，你可以在 <code v-pre>/encrypt/</code> 和 <code v-pre>/slide/</code> 页面查看它们。</p>
<p>同时为了帮助访问者区分，这两个类别的页面会在文章列表中用图标明确标明其类别。</p>
<p><img src="@source/guide/blog/assets/icon-type.png" alt="类别提示" loading="lazy"></p>
</div></template>


