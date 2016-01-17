const Helper = require('./helper');
const Timer = require('./timer');
const Beat = require('./beat');
const Hue = require('./hue');
const Background = require('./background');
const Heart = require('./heart');

const Face = class {

	constructor() {

		this.canvas = document.getElementById('watch__face');
		this.size = this.canvas.getAttribute('width');
		this.ctx = this.canvas.getContext('2d');
		this.Timer = new Timer(this);
		this.Hue = new Hue(this);
		this.Background = new Background(this);
		this.Beat = new Beat(this);
		this.Heart = new Heart(this);
		this.animate();

	}

	animate() {

		Helper.clearCanvas(this);
		this.Hue.animate();
		this.Background.animate();
		this.Timer.animate();
		this.Beat.animate();
		this.Heart.animate();

		requestAnimationFrame(() => this.animate());

	}

};

module.exports = new Face();
