module.exports = {
    "title": "Vnotes",
    "description": "Don't be afraid of having a dream, don't stop when you want to win!",
    "dest": "public",
    "base": "/vnotes/",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ],
        ["link", { rel: "stylesheet", href: "/css/znote.css" }],
        ["link", { rel: "stylesheet", href: "/fonts/iconfont.css" }],
    ],
    "theme": "reco",
    "themeConfig": {
        "mode": "light",
        "valineConfig": {
            "appId": 'WrCISMBrRuK0wCX8W0jqmcRF-gzGzoHsz',
            "appKey": 'NBnDXsQga8OSvV7ssdRmggvQ',
        },
        "nav": [{
                "text": "首页",
                "link": "/",
                "icon": "reco-home"
            },

            {
                "text": '社区',
                "icon": 'iconfont icon-wodeshequ',
                "items": [
                    { "text": 'Gitee', "link": 'https://gitee.com/GiteeFXJ', "icon": 'iconfont icon-gitee2' },
                    { "text": 'GitHub', "link": 'https://github.com/CodingFXJ', "icon": 'reco-github' },
                    { "text": 'HexoBlog', "link": 'https://codingfxj.github.io/', "icon": 'iconfont icon-hexo' },

                ]
            },
            {
                "text": "时线",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            {
                "text": '宝箱',
                "icon": 'iconfont icon-tool-fill',
                "items": [{
                        "text": '在线编辑',
                        "items": [
                            { "text": 'JSRun', "link": 'http://jsrun.net/' },
                            { "text": 'CodePen', "link": 'https://codepen.io/' },
                            { "text": 'ProcessOn', "link": 'https://www.processon.com/' },
                        ]
                    },
                    {
                        "text": '图片相关',
                        "items": [
                            { "text": '图片素材', "link": 'https://www.pexels.com/zh-cn/' },
                            { "text": '图片压缩', "link": 'https://tinypng.com/' },
                        ]
                    },


                ]
            },
            {
                "text": '酷站',
                "icon": 'iconfont icon-lianjiedian-connection-points',
                "items": [
                    { "text": 'Vnav', "link": 'http://codingfxj.3vhost.net/index.html' },
                    { "text": '小霸王', "link": 'https://www.yikm.net/' },
                    { "text": 'CyberMap', "link": 'https://cybermap.kaspersky.com/' },
                    { "text": 'weavesilk', "link": 'http://weavesilk.com/' },
                    { "text": 'windows93', "link": 'http://www.windows93.net/' },
                    { "text": 'WebGL-Fluid', "link": 'https://paveldogreat.github.io/WebGL-Fluid-Simulation/' },

                ]
            }

        ],
        "sidebar": {
            "/docs/theme-reco/": [
                "",
                "theme",
                "plugin",
                "api"
            ],
            "sidebarDepth": 3,
        },
        // "sidebar": "auto",

        "blogConfig": {
            "category": {
                "location": 2,
                "text": "分类"
            },
            "tag": {
                "location": 3,
                "text": "标签"
            }
        },
        "type": "blog",
        "friendLink": [{
                "title": "vuepress",
                "desc": "Vue 驱动的静态网站生成器",
                "link": "https://www.vuepress.cn/"
            }, {
                "title": "午后南杂",
                "desc": "Enjoy when you can, and endure when you must.",
                "email": "1156743527@qq.com",
                "link": "https://www.recoluan.com"
            },
            {
                "title": "vuepress-theme-reco",
                "desc": "A simple and beautiful vuepress Blog & Doc theme.",
                "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                "link": "https://vuepress-theme-reco.recoluan.com"
            },
            {
                "title": "znote",
                "link": "https://zpj80231.github.io/znote/ "
            },
            {
                "title": "平凡的你我 ",
                "link": "https://reinness.com/ "
            },
            {
                "title": "月上秦少",
                "link": "https://docs.zkkysqs.top/"
            },
        ],
        // "logo": "/logo.png",
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "Last Updated",
        "author": "含光君",
        "authorAvatar": "/avatar.png",
        "startYear": "2020"
    },
    "markdown": {
        "lineNumbers": true
    },
    plugins: [
        ["vuepress-plugin-auto-sidebar"],
        ["vuepress-plugin-nuggets-style-copy", {
            copyText: "",
            tip: {
                content: "复制成功!"
            }
        }]
    ],
}