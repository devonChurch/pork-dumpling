// const Helper = require('./helper');
const Timer = require('./timer');

const Face = class {

	constructor() {

		this.canvas = document.getElementById('watch__face');
		this.size = this.canvas.getAttribute('width');
		this.ctx = this.canvas.getContext('2d');
		this.Timer = new Timer(this);
		this.animate();

	}

	animate() {

		this.clearCanvas();
		this.Timer.animate();

		requestAnimationFrame(() => this.animate());

	}


	clearCanvas() {

		this.ctx.clearRect(0, 0, this.size, this.size);

	}

};

module.exports = new Face();
