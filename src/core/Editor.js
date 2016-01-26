(function(){
  
  if(!window.voxelcss) window.voxelcss = {};
  
  function Editor(){
    var self = this;
    var undefined;
    
    
    var world;
    
    var canAutoSave = false;
    var isEnabled = true;
    
    var tool = {mesh:{}};
    
    
    self.enable = Enable;
    self.disable = Disable;
    self.isEnabled = IsEnabled;
    
    self.enableAutoSave = EnableAutoSave;
    self.disableAutoSave = DisableAutoSave;
    self.canAutoSave = CanAutoSave;
    
    self.save = Save;
    self.load = Load;
    self.isSaved = IsSaved;
    self.deleteSave = DeleteSave;
    
    self.export = Export;
    self.import = Import;
    
    self.add = AddVoxel;
    self.remove = RemoveVoxel;
    
    self.getWorld = GetWorld;
    
    self.setToolMesh = SetToolMesh;
    
    
    function Enable(){
      isEnabled = true;
      var sceneElem = world.getScene().getDomElement();
      sceneElem.setAttribute('class', 'scene edit');
    }
    function Disable(){
      isEnabled = false;
      var sceneElem = world.getScene().getDomElement();
      sceneElem.setAttribute('class', 'scene');
    }
    function IsEnabled(){
      return isEnabled;
    }
    
    function EnableAutoSave(){
      canAutoSave = true;
    }
    function DisableAutoSave(){
      canAutoSave = false;
    }
    function CanAutoSave(){
      return canAutoSave;
    }
    
    function Save(){
      world.save();
    }
    function Load(){
      var response = world.load();
      LoadWorldVoxels();
      return response;
    }
    function IsSaved(){
      return world.isSaved();
    }
    function DeleteSave(){
      return world.deleteSave();
    }
    
    function Export(){
      return world.export();
    }
    function Import(string){
      var response = world.import(string);
      LoadWorldVoxels();
      return response;
    }
    
    function AddVoxel(voxel){
      BindVoxel(voxel);
      var response = world.add(voxel);
      
      if(canAutoSave) Save();
      return response;
    }
    function RemoveVoxel(voxel){
      var success = world.remove(voxel);
      if(success) UnBindVoxel(voxel);
      
      if(canAutoSave) Save();
      return success;
    }
    
    function GetWorld(){
      return world;
    }
    
    function SetToolMesh(mesh){
      if(mesh === undefined) return tool.mesh;
      
      var old = tool.mesh;
      tool.mesh = mesh;
      return old;
    }
    
    
    function BindVoxel(voxel){
      voxel.addEventListener('VoxelClick', OnVoxelClick);
      
      voxel.addEventListener('TopClick', OnTopClick);
      voxel.addEventListener('BottomClick', OnBottomClick);
      voxel.addEventListener('FrontClick', OnFrontClick);
      voxel.addEventListener('BackClick', OnBackClick);
      voxel.addEventListener('LeftClick', OnLeftClick);
      voxel.addEventListener('RightClick', OnRightClick);
      
      voxel.addEventListener('MeshChange', function(){
        if(canAutoSave) Save();
      });
    }
    function UnBindVoxel(voxel){
      voxel.removeEventListener('VoxelClick', OnVoxelClick);
      
      voxel.removeEventListener('TopClick', OnTopClick);
      voxel.removeEventListener('BottomClick', OnBottomClick);
      voxel.removeEventListener('FrontClick', OnFrontClick);
      voxel.removeEventListener('BackClick', OnBackClick);
      voxel.removeEventListener('LeftClick', OnLeftClick);
      voxel.removeEventListener('RightClick', OnRightClick);
    }
    
    function OnVoxelClick(event){
      if(!isEnabled) return;
      var voxel = event.target;
      RemoveVoxel(voxel);
    }
    function OnTopClick(event){
      if(!isEnabled) return;
      var voxel = event.target;
      DoAddativeShift(voxel, 0, 1, 0);
    }
    function OnBottomClick(event){
      if(!isEnabled) return;
      var voxel = event.target;
      DoAddativeShift(voxel, 0, -1, 0);
    }
    function OnFrontClick(event){
      if(!isEnabled) return;
      var voxel = event.target;
      DoAddativeShift(voxel, 0, 0, 1);
    }
    function OnBackClick(event){
      if(!isEnabled) return;
      var voxel = event.target;
      DoAddativeShift(voxel, 0, 0, -1);
    }
    function OnLeftClick(event){
      if(!isEnabled) return;
      var voxel = event.target;
      DoAddativeShift(voxel, -1, 0, 0);
    }
    function OnRightClick(event){
      if(!isEnabled) return;
      var voxel = event.target;
      DoAddativeShift(voxel, 1, 0, 0);
    }
    function DoAddativeShift(voxel, x, y, z){
      var newVoxel = voxel.clone();
      var dim = newVoxel.getDimension();

      newVoxel.setMesh(tool.mesh);
      newVoxel.translate(x*dim, y*dim, z*dim);

      AddVoxel(newVoxel);
    }
    
    function LoadWorldVoxels(){
      for(var i=0,voxel; voxel=world.getVoxels()[i++];)
        BindVoxel(voxel);
    }
    
    
    (function Constructor(_world, options){
      if(_world === undefined)
        throw 'Editor requires World instance for initialization';
      
      world = _world;
      
      if(options !== undefined && options.autosave === true)
        EnableAutoSave();
      
      Enable();
      LoadWorldVoxels();
    }).apply(self, arguments);
  }
  
  voxelcss.Editor = Editor;
  
})();