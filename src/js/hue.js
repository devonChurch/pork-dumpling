const Helper = require('./helper');

/**
 * Hue module.
 * @module ./hue
 */

/**
 * Class that xxxxxxxx.
 */
const Hue = class {

	/**
	 * Create a xxxxxxx.
	 * @param {class} Face - The watch face base class that this timer is bound
	 * to.
	 */
	constructor(Face) {

		this.Face = Face;
		this.current = Helper.randomise({max: 360});

	}

	/**
	 * xxxxx.
	 */
	updateHue() {

		this.current += 0.25;

	}

	/**
	 * xxxxx.
	 */
	animate() {

		this.updateHue();

	}

};

module.exports = Hue;
