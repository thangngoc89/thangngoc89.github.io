"use strict";

// https://jakearchibald.com/2014/offline-cookbook/

var cacheName = "1473608925052";

/* eslint-disable quotes */
var cacheListAsync = JSON.parse('["/index.html","/404.html.621d497b9b3643e03358f2d161e79b45.json","/about/index.html.5bc25862bafcedf70de2cd84d8f59dc4.json","/archive/index.html.352adcd92f810a253a436c741221ba1d.json","/black-friday-2014-namecheap-giam-gia-domainhosting-chi-con-0-98/index.html.0879185b611c55b8dcf01a3876aefde2.json","/blog-minh-thuong-doc/index.html.57728cfced2a7b29da46f07108305714.json","/bot-multitools-paidverts-btcclicks-probux-v3/index.html.4cad5cbaba7cc49f50969990efa5053f.json","/cach-xem-quang-cao-tren-paidverts/index.html.99e5aabd630f23a79b9b2919d8181005.json","/cai-dat-laravel/index.html.f63e167aae92b8db3b7c3980bc4655a5.json","/cai-dat-nodejs-tren-windows/index.html.f877b8e7d6ef53b14ecadbb6e6560075.json","/cai-dat-wine-tren-ubuntu/index.html.ddf4ba39a761f7108f033b08403550f3.json","/cau-lenh-bash-duoc-ban-dung-nhieu-nhat/index.html.b551024a29c683f4454603ffb3e3330c.json","/chuyen-doi-blog-tu-wordpress-sang-ghost/index.html.7ced41fdff96b477beb88ea83bad87c1.json","/database-seeder-larask-gist/index.html.c357563a814f7322a939449f9a765edf.json","/detour-gioi-thieu-va-su-dung-uuid-voi-larask-gist/index.html.3b1acc096803d3d501fc4dc6cb7b2267.json","/digitalocean-dang-ki-vps-va-coupon/index.html.9e647da88e82b36d3ea904e8fac92229.json","/each-voi-laravel-blade/index.html.01a4d2f971ecfa3c0ded57dc3800f52e.json","/es6/index.html.97b846829a06bc39a3d3a977f66c58e8.json","/facebook-comment-responsive/index.html.803bb5549bda7042018980c203ca994e.json","/free-vps-7-ngay-2gb-ram-windows-server-cloudsigma/index.html.40cfd9c91a4af672a2cdf1340a927cf6.json","/gioi-thieu-discourse/index.html.aa4eff64a4f80d38f15f22beeec6dd4d.json","/gioi-thieu-series-discourse-co-ban/index.html.864bd2fa100960ead18ab05f72928423.json","/gioi-thieu-series-larask-gist/index.html.558bbeefb435a9f0231a2edcd5e7648d.json","/gioi-thieu-series-laravel-4-co-ban/index.html.9945176ef4fd33a01967a23d76638f57.json","/imacros-omnia3-cam-may-kiem-euro-tu-dong/index.html.2d21d28fbf7062fd79cb9c1329176778.json","/index.html.91fc28acc75f8be50d02def43fbf87e6.json","/json-js/index.html.f31a458895df66d2dbc2a8574fde3a6c.json","/kiem-tien-bang-cach-rut-gon-va-chia-se-link-voi-oni-vn/index.html.8e949c78adc68b47d39046f1cca2ff96.json","/laragon-cai-dat-laravel-trong-mot-phut/index.html.520233e7f40951bd7c6b66284fe78656.json","/larask-gist-cai-dat-va-cau-hinh-co-ban/index.html.3febe1b8f0982d7295e3a34689132aea.json","/model-va-migration-trong-laravel-5-gist/index.html.d9b4b54bd72eaa0ab66df951c878d76d.json","/omnia3/index.html.599ddb7256752de37b6c7764e3fccb8e.json","/paidverts-ptc/index.html.7da7306b5d97303477c5a72aa0b98c3a.json","/quan-li-cac-thu-vien-php-voi-composer/index.html.67a8e2d9bdb8d9f0a6b4d8287f364299.json","/react-component-voi-react-create-class/index.html.e48d203d8f406218cab2fa06a074b61e.json","/react-howto/index.html.0f413d1936fd8cdd11dfc2ad708dde9b.json","/runabove-6-thang-vps-windows-mien-phi/index.html.6a3abdad70e0c873a4fa3cb5e795e009.json","/slack-logo-voi-css3/index.html.f4c89f334b488e8323f6a692f7892908.json","/tang-toc-npm/index.html.b78e714ffa0d9ebd1ce055ab112b6481.json","/tao-menu-cho-discourse/index.html.120575575eb08387e1f69e9c2b9ddcf6.json","/tat-plugin-wordpress-thu-cong/index.html.2cbd374fd0bbede9fe89183cda3f9871.json","/thiet-ke-trang-web-hoc-cpp-day-nhau-hoc/index.html.1ca514d48642807b718df2fe10644caf.json","/thuat-ngu-mmo/index.html.cb7ada6bf0a9c02b494a38dfa2cba074.json","/tim-hieu-dinh-dang-mdict/index.html.859de7cd2502ae525ccb2bf0113fdbe9.json","/tim-hieu-mo-hinh-mvc-la-gi/index.html.081dc74fe5aef7affc089aaee6da4ae9.json","/video-runabove-kich-hoat-remote-desktop/index.html.3343c73309978cbf4c420d7e70470cce.json","/xoa-tat-ca-cac-table-mysql/index.html.2abc1924ab269f01b8d410c590351353.json","/phenomic.browser.cb3a663746966e6d2d8b.css","/phenomic.browser.cb3a663746966e6d2d8b.js"]');
// const cacheListSync = JSON.parse('["/index.html","/404.html.621d497b9b3643e03358f2d161e79b45.json","/about/index.html.5bc25862bafcedf70de2cd84d8f59dc4.json","/archive/index.html.352adcd92f810a253a436c741221ba1d.json","/black-friday-2014-namecheap-giam-gia-domainhosting-chi-con-0-98/index.html.0879185b611c55b8dcf01a3876aefde2.json","/blog-minh-thuong-doc/index.html.57728cfced2a7b29da46f07108305714.json","/bot-multitools-paidverts-btcclicks-probux-v3/index.html.4cad5cbaba7cc49f50969990efa5053f.json","/cach-xem-quang-cao-tren-paidverts/index.html.99e5aabd630f23a79b9b2919d8181005.json","/cai-dat-laravel/index.html.f63e167aae92b8db3b7c3980bc4655a5.json","/cai-dat-nodejs-tren-windows/index.html.f877b8e7d6ef53b14ecadbb6e6560075.json","/cai-dat-wine-tren-ubuntu/index.html.ddf4ba39a761f7108f033b08403550f3.json","/cau-lenh-bash-duoc-ban-dung-nhieu-nhat/index.html.b551024a29c683f4454603ffb3e3330c.json","/chuyen-doi-blog-tu-wordpress-sang-ghost/index.html.7ced41fdff96b477beb88ea83bad87c1.json","/database-seeder-larask-gist/index.html.c357563a814f7322a939449f9a765edf.json","/detour-gioi-thieu-va-su-dung-uuid-voi-larask-gist/index.html.3b1acc096803d3d501fc4dc6cb7b2267.json","/digitalocean-dang-ki-vps-va-coupon/index.html.9e647da88e82b36d3ea904e8fac92229.json","/each-voi-laravel-blade/index.html.01a4d2f971ecfa3c0ded57dc3800f52e.json","/es6/index.html.97b846829a06bc39a3d3a977f66c58e8.json","/facebook-comment-responsive/index.html.803bb5549bda7042018980c203ca994e.json","/free-vps-7-ngay-2gb-ram-windows-server-cloudsigma/index.html.40cfd9c91a4af672a2cdf1340a927cf6.json","/gioi-thieu-discourse/index.html.aa4eff64a4f80d38f15f22beeec6dd4d.json","/gioi-thieu-series-discourse-co-ban/index.html.864bd2fa100960ead18ab05f72928423.json","/gioi-thieu-series-larask-gist/index.html.558bbeefb435a9f0231a2edcd5e7648d.json","/gioi-thieu-series-laravel-4-co-ban/index.html.9945176ef4fd33a01967a23d76638f57.json","/imacros-omnia3-cam-may-kiem-euro-tu-dong/index.html.2d21d28fbf7062fd79cb9c1329176778.json","/index.html.91fc28acc75f8be50d02def43fbf87e6.json","/json-js/index.html.f31a458895df66d2dbc2a8574fde3a6c.json","/kiem-tien-bang-cach-rut-gon-va-chia-se-link-voi-oni-vn/index.html.8e949c78adc68b47d39046f1cca2ff96.json","/laragon-cai-dat-laravel-trong-mot-phut/index.html.520233e7f40951bd7c6b66284fe78656.json","/larask-gist-cai-dat-va-cau-hinh-co-ban/index.html.3febe1b8f0982d7295e3a34689132aea.json","/model-va-migration-trong-laravel-5-gist/index.html.d9b4b54bd72eaa0ab66df951c878d76d.json","/omnia3/index.html.599ddb7256752de37b6c7764e3fccb8e.json","/paidverts-ptc/index.html.7da7306b5d97303477c5a72aa0b98c3a.json","/quan-li-cac-thu-vien-php-voi-composer/index.html.67a8e2d9bdb8d9f0a6b4d8287f364299.json","/react-component-voi-react-create-class/index.html.e48d203d8f406218cab2fa06a074b61e.json","/react-howto/index.html.0f413d1936fd8cdd11dfc2ad708dde9b.json","/runabove-6-thang-vps-windows-mien-phi/index.html.6a3abdad70e0c873a4fa3cb5e795e009.json","/slack-logo-voi-css3/index.html.f4c89f334b488e8323f6a692f7892908.json","/tang-toc-npm/index.html.b78e714ffa0d9ebd1ce055ab112b6481.json","/tao-menu-cho-discourse/index.html.120575575eb08387e1f69e9c2b9ddcf6.json","/tat-plugin-wordpress-thu-cong/index.html.2cbd374fd0bbede9fe89183cda3f9871.json","/thiet-ke-trang-web-hoc-cpp-day-nhau-hoc/index.html.1ca514d48642807b718df2fe10644caf.json","/thuat-ngu-mmo/index.html.cb7ada6bf0a9c02b494a38dfa2cba074.json","/tim-hieu-dinh-dang-mdict/index.html.859de7cd2502ae525ccb2bf0113fdbe9.json","/tim-hieu-mo-hinh-mvc-la-gi/index.html.081dc74fe5aef7affc089aaee6da4ae9.json","/video-runabove-kich-hoat-remote-desktop/index.html.3343c73309978cbf4c420d7e70470cce.json","/xoa-tat-ca-cac-table-mysql/index.html.2abc1924ab269f01b8d410c590351353.json","/phenomic.browser.cb3a663746966e6d2d8b.css","/phenomic.browser.cb3a663746966e6d2d8b.js"]')
/* eslint-enable quotes */

self.addEventListener("install", function (event) {
  console.log("[SW]:", "installing");
  event.waitUntil(caches.open(cacheName).then(function (cache) {
    return cache.addAll(cacheListAsync).then(function () {
      return self.skipWaiting();
    })
    // return cache.addAll(cacheListSync)
    ;
  }));
  console.log("[SW]:", "install completed");
});

self.addEventListener("activate", function (event) {
  console.log("[SW]:", "activating");

  event.waitUntil(caches.keys()
  // cleanup entries that do not match the current cacheName
  .then(function (keys) {
    return Promise.all(keys.filter(function (key) {
      return key !== cacheName;
    }).map(function (key) {
      return caches.delete(key);
    }));
  }).then(function () {
    self.clients.claim();
    console.log("[SW]:", "activate completed");
  }));
});

self.addEventListener("fetch", function (event) {
  var requestURL = new URL(event.request.url);

  // Only cache files within the same origin
  // @todo reconsider this, user might want to cache assets from CDN etc
  if (requestURL.origin == location.origin) {
    event.respondWith(caches.open(cacheName)

    // @todo add filter to decide if
    // data are essential (eg: content): network first + cache
    // data are not essential (eg: avatar): cache first + network
    // more at
    // https://github.com/MoOx/phenomic/issues/277#issuecomment-215346577

    // Try the cache
    .then(function (cache) {
      return cache.match(event.request).then(function (response) {

        var fetchPromise = fetch(event.request).then(function (networkResponse) {
          // cache on demand
          cache.put(event.request, networkResponse.clone());

          return networkResponse;
        });

        // Return from cache or start a new fetch Promise
        return response || fetchPromise;
      });
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