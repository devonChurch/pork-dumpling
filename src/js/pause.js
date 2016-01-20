const ifvisible = require('ifvisible.js');

/**
 * Pause module.
 * @module ./pause
 */

/**
 * Class xxxxxx
 */
const Pause = class {

	/**
	 * Create a beat instance.
	 * @param {class} Face - The watch face base class that this timer is bound
	 * to.
	 */
	constructor(Face) {

		this.Face = Face;
		this.listeners();
		this.activated = 0;

	}

	listeners() {

		ifvisible.on('blur', () => this.activate())
		.on('focus', () => this.deactivate());

	}

	activate() {

		const date = new Date();
		this.activated = date.getTime();

	}

	deactivate() {

		const date = new Date();
		const deactivated = date.getTime();
		const redundant = deactivated - this.activated;

		this.Face.Timer.offset += redundant;
		this.Face.Beat.nextBeat += redundant;

	}

};

module.exports = Pause;
