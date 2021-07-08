'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "325ee374e6860775698abb9953a9e891",
"/": "325ee374e6860775698abb9953a9e891",
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
