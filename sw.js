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

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-8ecc84621b7dce9331b2.js"
  },
  {
    "url": "app-a72d503041cdff2d5a4b.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-af38beb0f6b6d2adf9f4.js"
  },
  {
    "url": "index.html",
    "revision": "34662b5d1d54477ee358598cba4906f1"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "10ad2cebda09a13a16bcb007d69c50fd"
  },
  {
    "url": "1.73689a8360056e61649d.css"
  },
  {
    "url": "component---src-pages-index-jsx.69a945a11e23dfafac91.css"
  },
  {
    "url": "component---src-pages-index-jsx-22e74acd77b747b66ba1.js"
  },
  {
    "url": "0-7682b0684bd4134e1b57.js"
  },
  {
    "url": "1-08e0841d5b7b5dbc1dc5.js"
  },
  {
    "url": "2-ef9739bc7b898c967abe.js"
  },
  {
    "url": "static/d/947/path---index-6a9-lx1pf0W294mkna6RjsEm2Mkw9N8.json",
    "revision": "89d94a1c4bfebbdd6b237bee8ce337ac"
  },
  {
    "url": "component---src-pages-404-jsx-85de7a16a2a5f404fa9a.js"
  },
  {
    "url": "static/d/798/path---404-html-516-62a-xpZFmGxXxSdsSAumjrPpwA87BE.json",
    "revision": "e6d384914f47b581fefe51664b233162"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});