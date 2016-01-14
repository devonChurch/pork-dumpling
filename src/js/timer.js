const Timer = class {

	constructor(Face) {

		console.log('Constructing Timer...');

		this.Face = Face;
		this.offset = this.calculateTime();

	}

	calculateTime() {

		const date = new Date();
		const offset = this.offset || 0;
		const time = date.getTime() - offset;

		return time;

	}

	formatTime(time) {

		// Turn into seconds.
		time = time / 1000;

		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);

		return `${this.queryDigits(minutes)}:${this.queryDigits(seconds)}`;

	}

	queryDigits(value) {

		return `${value}`.length < 2 ? `0${value}` : `${value}`;

	}

	injectTime(numbers) {

		const ctx = this.Face.ctx;
		const units = ' mins';
		const y = 95;
		const offset = (ctx.measureText(numbers).width + ctx.measureText(units).width) / 2;
		let x = (this.Face.size / 2) - offset;

		ctx.font = '500 12px Roboto';
		ctx.fillStyle = 'red';
		ctx.fillText(numbers, x, y);

		x += ctx.measureText(numbers).width;

		ctx.font = '300 12px Roboto';
		ctx.fillStyle = 'blue';
		ctx.fillText(units, x, y);

	}

	animate() {

		const time = this.calculateTime();
		const format = this.formatTime(time);
		this.injectTime(format);

	}

};

module.exports = Timer;

// var canvas  = document.getElementById("canvas");
// var context = canvas.getContext('2d');
// var Red = "#ff5e99";
// var Blue = "#29a1f1";
// var Black = "#000";
// var x = 10;
// var y = 40;
// var txt_p1 = "I like ";
// var txt_p2 = "blue";
//
// context.font = '14px Verdana';
// context.fillStyle = "#000000";
// context.fillText(txt_p1,x,y);
// x += context.measureText(txt_p1).width;
//
// context.save();
// context.font = 'normal 24px Impact';
// context.fillStyle = Blue;
// context.fillText(txt_p2,x,y);
// x += context.measureText(txt_p2).width;
// context.restore();
