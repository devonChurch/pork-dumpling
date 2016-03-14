/**
 * Background module.
 * @module ./background
 */

/**
 * Class that renders the background color based on the current hue value..
 */
const Background = class {

	/**
	 * Create a background instance.
	 * @param {class} Face - The watch face base class that this timer is bound
	 * to.
	 */
	constructor(Face) {

		this.Face = Face;

	}

	/**
	 * Generate the background instance on the Pork Dumpling canvas.
	 */
	updateBackground() {

		const ctx = this.Face.ctx;

		ctx.beginPath();
		ctx.rect(0, 0, this.Face.size, this.Face.size);
		ctx.fillStyle = `hsl(${this.Face.Hue.current}, 100%, 15%)`;
		ctx.fill();
		ctx.closePath();

	}

	/**
	 * Prompts the backgrounds hue value on each requestAnimationFrame tick.
	 */
	animate() {

		this.updateBackground();

	}

};

module.exports = Background;
