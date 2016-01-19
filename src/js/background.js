/**
 * Background module.
 * @module ./background
 */

/**
 * Class that xxxxxxxx.
 */
const Background = class {

	/**
	 * Create a xxxxxxx.
	 * @param {class} Face - The watch face base class that this timer is bound
	 * to.
	 */
	constructor(Face) {

		this.Face = Face;

	}

	/**
	 * xxxxx.
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
	 * xxxxx.
	 */
	animate() {

		this.updateBackground();

	}

};

module.exports = Background;
