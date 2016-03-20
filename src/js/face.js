const Helper = require('./helper');
const Pause = require('./pause');
const Timer = require('./timer');
const Beat = require('./beat');
const Hue = require('./hue');
const Background = require('./background');
const Heart = require('./heart');
const Rate = require('./rate');
const Graph = require('./graph');

/**
 * Face module.
 * @module ./face
 */

/**
 * Class that acts as the root initialiser for the Pork Dumpling execution.
 */
const Face = class {

	/**
	 * Create a watch face instance.
	 * @param {class} canvas - The sole canvas element that the execution
	 * instance will be constructed on.
	 */
	constructor(canvas) {

		this.canvas = canvas;
		this.size = this.canvas.width;
		this.ctx = this.canvas.getContext('2d');
		this.Pause = new Pause(this);
		this.Timer = new Timer(this);
		this.Hue = new Hue(this);
		this.Background = new Background(this);
		this.Beat = new Beat(this);
		this.Heart = new Heart(this);
		this.Rate = new Rate(this);
		this.Graph = new Graph(this);
		this.animate();

	}

	/*
	 * The required redraw functions executed each requestAnimationFrame tick.
	 **/
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
