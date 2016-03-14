const ifvisible = require('ifvisible.js');

/**
 * Pause module.
 * @module ./pause
 */

/**
 * Class that creases a synergy between the requestAnimationFrame sequence and
 * the native OS timer. When the user moves away from the executions active tab
 * the requestAnimation frame pauses the sequence. This is great for performance
 * however if the native OS timer continues to run there will be an irregularity
 * between the two once the tab becomes active again. We therefore pause the
 * “perceived” timer in sync with the requestAniamtionFrame stream.
 */
const Pause = class {

	/**
	 * Create a pause instance.
	 * @param {class} Face - The watch face base class that this timer is bound
	 * to.
	 */
	constructor(Face) {

		this.Face = Face;
		this.listeners();
		this.activated = 0;

	}

	/**
	 * Activate the invisible API to manage the timer when the execution goes
	 * into a dormant/active state.
	 */
	listeners() {

		ifvisible
			.on('blur', () => this.activate())
			.on('focus', () => this.deactivate());

	}

	/**
	 * Activate a pause by getting a final time reference.
	 */
	activate() {

		const date = new Date();
		this.activated = date.getTime();

	}

	/**
	 * Deactivate the pause state by riffing the stared final time stamp with a
	 * new current time value. We rip the elapsed time out of the Pork Dumpling
	 * timer and continue as per usual =)
	 */
	deactivate() {

		const date = new Date();
		const deactivated = date.getTime();
		const redundant = deactivated - this.activated;

		this.Face.Timer.offset += redundant;
		this.Face.Beat.nextBeat += redundant;

	}

};

module.exports = Pause;
