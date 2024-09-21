const path = require('path')
const fs = require('hexo-fs')
const { promisify } = require('util')
const url_for = require('hexo-util').url_for.bind(hexo)

const STYLE_PATH = path.resolve(__dirname, './style.css')
const REG_NAMED_ARG = new RegExp(/\[([^=]+)=(.+)\]/)

hexo.extend.tag.register(`valkyrurl`, function(args, content){
    
    const opts = {}
    args.forEach(arg => {
        const matched = arg.match(REG_NAMED_ARG)
        opts[matched[1]] = matched[2]
    })
    const data = {
        title: opts.title || opts.url,
        url: opts.url,
        desc: opts.desc,
        // TODO: Support default image or failed image placeholder
        avatar: opts.avatar
    }
    
    // 使用字符串拼接生成 HTML
    const html = `
    <div class="vkr-url-wrapper">
        ${data.avatar ? `<a href="${data.url}"><img class="avatar" src="${data.avatar}"></a>` : ''}
        <div class="desc-wrapper">
            <a href="${data.url}">${data.title}</a>
            <hr />
            <div class="desc">${data.desc}</div>
        </div>
    </div>
    `

    return html
}, {
    async: false // 由于不再使用异步渲染，设置为 false
})
