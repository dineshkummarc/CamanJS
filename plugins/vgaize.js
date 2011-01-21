(function (Caman) {

Caman.manip.vgaize = function() {
  return this.process({}, function() {
    var loc = this.locationXY();
    
    return this.getPixelRelative(loc.x % 2, loc.y % 2);
});
};

}(Caman));