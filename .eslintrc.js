module.exports = {

    env: {
        browser: true,
        es2022: true,
        node: true,
    },
    extends: [
        'eslint-config-airbnb/hooks',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
        'arrow-parens': ['error', 'as-needed'],
        // override default options
        // 'comma-dangle': ['error', 'always',],
        indent: ['error', 4,
            {
                SwitchCase: 1,
                ignoredNodes: ['ConditionalExpression'],
            },
        ],
        'no-cond-assign': ['error', 'always'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],

        // disable now, but enable in the future
        'one-var': 'off', // ["error", "never"]

        'object-curly-spacing': ['error', 'always'], // пробелы между скобками в литералах объектов
        'array-bracket-spacing': ['error', 'never'], // пробелы между скобками в массивах
        'quote-props': ['error', 'as-needed'], // свойства объекта в кавычках или без кавычек
        'no-trailing-spaces': 'error', // не должно быть пробелов в конце строки
        'no-tabs': 'error', // символы табуляции в коде запрещена везде
        'comma-dangle': ['error', { // запятая после последнего элемента массива или объекта
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'never',
            exports: 'never',
            functions: 'never',
        }],
        'brace-style': ['error', '1tbs'], // правила для фигурных скобкок для блоков кода
        'keyword-spacing': 'error', // пробел слева и справа для ключевых слов
        'no-multi-spaces': 'error', // не допускается несколько пробелов подряд
        eqeqeq: 'error', // использовать === и !== вместо == и !=
        camelcase: 'error', // имена переменных и функций в стиле camelCase
        'max-len': ['error', 100], // максимальная длина строки
        // 'no-multiple-empty-lines': 'error',// не больше 2 пустых строк подряд

        // disable
        'init-declarations': 'off',
        'no-console': 'off',
        'no-inline-comments': 'off',

    },

};
