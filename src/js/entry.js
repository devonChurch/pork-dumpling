require('../sass/style.scss');
const PorkDumpling = require('./face');

// DEMO ////////////////////////////////////////////////////////////////////////

const watches = document.getElementsByClassName('watch__face');
const instances = [];

for (let i = 0; i < watches.length; i += 1) {

    instances[i] = new PorkDumpling(watches[i]);

}
