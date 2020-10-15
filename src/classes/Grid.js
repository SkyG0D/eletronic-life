const Vector = require("./Vector");

const Grid = function (width, height) {
    this.space = new Array(width * height);
    this.width = width;
    this.height = height;
}

Grid.prototype.isInside = function (vector) {
    return vector.x >= 0 && vector.x < this.width &&
        vector.y >= 0 && vector.y < this.height;
}

Grid.prototype.get = function (vector) {
    return this.space[vector.x + (vector.y * this.width)];
}

Grid.prototype.set = function (vector, value) {
    this.space[vector.x + (vector.y * this.width)] = value;
}

Grid.prototype.forEach = function (f, context) {
    for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
            const value = this.space[x + y * this.width];
            if (value != null)
                f.call(context, value, new Vector(x, y));
        }
    }
}

module.exports = Grid;