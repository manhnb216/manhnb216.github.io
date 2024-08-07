'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fe4b3483a1c94061e77c8634b1c898b7",
"assets/AssetManifest.bin.json": "164c74e6543dc4ee8b2037d7e7d24966",
"assets/AssetManifest.json": "0715d12334b4c97a228b11cb2ae473b0",
"assets/assets/animations/dev.json": "0a1c46609ce01b8f3c69ea13f5a165f1",
"assets/assets/animations/footer.json": "d9936cadc507e5e19c7496e5e62fa925",
"assets/assets/animations/hamster_avata.json": "91c2125e79eb2b6bb2bfc8a3d875354f",
"assets/assets/animations/maintain.json": "dc0562991388a6f6c4988115fc0cf90f",
"assets/assets/animations/sumary_anim.json": "4f205f85e3eaf5240ffb0c071d5c4394",
"assets/assets/animations/uiux.json": "2ca067132047a95f95551aa9bd64b035",
"assets/assets/data_mock/work_item.json": "c65c1a8cf72d129a1d744abbf6ea941d",
"assets/assets/fonts/HelveticaNeue.ttf": "ccad04d46768981ff847f22e8a53b5b3",
"assets/assets/fonts/HelveticaNeueBd.ttf": "b8edca3e45f1f16bc6e20464bd8f2fff",
"assets/assets/fonts/HelveticaNeueIt.ttf": "33baa0a123d13fcda4e6cad9c93ed2ef",
"assets/assets/fonts/HelveticaNeueLt.ttf": "bb5671edae4b3cecbd3c98159511f2ea",
"assets/assets/fonts/HelveticaNeueMed.ttf": "9f25b1f8c62ddd2ad699a89aaaf11a59",
"assets/assets/images/avatar.png": "503069863f4271f3a878733879c2bdca",
"assets/assets/images/bac_a_bank_bg.png": "8aad37e28e50e50aaf9ef2daa22c4215",
"assets/assets/images/lg_bg.png": "c54babd739d70cfd6c7c7dfeeb0b0557",
"assets/assets/images/lvb_bg.png": "bf3735c80f089b97c8ec29ecc4d0e849",
"assets/assets/images/menu.png": "58ba1452ee5f09139788800c932120c2",
"assets/assets/images/vivino_bg.png": "3515f56cd207e2c40f3f1411a8a44c39",
"assets/assets/svg/android.svg": "d46f53f21a42468777d212baa7fb187b",
"assets/assets/svg/dart.svg": "63a1fa89591745e789e439a1f2d1abf1",
"assets/assets/svg/firebase.svg": "7f8d489c1887554fcf61932505d46393",
"assets/assets/svg/flutter-logo.svg": "bd9fec894dfe707631e11a1dfedb25b5",
"assets/assets/svg/git.svg": "1190a19ce3cc940741a60137a1e074cb",
"assets/assets/svg/github.svg": "192a6620a687a9e7e51c0037973a1547",
"assets/assets/svg/jira.svg": "a397460c103a310f9ac429fdee79cf9c",
"assets/assets/svg/kotlin.svg": "554a29baa80695e0fc8326e51c6abd86",
"assets/assets/svg/linkedin.svg": "338f8f0a73cb7700c055cfb68803259d",
"assets/assets/svg/mongodb.svg": "c2a864c96dbfc449ec45dd7ac4438628",
"assets/assets/svg/mysql.svg": "60c2bdb8b85b43b3c5178581456a1baa",
"assets/assets/svg/nodejs.svg": "b337a2fb0b1289e6757e632dc766ff6b",
"assets/assets/svg/pin.svg": "82e1eb1f08bddd9c62f7f384476c17b0",
"assets/assets/svg/python.svg": "146716bdf1a351db5705ec1e6a25ed08",
"assets/assets/svg/zen.svg": "ffe4fced5f1ab24e7dd6589989345fb5",
"assets/FontManifest.json": "e0a4c59643dea78e67026fec25781385",
"assets/fonts/MaterialIcons-Regular.otf": "e07d51c16ed8f8c66ba2d9bde6e7fc73",
"assets/NOTICES": "2f8b15cc86bdc03d1c020046da18314d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "0c6bfe39a9afc7530578fdc2ecf37e3d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bddb757d0d58fd095026062adf2302c2",
"/": "bddb757d0d58fd095026062adf2302c2",
"main.dart.js": "e216046c134dc2add04c2d2de8369342",
"manifest.json": "308ce0ea276e66990e7005f61021e969",
"version.json": "d351ae99551ba008177d734c54348c46"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
