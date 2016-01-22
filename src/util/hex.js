(function(){
  
  if(!window.voxelcss) window.voxelcss = {};
  if(!window.voxelcss.util) window.voxelcss.util = {};
	
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
	
  voxelcss.util.Hex = {
    HexToRgb: HexToRgb,
    RgbToHex: RgbToHex
  }
	
})();