const Helper = require('./helper');

/**
 * Beat module.
 * @module ./beat
 */

/**
 * Class that represents a human heat beat that both the BPM meter and graph
 * systems reference.
 */
const Beat = class {

	/**
	 * Create a beat instance.
	 * @param {class} Face - The watch face base class that this timer is bound
	 * to.
	 */
	constructor(Face) {

		this.Face = Face;
		this.nextBeat = this.currentTime;
		this.i = 0;

	}

	/**
	 * Gets the current time from the OS clock.
	 * @return {number} The current time.
	 */
	get currentTime() {

		const date = new Date();

		return date.getTime();

	}

	/**
	 * Diffs the current time against the “next beat” interval.
	 * @return {boolean} The next beat’s relevance.
	 */
	get currentProgress() {

		const time = this.currentTime;

		return time > this.nextBeat;

	}

	/**
	 * Randomises when the next heart beat should run.
	 */
	updateBeat() {

		this.nextBeat = this.nextBeat + Helper.randomise({min: 400, max: 520});

	}

	/**
	 * Updates the heart beat system on each requestAnimationFrame tick.
	 */
	animate() {

		if (this.currentProgress) {

			this.updateBeat();
			this.Face.Graph.registerBeat();
			this.i += 1;

		}

	}

};

module.exports = Beat;
