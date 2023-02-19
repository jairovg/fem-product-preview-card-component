import colorChroma from '../transforms/color-chroma.mjs';

const NAME = 'css';

export default (StyleDictionary) => {
  const transforms = [...StyleDictionary.transformGroup[NAME]];
  transforms.splice(transforms.indexOf('color/css'), 0, colorChroma.name);

  return {
    name: NAME,
    transforms,
  };
};
