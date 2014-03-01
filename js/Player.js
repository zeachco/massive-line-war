function Player() {
    var self = this;
    self.level = 1;
    self.update = function() {
        if (GAMEPAD.up)
            console.log("player move forward");
        else
            console.log("player is updated");
    };
}