"use strict";

 define(["angular"], function(angular) {angular.module("AppModule.configuration", [])

.constant("APP_INFO", {
	"name": "GG",
	"version": "0.0.1"
})

.constant("APP", {
	"CONSTANT_1": "Hi, I'm a constant value.",
	"ENV_MODE": "DEV"
})

;});