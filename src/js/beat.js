const Helper = require('./helper');

/**
 * Beat module.
 * @module ./beat
 */

/**
 * Class xxxxxxxx
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

	get currentTime() {

		const date = new Date();

		return date.getTime();

	}

	get currentProgress() {

		const time = this.currentTime;

		return time > this.nextBeat;

	}

	updateBeat() {

		this.nextBeat = this.nextBeat + Helper.randomise({min: 400, max: 520});

	}

	animate() {

		if (this.currentProgress) {

			this.updateBeat();
			this.i += 1;

		}

	}

};

module.exports = Beat;
