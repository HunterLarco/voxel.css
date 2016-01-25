(function(){
  
  
  if(!window.voxelcss) window.voxelcss = {};
  
  
  var EMPTYGIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  
  
  // implements eventlistener
  // events -> onchange
  function ImageFace(){
    var self = this;
    
    
    var source = EMPTYGIF;
    
    
    self.setSource = SetSource;
    self.getSource = GetSource;
    
    self.serialize = Serialize;
    self.clone = Clone;
    
    
    function SetSource(src){
      if(!src) return source;
      var old = source;
      source = src;
      TriggerChangeEvent();
      return old;
    }
    function GetSource(){
      return source;
    }
    
    function Serialize(){
      return source;
    }
    function Clone(){
      return new ImageFace(source);
    }
    
    
    function TriggerChangeEvent(){
      self.triggerEvent('change', {target:self});
    }
    
    
    (function Constructor(src){
      voxelcss.interfaces.EventListener(self);
      SetSource(src);
    }).apply(self, arguments);
  }
  
  
  ImageFace.loadFromSerial = function LoadFromSerial(serial){
    return new ImageFace(serial);
  }
  
  
  window.voxelcss.ImageFace = ImageFace;
  
  
})();