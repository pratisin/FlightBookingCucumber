$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("booking.feature");
formatter.feature({
  "line": 1,
  "name": "Flight booking Features",
  "description": "",
  "id": "flight-booking-features",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Booking cheapest and fastest flights",
  "description": "",
  "id": "flight-booking-features;booking-cheapest-and-fastest-flights",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Chrome"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on booking Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"\u003csource\u003e\" and \"\u003cdes\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user selects \"\u003ctravelDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user clicks on search flight button",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "flight-booking-features;booking-cheapest-and-fastest-flights;",
  "rows": [
    {
      "cells": [
        "source",
        "des",
        "travelDate"
      ],
      "line": 9,
      "id": "flight-booking-features;booking-cheapest-and-fastest-flights;;1"
    },
    {
      "cells": [
        "New Delhi",
        "Mumbai",
        "01/08/2020"
      ],
      "line": 10,
      "id": "flight-booking-features;booking-cheapest-and-fastest-flights;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Booking cheapest and fastest flights",
  "description": "",
  "id": "flight-booking-features;booking-cheapest-and-fastest-flights;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Chrome"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on booking Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"New Delhi\" and \"Mumbai\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user selects \"01/08/2020\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user clicks on search flight button",
  "keyword": "Then "
});
formatter.match({
  "location": "BookingFlightStepDef.user_is_on_booking_Page()"
});
formatter.result({
  "duration": 52203283562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Delhi",
      "offset": 13
    },
    {
      "val": "Mumbai",
      "offset": 29
    }
  ],
  "location": "BookingFlightStepDef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 12848604494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01/08/2020",
      "offset": 14
    }
  ],
  "location": "BookingFlightStepDef.user_selects(String)"
});
formatter.result({
  "duration": 1341521026,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput data-role\u003d\"none\" readonly\u003d\"readonly\" type\u003d\"text\" autocomplete\u003d\"false\" name\u003d\"flight_origin_date\" placeholder\u003d\" \" id\u003d\"BE_flight_origin_date\" class\u003d\"custom-date-input BE_flight_origin_date\"\u003e is not clickable at point (130, 259). Other element would receive the click: \u003cli class\u003d\"ac_over\"\u003e...\u003c/li\u003e\n  (Session info: chrome\u003d84.0.4147.89)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PRATIK\u0027, ip: \u0027192.168.42.212\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.89, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\AVIKCH~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:49437}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 2f0d6ae959e9a45cbf84195e69185e1a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.cg.stepDefinition.BookingFlightStepDef.user_selects(BookingFlightStepDef.java:95)\r\n\tat ✽.And user selects \"01/08/2020\"(booking.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BookingFlightStepDef.user_clicks_on_search_flight_button()"
});
formatter.result({
  "status": "skipped"
});
});