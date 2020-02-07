module.exports = {
    "env": {
        "browser": true,
    "commonjs": true,
        "es6": true,
        "amd": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "blockBindings": true 
        }
    },
    "extends": "./node_modules/blueconnect-mobile-javascript-style-guide/index.js",
    "rules": {
        // overrides for the front-end compile
        'no-var': 'off',
        'prefer-arrow-callback': 'off',
        'prefer-destructuring': 'off',
        'no-console': 'off'
    },
    "globals": {
        "angular": true,
        "moment": true,
        "NativeStorage": true,
        "$": true,
        "Connection": true,
        "cybersource": true,
        "cordova": true,
        "CryptoJS": true,
        "FingerprintAuth": true,
        "device": true
    }
};