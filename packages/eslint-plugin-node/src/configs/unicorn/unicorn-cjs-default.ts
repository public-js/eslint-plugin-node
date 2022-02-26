import { knownRulesCJS, unknownEntries } from './preset';
import { Linter } from 'eslint';

const config: Linter.BaseConfig = {
    plugins: ['unicorn'],
    rules: Object.assign({}, knownRulesCJS(), Object.fromEntries(unknownEntries)),
};
export default config;
