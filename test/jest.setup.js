import '@testing-library/jest-dom';

// Fix requestAnimationFrame
global.requestAnimationFrame = (cb) => setTimeout(cb, 0);
