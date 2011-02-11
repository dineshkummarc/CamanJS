/*
 * NodeJS compatibility
 */
if (!Caman) {
	var Caman = {manip:{}};
	exports.plugins = Caman.manip;
}

(function (Caman) {

Caman.manip.flipHorizontally = function() {
  return this.processContext('Flip Horizontally', {}, function(ctx, canvas) {
    var w = canvas.width;
    var h = canvas.height;
    var copyCanvas = document.createElement("canvas");
    
    copyCanvas.width = w;
    copyCanvas.height = h;
    copyCanvas.getContext("2d").drawImage(canvas, 0, 0, w, h);

    ctx.clearRect(0, 0, w, h);
    ctx.scale(-1, 1);
    ctx.translate(-w, 0);
    ctx.drawImage(copyCanvas, 0, 0, w, h);
});
};

Caman.manip.flipVertically = function() {
  return this.processContext('Flip Vertically', {}, function(ctx, canvas) {
    var w = canvas.width;
    var h = canvas.height;
    var copyCanvas = document.createElement("canvas");

    copyCanvas.width = w;
    copyCanvas.height = h;
    copyCanvas.getContext("2d").drawImage(canvas, 0, 0, w, h);

    ctx.clearRect(0, 0, w, h);
    ctx.scale(1, -1);
    ctx.translate(0, -h);
    ctx.drawImage(copyCanvas, 0, 0, w, h);
});
};

}(Caman));