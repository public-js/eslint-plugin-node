import { Linter } from 'eslint';
import { knownRulesCJS, unknownEntries } from './preset';

const config: Linter.BaseConfig = {
    plugins: ['unicorn'],
    rules: Object.assign({}, knownRulesCJS(), Object.fromEntries(unknownEntries)),
};
export default config;
