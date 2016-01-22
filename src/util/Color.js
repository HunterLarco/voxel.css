(function(){
  
  if(!window.voxelcss) window.voxelcss = {};
  if(!window.voxelcss.util) window.voxelcss.util = {};
	
  function Color(){
    var self = this;
    
	
    var color = [0,0,0];
    
	
    self.toHex = ToHex;
    self.toRawHex = ToRawHex;
    self.toRGB = ToRGB;
    self.toRGBArray = ToRGBArray;
    self.toRGBString = ToRGBString;
	
    self.invert = Invert;
    self.distance = DistanceTo;
	
    self.getR = GetR;
    self.getG = GetG;
    self.getB = GetB;
    
	
    function Invert(){
      return new Color(color.map(function(value){return 255-value;}));
    }
    function DistanceTo(color){
      return Math.sqrt(Math.pow(GetR()-color.getR(),2)+Math.pow(GetG()-color.getG(),2)+Math.pow(GetB()-color.getB(),2)) / Math.sqrt(3 * Math.pow(255, 2));
    }
	
    function GetR(){
      return color[0];
    }
    function GetG(){
      return color[1];
    }
    function GetB(){
      return color[2];
    }
	
    function ToHex(){
      return '#'+ToRawHex();
    }
    function ToRawHex(){
      return RgbToHex(GetR(), GetG(), GetB());
    }
    function ToRGB(){
      return {
        r: color[0],
        g: color[1],
        b: color[2]
      }
    }
    function ToRGBArray(){
      return color;
    }
    function ToRGBString(){
      return 'rgb('+ToRGBArray().join(',')+')';
    }
    
    
    function HexToRgb(hex) {
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
      });

      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }
    function RgbToHex(r, g, b){
      return ''+((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    
	
    var Constructor = voxelcss.util.Overload();
    Constructor.overload(function(clr){
      color = clr.slice(0,3).map(function(val){return Math.min(255, Math.max(0, Math.round(val)));});
    }, [Array]);
    Constructor.overload(function(r,g,b){
      Constructor([r,g,b]);
    }, [Number, Number, Number]);
    Constructor.overload(function(obj){
      Constructor(obj.r||0, obj.g||0, obj.b||0);
    }, [Object]);
    Constructor.overload(function(hex){
      Constructor(HexToRgb(hex));
    }, [String]);
    Constructor.apply(this, arguments);
  }
  
  Color.random = function Random(){
    return new Color([
      Math.floor(Math.random()*256),
      Math.floor(Math.random()*256),
      Math.floor(Math.random()*256)
    ]);
  }
	
  voxelcss.util.Color = Color;
	
})();