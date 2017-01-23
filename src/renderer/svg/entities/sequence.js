import rectangle from '../elements/rectangle';

export default ({position: {x, y}, length: width, height, color, colour}) => (
  rectangle({
    x, y, width, height,
    fill: color || colour,
    rx: height / 2, ry: height / 2
  })
);
