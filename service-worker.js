/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "33921baad6e5b2b9880492640601684b"
  },
  {
    "url": "assets/css/0.styles.c8c87ba4.css",
    "revision": "5c84827d54702fa01d8e2b4ae2d943fb"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.0f4a87f6.js",
    "revision": "5d572f21d5b7ee946a0d2277e9b1bc11"
  },
  {
    "url": "assets/js/10.0922c251.js",
    "revision": "eb969cbe7037c64747908406c25ddeef"
  },
  {
    "url": "assets/js/11.e871b457.js",
    "revision": "6c5ae07d9814f2e9c8f09d5ad8ed984f"
  },
  {
    "url": "assets/js/12.7258afd9.js",
    "revision": "ca5691849ae6d7563dd11215da24324c"
  },
  {
    "url": "assets/js/13.f06c504f.js",
    "revision": "d41148da65bb5db6e98fe223f38b0c35"
  },
  {
    "url": "assets/js/14.1c0ba8d1.js",
    "revision": "fea686017625acbb022fe269e83e9e54"
  },
  {
    "url": "assets/js/15.a0c8c49a.js",
    "revision": "6dccfdd2697851b319defe13e5a19000"
  },
  {
    "url": "assets/js/16.f6097818.js",
    "revision": "cfeda8129aa28ed0f73cd024aaa204b9"
  },
  {
    "url": "assets/js/17.8929833e.js",
    "revision": "fb9772af2cb7e2ae62e0854df8311125"
  },
  {
    "url": "assets/js/18.70b20ff4.js",
    "revision": "f56db5544f2ff88adcedf15235cac3ee"
  },
  {
    "url": "assets/js/19.00d4bd3a.js",
    "revision": "660d5a6cd1a6c115e6d3e5904d2f5289"
  },
  {
    "url": "assets/js/2.54df210e.js",
    "revision": "056fdd729f876c03737126a68f97b689"
  },
  {
    "url": "assets/js/20.2acd786b.js",
    "revision": "21717b263e07a7647f2512b632569957"
  },
  {
    "url": "assets/js/21.e2eb75e4.js",
    "revision": "bb6c641d4264c51a0da9849efacbea26"
  },
  {
    "url": "assets/js/22.115049d0.js",
    "revision": "f28bcaf5eb1dec7aa31373eec1e6b9fb"
  },
  {
    "url": "assets/js/23.04f40ab7.js",
    "revision": "940322a0e1f07bb0e199589bd51dc66a"
  },
  {
    "url": "assets/js/24.4fe261df.js",
    "revision": "d88ba54336e116e8c6b2891a61d5cd0f"
  },
  {
    "url": "assets/js/25.face9258.js",
    "revision": "d973aacbf8165b7107ee7af6ae12f169"
  },
  {
    "url": "assets/js/26.75590ffd.js",
    "revision": "0782ad922d344dbb8e3abf425abe77d4"
  },
  {
    "url": "assets/js/27.a307c8fa.js",
    "revision": "10132e36f1c73dbfb14008f64a87511a"
  },
  {
    "url": "assets/js/28.806d10de.js",
    "revision": "39e54796e8a5702f0cf49afa3102e858"
  },
  {
    "url": "assets/js/29.23d6f4a4.js",
    "revision": "ae34073673d1ec49807c83c9d6ea4e25"
  },
  {
    "url": "assets/js/30.a9e8a1f2.js",
    "revision": "5cc6bdcca55378a2cf1ea2e13c1b4e0d"
  },
  {
    "url": "assets/js/31.7d813f53.js",
    "revision": "6e29a02ef0f1b98457c128861ff61d1b"
  },
  {
    "url": "assets/js/32.85e8ba44.js",
    "revision": "6c008c50c354d6f680b235b954c5997a"
  },
  {
    "url": "assets/js/33.d1941823.js",
    "revision": "bd46b81da8b9eb882d8dbfdbb75462ce"
  },
  {
    "url": "assets/js/4.4efabbc0.js",
    "revision": "f7b2fa3e83c6158ff14511b43cb6af5a"
  },
  {
    "url": "assets/js/5.f427e35a.js",
    "revision": "780e50e8ff2e9f0fd49d142b6df65168"
  },
  {
    "url": "assets/js/6.31c49663.js",
    "revision": "b488062cd789b94c553c6e4939b84d98"
  },
  {
    "url": "assets/js/7.e61f263a.js",
    "revision": "dcd1d8e7e4301030fc4f20145db8245d"
  },
  {
    "url": "assets/js/8.a60142af.js",
    "revision": "d837e6b4156d0eb5ec793c34884fc8bb"
  },
  {
    "url": "assets/js/9.6b5b765f.js",
    "revision": "53a860d00e56482e502103f72b1d5c9e"
  },
  {
    "url": "assets/js/app.78107737.js",
    "revision": "7208e357e0815360dde31b082d6cecd9"
  },
  {
    "url": "avatar.png",
    "revision": "9e0cf1b286c6d2d6c4ed4a142982c7dc"
  },
  {
    "url": "blogs/frontEnd/2021/Angular1.html",
    "revision": "8b955922380b6925624c818148549882"
  },
  {
    "url": "blogs/frontEnd/2021/Angular2.html",
    "revision": "d2628c55606c165fa5113421bd09296b"
  },
  {
    "url": "blogs/frontEnd/2021/Angular3.html",
    "revision": "2b8f71c807e92331e19d4c6c764d72b6"
  },
  {
    "url": "blogs/frontEnd/2021/array_opts.html",
    "revision": "3a455fb18ee3abfcd784c5b87b0fc031"
  },
  {
    "url": "blogs/frontEnd/2021/async_await.html",
    "revision": "b19aababc1168ac23077e0b9c9514ac7"
  },
  {
    "url": "blogs/frontEnd/2021/element_table.html",
    "revision": "da57c8a6afcfe390359d6f290b48843c"
  },
  {
    "url": "blogs/frontEnd/2021/git_ssh.html",
    "revision": "0efa186b829a5b071e3c53165a1c3013"
  },
  {
    "url": "blogs/frontEnd/2021/handwriten_senior.html",
    "revision": "793afec32394ef12e382d2bfd3731381"
  },
  {
    "url": "blogs/frontEnd/2021/JS_senior.html",
    "revision": "203f8cb6b25b65742fea7a376ba1d740"
  },
  {
    "url": "blogs/frontEnd/2021/js_sort.html",
    "revision": "8f5caa1a4cd58d818ee4af954d7314fb"
  },
  {
    "url": "blogs/frontEnd/2021/npm_notes.html",
    "revision": "3eea9d12891fa1c4591187ebb0509224"
  },
  {
    "url": "blogs/frontEnd/2021/promise.html",
    "revision": "f98c157bf493484e01b7c2df2cc3062f"
  },
  {
    "url": "blogs/frontEnd/2021/terminal.html",
    "revision": "9ae82ef5c4f61cf5128d7a61e882cfe8"
  },
  {
    "url": "blogs/frontEnd/2021/tsstudy.html",
    "revision": "8b3c5f88f91fc0781aa65c9e093f5031"
  },
  {
    "url": "blogs/frontEnd/2021/vnote.html",
    "revision": "d2a9ab2e7abba9244922ec6afef4de98"
  },
  {
    "url": "blogs/frontEnd/2021/VuepressAutoCommit.html",
    "revision": "6f6e16fdbf6f89c2da037c51a4ec1b81"
  },
  {
    "url": "blogs/frontEnd/2022/echarts.html",
    "revision": "74fef832309da94c19f86762fd68e542"
  },
  {
    "url": "blogs/frontEnd/2022/MongoDB.html",
    "revision": "3a6b710397d454aa43fbc49610909533"
  },
  {
    "url": "blogs/frontEnd/2022/Nodejs.html",
    "revision": "d68f4655cf6cbf8ca04c7784c407052b"
  },
  {
    "url": "blogs/frontEnd/2022/react01.html",
    "revision": "af24556dffb93675dcd5786386decf3c"
  },
  {
    "url": "categories/index.html",
    "revision": "db560a37bf1d8977e2a0dded0117eaf3"
  },
  {
    "url": "categories/前端基础/index.html",
    "revision": "007a5bf83ab0cabe74ac8d6b1e62a94d"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "866464d0ed2b4add7f975f84f53e779c"
  },
  {
    "url": "categories/后端学习/index.html",
    "revision": "4fd6a445007c8215bd079c385210f7d5"
  },
  {
    "url": "categories/踩坑积累/index.html",
    "revision": "1e6890bc62d4b45efd10c5cdd6a0f00d"
  },
  {
    "url": "css/znote.css",
    "revision": "4d63fe30b28a28bc914ee3df925355fc"
  },
  {
    "url": "fonts/iconfont.css",
    "revision": "10b79f432c92a0ceb0beea4710b99bee"
  },
  {
    "url": "fonts/iconfont.js",
    "revision": "292dfb4f28a4f76de893bc2812d9a137"
  },
  {
    "url": "fonts/iconfont.ttf",
    "revision": "dc2cc1f9a42325b98ee8e446dee5b5e2"
  },
  {
    "url": "fonts/iconfont.woff",
    "revision": "f03c4a59a9dfac313eb4a0788443bda1"
  },
  {
    "url": "fonts/iconfont.woff2",
    "revision": "35f2db7ef28e1ada5cd9cbd1d7609ffb"
  },
  {
    "url": "head.jpg",
    "revision": "8eeef30c4646f3ac50f483029cef9f5f"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "5ddcd36bf752ba3953b27d9cc657cfc2"
  },
  {
    "url": "js/myjs.js",
    "revision": "1940fed841c891f031a4e8e9ee4616bd"
  },
  {
    "url": "logo.png",
    "revision": "aeea480d9c271fc3a8a47e0b82641bec"
  },
  {
    "url": "tag/Angular/index.html",
    "revision": "1cc3a3eb4e20ec457188803ce8cf09cf"
  },
  {
    "url": "tag/Echarts/index.html",
    "revision": "42269dc7ffbf0589a7109bbc6d127d1e"
  },
  {
    "url": "tag/ElementUI/index.html",
    "revision": "e37cc88d124398b48ce5a1390873f590"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "1897574beee59c8c0ff89eb8d45eb5f0"
  },
  {
    "url": "tag/index.html",
    "revision": "a0dffe84d0d1d964ccdaabdf9b0fd1b8"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "802f809ce5d7eeb969a165b7eb51993e"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "041a967dfc7fb08d4bb08715c576d6ee"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "a8b3b60f751757c3cf82cbffccf99b0c"
  },
  {
    "url": "tag/NPM/index.html",
    "revision": "a59b521bfb7292ed89507b16b4d0b2dc"
  },
  {
    "url": "tag/Promise/index.html",
    "revision": "dd641408e03dbc264cd63dbc78d2c0ac"
  },
  {
    "url": "tag/React/index.html",
    "revision": "c71ee3f564d7209d0c948869e2dd4e84"
  },
  {
    "url": "tag/Terminal/index.html",
    "revision": "950bf4f908500cb409979be882288d2e"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "b4f3d12a55c205b1fd6883786f743639"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "c4f2481e3c723a79c09122142cbf7a57"
  },
  {
    "url": "tag/排序算法/index.html",
    "revision": "58863ecc76a17d8668c77d9282420a32"
  },
  {
    "url": "tag/数组处理/index.html",
    "revision": "afee59b93ff009426b73262dabb1629e"
  },
  {
    "url": "timeline/index.html",
    "revision": "ca028db575c858467804ab53f26a2752"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
