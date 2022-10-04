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
    "revision": "71a0d00523a9a216a41dcca1b63dbe4c"
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
    "url": "assets/js/20.5ce29de2.js",
    "revision": "0d62595300ffd090e0110d1b344b4a68"
  },
  {
    "url": "assets/js/21.a63a7067.js",
    "revision": "947ef32f9d794d3b4329cf526e9447cf"
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
    "url": "assets/js/app.057ebec9.js",
    "revision": "bee045d7051ee431be05316267ed037f"
  },
  {
    "url": "avatar.png",
    "revision": "9e0cf1b286c6d2d6c4ed4a142982c7dc"
  },
  {
    "url": "blogs/frontEnd/2021/Angular1.html",
    "revision": "8b1207da943430776b028e6010aac2e3"
  },
  {
    "url": "blogs/frontEnd/2021/Angular2.html",
    "revision": "77a0faf068300afab75164f36012d2c2"
  },
  {
    "url": "blogs/frontEnd/2021/Angular3.html",
    "revision": "bc5bfc02b6a2b356cf030678053dd052"
  },
  {
    "url": "blogs/frontEnd/2021/array_opts.html",
    "revision": "ace7fb1ed800104e56333b32091123d0"
  },
  {
    "url": "blogs/frontEnd/2021/async_await.html",
    "revision": "54d14174382036a377f6eb7ecc05ea89"
  },
  {
    "url": "blogs/frontEnd/2021/basis01.html",
    "revision": "75f7afc2a43ff12f8516ddb872661bfb"
  },
  {
    "url": "blogs/frontEnd/2021/basis02.html",
    "revision": "6cf277fe6eb0a4eeb838fd5d4a247138"
  },
  {
    "url": "blogs/frontEnd/2021/element_table.html",
    "revision": "c9e0c01478282b014687e87139add99c"
  },
  {
    "url": "blogs/frontEnd/2021/git_ssh.html",
    "revision": "d2fbc21a99617a3d135e3f3e81cffc72"
  },
  {
    "url": "blogs/frontEnd/2021/handwriten_senior.html",
    "revision": "6f3a4f03534e9b61e0e5ad5522471a4a"
  },
  {
    "url": "blogs/frontEnd/2021/JS_senior.html",
    "revision": "676986b057e20b8c2fa20e32d167f749"
  },
  {
    "url": "blogs/frontEnd/2021/js_sort.html",
    "revision": "c6758d5ebbab38ca4c4b6ec6a03c5ccf"
  },
  {
    "url": "blogs/frontEnd/2021/npm_notes.html",
    "revision": "2d6c25d3ca14ff853ac2e075a52720b1"
  },
  {
    "url": "blogs/frontEnd/2021/promise.html",
    "revision": "186dd02f178a9b6caaf6d41c571df77e"
  },
  {
    "url": "blogs/frontEnd/2021/terminal.html",
    "revision": "ebf0a65eb1bb06bfef2377c7d55bc87d"
  },
  {
    "url": "blogs/frontEnd/2021/tsstudy.html",
    "revision": "c3c044b6af3c1341696e43668b184257"
  },
  {
    "url": "blogs/frontEnd/2021/vnote.html",
    "revision": "2ea453e43fa5c0179f8354ee204d25b5"
  },
  {
    "url": "blogs/frontEnd/2021/VuepressAutoCommit.html",
    "revision": "c6d574a8de857134f6f32aa1526da96e"
  },
  {
    "url": "blogs/frontEnd/2022/antv-sttudy.html",
    "revision": "3e8dd180c842e1f40506498de4378811"
  },
  {
    "url": "blogs/frontEnd/2022/antv01.html",
    "revision": "5cd4b7f382432e094f2c11b821962ca1"
  },
  {
    "url": "blogs/frontEnd/2022/deletedtopre.html",
    "revision": "90646d0427b2700b5380c6c02dd2bfdb"
  },
  {
    "url": "blogs/frontEnd/2022/echarts.html",
    "revision": "c5609da33e9060416da016e24da60de1"
  },
  {
    "url": "blogs/frontEnd/2022/MongoDB.html",
    "revision": "2b5154d45315bbc98a71f47fd50af77d"
  },
  {
    "url": "blogs/frontEnd/2022/Nodejs.html",
    "revision": "b228c71dac818a23a21ca85b90a32fd0"
  },
  {
    "url": "blogs/frontEnd/2022/react01.html",
    "revision": "c34dd82fc692387fda1f9897c1df1311"
  },
  {
    "url": "blogs/frontEnd/2022/vuekeng01.html",
    "revision": "91b7cf7bbada4d4745ea1e42e31852dc"
  },
  {
    "url": "categories/index.html",
    "revision": "fed19aa742e5a61abbfbc362ea15f73f"
  },
  {
    "url": "categories/前端基础/index.html",
    "revision": "66abb08f87f3711386cfdfbbce913331"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "dfde4908b7690c7c4a7ff071304d8645"
  },
  {
    "url": "categories/后端学习/index.html",
    "revision": "66735162dd6acacf81777552c5faeafb"
  },
  {
    "url": "categories/踩坑积累/index.html",
    "revision": "25102516f5ae9d47a09398c90f9d01f3"
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
    "revision": "383b193698bcd2110b8af986fba33b0e"
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
    "revision": "a4f80e23394a34d2639136bc934f3415"
  },
  {
    "url": "tag/AntV/index.html",
    "revision": "6fd36890098b1b1afa9f8f8588437223"
  },
  {
    "url": "tag/Echarts/index.html",
    "revision": "a1482fef3ae51aebb2a2bd7199cf3a6c"
  },
  {
    "url": "tag/ElementUI/index.html",
    "revision": "514111fb5bd03ef8adbe588c8e2da63d"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "3b12d3ca3c8e4acda77966e5fb7dd9d1"
  },
  {
    "url": "tag/index.html",
    "revision": "9f3620c9a8423df32c731f4ca864826a"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "ce7cbac6ded40a8f9d31373bd2b88cba"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "507828433cb1a650e5264bef7e8b348d"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "79501ca74229f9c7fbbead59b17b5eed"
  },
  {
    "url": "tag/NPM/index.html",
    "revision": "95eae8411eaf35609d2c3a0610e75c5e"
  },
  {
    "url": "tag/Promise/index.html",
    "revision": "47eb0e2c6621cf98ddc8f917b6b39428"
  },
  {
    "url": "tag/React/index.html",
    "revision": "18530634b01d2c60bd04d5430ec81b24"
  },
  {
    "url": "tag/Terminal/index.html",
    "revision": "2d0dd871e9906b86bbb57573e0f7fe09"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "e9e095476e6f40660a63aed5c946a801"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "2c25f6bb461c712b8b77f2a0b011d675"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "3d1fb5758410767a24308a5044c71d68"
  },
  {
    "url": "tag/排序算法/index.html",
    "revision": "266b32cf2fb4794114cf2db6c1a52994"
  },
  {
    "url": "tag/数组处理/index.html",
    "revision": "d0c245dfb0e4a5838fd4127885401c84"
  },
  {
    "url": "timeline/index.html",
    "revision": "294c2b325b7291f2d4e76935dd353016"
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
