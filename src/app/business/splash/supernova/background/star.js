import random from 'lodash-es/random';

const Star = function Star(w, h) {
    const padding = 10;

    this.originW = w;
    this.originH = h;
    this.originX = this.x = random(padding, this.originW - padding);
    this.originY = this.y = random(padding, this.originH - padding);
    this.radius = random(1, 3);
    this.alpha = random(0.6, 0.9);

    // rgb color
    this.r = 255;
    this.g = random(150, 255);
    this.b = random(150, 255);

    const update = (w, h) => {
        this.x = this.originX * w / this.originW;
        this.y = this.originY * h / this.originH;
    };

    const draw = (ctx) => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.alpha})`;
        ctx.shadowBlur = 20;
        ctx.shadowColor = 'white';
        ctx.fill();
    };

    const reinit = (w, h) => {
        // update originW and originH, if originally initialized to 0
        this.originW = this.originW || w;
        this.originH = this.originH || h;

        this.originX = random(padding, this.originW - padding);
        this.originY = random(padding, this.originH - padding);
    };

    return {
        update,
        draw,
        reinit,
    };
};

export default Star;
