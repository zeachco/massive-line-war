var GAMEPAD = new Gamepad();
GAMEPAD.bind(38, "up");
GAMEPAD.bind(40, "down");
GAMEPAD.bind(37, "left");
GAMEPAD.bind(39, "right");
function Gamepad() {
	var self = this;
	this.alias = {};
	this.init = function() {
		addEventListener('keyup', function(e) {
			self.changeState(e.keyCode, false);
		}, self.event, false);
		addEventListener('keydown', function(e) {
			self.changeState(e.keyCode, true);
		}, self.event, false);
	};
	this.bind = function(key, name) {
		this.alias[key] = name;
		this[this.alias[key]] = this[key];
	};
	this.changeState = function(key, state) {
		this[key] = state;
		this[this.alias[key]] = state;
	};
	this.init();
}