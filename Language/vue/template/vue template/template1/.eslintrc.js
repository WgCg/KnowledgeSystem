module.exports = {
    "globals": {
        "process": true,
        "Vue": true,
        "trackPageview": true,
        "trackClick": true,
        "_djaq": true,
        "djCookieUtils": true,
        "DjUser": true,
        "AMap": true,
        "FastClick": true,
        "EXIF": true
    },
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module",
        "allowImportExportEverywhere": true
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-uses-vars": 1,
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-console": [
            "warn"
        ],
        "no-alert": [
            "error"
        ],
        "spaced-comment": [
            "error",
            "always"
        ],
        "space-before-blocks": [
            "error"
        ],
        "key-spacing": [
            "error",
            {
                "beforeColon": false,
                "afterColon": true,
                "mode": "strict"
            }
        ],
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "space-infix-ops": [
            "error"
        ],
        "arrow-spacing": [
            "error"
        ]
    }
};
