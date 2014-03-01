function Game() {
    var self = this;
    self._childs = [];
    self._isActive = false;
    self.start = function() {
        window.onblur = function(){
            self.blur();
        };
        window.onclick = self.focus;
        self.focus();
    };
    self.run = function() {
        if (self._isActive)
            requestAnimFrame(self.run);
        for (var i = 0; i < self._childs.length;i++){
            try{
                self._childs[i].update();   
            }catch(e){
                console.error(e);
            }
         
        }
    };
    self.blur = function() {
        self._isActive = false;
    };
    self.focus = function() {
        if (!self._isActive) {
            self._isActive = true;
            self.run();
        }
    };
    self.addObj = function(obj){
      self._childs.push(obj);  
    };
}
