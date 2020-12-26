/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["README.md","91c155ae948db82477bb98989208a8b7"],["css/aos.css","37d27db31631228109bb7af7542fd8a1"],["css/bootstrap-datepicker.css","dcb0ac787e2b120c8aeec195cd6decb9"],["css/bootstrap.min.css","d60d7c21551db0c304136164844f152a"],["css/footer.css","a61499453ee2a40e2c95b8f16f4ab9df"],["css/jquery-ui.css","f1d55219e5bf2bf6535f2cf821270944"],["css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["css/owl.carousel.min.css","af7d4c3b501e3aacfc3218a0d888a09e"],["css/owl.theme.default.min.css","3d112370d7b3f5337386b9e177c914ca"],["css/pricing-style.css","54f91ffc50fd69b04c5eec6631a47b72"],["css/style.css","e46e35bb191b29098748d79d3aac1f42"],["fonts/BreeSerif/BreeSerif-Regular.otf","410be42542eb02ccf34c93e5fca15515"],["fonts/flaticon/font/Flaticon.eot","05a0e905ff405c118400096ffa61f7b7"],["fonts/flaticon/font/Flaticon.svg","0e69e22930adfca0ca8e425f16f9c1fd"],["fonts/flaticon/font/Flaticon.ttf","e6f918d24556f0652cd7c4ac0d0f0899"],["fonts/flaticon/font/Flaticon.woff","0bed328f9da6afa88af1e56b89c640ec"],["fonts/flaticon/font/Flaticon.woff2","0666a52d1f32ff258540a5937b741f5a"],["fonts/flaticon/font/Flaticond41d.eot","05a0e905ff405c118400096ffa61f7b7"],["fonts/flaticon/font/flaticon.css","da75d49d182ba5cbfc785c29fa0db675"],["fonts/icomoon/fonts/icomoon1a44.eot","2cb8dc8186e8827cca3b6beebe4ef1c6"],["fonts/icomoon/fonts/icomoon1a44.svg","302fbc0aa5dcec40d385772d64baad2c"],["fonts/icomoon/fonts/icomoon1a44.ttf","bab8cf81a530d89b36f24a80649c5e25"],["fonts/icomoon/fonts/icomoon1a44.woff","62f33c03d096cdc058166bd6fbf7e4d0"],["fonts/icomoon/style.css","89267a49a7c3031d096f20f4d681d005"],["images/favicon.png","1e72693801ddb3f23d8f0ff7f63123cb"],["images/icon-w.png","7817bc31a090cc02a5fcace7c6a4a99a"],["images/icon.png","1e72693801ddb3f23d8f0ff7f63123cb"],["images/icon.svg","1ad064508032a4cde667b598a4a4895a"],["images/loader.gif","3d035a553db5cc6235c369217aa9435f"],["images/logo.png","6279706a0a3581d255788148f4bbb770"],["images/logotext.png","cd46ce6478ead365d9d6f0d1572e1f0e"],["images/shot1-alt.png","1ce9bd85154f4f543002ecef18502e90"],["images/shot1.png","66f07df135e3500dcdcd7bb6f5468b9c"],["images/shot2.png","ad9200c708ded854796ca2ab92a3107b"],["images/svgs/email_capture.svg","c99c759042cd95a8082f7abeda25e314"],["images/svgs/fast_loading.svg","b32d0fd0c3f84c708334019d214e6a99"],["images/svgs/install_exten.svg","595d5e53121ea04459c9c95ce3ffc9a5"],["images/svgs/svg_1.svg","5756a2b086f7cd4f7d415eb75395a23c"],["index.html","611c221662721f904da00266267967c4"],["js/aos.js","cfef135dd95c93ece22421733f319db3"],["js/bootstrap-datepicker.min.js","4b68703c76a917c3d440fe15576fb857"],["js/bootstrap.min.js","e1d98d47689e00f8ecbc5d9f61bdb42e"],["js/jquery-3.3.1.min.js","4b57cf46dc8cb95c4cca54afc85e9540"],["js/jquery-ui.js","1e419f9758b99a0b883cc44578dd72d9"],["js/jquery.countdown.min.js","5d3ff3c3fbaa67cc639501f44eeb07be"],["js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["js/jquery.sticky.js","1d45b5488f3ab53c93c6ca91337b1b0c"],["js/main.js","1705a4ad72a5abd6a21ab44d1616218d"],["js/myscript.js","6747e1a3f36bef675087596b14985ff6"],["js/owl.carousel.min.js","b7b9c97cd68ec336d01a79d5be48c58d"],["js/popper.min.js","a22f3f7e61af6a069aa6b422537c3f49"],["js/rocket-loader.js","1d3253cf2a1139177dac7314c9904aa3"],["manifest.json","350a5c214307ff3d11eee259369449b7"],["pages/demo.html","011483ac265961ce1db19ff0922b7d20"],["pages/pricing.html","ca1347dd28c3084d286a4efec30e4165"],["pwabuilder-sw.js","04da41d3a76db8106dc7f033ba8b9062"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







