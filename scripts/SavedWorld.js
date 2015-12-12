(function(){
  
  function SavedWorld(){
    var self = this;
    var undefined;
    
    
    const AUTOSAVE = false;
    
    
    var scene;
    var blocks = [];
    
    var canEdit = true;
    var tool = {
      mesh: MESHES.grass
    }
    
    
    self.add = AddBlock;
    self.remove = RemoveBlock;
    
    self.export = Export;
    self.import = Import;
    
    self.exportToBrowser = ExportToBrowser;
    self.importFromBrowser = ImportFromBrowser;
    self.isSavedToBrowser = IsSavedToBrowser;
    
    self.setToolMesh = SetToolMesh;
    
    self.preventEdits = PreventEdits;
    self.enableEdits = EnableEdits;
    
    
    function AddBlock(cube){
      BindCube(cube);
      UpdateEditClassPerBlock(cube);
      
      blocks.push(cube);
      cube.animUp(scene);
      
      if(AUTOSAVE) ExportToBrowser();
    }
    function RemoveBlock(cube){
      var index = blocks.indexOf(cube);
      if(index == -1) return false;
      
      cube.removeFromScene();
      blocks.splice(index, 1);
      
      if(AUTOSAVE) ExportToBrowser();
      return true;
    }
    
    function Export(){
      var json = [];
      
      for(var i=0,block; block=blocks[i++];)
        json.push({
          position: block.getPosition(),
          dimension: block.getDimension(),
          mesh: block.getMesh().label
        });
      
      return JSON.stringify(json);
    }
    function Import(string){
      ClearBlocks();
      
      var json = JSON.parse(string);
      
      for(var i=0,serial; serial=json[i++];){
        var cube = new Cube(serial.position.x, serial.position.y, serial.position.z, serial.dimension);
        cube.setMesh(MESHES[serial.mesh]);
        (function(cube){
          setTimeout(function(){
            AddBlock(cube);
          }, 20 * i + 500);
        })(cube);
      }
    }
    
    function ExportToBrowser(){
      localStorage.setItem('savedWorld', Export());
    }
    function ImportFromBrowser(){
      Import(localStorage.getItem('savedWorld') || '[]');
    }
    function IsSavedToBrowser(){
      return !!localStorage.getItem('savedWorld');
    }
    
    function SetToolMesh(mesh){
      tool.mesh = mesh;
    }
    
    function PreventEdits(){
      canEdit = false;
      UpdateEditClass();
    }
    function EnableEdits(){
      canEdit = true;
      UpdateEditClass();
    }
    function CanEdit(){
      return canEdit;
    }
    
    
    function ClearBlocks(){
      while(blocks.length > 0)
        RemoveBlock(blocks[0]);
    }
    
    function BindCube(cube){
      cube.addEventListener('CubeClick', RemoveCube);
    
      cube.addEventListener('TopClick', NewCubeFromTop);
      cube.addEventListener('BottomClick', NewCubeFromBottom);
      cube.addEventListener('FrontClick', NewCubeFromFront);
      cube.addEventListener('BackClick', NewCubeFromBack);
      cube.addEventListener('LeftClick', NewCubeFromLeft);
      cube.addEventListener('RightClick', NewCubeFromRight);
    }
    function RemoveCube(event){
      if (!canEdit) return;
      RemoveBlock(event.target);
    }
    function NewCubeFromTop(event){
      if (!canEdit) return;
      NewOffsetCube(event, 0, 1, 0);
    }
    function NewCubeFromBottom(event){
      if (!canEdit) return;
      NewOffsetCube(event, 0, -1, 0);
    }
    function NewCubeFromRight(event){
      if (!canEdit) return;
      NewOffsetCube(event, 1, 0, 0);
    }
    function NewCubeFromLeft(event){
      if (!canEdit) return;
      NewOffsetCube(event, -1, 0, 0);
    }
    function NewCubeFromBack(event){
      if (!canEdit) return;
      NewOffsetCube(event, 0, 0, -1);
    }
    function NewCubeFromFront(event){
      if (!canEdit) return;
      NewOffsetCube(event, 0, 0, 1);
    }
    function NewOffsetCube(event, dx, dy, dz){
      var cube = event.target;
      var pos = cube.getPosition();
      var dim = cube.getDimension();
      
      var cube = new Cube(pos.x + dx*dim, pos.y + dy*dim, pos.z + dz*dim, dim);
      cube.setMesh(tool.mesh);
      
      AddBlock(cube);
    }
    
    function UpdateEditClass(){
      for(var i=0,block; block=blocks[i++];)
        UpdateEditClassPerBlock(block);
    }
    function UpdateEditClassPerBlock(block){
      if (canEdit) block.enableHoverState();
      block.disableHoverState();
    }
    
    
    (function Constructor(_scene){
      scene = _scene;
      UpdateEditClass();
    }).apply(self, arguments);
  }
  
  window.SavedWorld = SavedWorld;
  
})();