module.exports = {
    root: true,
    env: {
        // "browser": true,
        // "es2021": true,
        node: true
    },
    extends: [
        'eslint:recommended',
        '@tencent/eslint-config-tencent',
        'plugin:vue/essential',
        'standard',
        'plugin:vue/recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    plugins: [
        'import',
        'html',
        'vue'
    ],
    rules: {
        'no-console': 'off',
        'no-debugger': 'warn',
        'space-before-function-paren': [0, 'always'],
        semi: ['warn', 'always'],
        'nonblock-statement-body-position': ['error', 'below'],
        'brace-style': [2, '1tbs'],
        'no-param-reassign': ['error', { props: false }],
        'no-tabs': 'off',
        'vue/html-indent': ['error', 'tab', {
            attribute: 0,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: []
        }],
        'vue/html-self-closing': ['error', {
            html: {
                void: 'always',
                normal: 'never',
                component: 'never'
            },
            svg: 'always',
            math: 'always'
        }],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/attributes-order': 'off',
        'no-mixed-spaces-and-tabs': 'off',
        'no-underscore-dangle': 'off',
        indent: [2, 4]
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                mocha: true
            }
        }
    ]
};
