(function(){
  
  if(!window.voxelcss) window.voxelcss = {};
  
  
  var FACETYPES = {
    'image': voxelcss.ImageFace,
    'color': voxelcss.ColorFace
  };
  
  
  function Mesh(){
    var self = this;
    
    
    var front;
    var back;
    var left;
    var right;
    var top;
    var bottom;
    
    
    self.setFront  = SetFront;
    self.setBack   = SetBack;
    self.setLeft   = SetLeft;
    self.setRight  = SetRight;
    self.setTop    = SetTop;
    self.setBottom = SetBottom;
    
    self.getFront  = GetFront;
    self.getBack   = GetBack;
    self.getLeft   = GetLeft;
    self.getRight  = GetRight;
    self.getTop    = GetTop;
    self.getBottom = GetBottom;
    
    self.setFaces  = SetFaces;
    self.getFaces  = GetFaces;
    
    self.serialize = Serialize;
    
    
    function SetFront(face){
      if(!ContainsFaceType(face)) return;
      var old = front;
      front = face;
      return old;
    }
    function SetBack(face){
      if(!ContainsFaceType(face)) return;
      var old = back;
      back = face;
      return old;
    }
    function SetLeft(face){
      if(!ContainsFaceType(face)) return;
      var old = left;
      left = face;
      return old;
    }
    function SetRight(face){
      if(!ContainsFaceType(face)) return;
      var old = right;
      right = face;
      return old;
    }
    function SetTop(face){
      if(!ContainsFaceType(face)) return;
      var old = top;
      top = face;
      return old;
    }
    function SetBottom(face){
      if(!ContainsFaceType(face)) return;
      var old = bottom;
      bottom = face;
      return old;
    }
    
    function GetFront(){
      return front;
    }
    function GetBack(){
      return back;
    }
    function GetLeft(){
      return left;
    }
    function GetRight(){
      return right;
    }
    function GetTop(){
      return top;
    }
    function GetBottom(){
      return bottom;
    }
    
    function SetFaces(faces){
      var old = GetFaces();
      
      if(faces === undefined) return old;
      
      SetFront(faces.front);
      SetBack(faces.back);
      SetLeft(faces.left);
      SetRight(faces.right);
      SetTop(faces.top);
      SetBottom(faces.bottom);
    }
    function GetFaces(){
      return {
        'front' : front,
        'back'  : back,
        'left'  : left,
        'right' : right,
        'top'   : top,
        'bottom': bottom
      };
    }
    
    function Serialize(){
      return JSON.stringify({
        'front' : SerializeFace(front),
        'back'  : SerializeFace(back),
        'left'  : SerializeFace(left),
        'right' : SerializeFace(right),
        'top'   : SerializeFace(top),
        'bottom': SerializeFace(bottom)
      });
    }
    
    
    function SerializeFace(face){
      return GetFaceKeyByType(face.constructor) + '(' + face.serialize() + ')';
    }
    function ContainsFaceType(face){
      return !!GetFaceKeyByType(face.constructor);
    }
    function GetFaceKeyByType(type){
      for(var key in FACETYPES){
        var value = FACETYPES[key];
        if (value == type)
          return key;
      }
      return null;
    }
    
    
    (function Constructor(faces){
      SetFaces({
        'front' : new voxelcss.ImageFace(),
        'back'  : new voxelcss.ImageFace(),
        'left'  : new voxelcss.ImageFace(),
        'right' : new voxelcss.ImageFace(),
        'top'   : new voxelcss.ImageFace(),
        'bottom': new voxelcss.ImageFace()
      });
      SetFaces(faces);
    }).apply(self, arguments);
  }
  
  Mesh.loadFromSerial = function LoadFromSerial(serial){
    var json = JSON.parse(serial);
    return new Mesh({
        'front' : LoadFaceFromSerial(json.front),
        'back'  : LoadFaceFromSerial(json.back),
        'left'  : LoadFaceFromSerial(json.left),
        'right' : LoadFaceFromSerial(json.right),
        'top'   : LoadFaceFromSerial(json.top),
        'bottom': LoadFaceFromSerial(json.bottom)
    });
  }
  function LoadFaceFromSerial(compositeSerial){
    var index = compositeSerial.indexOf('(');
    var type = compositeSerial.slice(0, index);
    var typeSerial = compositeSerial.slice(index+1, -1);
    return FACETYPES[type].loadFromSerial(typeSerial);
  }
  
  window.voxelcss.Mesh = Mesh;
  
})();