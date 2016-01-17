const Helper = class {

	// A series of more “generic” functions uses across the execution.

	constructor(Face) {

		this.Face = Face;

	}

	randomise({min = 0, max}) {

		return Math.floor(Math.random() * (max - min + 1)) + min;

	}

    get boolean() {

        return this.randomise({max: 1}) % 2 === 0 ? false : true;

    }

	clearCanvas(ref) {

		ref.ctx.clearRect(0, 0, ref.size, ref.size);

	}

    // round({value, decimalPlace = 1}) {
	//
    //     let round = '1';
	//
    //     for (let i = 0; i < decimalPlace; i += 1) round += '0';
    //     round = parseInt(round, 10);
	//
    //     return Math.round(value * round) / round;
	//
    // }
	//
    // findPercentage({percentage, of}) {
	//
    //     return percentage / 100 * of;
	//
    // }

};

module.exports = new Helper();
