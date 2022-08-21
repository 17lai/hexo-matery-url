# hexo-matery-url

a simple matery url card display plugin for hexo. Modified formed hexo-vulkyr-url

## install

``` shell
npm install hexo-matery-url
```

notice! You have to included this css your own!

```css
.vkr-url-wrapper {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid;
    border-color: #eee #ddd #bbb;
    box-shadow: rgba(0,0,0,.14) 0 1px 3px;
    margin-bottom: 10px;
    display: flex;
}
.vkr-url-wrapper .desc-wrapper > hr {
    margin: 10px 0;
    height: 1px;
}
.vkr-url-wrapper .avatar {
    width: 150px !important;
    height: 150px !important;
    border: solid 1px #eee;
    box-shadow: none !important;
    margin: 0;
    margin-right: 10px;
}
.vkr-url-wrapper h2 {
    border: none;
    margin: 0;
    padding: 0;
}
.vkr-url-wrapper .desc-wrapper {
    flex: 1;
}
.vkr-url-wrapper .desc-wrapper a {
    font-size: 22px;
    font-weight: 700;
}

```

## usage
`{% valkyrurl [url=http://example.com] [otherOpt=value] %}`

## options
options are formed like `[key=value]` (bracket included)

supported options are:
- `avatar` image that describe your link (optional)
- `title` title
- `desc` description
- `url` destination when you click image url or title

## example
```
{% valkyrurl
[url=https://github.com/toastsgithub/valkyr-ssh]
[title="valkyr ssh manager"]
[avatar=http://images2.dzmtoast.top/post-cover/github-logo_hub2899c31b6ca7aed8d6a218f0e752fe4_46649_1200x1200_fill_box_center_2.png]
[desc="valkyr-ssh, a simple commandline tool to help you store ssh login address"]
%}
```

**example above will produce this in your article**
![a03be6ca-5d5d-9d90-3c73-7011a891e903.png](http://images2.dzmtoast.top/blog-content/a03be6ca-5d5d-9d90-3c73-7011a891e903.png)


🚨 **Attention please**
if your option value contains whitespace, you should quote value with `""`

i.e. : [title="my name is peter"] instead of [title=my name is peter]

cause in latter case, hexo will split it into different arguments: `[title=my`(arg1), `name`(arg2), `is`(arg3), `peter]`(arg4)

## demo

new matery url: [appotry's blog](https://blog.17lai.site/posts/253706ff/#%E7%A7%81%E6%9C%89Nas)
vulkyr url: [zmou's blog](https://blog.dzmtoast.top/about)
