(function(window) {

  if (!window.voxelcss) {
    window.voxelcss = {};
  }

  voxelcss.Meshes = {

    dirt: new voxelcss.Mesh(
      new voxelcss.ImageFace('http://voxelcss.com/res/dirt/main.png')
    ),

    grass: new voxelcss.Mesh({
      'top'    : new voxelcss.ImageFace('http://voxelcss.com/res/grass/top.png'),
      'bottom' : new voxelcss.ImageFace('http://voxelcss.com/res/grass/bottom.png'),
      'front'  : new voxelcss.ImageFace('http://voxelcss.com/res/grass/side.png'),
      'back'   : new voxelcss.ImageFace('http://voxelcss.com/res/grass/side.png'),
      'left'   : new voxelcss.ImageFace('http://voxelcss.com/res/grass/side.png'),
      'right'  : new voxelcss.ImageFace('http://voxelcss.com/res/grass/side.png')
    }),

    water: new voxelcss.Mesh(
      new voxelcss.ImageFace('http://voxelcss.com/res/water/main.png')
    ),

    waterFall: new voxelcss.Mesh({
      'top'    : new voxelcss.ImageFace('http://voxelcss.com/res/water/main.png'),
      'bottom' : new voxelcss.ImageFace('http://voxelcss.com/res/water/main.png'),
      'front'  : new voxelcss.ImageFace('http://voxelcss.com/res/water/fall.png'),
      'back'   : new voxelcss.ImageFace('http://voxelcss.com/res/water/fall.png'),
      'left'   : new voxelcss.ImageFace('http://voxelcss.com/res/water/fall.png'),
      'right'  : new voxelcss.ImageFace('http://voxelcss.com/res/water/fall.png')
    }),

    waterFallTop: new voxelcss.Mesh({
      'top'    : new voxelcss.ImageFace('http://voxelcss.com/res/water/main.png'),
      'bottom' : new voxelcss.ImageFace('http://voxelcss.com/res/water/main.png'),
      'front'  : new voxelcss.ImageFace('http://voxelcss.com/res/water/falltop.png'),
      'back'   : new voxelcss.ImageFace('http://voxelcss.com/res/water/falltop.png'),
      'left'   : new voxelcss.ImageFace('http://voxelcss.com/res/water/falltop.png'),
      'right'  : new voxelcss.ImageFace('http://voxelcss.com/res/water/falltop.png')
    }),

    waterFallCrash: new voxelcss.Mesh({
      'top'    : new voxelcss.ImageFace('http://voxelcss.com/res/water/main.png'),
      'bottom' : new voxelcss.ImageFace('http://voxelcss.com/res/water/main.png'),
      'front'  : new voxelcss.ImageFace('http://voxelcss.com/res/water/crash.png'),
      'back'   : new voxelcss.ImageFace('http://voxelcss.com/res/water/crash.png'),
      'left'   : new voxelcss.ImageFace('http://voxelcss.com/res/water/crash.png'),
      'right'  : new voxelcss.ImageFace('http://voxelcss.com/res/water/crash.png')
    }),

    treeTrunk: new voxelcss.Mesh({
      'top'    : new voxelcss.ImageFace('http://voxelcss.com/res/tree/rings.png'),
      'bottom' : new voxelcss.ImageFace('http://voxelcss.com/res/tree/rings.png'),
      'front'  : new voxelcss.ImageFace('http://voxelcss.com/res/tree/bark.png'),
      'back'   : new voxelcss.ImageFace('http://voxelcss.com/res/tree/bark.png'),
      'left'   : new voxelcss.ImageFace('http://voxelcss.com/res/tree/bark.png'),
      'right'  : new voxelcss.ImageFace('http://voxelcss.com/res/tree/bark.png')
    }),

    treeLeaves: new voxelcss.Mesh(
      new voxelcss.ImageFace('http://voxelcss.com/res/tree/leaves.png')
    )

  };

})(window);
