'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "b5ebecf92482c9fe726b73991bd85f56",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "88ab7394c37b23de82d46dcfe976c0a9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0ce900a7c2a27b1aef74fbdd6ee032f2",
".git/logs/refs/heads/main": "634c88b90fe747b13a178488c2a60bf4",
".git/logs/refs/remotes/origin/main": "07dab30da6566e45e651a6e6014e5787",
".git/objects/00/fadbea8bb6b379743759ca8f8e1d728e240f09": "08c7f841852d7f788339cdf45ca5c8a6",
".git/objects/08/be2959d826af7d9ab03a1419c65a3dc336843f": "663bc910613a933335d718ad2a111120",
".git/objects/09/1a3671f62c4189cbc75fde98600cec6355b704": "34f7461a61d44bbbd976cdbc19de23f1",
".git/objects/0b/ba7cb884b3226b1b8cd25697474885bc12f6b9": "276e2d72ebe8ea20a622c52af68e961d",
".git/objects/0e/cc66708ec52b045608b7168e12eaeeca61b075": "2fb32e2c826d26912853b1af51196618",
".git/objects/10/7f98d41960680d5e76a9c079087bb5477ecf84": "1551bdc4cb9df656521a2a6f11b8874b",
".git/objects/10/98018c8c1474b434a2631ffdf41094ec54ac00": "1165c230aed8dab5ebfe0c164dc22e2a",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/16/dbf4c4a5069829facbc9a2a04f933a74b217f7": "036ec57d2c1ef30d9f1230069368a79c",
".git/objects/17/3957922ea4af23a52719fc54f3726aa39130d3": "39000d825aee73b43c7999d7c12c6549",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/77eefef0ce5019ae01ba24985850b68414c1ce": "bd5d8f93dde2e713404d7569f803f3ae",
".git/objects/29/67eb6e61e632d6896f328936ae0e6a477b670a": "b33840ef3a7faa22cbc9ccd3799f3283",
".git/objects/29/bd74bf6649706fa705f142b995c6d3ea8cada7": "33e608c949bfaab9f933bbd40b8b117a",
".git/objects/2a/2b2aaa67884c57c8e83921345ce852b7c7dbea": "35c4b258ae6199678ee161d0468b4c5c",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/32/10aca8810ac749f1a6c68357ac0c16947f49f4": "6f9b4528a0cba8fc77963075bccc94c6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/39/f2393ed5a51d8471b484ecfadbd863ab9c7ff5": "68f3769a9e6f0f0085df65f95921affb",
".git/objects/3b/866472c5178c73fb0a5a6cfdabebcd4160428c": "8e4a2f52a3b9eeba28a36f742eb4bbc6",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3d/bd031b70077c45f0ad57f9ccd3aba0ae6fc880": "c1e10d8ebb385986c5b25ad5464f3594",
".git/objects/44/1ec1add73b6da0abdce414cb7ecedda04d8931": "e28f59751e87a6bdbfd125d396a160a7",
".git/objects/4e/dab12ea6bfc20c83394e33fcab85647416886d": "1b85c4f37b8538db0888570a983d030a",
".git/objects/58/ec9c545c89f915873a838f6e359dd2d0a3dd2a": "8ad6a5f7df1a6a43cc695be4e5e44759",
".git/objects/5c/e4afcc78fd9211f855cf1426c7a20805cbea1c": "ab81cfd0f17898e8351f615a98a523a5",
".git/objects/5d/0d0df9d918ec2662b5b1cb99bf39fdd20eae71": "a7337451c87abe3d36aea378e40e8e65",
".git/objects/5d/62085f1c2014369b8034d3522adca7cd7d6c34": "1afd734cddc06c36a836db06d3e35fb9",
".git/objects/5f/5c0c8914000a399ebe8c3c6ba53dfde61a7649": "c81f0a4a099d9f9108774c07cea27ced",
".git/objects/67/25d537d430c0c915644af44a3abeaf164b0433": "c56fdb94bada271253f17182dfa7c910",
".git/objects/6a/394e755e204f7b19dca0e9976a805d99f34dee": "c3023b7b36becd1d0098382c3b1ac1d6",
".git/objects/6a/b9bd4bdef27cc9694da383c2259cbc874a2eb2": "f41b55624e2f5f1c287f27f9801196ef",
".git/objects/6d/ba2197f1e88ecac3875037dad243e6fa2b8481": "ff2124fff51b9437021e10751b3d0986",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fa79e78da00787729517b093943ce30eb5bb8e": "fb1d48e3f394aca107ef5ed92c31766e",
".git/objects/84/e2d81f683b0a527eed1f7ec7663c1a50c0e47b": "47329ac56579dd6368a7bd5b26f7601f",
".git/objects/86/ad3c5d63bee7a28243780a4e20e55b8a607d7e": "33502ea32dfc4a809d85b934126b4913",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/eeaa4c6437a033fc7f38f0c53958156ac615f5": "8b065c0fbc4c786f553da6a7412cce73",
".git/objects/99/a51c4d41336d4383ef12c0e415de637dcd3b95": "bbeb1f1c46fc33eccbbf7c73b5419010",
".git/objects/9a/425b9a626ff7524a091e6a1f14ba200ffc4b16": "3ad91e933222ba25d5bc05d1e25e43c2",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/cf5f583206819523ffc9c8739751f0cd1a2f50": "87a62dc8aacfaa6c4035b394b1a94716",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/b0/f4b05e1763a8354e4ac0906cbf2b9303d0ebaa": "1cb6d3b6af6f6c0faeee26550dbd8311",
".git/objects/b1/1ce9e9f2da10ffdbc91a9b0c8f8ca76119db11": "6dc7a701cde1b62a676f92002afa664f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c5/1577b47be820f71ea51f7bb10d60094c5a4d49": "610989733a2209dda6e241cde74cd9de",
".git/objects/c9/55c84fbb4f35316c908b239bd4a0a23f8b4d13": "d87c516507695befb1ba6d1823fc7a8b",
".git/objects/cb/43dea96a52ad00df5eec376c5f1e8c84b48864": "010f68ee1f6ac66da2eb7855ecc91e5f",
".git/objects/cb/8dc1318a8deffabf052d1347abbd7fe072e8e5": "939d7e79e8b50cb2177bcae8b355f076",
".git/objects/d1/363910e12f6609cf1e0eef9ed27dceb17c42fe": "436d8ef6b6ee4ebf183db8ead356232a",
".git/objects/db/5b1af89c2f416bd41dac41bfa19f48b83f89e1": "9c2f610bd3b2983f41ac7fb9e6831e28",
".git/objects/e3/a7fbb0cfdffbad27af9710d42b96e3e6533962": "70bb7db6e327587f949013f7ff1c5815",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ed/61ca71d1eaf8f08a11aafcf48532e25ac6b806": "be10e00bd125323c8c134ab42863f395",
".git/objects/f0/d24ad27aed13cf9f3e238c3d89ee392eb49d64": "27242a284323c743a24220fd5ca61e00",
".git/refs/heads/main": "11244ae566bb6e8e486e33ad38830006",
".git/refs/remotes/origin/main": "11244ae566bb6e8e486e33ad38830006",
"assets/AssetManifest.json": "3a4788002ae13af8de7a7ba7e0bb8615",
"assets/assets/ic_abvertencia.png": "5da7aff0a923a49b4223c73b003a5819",
"assets/assets/ic_cartopel.png": "334ba85b35718869b8744cb32fb0ba62",
"assets/assets/ic_cartopel2.png": "334ba85b35718869b8744cb32fb0ba62",
"assets/assets/ic_error.png": "f3cef6ab857a5fc8c322738057860017",
"assets/assets/ic_icon_app.png": "b10dc88115ae4b8efe1946862d3ca7b2",
"assets/assets/ic_icon_app_ios.png": "c72fc2ef1bc3197dc9566dbcfb2fd4c7",
"assets/assets/ic_image.png": "23334266449c15f476d562dc66b03bf1",
"assets/assets/ic_info.png": "981f197331cc2ce0023e9184454a461d",
"assets/assets/ic_loading.gif": "a0a7f99bbe4eb3f98bc9c957d8dd1756",
"assets/assets/ic_no_image.png": "1bdef0b5837fe56734fd7d7d93a83ee5",
"assets/assets/ic_pdf.png": "1b4d870add6011fe76e66b459b670791",
"assets/assets/Montserrat-Black.ttf": "6d1796a9f798ced8961baf3c79f894b6",
"assets/assets/Montserrat-BlackItalic.ttf": "b5331c5f5aae974d18747a94659ed002",
"assets/assets/Montserrat-Bold.ttf": "88932dadc42e1bba93b21a76de60ef7a",
"assets/assets/Montserrat-BoldItalic.ttf": "781190aecb862fffe858d42b124658cc",
"assets/assets/Montserrat-ExtraBold.ttf": "9bc77c3bca968c7490de95d1532d0e87",
"assets/assets/Montserrat-ExtraBoldItalic.ttf": "09a2d2564ea85d25a3b3a7903159927b",
"assets/assets/Montserrat-ExtraLight.ttf": "38bc5e073a0692a4eddd8e61c821d57a",
"assets/assets/Montserrat-ExtraLightItalic.ttf": "6885cd4955ecc64975a122c3718976c1",
"assets/assets/Montserrat-Italic.ttf": "6786546363c0261228fd66d68bbf27e9",
"assets/assets/Montserrat-Light.ttf": "100b38fa184634fc89bd07a84453992c",
"assets/assets/Montserrat-LightItalic.ttf": "428b2306e9c7444556058c70822d7d7c",
"assets/assets/Montserrat-Medium.ttf": "a98626e1aef6ceba5dfc1ee7112e235a",
"assets/assets/Montserrat-MediumItalic.ttf": "287208c81e03eaf08da630e1b04d80e8",
"assets/assets/Montserrat-Regular.ttf": "9c46095118380d38f12e67c916b427f9",
"assets/assets/Montserrat-SemiBold.ttf": "c88cecbffad6d8e731fd95de49561ebd",
"assets/assets/Montserrat-SemiBoldItalic.ttf": "2d3cef91fbb6377e40398891b90d29bf",
"assets/assets/Montserrat-Thin.ttf": "0052573bbf05658a18ba557303123533",
"assets/assets/Montserrat-ThinItalic.ttf": "3cb621135b5f6fe15d7c2eba68f0ee37",
"assets/FontManifest.json": "eb3d612175b2e241a5cca6b8447a7168",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "698ce76cdd0ce77b1df095fbed31be99",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/progress_dialog/assets/double_ring_loading_io.gif": "e5b006904226dc824fdb6b8027f7d930",
"favicon.png": "db0696e106487dbc8a67e3276db1d530",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "9f8f566b2e1482a4de33545671f22be5",
"/": "9f8f566b2e1482a4de33545671f22be5",
"main.dart.js": "ac02d37c60ea3ef4c9a87d16c2e94b50",
"manifest.json": "5daef17051e225e7579d5b549579b3ff",
"version.json": "afc113684cf4a30ff40625f1a3deff23"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
