import { Linter } from 'eslint';
import { knownRulesESM, unknownEntries } from './preset';

const config: Linter.BaseConfig = {
    env: { es2020: true },
    parserOptions: {
        ecmaVersion: 2020, // uni: 'latest'
        sourceType: 'module',
    },
    plugins: ['unicorn'],
    rules: Object.assign(
        {},
        knownRulesESM,
        Object.fromEntries(unknownEntries.map(([ruleId]: [string, Linter.RuleEntry]) => [ruleId, 'off'])),
    ),
};
export default config;
