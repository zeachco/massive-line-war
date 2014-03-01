function Player() {
    var self = this;
    self.level = 1;
    self.init = function(){
        console.log("initialisation du joueur");
    };
    self.update = function() {
        if (GAMEPAD.up)
            console.log("player move forward");
    };
}