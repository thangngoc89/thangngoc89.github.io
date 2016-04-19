"use strict";

var cacheName = "1461071802403";

/* eslint-disable quotes */
var cacheList = JSON.parse('["/index.html","/404.html.621d497b9b3643e03358f2d161e79b45.json","/about/index.html.c491930b075324c5239a45665412fa4e.json","/archive/index.html.a54aadf9cd03f26463ab665192553082.json","/black-friday-2014-namecheap-giam-gia-domainhosting-chi-con-0-98/index.html.bf30f56b4f55d1a55a7ea77edb73abf6.json","/blog-minh-thuong-doc/index.html.3df1ef9ddd991a34e96847fcbdb72517.json","/bot-multitools-paidverts-btcclicks-probux-v3/index.html.ecba6237f2825a312034b59c1ffd5542.json","/cach-xem-quang-cao-tren-paidverts/index.html.7370aa93d37d4b6ebc0309df2ebbd852.json","/cai-dat-laravel/index.html.2666df64f2268819bf32bd8afd1f39d2.json","/cai-dat-nodejs-tren-windows/index.html.39669b620ca2be25129da44ac148da34.json","/cai-dat-wine-tren-ubuntu/index.html.368edf38d58da387a4231e3b0de8d376.json","/cau-lenh-bash-duoc-ban-dung-nhieu-nhat/index.html.c017bcd1ac333472cea44a567ae78ea2.json","/chuyen-doi-blog-tu-wordpress-sang-ghost/index.html.4f9268725c99fef0c1450d2b7be38c3d.json","/database-seeder-larask-gist/index.html.cfe20e1d10b58542cca474f560b14c52.json","/detour-gioi-thieu-va-su-dung-uuid-voi-larask-gist/index.html.5895afff7f53f7512e845dcd1bd8e723.json","/digitalocean-dang-ki-vps-va-coupon/index.html.d8001da3c44f080e3095d6edecb12108.json","/each-voi-laravel-blade/index.html.334aa7949d1596670563583647e9f20d.json","/es6/index.html.dec750c93567f29d43f8c0049af36cf4.json","/facebook-comment-responsive/index.html.053760a914ffe592f76a5e5942cb4435.json","/free-vps-7-ngay-2gb-ram-windows-server-cloudsigma/index.html.8fad5c9424253a6b7c39e984eb973aeb.json","/gioi-thieu-discourse/index.html.5121bd075aed20f5c2d3cb2d49b80951.json","/gioi-thieu-series-discourse-co-ban/index.html.724ad7a069d81de59c1a32f09f7ef001.json","/gioi-thieu-series-larask-gist/index.html.3ba8fd5403687bcf6b1c1bd32d7ff0d3.json","/gioi-thieu-series-laravel-4-co-ban/index.html.28e3cbc6713d18551ff5b7c76c707799.json","/imacros-omnia3-cam-may-kiem-euro-tu-dong/index.html.57dc622ceb05750e18c525fff16b5366.json","/index.html.91fc28acc75f8be50d02def43fbf87e6.json","/json-js/index.html.458c2f731d5aa41c6fd9f8c8a92f19c7.json","/kiem-tien-bang-cach-rut-gon-va-chia-se-link-voi-oni-vn/index.html.7f4fc175073fad5759d1ed0fbbcb20ea.json","/laragon-cai-dat-laravel-trong-mot-phut/index.html.a6117934124cb2dc0f470f032b00c077.json","/larask-gist-cai-dat-va-cau-hinh-co-ban/index.html.81560fa67ebffae0cab064aef45f3118.json","/model-va-migration-trong-laravel-5-gist/index.html.b5c7e58d4374950428dcd9164c421029.json","/omnia3/index.html.6f5d3f495d4e78960b8ed32765f079b7.json","/paidverts-ptc/index.html.4fb796a79f4e43bd53650c27a612cfc2.json","/quan-li-cac-thu-vien-php-voi-composer/index.html.89ab8ae278209423f1109c8196ca9a92.json","/react-component-voi-react-create-class/index.html.b4647d3db42f8ac1e4a7950ad7bfadbf.json","/react-howto/index.html.98e5c90915d8e3c8f22f6c9feb1353db.json","/runabove-6-thang-vps-windows-mien-phi/index.html.a290b016b58b0588c8303c6f6b0192a5.json","/slack-logo-voi-css3/index.html.d052b597bc831b4969be1e31342134e3.json","/tang-toc-npm/index.html.a6d63a013f3d0e26c2aca3c8d3b47ef2.json","/tao-menu-cho-discourse/index.html.d87f7d1052bdcb67cea62957a074a822.json","/tat-plugin-wordpress-thu-cong/index.html.7f681cb2cb61ca522051720f8a982d1e.json","/thuat-ngu-mmo/index.html.608e36b9fd73a865f2554f0eb00f4fa4.json","/tim-hieu-dinh-dang-mdict/index.html.821a8fe080e52da8a4466503f2f1f218.json","/tim-hieu-mo-hinh-mvc-la-gi/index.html.06c61b881e3cfa4d7ebd68d4ca22def4.json","/video-runabove-kich-hoat-remote-desktop/index.html.64ae06d3e2f23bc06493d2dec605de13.json","/xoa-tat-ca-cac-table-mysql/index.html.1d5c817823da676285785c5e3d227071.json","/phenomic-client.2b71c9ca7f3b90c9d641.css","/manifest.04e2eff94b919ef5f8ad.js","/phenomic-bundle.7e80be212e3e624554a1.js","/phenomic-client.9aba6e7fe12f98025f22.js"]');
/* eslint-enable quotes */

self.addEventListener("install", function (event) {
  console.log("[SW]:", "installing");
  event.waitUntil(caches.open(cacheName).then(function (cache) {
    return cache.addAll(cacheList)
    // Go from install to active without waiting step
    .then(function () {
      return self.skipWaiting();
    });
  }));
  console.log("[SW]:", "install completed");
});

self.addEventListener("fetch", function (event) {
  var requestURL = new URL(event.request.url);
  // Only cache files within the same origin
  if (requestURL.origin == location.origin) {
    event.respondWith(caches.open(cacheName).then(function (cache) {
      return(
        // Try the cache
        cache.match(event.request).then(function (response) {
          var fetchPromise = fetch(event.request).then(function (networkResponse) {
            // cache on demand
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
          // Return from cache or start a new fetch Promise
          return response || fetchPromise;
        })
      );
    })
    // Fallback when cache doesn't match and fetch failed
    .catch(function () {
      // Reponse with /index.html if user is trying to access a page
      if (requestURL.href.endsWith(".html") || requestURL.href.endsWith("/")) {
        return caches.match("/index.html");
      }

      // Other urls will received normal browser's behavior
      // like json, image, ...
    }));
  }
});

self.addEventListener("activate", function (event) {
  console.log("[SW]:", "activating");

  event.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (key) {
      return key !== cacheName;
    }).map(function (key) {
      return caches.delete(key);
    }));
  }).then(function () {
    self.clients.claim();
  }).then(function () {
    console.log("[SW]:", "activate completed");
  }));
});