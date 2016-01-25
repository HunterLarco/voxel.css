(function(){
  
  if(!window.voxelcss) window.voxelcss = {};
  
  // implements interface positioned
  // implements interface eventlistener (positioned dependency)
  // events -> change
  function LightSource(){
    var self = this;
    var undefined;
    
    
    var travelDistance = 500;
    var maxLight = 1;
    var maxDark = 0;
    
    
    self.setTravelDistance = SetTravelDistance;
    self.getTravelDistance = GetTravelDistance;
    
    self.setBrightness = SetBrightness;
    self.getBrightness = GetBrightness;
    
    
    function SetTravelDistance(distance){
      if(distance === undefined || typeof distance != 'number') 
        return travelDistance;
      
      var old = travelDistance;
      travelDistance = distance;
      self.triggerEvent('change', {target:self});
      return old;
    }
    function GetTravelDistance(){
      return travelDistance;
    }
    
    function SetBrightness(dark, light){
      var old = GetBrightness();
      if(typeof light == 'number') maxLight = light;
      if(typeof dark == 'number') maxDark = dark;
      self.triggerEvent('change', {target:self});
      return old;
    }
    function GetBrightness(){
      return [maxDark, maxLight];
    }
    
    
    (function Constructor(x, y, z, distance, dark, light){
      voxelcss.interfaces.Positioned(voxelcss.interfaces.EventListener(self));
      self.setPosition(x, y, z);
      SetTravelDistance(distance);
      SetBrightness(dark, light);
    }).apply(self, arguments);
  }
  
  window.voxelcss.LightSource = LightSource;
  
})();