---
title: New - How do I create a figure using an image from a page bundle?
author: ''
date: '2020-12-24'
slug: new-how-do-i-create-a-figure-using-an-image-from-a-page-bundle
categories: []
tags: []
subtitle: ''
summary: ''
authors: []
lastmod: '2020-12-24T12:58:14-05:00'
featured: no
image:
  caption: ''
  focal_point: ''
  preview_only: no
projects: []
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend turpis vel ex ullamcorper, id dapibus dui scelerisque. Nulla egestas quis ante id finibus. Quisque nec eleifend magna, ac molestie dolor. Fusce porttitor magna quis dui rhoncus, eget finibus quam varius. Maecenas non velit a mauris vestibulum mollis. Fusce odio elit, finibus in consequat ornare, vehicula eleifend augue. Nulla a tortor id lorem ultricies viverra id a lectus. 

Using [blogdown::shortcode( )](https://bookdown.org/yihui/blogdown/content.html#shortcode) only goes so far as to handling Hugo shortcodes. If you need to use a fancier Hugo shortcode, perhaps comprising several shortcodes, then I believe you must go with a regular Markdown file (.md) to begin with.

Here is a custom template <strong>img</strong> to illustrate my point:

{{< img match="*example*" figure="Figure 1" caption="green" >}}

Here is the custom shortcode that rendors <strong>img</strong>.

```r
{{ $img := $.Page.Resources.GetMatch (.Get "match")}}
<figure>
        <img src='{{ $img.RelPermalink }}' alt='{{.Get "caption"}}' />
        <figcaption><strong>{{.Get "figure"}}.</strong> {{.Get "caption"}}</figcaption>
</figure>
```
