const Helper = require('./helper');

/**
 * Graph module.
 * @module ./graph
 */

/**
 * Class that represents the “richter graph” aesthetic that dictates a heart beat.
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

	}

	/**
	 * Since there is no legacy graph to override initially we create a
	 * flatlined representation.
	 */
	get buildLegacy() {

		const points = [];

		for (let i = 0; i < this.Face.size; i += 1) {

			points[i] = 0;

		}

		return points;

	}

	/**
	 * Generate the first point in the current graph that we will begin to build
	 * during the animation process.
	 */
	get buildCurrent() {

		return [0];

	}

	/**
	 * When the current graph’s paths are exhausted we move it to ride as the
	 * legacy representation and begin to build a new current graph.
	 */
	updateLegacy() {

		this.legacyGraph = this.currentGraph;
		this.currentGraph = this.buildCurrent;

	}

	/**
	 * Generates the next point in the current graph while adhering to the
	 * format of the previous points the exponential sine curve system.
	 */
	updateCurrent() {

		const sin = Math.sin(this.i);
		const offset = sin * this.i * 2.5;

		this.i = this.i < 1 ? 0 : this.i - 1;

		this.currentGraph.push(offset);

	}

	/**
	 * Draw a line between two points
	 * @param {object} ctx - the canvas context
	 * @param {string} graph - the current graph instance i.e. ‘current’ / ‘legacy’.
	 */
	drawPoints(ctx, graph) {

		for (let i = 0; i < this.Face.size; i += 1) {

			ctx.lineTo(i, this.BaseLine - this[`${graph}Graph`][i]);

		}

	}

	/**
	 * Fade away the legacy graph instance.
	 * @return {object} A canvas gradient.
	 */
	legacyColor() {

		const alpha = 1 - (1 / this.Face.size * this.currentGraph.length * 1.5);
		const gradient = this.Face.ctx.createLinearGradient(0, 0, 100, 0);

		gradient.addColorStop(0, `hsla(${this.Face.Hue.current}, 100%, 65%, 0)`);
		gradient.addColorStop(1, `hsla(${this.Face.Hue.current}, 100%, 65%, ${alpha})`);

		return gradient;

	}

	/**
	 * Color the current graph instance.
	 * @return {object} A canvas gradient.
	 */
	currentColor() {

		const gradient = this.Face.ctx.createLinearGradient(0, 0, 100, 0);

		gradient.addColorStop(0, `hsla(${this.Face.Hue.current}, 100%, 65%, 0)`);
		gradient.addColorStop(1, `hsla(${this.Face.Hue.current}, 100%, 65%, 1)`);

		return gradient;

	}

	/**
	 * Draw a graph instance.
	 * @param {string} graph - the current graph instance i.e. ‘current’ / ‘legacy’.
	 */
	drawGraph(graph) {

		const ctx = this.Face.ctx;

		ctx.beginPath();
		ctx.moveTo(0, this.BaseLine);
		this.drawPoints(ctx, graph);
		ctx.strokeStyle = this[`${graph}Color`](ctx);
		ctx.stroke();
		ctx.closePath();

	}

	/**
	 * Checks if there is room for more current graph points of if we need to
	 * generate a new current instance.
	 */
	queryCircumstance() {

		if (this.currentGraph.length >= this.Face.size) this.updateLegacy();

	}

	/**
	 * inject required graph instance onto the canvas.
	 */
	injectInstances() {

		for (const graph of ['legacy', 'current']) this.drawGraph(graph);

	}

	/**
	 * Draws in the bright circular “pip” the indicates the currents graph progress.
	 */
	injectProgress() {

		const ctx = this.Face.ctx;
		const length = this.currentGraph.length;
		const radius = 3;
		const x = length - radius;
		const y = this.BaseLine - this.currentGraph[length - 1];

		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.currentColor();
        ctx.fill();
		ctx.closePath();

	}

	/**
	 * Decide the severity of the current heart beat - this will dictate how
	 * dominant the sign curves influence is on the graph.
	 */
	registerBeat() {

		this.i = Helper.randomise({min: 5, max: 15});

	}

	/**
	 * Runs through the sequence in order to update the graph sequence.
	 */
	animate() {

		this.queryCircumstance();
		this.updateCurrent();
		this.injectInstances();
		this.injectProgress();

	}

};

module.exports = Graph;
