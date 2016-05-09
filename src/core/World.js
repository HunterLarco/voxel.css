(function(window) {

  if (!window.voxelcss) {
    window.voxelcss = {};
  }

  function World() {
    var self = this;
    var undefined;

    var scene;
    var worldLabel = '*';
    var voxels     = [];

    self.add    = AddVoxel;
    self.remove = RemoveVoxel;

    self.export = Export;
    self.import = Import;

    self.save       = SaveToBrowser;
    self.load       = LoadFromBrowser;
    self.isSaved    = IsSavedToBrowser;
    self.deleteSave = DeleteSave;

    self.getScene  = GetScene;
    self.getVoxels = GetVoxels;


    function AddVoxel(voxel) {
      voxels.push(voxel);

      return scene.add(voxel);
    }

    function RemoveVoxel(voxel) {
      var index = voxels.indexOf(voxel);

      if (index === -1) {
        return false;
      }

      scene.remove(voxel);
      voxels.splice(index, 1);

      return true;
    }

    function Export(){
      var json = [];
      var i;
      var voxel;

      for (i = 0; voxel = voxels[i++];)
        json.push({
          position : voxel.getPosition(),
          dimension: voxel.getDimension(),
          mesh     : voxel.getMesh().serialize()
        });

        return JSON.stringify(json);
    }

    function Import(string) {
      ClearBlocks();

      var json = JSON.parse(string + '');
      var i;
      var serial;
      var voxel;

      for (i = 0; serial = json[i++];){
        voxel = new voxelcss.Voxel(serial.position.x, serial.position.y, serial.position.z, serial.dimension);
        voxel.setMesh(voxelcss.Mesh.loadFromSerial(serial.mesh));
        AddVoxel(voxel);
      }
    }

    function SaveToBrowser() {
      localStorage.setItem(FormSaveName(), Export());
    }

    function LoadFromBrowser() {
      Import(localStorage.getItem(FormSaveName()) || '[]');
    }

    function IsSavedToBrowser() {
      return !!localStorage.getItem(FormSaveName());
    }

    function DeleteSave() {
      localStorage.setItem(FormSaveName(), '');
    }

    function GetScene() {
      return scene;
    }

    function GetVoxels() {
      return voxels.concat([]);
    }

    function ClearBlocks() {
      while(voxels.length > 0)
        RemoveVoxel(voxels[0]);
    }

    function FormSaveName() {
      return 'savedWorld<' + worldLabel + '>';
    }


    (function Constructor(_scene, _worldLabel) {
      if (_scene === undefined) {
        throw 'World cannot be instantiated without a Scene instance';
      }

      scene = _scene;

      if (_worldLabel !== undefined) {
        worldLabel = _worldLabel;
      }

    }).apply(self, arguments);
  }

  voxelcss.World = World;

})(window);
