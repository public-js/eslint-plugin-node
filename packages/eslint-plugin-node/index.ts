import imports from './src/configs/imports';
import unicornCjsDefault from './src/configs/unicorn/unicorn-cjs-default';
import unicornCjsOff from './src/configs/unicorn/unicorn-cjs-off';
import unicornEsmDefault from './src/configs/unicorn/unicorn-esm-default';
import unicornEsmOff from './src/configs/unicorn/unicorn-esm-off';

module.exports = {
    configs: {
        imports,
        unicornCjsDefault,
        unicornCjsOff,
        unicornEsmDefault,
        unicornEsmOff,
    },
};
