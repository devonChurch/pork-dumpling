const Helper = require('./helper');

/**
 * Beat module.
 * @module ./beat
 */

/**
 * Class that modifies the hue of the base HSL color over the 360 its spectrum.
 */
const Beat = class {

	/**
	 * Create a beat instance.
	 * @param {class} Face - The watch face base class that this timer is bound
	 * to.
	 */
	constructor(Face) {

		console.log('New beat');

		// AVG 130
		// 2.16666667 / seconds
		// one ping every 461.53846ms


		this.Face = Face;
		this.nextBeat = this.currentTime;

		// heart.play(this.Face);

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

			console.log('BEAT!');
			this.updateBeat();

		}

	}

};

module.exports = Beat;
