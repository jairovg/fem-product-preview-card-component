import chroma from 'chroma-js';

export default {
  name: 'color/chroma',
  type: 'value',
  // only transforms that have transitive: true will be applied to tokens
  // that alias/reference other tokens
  transitive: true,
  matcher: (token) => token.attributes.category === 'color'
    && token.modify,
  transformer(token) {
    const { value, modify = [] } = token;
    let color = chroma(value);

    // iterate over the modify array (see tokens/color.json)
    // and apply each modification in order
    modify.forEach(({ type, amount }) => {
      // modifier type must match a method name in chromajs
      // https://gka.github.io/chroma.js/
      // chroma methods can be chained, so each time we override the color variable
      // we can still call other chroma methods, similar to
      // chroma(value).brighten(1).darken(1).hex();
      color = color[type](amount);
    });

    return color.hex();
  },
};
