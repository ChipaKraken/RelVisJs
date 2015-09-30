(function (w,q) {
  w.RelVisJs = (function(q) {

    function RelVisJs(path, height, width) {
      this.height = height != null ? height : 400;
      this.width = width != null ? width : 400;
      this.path = path+"_svg";
      this.conns = {};
      q('#'+path).html('<svg id="'+this.path+'" height="'+this.height+'" width="'+this.width+'"><svg>');
    }
    
    return RelVisJs;

  })(q);

  RelVisJs.prototype.addNode = function(name, title) {
    title = title != null ? title : name;
    this.conns[name] = {
      title:title,
      conns: []
    }
  }

  RelVisJs.prototype.addPath = function(a, b) {
    this.conns[a]['conns'].push(b);
  }
})(window, jQuery);
