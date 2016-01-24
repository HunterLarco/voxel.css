(function(){
  
  
  if(!window.voxelcss) window.voxelcss = {};
  
  
  var EMPTYGIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  
  
  function ImageFace(){
    var self = this;
    
    
    var source = EMPTYGIF;
    
    
    self.setSource = SetSource;
    self.getSource = GetSource;
    
    self.serialize = Serialize;
    
    
    function SetSource(src){
      if(!src) return source;
      var old = source;
      source = src;
      return old;
    }
    function GetSource(){
      return source;
    }
    
    function Serialize(){
      return source;
    }
    
    
    (function Constructor(src){
      SetSource(src);
    }).apply(self, arguments);
  }
  
  
  ImageFace.loadFromSerial = function LoadFromSerial(serial){
    return new ImageFace(serial);
  }
  
  
  window.voxelcss.ImageFace = ImageFace;
  
  
})();