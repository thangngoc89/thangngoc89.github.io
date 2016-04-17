"use strict";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js", { scope: "/" }).then(function (req) {
    console.log("[SW]:", "register succeed with scope:" + req.scope);
  }).catch(function (error) {
    console.log("[SW]:", "failed to register sw");
    throw error;
  });
}