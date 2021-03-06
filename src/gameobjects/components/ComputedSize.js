var ComputedSize = {
  width: 0,

  height: 0,

  displayWidth: {
    get: function() {
      return this.scaleX * this.width;
    },

    set: function(value) {
      this.scaleX = value / this.width;
    }
  },

  displayHeight: {
    get: function() {
      return this.scaleY * this.height;
    },

    set: function(value) {
      this.scaleY = value / this.height;
    }
  },

  setSize: function(width, height) {
    this.width = width;
    this.height = height;

    return this;
  },

  setDisplaySize: function(width, height) {
    this.displayWidth = width;
    this.displayHeight = height;

    return this;
  }
};

module.exports = ComputedSize;
