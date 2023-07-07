module.exports = {
    extends: ['stylelint-config-standard-scss'],
    plugins: ['stylelint-scss', 'stylelint-order'], // scss 문법을 위한 플러그인
    ignoreFiles: ['src/styles/reset.scss', 'src/styles/common.scss'], // reset과 common scss는 ignore합니다.
    rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'order/properties-alphabetical-order': true,
        'no-empty-source': null,
        'rule-empty-line-before': null,
        'selector-list-comma-newline-after': null,
        'no-descending-specificity': null
    }
};
