(function(window) {

  if (!window.voxelcss) {
    window.voxelcss = {};
  }

  // implements eventlistener
  // events -> onchange
  function ColorFace() {
    var self = this;
    var undefined;

    var color = {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };

    self.setColor = SetColor;
    self.getRGBA  = GetRGBA;
    self.getHex   = GetHex;

    self.serialize = Serialize;
    self.clone = Clone;

    function SetColor() {
      if (arguments.length === 1 && arguments[0].constructor !== Number){

        if (arguments[0].constructor === String) {
          return SetColorFromHex(arguments[0]);
        }

        else {
          return SetColorFromRGBADict(arguments[0]);
        }

      } else{
        return SetColorFromRGBA.apply(this, arguments);
      }
    }

    function GetRGBA() {
      return {
        r: color.r,
        g: color.g,
        b: color.b,
        a: color.a
      };
    }

    function GetHex() {
      return RgbToHex(color.r, color.g, color.b);
    }

    function Serialize() {
      return JSON.stringify(color);
    }

    function Clone() {
      return new ColorFace(color);
    }

    function SetColorFromRGBA(r, g, b, a) {
      var old = GetRGBA();

      if (r != undefined && r.constructor == Number) { color.r = r; }
      if (g != undefined && g.constructor == Number) { color.g = g; }
      if (b != undefined && b.constructor == Number) { color.b = b; }
      if (a != undefined && a.constructor == Number) { color.a = a; }

      TriggerChangeEvent();

      return old;
    }

    function SetColorFromRGBADict(dict){

      if (dict === undefined) {
        return GetRGBA();
      }

      return SetColorFromRGBA(
        dict.r,
        dict.g,
        dict.b,
        dict.a
      );
    }

    function SetColorFromHex(hex) {
      var old;

      if (!hex || hex.constructor !== String) {
        return GetRGBA();
      }

      old = GetRGBA();
      color = HexToRgb(hex);
      color.a = 1;
      TriggerChangeEvent();

      return old;
    }

    function HexToRgb(hex) {
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      var result;

      hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
      });

      result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }

    function RgbToHex(r, g, b) {
      return '' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    function TriggerChangeEvent() {
      self.triggerEvent('change', {target:self});
    }

    (function Constructor() {
      voxelcss.interfaces.EventListener(self);
      SetColor.apply(this, arguments);
    }).apply(self, arguments);
  }

  ColorFace.loadFromSerial = function LoadFromSerial(serial) {
    var json = JSON.parse(serial);

    return new ColorFace(json);
  };

  window.voxelcss.ColorFace = ColorFace;

})(window);
