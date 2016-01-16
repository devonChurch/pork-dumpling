/**
 * Heart module.
 * @module ./heart
 */

/**
 * Class that xxxxxxxx.
 */
const Heart = class {

	/**
	 * Create a xxxxxxx.
	 */
	constructor(Face) {

		console.log('building new heart instance...');

		this.Face = Face;
		this.i = 1;
		this.duration = 100;
		this.animate();

	}

	updateFacets() {

		this.buildFacet('echoLarge');
		this.buildFacet('echoSmall');
		this.buildFacet('base');

	}

	get baseProperties() {

		const climax = this.duration / 2;
		const luminosity = 65;
		const alpha = 1;
		const increment = 0.01;
		const scale = this.i < climax ? 1 + (this.i * increment) : 1 + (climax * increment) - ((this.i - climax) * increment);

		return {luminosity, alpha, scale};

	}

	get echoSmallProperties() {

		const climax = this.duration / 2;
		const luminosity = 30;
		const alpha = this.i > climax ? 1 - (this.i / this.duration) : 0;
		const scale = this.i > climax ? 1 + (this.i * 0.015) : 1;

		return {luminosity, alpha, scale};

	}

	get echoLargeProperties() {

		const climax = this.duration / 2;
		const luminosity = 20;
		const alpha = this.i > climax ? 1 - (this.i / this.duration) : 0;
		const scale = this.i > climax ? 1 + (this.i * 0.03) : 1;

		return {luminosity, alpha, scale};

	}

	/**
	 * xxxxx.
	 */
	buildFacet(facet) {

		// Bespoke values
		const bes = this[`${facet}Properties`];

		const ctx = this.Face.ctx;
		const hsl = `hsla(${this.Face.Hue.current}, 100%, ${bes.luminosity}%, ${bes.alpha})`;
		const height = 14.6;
		const width = 16;
		const x = 65;
		const y = 60;

		ctx.save();

		ctx.translate(width * bes.scale / 2 * -1, height * bes.scale / 2 * -1);
		ctx.scale(bes.scale, bes.scale);
		ctx.translate(x / bes.scale, y / bes.scale);

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

		ctx.restore();

	}

	updateIncrementor() {

		this.i = this.i > 100 ? 1 : this.i + 1;

	}

	/**
	 * xxxxx.
	 */
	animate() {

		// console.log(`${this.i} > ${this.duration}`);

		if (this.i < this.duration) {

			console.log(`animate heart ${this.i}`);

			this.updateFacets();
			this.i += 1;
			requestAnimationFrame(() => this.animate());


		} else {

			console.log('');
			console.log(' * ======= *');
			console.log(' * DESTROY *');
			console.log(' * ======= *');
			console.log('');

			destroySequence();

		}

	}

};

const instances = [];
const playSequence = (Face) => instances.push(new Heart(Face));
const destroySequence = () => instances.shift();

exports.play = playSequence;
