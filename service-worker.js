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
    "revision": "9dbe27ebee18f7a9b763b99f55242819"
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
    "url": "assets/js/11.7c81151d.js",
    "revision": "5d6f60c4d4887fd0c3092cedb9020697"
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
    "url": "assets/js/2.01948185.js",
    "revision": "6fbf22e85965b84b5939c395cc84d3b8"
  },
  {
    "url": "assets/js/20.a34bbc52.js",
    "revision": "4556f1a2bd4914417c6a1e4106108632"
  },
  {
    "url": "assets/js/21.d38d6131.js",
    "revision": "4cea047ed07a80dfd83ae09069d47f0a"
  },
  {
    "url": "assets/js/22.7bbc7809.js",
    "revision": "65e08e66f16fa0dffae1313b12073d7c"
  },
  {
    "url": "assets/js/23.b0d83e76.js",
    "revision": "44dea2b256679430a2d6c4a6ae26424a"
  },
  {
    "url": "assets/js/24.4a43d0c7.js",
    "revision": "3369a9d9eb317b1a7ff994644a25d61e"
  },
  {
    "url": "assets/js/25.039164b1.js",
    "revision": "65f8cbdcb9d96760e6eb7aae7c64beb1"
  },
  {
    "url": "assets/js/26.fe58aef5.js",
    "revision": "09f8b33112ea6efe779841efdf4badcf"
  },
  {
    "url": "assets/js/27.212bb656.js",
    "revision": "91f245769b7f40f9c06103ce9224f114"
  },
  {
    "url": "assets/js/28.7c6cb9b2.js",
    "revision": "a944b185434f8522ab381e6105566f81"
  },
  {
    "url": "assets/js/29.5305bfec.js",
    "revision": "af6fded00c5d9568d9e5bcc1eef8969d"
  },
  {
    "url": "assets/js/30.e74ce870.js",
    "revision": "d1609b70f17aec1ab1e08fc616fedd87"
  },
  {
    "url": "assets/js/31.74d24d82.js",
    "revision": "03f0e1a51a4c7342583d1730de0f3efc"
  },
  {
    "url": "assets/js/32.f1db5a0b.js",
    "revision": "2985cacd5431b06e68d7d461cbe85caf"
  },
  {
    "url": "assets/js/33.6efa7cfe.js",
    "revision": "5b0f61985850fdb33a0a52e2f28de2b8"
  },
  {
    "url": "assets/js/34.3baffbbf.js",
    "revision": "c4a150d0e9b8597c49f09c30cf53d0c4"
  },
  {
    "url": "assets/js/35.fec7c189.js",
    "revision": "235520a92cb923f2bd9ccd5060a39923"
  },
  {
    "url": "assets/js/36.30c77fba.js",
    "revision": "ec70b7cee645b60ff2e99a2325348f97"
  },
  {
    "url": "assets/js/37.eabb4970.js",
    "revision": "8ad1ff0ee1d4ebae986a9b6813a8edc8"
  },
  {
    "url": "assets/js/38.45c55ab5.js",
    "revision": "19f4ab34208650fceae6cf4437a17637"
  },
  {
    "url": "assets/js/39.9ce21e96.js",
    "revision": "b71bb7dee2d0cfce55f2ce378e972e06"
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
    "url": "assets/js/9.39e4f367.js",
    "revision": "72fdf35733b66e0339581eedd7a7421a"
  },
  {
    "url": "assets/js/app.26077e78.js",
    "revision": "adb2447fcd0ee69ba8c350654b53e112"
  },
  {
    "url": "avatar.png",
    "revision": "9e0cf1b286c6d2d6c4ed4a142982c7dc"
  },
  {
    "url": "blogs/frontEnd/2021/Angular1.html",
    "revision": "0c531a84da76d94a5d8d7dc420de970c"
  },
  {
    "url": "blogs/frontEnd/2021/Angular2.html",
    "revision": "568796ac672cb115d72845cf07e5c189"
  },
  {
    "url": "blogs/frontEnd/2021/Angular3.html",
    "revision": "b4e99fee7818aa87fff3706684ce2da8"
  },
  {
    "url": "blogs/frontEnd/2021/array_opts.html",
    "revision": "2a87a84a549f75060f89163c03605f58"
  },
  {
    "url": "blogs/frontEnd/2021/async_await.html",
    "revision": "07bfe8329ce457321b3cb00b3fc6a66f"
  },
  {
    "url": "blogs/frontEnd/2021/basis01.html",
    "revision": "050294d80c66c0f2a40c69a3863cb81e"
  },
  {
    "url": "blogs/frontEnd/2021/basis02.html",
    "revision": "d86cdfad586f3fe38cdb18f43e9a9f8c"
  },
  {
    "url": "blogs/frontEnd/2021/element_table.html",
    "revision": "9048fdc66d5030971a3f34afff21b45c"
  },
  {
    "url": "blogs/frontEnd/2021/git_ssh.html",
    "revision": "992fe01c337a781332321be56ecdec81"
  },
  {
    "url": "blogs/frontEnd/2021/handwriten_senior.html",
    "revision": "0ddf45d56837a2909f259a37d5b2b11b"
  },
  {
    "url": "blogs/frontEnd/2021/JS_senior.html",
    "revision": "3a5208e9ae5d2afa213800e5b762f577"
  },
  {
    "url": "blogs/frontEnd/2021/js_sort.html",
    "revision": "ded385b5b46427f8b6f56a0d5b238d38"
  },
  {
    "url": "blogs/frontEnd/2021/npm_notes.html",
    "revision": "390e684efc1c204afeb168a81157d425"
  },
  {
    "url": "blogs/frontEnd/2021/promise.html",
    "revision": "0fe2bae0054498479f8c71bb9c50abdb"
  },
  {
    "url": "blogs/frontEnd/2021/terminal.html",
    "revision": "c15952f3ff3c9b27c0aad44c4bfccf27"
  },
  {
    "url": "blogs/frontEnd/2021/tsstudy.html",
    "revision": "5130a802c4410107f528aa901d18288a"
  },
  {
    "url": "blogs/frontEnd/2021/vnote.html",
    "revision": "954868f061b311f6719d347e2d74b623"
  },
  {
    "url": "blogs/frontEnd/2021/VuepressAutoCommit.html",
    "revision": "5a2e22b7a116eed1c03c961159d052ae"
  },
  {
    "url": "blogs/frontEnd/2022/antv-sttudy.html",
    "revision": "bd5db4e746edb1d53012c2386e42f036"
  },
  {
    "url": "blogs/frontEnd/2022/antv01.html",
    "revision": "4ec33776fc0c6a111e58c2f9f2cf823f"
  },
  {
    "url": "blogs/frontEnd/2022/deletedtopre.html",
    "revision": "311df44325477b378acb2902c07d8cef"
  },
  {
    "url": "blogs/frontEnd/2022/echarts.html",
    "revision": "5ad21ca69f782c0257a901b13cb9e564"
  },
  {
    "url": "blogs/frontEnd/2022/MongoDB.html",
    "revision": "50bc70126d98e45431caabb9b3e2719a"
  },
  {
    "url": "blogs/frontEnd/2022/Nodejs.html",
    "revision": "e8d333e0621799b9047084687ea860b1"
  },
  {
    "url": "blogs/frontEnd/2022/react01.html",
    "revision": "8b7578ff7a4a8534edf5f6423e89d3a0"
  },
  {
    "url": "blogs/frontEnd/2022/vuekeng01.html",
    "revision": "58cb53a3ba52bf9de655c8c991d0a489"
  },
  {
    "url": "categories/index.html",
    "revision": "5bdd5c18f2ae6b72fea6cde41e0b0ea3"
  },
  {
    "url": "categories/前端基础/index.html",
    "revision": "9a7902df84c114d61c7cd7a54c489743"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "d5fe2a89e7123a8ee71a59023ee46178"
  },
  {
    "url": "categories/后端学习/index.html",
    "revision": "d81479e4059e202b4ddce32e6da07aa2"
  },
  {
    "url": "categories/踩坑积累/index.html",
    "revision": "e10f5459128a1451874c3d362c641790"
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
    "revision": "7d918831eca84fdbfc6be3054cfab354"
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
    "revision": "c839ae7ad34ab32966f580919162fb3f"
  },
  {
    "url": "tag/AntV/index.html",
    "revision": "0d56daa905f7276753f9b96945a0dce8"
  },
  {
    "url": "tag/Echarts/index.html",
    "revision": "37b856e95b01f41a8ab0a1f7ea8ba85f"
  },
  {
    "url": "tag/ElementUI/index.html",
    "revision": "e585dfaf0e26b14c9b2714d3dcd67a08"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "757c33e15c4ce84d7a834195b4b2a56a"
  },
  {
    "url": "tag/index.html",
    "revision": "512543bd9fd0fe8a6970ee452b344496"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "b7459f4d7571daa2d99d423b9a031b25"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "77596b9d5553498962f02977fac51589"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "33797548cb920d3d632b751aa72078d8"
  },
  {
    "url": "tag/NPM/index.html",
    "revision": "e1e3d8fe24698f6712468531f740d224"
  },
  {
    "url": "tag/Promise/index.html",
    "revision": "c769c3e7d33695bb5931767798a45520"
  },
  {
    "url": "tag/React/index.html",
    "revision": "d4e2063ecc5e06e9e2eba0248c6b8d66"
  },
  {
    "url": "tag/Terminal/index.html",
    "revision": "4df243ad4ed774ca9ace4b0365f74c8f"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "dc96d0c3fd6ab55b2857d9906855ca50"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "9d18ac03e96567a51520a3b1004e6e7d"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "b9bec088974008746429ab2c0a1caf66"
  },
  {
    "url": "tag/排序算法/index.html",
    "revision": "9c0cf167874a404fdfc73c3f8f481006"
  },
  {
    "url": "tag/数组处理/index.html",
    "revision": "b5ee49d87595e479821f4f1339e6defc"
  },
  {
    "url": "timeline/index.html",
    "revision": "cc91bb944af7cda0ffefde355de14f95"
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
