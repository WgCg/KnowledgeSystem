/**
 * ESLint Rules Base
 *
 * 使用 babel-eslint 作为解析器
 *
 * @fixable 表示此配置支持 --fix
 *
 */

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
            modules: true
        }
    },
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true
    },
    globals: {
        process: false
    },
    rules: {
        /* 可能的错误：这些规则与 JavaScript 代码中可能的语法错误或逻辑错误有关 */

        // 禁止 for 循环出现方向错误的循环，比如 for (i = 0; i < 10; i--)
        'for-direction': 'error',
        // 禁止使用 console
        'no-console': process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'sandbox' ? ['error', { allow: ['warn', 'error'] }] : 'off',
        // @fixable 禁止使用 debugger
        'no-debugger': process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'sandbox' ? 'error' : 'off',
        // 禁止在函数参数中出现重复名称的参数
        'no-dupe-args': 'error',
        // 禁止在对象字面量中出现重复名称的键名
        'no-dupe-keys': 'error',
        // 禁止在 switch 语句中出现重复测试表达式的 case
        'no-duplicate-case': 'error',
        // 必须使用 isNaN(foo) 而不是 foo === NaN
        'use-isnan': 'error',
        // typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function' 或 'symbol'
        'valid-typeof': 'error',

        /* 最佳实践：这些规则通过一些最佳实践帮助你避免问题 */

        // 将 var 定义的变量视为块作用域，禁止在块外使用
        'block-scoped-var': 'error',
        // @fixable 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
        eqeqeq: [
            'error',
            'always',
            {
                null: 'ignore'
            }
        ],
        // 禁止使用 alert
        'no-alert': process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'sandbox' ? 'error' : 'off',
        // 禁止使用 foo == null 或 foo != null，必须使用 foo === null 或 foo !== null
        'no-eq-null': 'off',
        // 禁止使用 eval
        'no-eval': 'error',
        // 禁止直接 new 一个类而不赋值
        'no-new': 'warn',
        // 禁止重复定义变量
        'no-redeclare': 'error',

        /* 变量声明 */

        // 禁止使用未定义的变量
        'no-undef': [
            'error',
            {
                typeof: false
            }
        ],
        // 禁止使用保留字作为变量名
        'no-shadow-restricted-names': 'error',
        // 禁止将undefined作为标识符
        'no-undefined': 'error',
        // 定义过的变量必须使用
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'none',
                varsIgnorePattern: ''
            }
        ],
        // 变量必须先定义后使用
        'no-use-before-define': [
            'error',
            {
                functions: false,
                classes: false,
                variables: false
            }
        ],

        /* 风格指南 */

        // @fixable 一个缩进必须用四个空格替代
        indent: [
            'error',
            4,
            {
                // case 相对于 switch的缩进，保持一致
                SwitchCase: 1
            }
        ],
        semi: ['error', 'never'],
        // @fixable 箭头函数只有一个参数的时候，必须加括号
        // @off 应该允许灵活设置
        'arrow-parens': 'off',
        // @fixable 逗号前禁止有空格，逗号后必须要有空格
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        // @fixable 函数名和执行它的括号之间禁止有空格
        'func-call-spacing': ['error', 'never'],
        // @fixable 对象字面量中冒号前面禁止有空格，后面必须有空格
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true,
                // 冒号前后必须有空格
                mode: 'strict'
            }
        ],
        // 禁止混用空格和缩进
        'no-mixed-spaces-and-tabs': 'error',
        // 禁止使用 tab
        'no-tabs': 'error',
        // @fixable 禁止属性前有空格，比如 foo. bar()
        'no-whitespace-before-property': 'error',
        // @fixable 必须使用单引号，禁止使用双引号
        quotes: [
            'error',
            'single',
            {
                // 单引号内可使用单引号，双引号内可以使用双引号，否则需要转义
                avoidEscape: true,
                // 允许反勾号
                allowTemplateLiterals: true
            }
        ],
        // @fixable if, function 等的大括号之前必须要有空格，比如 if (a) {
        'space-before-blocks': ['error', 'always'],
        // @fixable function 的小括号之前必须要有空格
        'space-before-function-paren': [
            'error',
            {
                // 匿名函数
                anonymous: 'always',
                // 命名函数
                named: 'always',
                // 箭头函数
                asyncArrow: 'always'
            }
        ],
        // @fixable 操作符左右必须有空格，比如 let sum = 1 + 2;
        'space-infix-ops': 'error',
        // @fixable case 的冒号前禁止有空格，冒号后必须有空格
        'switch-colon-spacing': [
            'error',
            {
                after: true,
                before: false
            }
        ],

        /* ES6 */

        // @fixable 箭头函数的箭头前后必须有空格
        'arrow-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],
        // 禁止对使用 const 定义的常量重新赋值
        'no-const-assign': 'error',
        // 禁止重复 import 模块
        'no-duplicate-imports': 'error'
    }
}
