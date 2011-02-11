/*
 * NodeJS compatibility
 */
if (!Caman) {
	var Caman = {manip:{}};
	exports.plugins = Caman.manip;
}

(function (Caman) {

Caman.manip.vgaize = function() {
  return this.process('Vgaize', function() {
    var loc = this.locationXY();
    
    return this.getPixelRelative(loc.x % 2, loc.y % 2);
});
};

}(Caman));