import {random, range} from 'lodash';

const particleMargin = 20;
const particleColor = 'rgba(255, 255, 255, 0.5)';

function Particle(x, y, radius) {
    this.radius = radius || random(1, 2);
    this.x = x || 0;
    this.y = y || 0;
}


Particle.prototype.draw = function (cvs, scaleR) {
    cvs.beginPath();
    cvs.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    cvs.fill();
};

export default function backgroundAnimation(cvs, initialWidth, initialHeight, count = 100) {
    let cw = initialWidth;
    let ch = initialHeight;

    // clear and select color
    cvs.clearRect(0, 0, cw, ch);
    cvs.fillStyle = particleColor;

    // draw particules
    range(0, count).forEach(o => {
        const x = random(particleMargin, cw - particleMargin),
            y = random(particleMargin, ch - particleMargin),
            particle = new Particle(x, y, 1);
        particle.draw(cvs);
    });
}
