/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = null
require(["utils", "three.min", "webGLGame", "__Edit", "Group"], function() {
    Group.prototype.edit = new __Edit();
    app = new WebGLGame();
    app._useTimeDelta = false;
    test = new Group();
//    app.addObject(cube);
});
