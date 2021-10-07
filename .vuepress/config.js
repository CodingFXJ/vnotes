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
        "nav": [{
                "text": "首页",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "时间线",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            {
                "text": "文档",
                "icon": "reco-message",
                "items": [{
                    "text": "vuepress-reco",
                    "link": "/docs/theme-reco/"
                }]
            },
            {
                "text": "社交",
                "icon": "reco-message",
                "items": [{
                        "text": "GitHub",
                        "link": "https://github.com/recoluan",
                        "icon": "reco-github"
                    },
                    {
                        "text": "GitHub",
                        "link": "https://github.com/recoluan",
                        "icon": "reco-github"
                    },
                ]
            }
        ],
        "sidebar": {
            "/docs/theme-reco/": [
                "",
                "theme",
                "plugin",
                "api"
            ]
        },
        "type": "blog",
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
        "友链": [{
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
            }
        ],
        "logo": "/logo.png",
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "Last Updated",
        "author": "含光君",
        "authorAvatar": "/avatar.png",
        "record": "xxxx",
        "startYear": "2020"
    },
    "markdown": {
        "lineNumbers": true
    },
    plugins: [
        ["vuepress-plugin-nuggets-style-copy", {
            copyText: "",
            tip: {
                content: "复制成功!"
            }
        }]
    ],
}