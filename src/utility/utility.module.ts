/// <reference path="../../typings/angularjs/angular.d.ts" />

import PromiseTracker from "./promiseTracker.service";
import CookieParser from "./cookieParser.service";

let moduleName = "dimUtility";

angular.module(moduleName, [
    "ajoslin.promise-tracker"
  ])
  .factory("dimPromiseTracker", ["$log", "promiseTracker", PromiseTracker.factory])
  .factory("dimCookieParser", ["$log", "$window", CookieParser.factory])
  .run(["$log", function($log) {
    $log.info(`Loaded '${ moduleName }' module.`);
  }]);

export default moduleName;
