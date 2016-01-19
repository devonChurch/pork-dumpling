/**
 * Timer module.
 * @module ./timer
 */

/**
 * Class that updates the elapsed time since starting the execution and injects
 * it onto the  canvas.
 */
const Timer = class {

	/**
	 * Create a timer.
	 * @param {class} Face - The watch face base class that this timer is bound
	 * to.
	 */
	constructor(Face) {

		this.Face = Face;
		this.offset = this.elapsedTime;

	}

	/**
	 * Calculate the elapsed time by diffing the starting time vs the current
	 * time.
	 * @return {number} The elapsed time.
	 */
	get elapsedTime() {

		const date = new Date();
		const offset = this.offset || 0;
		const time = date.getTime() - offset;

		return time;

	}

	/**
	 * Turn the raw millisecond elapsed time into a formatted rendition that can
	 * be injected onto the canvas.
	 * @param {number} time - The elapsed time in milliseconds.
	 * @return {string} The elapsed time in a 00:00 format.
	 */
	formatTime(time) {

		const hours = Math.floor(time / (1000 * 60 * 60));
		time = time % (1000 * 60 * 60);
		const minutes = Math.floor(time / (1000 * 60));
		const seconds = Math.floor(time % (1000 * 60) / 1000);

		return `${this.queryHours(hours)}${this.queryMinutes(minutes)}${this.querySeconds(seconds)}`;

	}

	/**
	 * Makes sure the current unit i.e. seconds / minutes are always comprised
	 * of two digits.
	 * @param {number} value - The current unit i.e. seconds / minutes.
	 * @return {string} Current units in a two digit format.
	 */
	queryDigits(value) {

		return `${value}`.length < 2 ? `0${value}` : `${value}`;

	}

	queryHours(hours) {

		return hours > 0 ? `${hours}:` : '';

	}

	queryMinutes(minutes) {

		return minutes > 0 ? `${this.queryDigits(minutes)}:` : '';

	}

	querySeconds(seconds) {

		return `${this.queryDigits(seconds)}`;

	}

	queryUnits(format) {

		return format.length > 5 ? 'hrs' : format.length > 2 ? 'mins' : 'secs';

	}

	/**
	 * Injects the formatted elapsed time onto the canvas with a centered align
	 * appearance, custom fonts and dynamic color.
	 * @param {string} format - The elapsed time in a 00:00 format.
	 */
	injectTime(format) {

		const ctx = this.Face.ctx;
		const units = ` ${this.queryUnits(format)}`;
		const y = 95;
		const hsl = `hsl(${this.Face.Hue.current}, 100%, 65%)`;
		// Centre text by offsetting half of the total combined text width from
		// the canvas centre.
		const offset = (ctx.measureText(format).width + ctx.measureText(units).width) / 2;
		let x = (this.Face.size / 2) - offset;

		ctx.font = '500 12px Roboto';
		ctx.fillStyle = hsl;
		ctx.fillText(format, x, y);

		x += ctx.measureText(format).width;

		ctx.font = '300 12px Roboto';
		ctx.fillStyle = hsl;
		ctx.fillText(units, x, y);

	}

	/**
	 * Runs through the sequence in order to update the elapsed time.
	 */
	animate() {

		const time = this.elapsedTime;
		const format = this.formatTime(time);
		this.injectTime(format);

	}

};

module.exports = Timer;
