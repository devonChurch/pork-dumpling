const Helper = require('./helper');

/**
 * Hue module.
 * @module ./hue
 */

/**
 * Class that modifies the hue of the base HSL color over the 360 its spectrum.
 */
const Hue = class {

	/**
	 * Create a hue instance.
	 * @param {class} Face - The watch face base class that this timer is bound
	 * to.
	 */
	constructor(Face) {

		this.Face = Face;
		this.current = Helper.randomise({max: 360});

	}

	/**
	 * Increment the current hue reference forward. If the new value exceeds the
	 * 360 limit then we reset it to zero and continue the loop.
	 */
	updateHue() {

		this.current += 0.25;
		if (this.current > 360) this.current = 0;

	}

	/**
	 * Prompts the current hue value to increment.
	 */
	animate() {

		this.updateHue();

	}

};

module.exports = Hue;
