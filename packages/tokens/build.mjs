import BaseStyleDictionary from 'style-dictionary';
import config from './config.mjs';
import scssMixin from './formats/scss-mixin.mjs';
import cssFactory from './transformGroup/css.mjs';
import scssFactory from './transformGroup/scss.mjs';
import colorChroma from './transforms/color-chroma.mjs';
import colorCssFactory from './transforms/color-css.mjs';

const StyleDictionary = BaseStyleDictionary.extend(config);

StyleDictionary.registerFormat(scssMixin);
StyleDictionary.registerTransform(colorChroma);
StyleDictionary.registerTransform(colorCssFactory(StyleDictionary));
StyleDictionary.registerTransformGroup(cssFactory(StyleDictionary));
StyleDictionary.registerTransformGroup(scssFactory(StyleDictionary));
StyleDictionary.buildAllPlatforms();
