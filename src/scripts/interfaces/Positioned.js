(function(){
  
  function Positioned(obj){
    var self = obj || new Function();
    
    
    var position = {x:0, y:0, z:0};
    

    function SetPosition(x, y, z){
      return {
        x: SetPositionX(x),
        y: SetPositionY(y),
        z: SetPositionZ(z)
      }
    }
    function SetPositionX(x){
      if(x === undefined || typeof x != 'number') 
        return position.x;
      
      var old = position.x;
      position.x = x;
      return old;
    }
    function SetPositionY(y){
      if(y === undefined || typeof y != 'number') 
        return position.y;
      
      var old = position.y;
      position.y = y;
      return old;
    }
    function SetPositionZ(z){
      if(z === undefined || typeof z != 'number') 
        return position.z;
      
      var old = position.z;
      position.z = z;
      return old;
    }
    
    function Translate(x, y, z){
      return {
        x: TranslateX(x),
        y: TranslateY(y),
        z: TranslateZ(z)
      }
    }
    function TranslateX(x){
      if(x === undefined || typeof x != 'number') 
        return position.x;
      
      return SetPositionX(x + position.x);
    }
    function TranslateY(y){
      if(y === undefined || typeof y != 'number') 
        return position.y;
      
      return SetPositionY(y + position.y);
    }
    function TranslateZ(z){
      if(z === undefined || typeof z != 'number') 
        return position.z;
      
      return SetPositionZ(z + position.z);
    }
    
    function GetPosition(){
      return {
        x: position.x,
        y: position.y,
        z: position.z
      };
    }
    function GetPositionX(){
      return position.x;
    }
    function GetPositionY(){
      return position.y;
    }
    function GetPositionZ(){
      return position.z;
    }
    
    
    self.setPosition  = SetPosition;
    self.setPositionX = SetPositionX;
    self.setPositionY = SetPositionY;
    self.setPositionZ = SetPositionZ;
    
    self.translate  = Translate;
    self.translateX = TranslateX;
    self.translateY = TranslateY;
    self.translateZ = TranslateZ;
    
    self.getPosition  = GetPosition;
    self.getPositionX = GetPositionX;
    self.getPositionY = GetPositionY;
    self.getPositionZ = GetPositionZ;
    
    
    return self;
  }
  
  window.Positioned = Positioned;
  
})();