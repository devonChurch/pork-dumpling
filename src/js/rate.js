/**
 * Rate module.
 * @module ./beat
 */

/**
 * Class xxxxxx
 */
const Rate = class {

	/**
	 * Create a beat instance.
	 * @param {class} Face - The watch face base class that this timer is bound
	 * to.
	 */
	constructor(Face) {

		this.Face = Face;
		this.i = 0;
		this.currentBpm = '000';

	}

	updateBpm() {

		const equaliser = 60000 / this.Face.Timer.elapsedTime;
		const bpm = this.Face.Beat.i * equaliser;

		this.currentBpm = Math.round(bpm);

	}

	injectBpm() {

		const ctx = this.Face.ctx;
		const bpm = `${this.currentBpm}`.length < 3 ? `0${this.currentBpm}` : `${this.currentBpm}`;
		const units = ' bpm';
		const y = 70;
		const hsl = `hsl(${this.Face.Hue.current}, 100%, 65%)`;

		let x = 85;

		ctx.font = '300 30px Roboto';
		ctx.fillStyle = hsl;
		ctx.fillText(bpm, x, y);

		x += ctx.measureText(bpm).width;

		ctx.font = '300 12px Roboto';
		ctx.fillStyle = hsl;
		ctx.fillText(units, x, y);

	}

	// current time * x = 60000ms
	// 2bpm / 1000 = Math.round(2 * 60) = 120bpm / min
	// 180000 * x = 60000 |
	// 360bpm / 180000 = 360 * 0.333333 = 120bpm / min
	// 3,600,000

	get frequency() {

		const frequency = 60;
		const status = this.i > frequency;
		this.i = status ? 0 : this.i + 1;

		return status;

	}

	animate() {

		if (this.frequency) this.updateBpm();
		this.injectBpm();

	}

};

module.exports = Rate;
