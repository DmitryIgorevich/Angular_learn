module.exports = {
    ignoreFiles: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
    rules: {
        indentation: 4,
        //          https://stylelint.io/user-guide/rules/list/function-comma-space-after
        'function-comma-space-after': 'always',
        //          https://stylelint.io/user-guide/rules/list/function-comma-space-before
        'function-comma-space-before': 'never',
        //          https://stylelint.io/user-guide/rules/list/function-max-empty-lines
        'function-max-empty-lines': 0,
        //          https://stylelint.io/user-guide/rules/list/function-url-quotes
        'function-url-quotes': 'always',
        //          https://stylelint.io/user-guide/rules/list/function-parentheses-space-inside
        'function-parentheses-space-inside': 'never',
        //          https://stylelint.io/user-guide/rules/list/function-parentheses-newline-inside
        // 'function-parentheses-newline-inside': 'never',
        //          https://stylelint.io/user-guide/rules/list/function-name-case
        'function-name-case': 'lower',
        //          https://stylelint.io/user-guide/rules/list/function-calc-no-unspaced-operator
        'function-calc-no-unspaced-operator': true,
        //          https://stylelint.io/user-guide/rules/list/function-calc-no-invalid
        'function-calc-no-invalid': true,

        //          https://stylelint.io/user-guide/rules/list/max-empty-lines
        'max-empty-lines': 2,
        //          https://stylelint.io/user-guide/rules/list/media-feature-colon-space-after
        'media-feature-colon-space-after': 'always',
        //          https://stylelint.io/user-guide/rules/list/media-feature-colon-space-before
        'media-feature-colon-space-before': 'never',
        //          https://stylelint.io/user-guide/rules/list/no-duplicate-at-import-rules
        'no-duplicate-at-import-rules': true,
        // не дублировать селекторы         https://stylelint.io/user-guide/rules/list/no-duplicate-selectors
        // 'no-duplicate-selectors': true,
        //      https://stylelint.io/user-guide/rules/list/no-empty-first-line
        'no-empty-first-line': true,
        // пустой файл          https://stylelint.io/user-guide/rules/list/no-empty-source
        // 'no-empty-source': true,
        // пробелы              https://stylelint.io/user-guide/rules/list/no-eol-whitespace
        'no-eol-whitespace': true,
        // лишние точки с запятыми
        'no-extra-semicolons': true,
        // импорт сверху        https://stylelint.io/user-guide/rules/list/no-invalid-position-at-import-rule
        'no-invalid-position-at-import-rule': true,
        // неправильные проблеы         https://stylelint.io/user-guide/rules/list/no-irregular-whitespace
        'no-irregular-whitespace': true,
        // новая строка в конце         https://stylelint.io/user-guide/rules/list/no-missing-end-of-source-newline
        'no-missing-end-of-source-newline': true,
        // новая строка перед новым свойством           https://stylelint.io/user-guide/rules/list/rule-empty-line-before
        'rule-empty-line-before': ['always', {ignore: ['after-comment']}],
        //          https://stylelint.io/user-guide/rules/list/selector-attribute-brackets-space-inside
        'selector-attribute-brackets-space-inside': 'never',
        //          selector-attribute-quotes
        'selector-attribute-quotes': 'always',
        //          https://stylelint.io/user-guide/rules/list/selector-combinator-space-after
        'selector-combinator-space-after': 'always',
        //          https://stylelint.io/user-guide/rules/list/selector-combinator-space-before
        'selector-combinator-space-before': 'always',
        //          https://stylelint.io/user-guide/rules/list/selector-descendant-combinator-no-non-space
        'selector-descendant-combinator-no-non-space': true,
        //
        'selector-list-comma-newline-after': 'always',
        //          https://stylelint.io/user-guide/rules/list/selector-list-comma-space-after
        'selector-list-comma-space-after': 'always-single-line',
        //          https://stylelint.io/user-guide/rules/list/selector-max-attribute
        'selector-max-attribute': 2,
        //          https://stylelint.io/user-guide/rules/list/selector-max-combinators
        'selector-max-combinators': 3,
        //          https://stylelint.io/user-guide/rules/list/selector-max-empty-lines
        'selector-max-empty-lines': 0,
        //          https://stylelint.io/user-guide/rules/list/selector-max-type
        'selector-max-type': 2,
        //          https://stylelint.io/user-guide/rules/list/selector-pseudo-class-no-unknown
        'selector-pseudo-class-no-unknown': true,
        //          https://stylelint.io/user-guide/rules/list/selector-pseudo-class-parentheses-space-inside
        'selector-pseudo-class-parentheses-space-inside': 'never',
        //          https://stylelint.io/user-guide/rules/list/selector-pseudo-element-colon-notation
        'selector-pseudo-element-colon-notation': 'single',
        //          https://stylelint.io/user-guide/rules/list/selector-type-case
        'selector-type-case': 'lower',
        //          https://stylelint.io/user-guide/rules/list/shorthand-property-no-redundant-values
        'shorthand-property-no-redundant-values': true,
        //          https://stylelint.io/user-guide/rules/list/string-quotes
        'string-quotes': 'single',
        //          https://stylelint.io/user-guide/rules/list/unit-case
        'unit-case': 'lower',
        //          https://stylelint.io/user-guide/rules/list/unit-no-unknown
        'unit-no-unknown': true,
        //          https://stylelint.io/user-guide/rules/list/value-keyword-case
        'value-keyword-case': 'lower',
        //          https://stylelint.io/user-guide/rules/list/value-list-comma-space-after
        'value-list-comma-space-after': 'always',
        //          https://stylelint.io/user-guide/rules/list/value-list-comma-space-before
        'value-list-comma-space-before': 'never',
        //          https://stylelint.io/user-guide/rules/list/value-list-max-empty-lines
        'value-list-max-empty-lines': 0,

        //          https://stylelint.io/user-guide/rules/list/font-family-no-duplicate-names
        'font-family-no-duplicate-names': true,
        //          https://stylelint.io/user-guide/rules/list/font-family-name-quotes
        'font-family-name-quotes': 'always-where-required',

        //          https://stylelint.io/user-guide/rules/list/declaration-no-important
        'declaration-no-important': true,
        //          https://stylelint.io/user-guide/rules/list/declaration-empty-line-before/
        'declaration-empty-line-before': 'never',
        //          https://stylelint.io/user-guide/rules/list/declaration-colon-space-before
        'declaration-colon-space-before': 'never',
        //          https://stylelint.io/user-guide/rules/list/declaration-colon-space-after
        'declaration-colon-space-after': 'always',
        //          https://stylelint.io/user-guide/rules/list/declaration-colon-newline-after
        'declaration-colon-newline-after': 'always-multi-line',
        //          https://stylelint.io/user-guide/rules/list/declaration-block-trailing-semicolon
        'declaration-block-trailing-semicolon': 'always',
        //          https://stylelint.io/user-guide/rules/list/declaration-block-single-line-max-declarations
        'declaration-block-single-line-max-declarations': 1,
        //          https://stylelint.io/user-guide/rules/list/declaration-block-semicolon-space-before
        'declaration-block-semicolon-space-before': 'never',
        //          https://stylelint.io/user-guide/rules/list/declaration-block-semicolon-space-after
        // 'declaration-block-semicolon-space-after': 'always',
        //          https://stylelint.io/user-guide/rules/list/declaration-block-semicolon-newline-after
        'declaration-block-semicolon-newline-after': 'always',
        //          https://stylelint.io/user-guide/rules/list/declaration-block-no-duplicate-properties
        'declaration-block-no-duplicate-properties': true,
        //          https://stylelint.io/user-guide/rules/list/declaration-block-no-duplicate-custom-properties
        'declaration-block-no-duplicate-custom-properties': true,
        //          https://stylelint.io/user-guide/rules/list/color-no-invalid-hex
        'color-no-invalid-hex': true,

        //          https://stylelint.io/user-guide/rules/list/block-opening-brace-space-before
        'block-opening-brace-space-before': 'always',
        //          https://stylelint.io/user-guide/rules/list/block-opening-brace-newline-after
        'block-opening-brace-newline-after': 'always',
        //          https://stylelint.io/user-guide/rules/list/block-closing-brace-newline-before
        'block-closing-brace-newline-before': 'always',
        //          https://stylelint.io/user-guide/rules/list/block-closing-brace-empty-line-before
        'block-closing-brace-empty-line-before': 'never',

        //          https://stylelint.io/user-guide/rules/list/at-rule-semicolon-space-before
        'at-rule-semicolon-space-before': 'never',
        //          https://stylelint.io/user-guide/rules/list/at-rule-semicolon-newline-after
        'at-rule-semicolon-newline-after': 'always',
        //          https://stylelint.io/user-guide/rules/list/at-rule-name-space-after
        'at-rule-name-space-after': 'always',

        //          https://stylelint.io/user-guide/rules/list/comment-empty-line-before
        'comment-empty-line-before': 'always',
    },
};
