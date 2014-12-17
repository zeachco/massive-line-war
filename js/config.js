require.config({
  paths:{
    'threejs': '../libs/threejs/build/three'
  },
  shim: {
    threejs: {
      exports: 'THREE'
    }
  }
});
require(['app']);
