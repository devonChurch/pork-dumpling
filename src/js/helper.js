/**
 * Helper module.
 * @module ./helper
 */

/**
 * Class that holds a series of more “generic” functions uses across the execution.
 */
const Helper = class {

	/**
	 * Create a helper instance.
	 * @param {class} Face - The watch face base class that this timer is bound
	 * to.
	 */
	constructor(Face) {

		this.Face = Face;

	}

	/**
	 * Generate a random number between two values.
	 * @param {number} min - The minimum possible value in the random generation process.
	 * @param {number} max - The maximum possible value in the random generation process.
	 * @return {number} - The randomly generated value.
	 */
	randomise({min = 0, max}) {

		return Math.floor(Math.random() * (max - min + 1)) + min;

	}

	/**
	 * Generates a randomised boolean.
	 * @return {boolean} - random boolean.
	 */
    get boolean() {

        return this.randomise({max: 1}) % 2 === 0 ? false : true;

    }

	/**
	 * Clear the canvas of all content.
	 */
	clearCanvas(ref) {

		ref.ctx.clearRect(0, 0, ref.size, ref.size);

	}

};

module.exports = new Helper();
