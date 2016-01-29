(function(window) {

  if (!window.voxelcss) {
    window.voxelcss = {};
  }

  var FACETYPES = {
    'image': voxelcss.ImageFace,
    'color': voxelcss.ColorFace
  };

  // implements event listener
  // events -> onchange
  function Mesh() {
    var self = this;

    var front;
    var back;
    var left;
    var right;
    var top;
    var bottom;

    var canTriggerEvent = true;

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

    function SetFront(face) {
      var old;

      if (face === undefined || !ContainsFaceType(face)) {
        return;
      }

      old = front;

      if (!!old) {
        old.removeEventListener('change', OnFaceChangeEvent);
      }

      front = face;
      front.addEventListener('change', OnFaceChangeEvent);

      if (canTriggerEvent) {
        TriggerChangeEvent();
      }

      return old;
    }

    function SetBack(face) {
      var old;

      if (face === undefined || !ContainsFaceType(face)) {
        return;
      }

      old = back;

      if (!!old) {
        old.removeEventListener('change', OnFaceChangeEvent);
      }

      back = face;
      back.addEventListener('change', OnFaceChangeEvent);

      if (canTriggerEvent) {
        TriggerChangeEvent();
      }

      return old;
    }

    function SetLeft(face) {
      var old;

      if (face === undefined || !ContainsFaceType(face)) {
        return;
      }

      old = left;

      if (!!old) {
        old.removeEventListener('change', OnFaceChangeEvent);
      }

      left = face;
      left.addEventListener('change', OnFaceChangeEvent);

      if (canTriggerEvent) {
        TriggerChangeEvent();
      }

      return old;
    }

    function SetRight(face) {
      var old;

      if (face === undefined || !ContainsFaceType(face)) {
        return;
      }

      old = right;

      if (!!old) {
        old.removeEventListener('change', OnFaceChangeEvent);
      }

      right = face;
      right.addEventListener('change', OnFaceChangeEvent);

      if (canTriggerEvent) {
        TriggerChangeEvent();
      }

      return old;
    }

    function SetTop(face) {
      var old;

      if (face === undefined || !ContainsFaceType(face)) {
        return;
      }

      old = top;

      if (!!old) {
        old.removeEventListener('change', OnFaceChangeEvent);
      }

      top = face;
      top.addEventListener('change', OnFaceChangeEvent);

      if (canTriggerEvent) {
        TriggerChangeEvent();
      }

      return old;
    }

    function SetBottom(face) {
      var old;

      if (face === undefined || !ContainsFaceType(face)) {
        return;
      }

      old = bottom;

      if (!!old) {
        old.removeEventListener('change', OnFaceChangeEvent);
      }

      bottom = face;
      bottom.addEventListener('change', OnFaceChangeEvent);

      if (canTriggerEvent) {
        TriggerChangeEvent();
      }

      return old;
    }

    function GetFront() {
      return front;
    }

    function GetBack() {
      return back;
    }

    function GetLeft() {
      return left;
    }

    function GetRight() {
      return right;
    }

    function GetTop() {
      return top;
    }

    function GetBottom() {
      return bottom;
    }

    function SetFaces(faces){
      var old = GetFaces();

      if (faces === undefined) {
        return old;
      }

      if (ContainsFaceType(faces)) {
        faces = {
          'front' : faces,
          'back'  : faces,
          'top'   : faces,
          'bottom': faces,
          'left'  : faces,
          'right' : faces
        };
      }

      canTriggerEvent = false;

      SetFront(faces.front);
      SetBack(faces.back);
      SetLeft(faces.left);
      SetRight(faces.right);
      SetTop(faces.top);
      SetBottom(faces.bottom);

      TriggerChangeEvent();
      canTriggerEvent = true;

      return old;
    }

    function GetFaces() {
      return {
        'front' : front,
        'back'  : back,
        'left'  : left,
        'right' : right,
        'top'   : top,
        'bottom': bottom
      };
    }

    function Serialize() {
      return JSON.stringify({
        'front' : SerializeFace(front),
        'back'  : SerializeFace(back),
        'left'  : SerializeFace(left),
        'right' : SerializeFace(right),
        'top'   : SerializeFace(top),
        'bottom': SerializeFace(bottom)
      });
    }

    function SerializeFace(face) {
      return GetFaceKeyByType(face.constructor) + '(' + face.serialize() + ')';
    }

    function ContainsFaceType(face) {
      return !!GetFaceKeyByType(face.constructor);
    }

    function GetFaceKeyByType(type) {
      var key;
      var value;

      for(key in FACETYPES){
        value = FACETYPES[key];

        if (value == type) {
          return key;
        }

      }

      return null;
    }

    function OnFaceChangeEvent() {
      TriggerChangeEvent();
    }

    function TriggerChangeEvent() {
      self.triggerEvent('change', {
        target: self,
        faces: GetFaces()
      });
    }

    (function Constructor(faces) {
      voxelcss.interfaces.EventListener(self);
      SetFaces(new voxelcss.ImageFace());
      SetFaces(faces);
    }).apply(self, arguments);
  }

  Mesh.loadFromSerial = function LoadFromSerial(serial) {
    var json = JSON.parse(serial);

    return new Mesh({
        'front' : LoadFaceFromSerial(json.front),
        'back'  : LoadFaceFromSerial(json.back),
        'left'  : LoadFaceFromSerial(json.left),
        'right' : LoadFaceFromSerial(json.right),
        'top'   : LoadFaceFromSerial(json.top),
        'bottom': LoadFaceFromSerial(json.bottom)
    });
  };

  function LoadFaceFromSerial(compositeSerial) {
    var index = compositeSerial.indexOf('(');
    var type = compositeSerial.slice(0, index);
    var typeSerial = compositeSerial.slice(index + 1, -1);

    return FACETYPES[type].loadFromSerial(typeSerial);
  }

  window.voxelcss.Mesh = Mesh;

})(window);
