import {AnimSteps, randomOrbitDelta, COUNTER_CLOCKWISE} from './utils';
import {random} from 'lodash';
import Bezier from 'bezier-js';

const PI2 = 2 * Math.PI;
const scaleRatio = 0.8;

function newRandomDirection() {
    return random(-1, 1, true);
}

function middle(a, b) {
    return a + ((b - a) / 2);
}

export function Particle(x, y, radius) {
    this.radius = radius || random(1, 2);
    this.x = x || 0;
    this.y = y || 0;
    this.dx = newRandomDirection();
    this.dy = newRandomDirection();
    this.dth = random(0.005, 0.01, true);
    this.dr = randomOrbitDelta();
    this.density = 1;
    this.orbitPos = random(0, PI2);
    this.moveAnim = null;
    this.gone = 0;
}

Particle.prototype.orbit = function (direction, speed) {
    const dth = this.dth + (speed != null ? speed : 0);
    this.orbitPos = (direction === COUNTER_CLOCKWISE ? this.orbitPos + dth : this.orbitPos - dth) % PI2;
};

Particle.prototype.update = function (d, u, v) {
    this.density = d;
    this.dx = u;
    this.dy = v;
};

Particle.prototype.move = function () {
    this.x += this.dx;
    this.y += this.dy;
};

Particle.prototype.cubicBezierMoveTo = function (cpx, cpy, x, y, remove, count) {
    if (this.moveAnim == null && this.gone === 0) {
        const b = new Bezier(this.x, this.y, cpx, cpy, x, y);
        this.moveAnim = new AnimSteps(b.getLUT(count != null ? count : 200));
        this.gone = remove ? 1 : 0;
    }
};

Particle.prototype.quadraticBezierMoveTo = function (cp1x, cp1y, cp2x, cp2y, x, y, remove, count) {
    if (this.moveAnim == null && this.gone === 0) {
        const b = new Bezier(this.x, this.y, cp1x, cp1y, cp2x, cp2y, x, y);
        this.moveAnim = new AnimSteps(b.getLUT(count != null ? count : undefined));
        this.gone = remove ? 1 : 0;
    }
};

Particle.prototype.moveToDirect = function (x, y, remove) {
    this.cubicBezierMoveTo(middle(this.x, x), middle(this.y, y), x, y, remove, 30);
};

Particle.prototype.runAnim = function () {
    if (this.moveAnim != null) {
        const s = this.moveAnim.step();
        if (s != null) {
            this.x = s.x;
            this.y = s.y;
            return true;
        } else {
            if (this.gone === 1) {
                this.gone = 2;
            }
            this.moveAnim = null;
            return false;
        }
    }
    return false;
};



Particle.prototype.drawFixed = function (cvs, x, y, radius) {
    if (this.gone !== 2) {
        cvs.beginPath();
        cvs.arc(x != null ? x : this.x, y != null ? y : this.y, radius != null ? radius : this.radius, 0, PI2);
        cvs.fill();
    }
};

Particle.prototype.drawZoom = function (cvs, translate, scale) {
    if (this.gone !== 2) {
        cvs.beginPath();
        cvs.arc(scale * this.x + translate[0], scale * this.y + translate[1], this.radius, 0, PI2);
        cvs.fill();
    }
};

export default function newParticle(x, y, radius) {
    return new Particle(x, y, radius);
}
