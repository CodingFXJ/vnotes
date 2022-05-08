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
    "revision": "109a363679a6daa1abd727feda2c5b4f"
  },
  {
    "url": "assets/css/0.styles.7674e60c.css",
    "revision": "5b7531c3ab7f8c7fba6195b775341101"
  },
  {
    "url": "assets/img/bg.a2d1cf1a.svg",
    "revision": "a2d1cf1ad2becdd79823541dae101fcd"
  },
  {
    "url": "assets/js/1.e23ef5ac.js",
    "revision": "ad0716d69e4d80a539f30fcde0edf0ef"
  },
  {
    "url": "assets/js/10.0c9d1282.js",
    "revision": "bb54878fd7bfcbbc83ef452c4ac818f0"
  },
  {
    "url": "assets/js/11.e3aa095f.js",
    "revision": "8d31395d7ee3475b58584a0a08b61501"
  },
  {
    "url": "assets/js/12.a841472f.js",
    "revision": "4d9596d6bbf33351cd9df84ac7793a77"
  },
  {
    "url": "assets/js/13.7ecd9331.js",
    "revision": "5ff550b43e98102ed2ac0b6b62b09f9a"
  },
  {
    "url": "assets/js/14.735ad7e2.js",
    "revision": "651b5f9abf3acf345aac40f0100a16e1"
  },
  {
    "url": "assets/js/15.350e9b2e.js",
    "revision": "bee901031492a7c9de109e673634cbcd"
  },
  {
    "url": "assets/js/16.400bba78.js",
    "revision": "35f56c951a0de27c90b142090d05a293"
  },
  {
    "url": "assets/js/17.e4782597.js",
    "revision": "a438f502c7155368b07ee9ee07325dbf"
  },
  {
    "url": "assets/js/18.680e71de.js",
    "revision": "4310716a811e70020bfae4e0edc08ffd"
  },
  {
    "url": "assets/js/19.d26c8628.js",
    "revision": "4639d4f0741e85d23b457e24b8bebc72"
  },
  {
    "url": "assets/js/2.89c44d46.js",
    "revision": "4f064568f0567bec6b28f323734fa24f"
  },
  {
    "url": "assets/js/20.505a1df4.js",
    "revision": "9d0730278ad03a618037fba6c8b83f89"
  },
  {
    "url": "assets/js/21.40d8392a.js",
    "revision": "5da96ef6e3149f90db24f582b2dc5a88"
  },
  {
    "url": "assets/js/22.8c9eeeb7.js",
    "revision": "e049753c0a6592444de572bbba5d3942"
  },
  {
    "url": "assets/js/23.f482208f.js",
    "revision": "16740a602e442f361b51bb6893e212bb"
  },
  {
    "url": "assets/js/24.77fc3fef.js",
    "revision": "f49ea92c0a3d6b0e19cf54dff2881ec7"
  },
  {
    "url": "assets/js/25.8513a2a8.js",
    "revision": "6ab256ecfa0f77f9755e2548ba3974bb"
  },
  {
    "url": "assets/js/26.67932ed8.js",
    "revision": "4aa4d43b6bdbc2f36c9c747d8a510626"
  },
  {
    "url": "assets/js/27.8a3194f3.js",
    "revision": "1148420c4d60b7e9734b5dc273cfa78a"
  },
  {
    "url": "assets/js/28.f1ad883d.js",
    "revision": "d08fbdc98bcde2fba973abf05437bcac"
  },
  {
    "url": "assets/js/29.281b3c73.js",
    "revision": "b570d0d6c3d8d21207f1c5f794e386eb"
  },
  {
    "url": "assets/js/30.40e432f6.js",
    "revision": "5ec5205be6cb691bff5d7b37b8736289"
  },
  {
    "url": "assets/js/31.5ffacc70.js",
    "revision": "6482974777bfaa4a252c086c0e34a869"
  },
  {
    "url": "assets/js/32.86de2248.js",
    "revision": "ea507d0a132971e1c75cdc20ab9bf145"
  },
  {
    "url": "assets/js/33.79974a07.js",
    "revision": "136abd6a261260d189d4c5d54c7ba849"
  },
  {
    "url": "assets/js/4.f304ff9b.js",
    "revision": "686401d3acbdf4887ebd19eac013f810"
  },
  {
    "url": "assets/js/5.81616cf1.js",
    "revision": "bc12e662aa5530e38265d2a068247541"
  },
  {
    "url": "assets/js/6.06226572.js",
    "revision": "0772e79937d962f0963c0bc4adc3c893"
  },
  {
    "url": "assets/js/7.3616d0ea.js",
    "revision": "9b80d63e57f0d1536bba1c1665dc0baf"
  },
  {
    "url": "assets/js/8.3fcd1e91.js",
    "revision": "c247f95ca90dfbe05b9033433a560612"
  },
  {
    "url": "assets/js/9.c5298c85.js",
    "revision": "d33638e820928807fb29f221ff77e476"
  },
  {
    "url": "assets/js/app.ed6bda79.js",
    "revision": "545cc477ef97347fada68697a3e4d0e3"
  },
  {
    "url": "avatar.png",
    "revision": "9e0cf1b286c6d2d6c4ed4a142982c7dc"
  },
  {
    "url": "blogs/frontEnd/2021/Angular1.html",
    "revision": "cef0004fc5a1863e1a57e8615068b1f3"
  },
  {
    "url": "blogs/frontEnd/2021/Angular2.html",
    "revision": "9b09957ad919fcad67b58a95e1eaae50"
  },
  {
    "url": "blogs/frontEnd/2021/Angular3.html",
    "revision": "c73eda95c230d8089b94ce3723a75cd5"
  },
  {
    "url": "blogs/frontEnd/2021/array_opts.html",
    "revision": "85ab173526dede7604157b8297bf3baa"
  },
  {
    "url": "blogs/frontEnd/2021/async_await.html",
    "revision": "f522f9fabac0e683b85791ed33277883"
  },
  {
    "url": "blogs/frontEnd/2021/element_table.html",
    "revision": "95d746a021983d0ef7c558feeb526e21"
  },
  {
    "url": "blogs/frontEnd/2021/git_ssh.html",
    "revision": "56f50896070c09316c401c5e1750708a"
  },
  {
    "url": "blogs/frontEnd/2021/handwriten_senior.html",
    "revision": "22bab4c44cdad77dc8b60b408ef19bda"
  },
  {
    "url": "blogs/frontEnd/2021/JS_senior.html",
    "revision": "135a811c5a17d2ea56dc6c4cb14abbfa"
  },
  {
    "url": "blogs/frontEnd/2021/js_sort.html",
    "revision": "4340cab52cfebd1cf3f14d5ecbbd0f48"
  },
  {
    "url": "blogs/frontEnd/2021/npm_notes.html",
    "revision": "d97506bbb672432b93019043d7c11616"
  },
  {
    "url": "blogs/frontEnd/2021/promise.html",
    "revision": "1de969f814f245fa20a771ef4b5db3fb"
  },
  {
    "url": "blogs/frontEnd/2021/terminal.html",
    "revision": "0c3b910ce58ff13092bab5290895f155"
  },
  {
    "url": "blogs/frontEnd/2021/tsstudy.html",
    "revision": "24954125ba193bd1961ce015040db8a8"
  },
  {
    "url": "blogs/frontEnd/2021/vnote.html",
    "revision": "9a7f326cd2be57f4c80ef7ca4db0cfd5"
  },
  {
    "url": "blogs/frontEnd/2021/VuepressAutoCommit.html",
    "revision": "e5f025e4447be2d946b57f4c137cc778"
  },
  {
    "url": "blogs/frontEnd/2022/echarts.html",
    "revision": "9c5aaa545f0b64a1e6f8a166518c76cb"
  },
  {
    "url": "blogs/frontEnd/2022/MongoDB.html",
    "revision": "ac28fa5b71890cf8adb3cc5ec850120a"
  },
  {
    "url": "blogs/frontEnd/2022/Nodejs.html",
    "revision": "d4a37f69ba8683636ba7421e893222c6"
  },
  {
    "url": "blogs/frontEnd/2022/react01.html",
    "revision": "37a36dc21b9b1b462f0a9f4434f7e83c"
  },
  {
    "url": "categories/index.html",
    "revision": "7922e0db6f280a0650cd444c5350146a"
  },
  {
    "url": "categories/前端基础/index.html",
    "revision": "369f07cf722d9d1c246b279820e3e0d4"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "cb0015de1eb292661407e7f99613e753"
  },
  {
    "url": "categories/后端学习/index.html",
    "revision": "cdcd7a33eddc024146f669c8e3cba671"
  },
  {
    "url": "categories/踩坑积累/index.html",
    "revision": "fb3f6b5ac1cc066e12fc73527a7ee4f9"
  },
  {
    "url": "css/znote.css",
    "revision": "4d63fe30b28a28bc914ee3df925355fc"
  },
  {
    "url": "fonts/iconfont.css",
    "revision": "36d5d3fa4b12e4eee628d08c9e5d8a85"
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
    "revision": "a351b58c328f17cc0a8eec0c6ea73e6b"
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
    "revision": "bb9be04b979ac5c3ff6921319355250a"
  },
  {
    "url": "tag/Echarts/index.html",
    "revision": "4f62924706a65e2fe6458cc5b8f1eab5"
  },
  {
    "url": "tag/ElementUI/index.html",
    "revision": "a50391aa1bcf009ee1b0f008330b4b65"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "2f3cc3710b6125fcba7e4b90fb4fe315"
  },
  {
    "url": "tag/index.html",
    "revision": "66de8d28fea0fb1927a2e843a6461e4c"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "a476b5b144d604b40f2d524bbeb99a4f"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "fba444407a5e19482d6b25ca5083b48a"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "e7db8e87b63547607ce8f47559a6f911"
  },
  {
    "url": "tag/NPM/index.html",
    "revision": "51c6c498a5e4feba54f66a2d3b6c8486"
  },
  {
    "url": "tag/Promise/index.html",
    "revision": "a1a9f7cebec6f8c016124f1a2ded093b"
  },
  {
    "url": "tag/React/index.html",
    "revision": "0ec7b14f8208b38a593b99437784108b"
  },
  {
    "url": "tag/Terminal/index.html",
    "revision": "d9330d2262e3baf4b80446a0aa02e198"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "3797820bb06a95830d04df72f09d2d7c"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "a259d295f61353df1d7dd1cb32d75196"
  },
  {
    "url": "tag/排序算法/index.html",
    "revision": "a35e16338345a2463970f9273c398948"
  },
  {
    "url": "tag/数组处理/index.html",
    "revision": "5bebce1c1993e6c5051ca3f726cebb6d"
  },
  {
    "url": "timeline/index.html",
    "revision": "60be5dc213bd2e6f009d276cc495fcde"
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
