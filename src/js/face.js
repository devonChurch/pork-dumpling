const Helper = require('./helper');
const Timer = require('./timer');
const Beat = require('./beat');
const Hue = require('./hue');
const Background = require('./background');
const Heart = require('./heart');
const Rate = require('./rate');
const Graph = require('./graph');

const Face = class {

	constructor(canvas) {

		this.canvas = canvas;
		this.size = this.canvas.width;
		this.ctx = this.canvas.getContext('2d');
		this.Timer = new Timer(this);
		this.Hue = new Hue(this);
		this.Background = new Background(this);
		this.Beat = new Beat(this);
		this.Heart = new Heart(this);
		this.Rate = new Rate(this);
		this.Graph = new Graph(this);
		this.animate();

	}

	animate() {

		Helper.clearCanvas(this);
		this.Hue.animate();
		this.Background.animate();
		this.Timer.animate();
		this.Beat.animate();
		this.Heart.animate();
		this.Rate.animate();
		this.Graph.animate();

		requestAnimationFrame(() => this.animate());

	}

};

module.exports = Face;
