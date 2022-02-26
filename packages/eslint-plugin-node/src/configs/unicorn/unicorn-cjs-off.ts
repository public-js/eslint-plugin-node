import { knownRulesCJS, unknownEntries } from './preset';
import { Linter } from 'eslint';

const config: Linter.BaseConfig = {
    plugins: ['unicorn'],
    rules: Object.assign(
        {},
        knownRulesCJS(),
        Object.fromEntries(unknownEntries.map(([ruleId]: [string, Linter.RuleEntry]) => [ruleId, 'off'])),
    ),
};
export default config;
