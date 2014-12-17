require.config({
  paths:{
    'threejs': '../libs/threejs/build/three',
    'GAMEPAD': './engine/GAMEPAD'
  },
  shim: {
    threejs: {
      exports: 'THREE'
    }
  }
});
require(['app']);
