const Helper = require('./helper');

/**
 * Graph module.
 * @module ./beat
 */

/**
 * Class xxxxxx
 */
const Graph = class {

	/**
	 * Create a graph instance.
	 * @param {class} Face - The watch face base class that this timer is bound
	 * to.
	 */
	constructor(Face) {

		this.Face = Face;
		this.legacyGraph = this.buildLegacy;
		this.currentGraph = this.buildCurrent;
		this.BaseLine = 150;
		this.i = 0;

		console.log(this.legacyGraph);
		console.log(this.currentGraph);

		// Have an old and new line
		// the old one has its alpha depreciate
		// https://www.youtube.com/watch?v=GVm8pFDxUjU

		// temp
		this.legacyGraph[20] = 50;
		this.legacyGraph[21] = -20;


	}

	get buildLegacy() {

		const points = [];

		for (let i = 0; i < this.Face.size; i += 1) {

			points[i] = 0;

		}

		return points;

	}

	get buildCurrent() {

		return [0];

	}

	updateLegacy() {

		console.log('update legacy');

		this.legacyGraph = this.currentGraph;
		this.currentGraph = this.buildCurrent;

	}

	updateCurrent() {

		const sin = Math.sin(this.i);
		const offset = sin * this.i * 2.5;

		this.i = this.i < 1 ? 0 : this.i - 1;

		this.currentGraph.push(offset);

	}

	drawPoints(ctx, graph) {

		for (let i = 0; i < this.Face.size; i += 1) {

			ctx.lineTo(i, this.BaseLine - this[`${graph}Graph`][i]);

		}

	}

	legacyColor() {

		const alpha = 1 - (1 / this.Face.size * this.currentGraph.length);

		return `hsla(${this.Face.Hue.current}, 100%, 65%, ${alpha})`;

	}

	currentColor() {

		// const gradient = ctx.createLinearGradient(0, 0, 100, 0);
		// gradient.addColorStop(0, `hsla(${this.Face.Hue.current}, 100%, 65%, 0)`);
		// gradient.addColorStop(1, `hsla(${this.Face.Hue.current}, 100%, 65%, 1)`);

		// return 'red';
		return `hsl(${this.Face.Hue.current}, 100%, 65%)`;

	}

	drawGraph(graph) {

		const ctx = this.Face.ctx;
		// const hsl = `hsl(${this.Face.Hue.current}, 100%, 65%)`;


		ctx.beginPath();
		ctx.moveTo(0, this.BaseLine);

		this.drawPoints(ctx, graph);
		// ctx.lineTo(50, 0);
		// ctx.lineTo(50, 50);
		// ctx.lineTo(0, 50);

		// ctx.strokeStyle = hsl;
		// ctx.lineWidth = 5;




		ctx.strokeStyle = this[`${graph}Color`](ctx);
		ctx.stroke();
		ctx.closePath();

	}

	queryCircumstance() {

		if (this.currentGraph.length >= this.Face.size) this.updateLegacy();

	}

	injectInstances() {

		for (const graph of ['legacy', 'current']) this.drawGraph(graph);

	}

	injectProgress() {

		const ctx = this.Face.ctx;
		const length = this.currentGraph.length;
		const radius = 4;
		const x = length - radius;
		const y = this.BaseLine - this.currentGraph[length - 1];

		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.currentColor();
        ctx.fill();
		ctx.closePath();

	}

	registerBeat() {

		this.i = Helper.randomise({min: 5, max: 15});

	}

	// has the graph reached its end?
	// swap to legacy and create a fresh current

	animate() {

		this.queryCircumstance();
		this.updateCurrent();
		this.injectInstances();
		this.injectProgress();

	}

};

module.exports = Graph;
