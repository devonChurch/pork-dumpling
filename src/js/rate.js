/**
 * Rate module.
 * @module ./rate
 */

/**
 * Class that represents the current average heart rate in a BPM format.
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

	/**
	 * Calculate the average BPM value.
	 */
	updateBpm() {

		const equaliser = 60000 / this.Face.Timer.elapsedTime;
		const bpm = this.Face.Beat.i * equaliser;

		this.currentBpm = Math.round(bpm);

	}

	/**
	 * Inject the BPM text onto the canvas area making sure the different text
	 * elements flow next to each other like generic text in the DOM.
	 */
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

	/**
	 * We update the BPM value every 60 frames to avoid possible flickering as
	 * the BPM’s average constantly changes.
	 * @return {boolean} Checks if the 60 frame duration has elapsed.
	 */
	get frequency() {

		const frequency = 60;
		const status = this.i > frequency;
		this.i = status ? 0 : this.i + 1;

		return status;

	}

	/**
	 * Updates the BPM value on each requestAnimationFrame tick.
	 */
	animate() {

		if (this.frequency) this.updateBpm();
		this.injectBpm();

	}

};

module.exports = Rate;
