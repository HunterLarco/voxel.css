(function(){
  
  window.addEventListener('init', Init);
  
  function Init(){
    var scene = new voxelcss.Scene();
    scene.attach(document.body);
    
    var world = new voxelcss.World();
    world.load([]);
    world.add(new Voxel(0, 0, 0, 100, {
      mesh: MESHES.grass
    }));
    
    var editor = new voxelcss.Editor(world);
    editor.enable();
  }
  
})();