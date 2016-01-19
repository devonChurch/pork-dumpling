/**
 * Heart module.
 * @module ./heart
 */

/**
 * Class that builds out a heart shape symbol on the canvas.
 */
const Heart = class {

	/**
	 * Constructs the raw scenario in which to create a heart from. This will be
	 * extended to fulfil the executions requirements.
	 * @param {class} Face - The watch face base class that this timer is bound
	 * to.
	 */
	constructor(Face) {

		this.Face = Face;
		// An increment or that keeps track of the current frame in the sequence.
		this.i = 1;
		// Dictates how many frames the entire animation should span.
		this.duration = 100;
		this.climax = this.duration / 2;
		this.animate();

	}

	updateIncrementor() {

		this.i = this.i > this.duration ? 0 : this.i + 1;

	}

	/**
	 * Updates each facet of the heart symbol during the animation sequence.
	 */
	updateFacets() {

		for (const facet of ['echoLarge', 'echoSmall', 'base']) this.buildFacet(facet);

	}

	/**
	 * Controls the base facet properties in reference to the incrementor (i).
	 * The heart base facet increases the scale of itself for the first half of
	 * the animation duration and then resets back to its original base scale.
	 */
	get baseProperties() {

		const luminosity = 65;
		const alpha = 1;
		const increment = 0.005;
		const scale = this.i < this.climax ? 1 + (this.i * increment) : 1 + (this.climax * increment) - ((this.i - this.climax) * increment);

		return {luminosity, alpha, scale};

	}

	/**
	 * Controls the small echo facet properties in reference to the incrementor
	 * (i). This heart echo facet begins increasing its scale once the base
	 * heart start resetting itself into its dormant phase. As it increases in
	 * scale it’s alpha value decreases to zero.
	 */
	get echoSmallProperties() {

		const luminosity = 40;
		const alpha = this.i > this.climax ? 1 - (this.i / this.duration) : 0;
		const scale = this.i > this.climax ? 1 + (this.i * 0.01) : 1;

		return {luminosity, alpha, scale};

	}

	/**
	 * Controls the small echo facet properties in reference to the incrementor
	 * (i). This heart echo facet begins increasing its scale once the base
	 * heart start resetting itself into its dormant phase. As it increases in
	 * scale it’s alpha value decreases to zero.
	 */
	get echoLargeProperties() {

		const luminosity = 30;
		const alpha = this.i > this.climax ? 1 - (this.i / this.duration) : 0;
		const scale = this.i > this.climax ? 1 + (this.i * 0.03) : 1;

		return {luminosity, alpha, scale};

	}

	/**
	 * Turns the initial SVG heart shape into Canvas bezier curves, places the
	 * shape in the applicable location and modifies its aesthetic based on the r
	 * eferenced bespoke parameters.
	 * @param {string} facet - The reference in which to query the current Class
	 * to get its bespoke heart properties from.
	 */
	buildFacet(facet) {

		// Bespoke values.
		const bes = this[`${facet}Properties`];

		const ctx = this.Face.ctx;
		const hsl = `hsla(${this.Face.Hue.current}, 100%, ${bes.luminosity}%, ${bes.alpha})`;
		const height = 14.6;
		const width = 16;
		const x = 65;
		const y = 60;

		// Save the context state before modifying the translate and scale
		// properties.
		ctx.save();
		// Set the middle of the heart to point 0,0 of the canvas. This
		// translation is based on the current scale of the heart.
		ctx.translate(width * bes.scale / 2 * -1, height * bes.scale / 2 * -1);
		ctx.scale(bes.scale, bes.scale);
		// Now that the heart has been scaled around point 0,0 we can move it’s
		// centre point to its correct destination on the canvas.
		ctx.translate(x / bes.scale, y / bes.scale);
		// Build the heart.
		ctx.beginPath();
		ctx.moveTo(8,14.6);
		ctx.bezierCurveTo(8.3,14.6,8.3,14.6,11.3,12.2);
		ctx.bezierCurveTo(14.3,9.8,16,7.2,16,4.5);
		ctx.bezierCurveTo(16,1.9,13.9,0,11.5,0);
		ctx.bezierCurveTo(9.1,0,8,1.8,8,1.8);
		ctx.bezierCurveTo(8,1.8,6.8,0,4.5,0);
		ctx.bezierCurveTo(2.2,0,0,1.9,0,4.6);
		ctx.bezierCurveTo(0,7.2,1.7,9.9,4.7,12.3);
		ctx.bezierCurveTo(7.7,14.6,7.7,14.6,8,14.6);
		ctx.fillStyle = hsl;
		ctx.fill();
		ctx.closePath();
		// Now that the current heart instance has been injected onto the canvas
		// we reset the translation and scale properties back to normal by
		// restoring the canvas context.
		ctx.restore();

	}

	/**
	 * Animates the heart and it facet through the sequence duration. This
	 * animation is set in its own requestAnimationFrame setup outside of the
	 * main watch face animation loop.
	 */
	animate() {

		this.updateFacets();
		this.updateIncrementor();

	}

};

module.exports = Heart;
