const { EndOfLineState } = require('typescript')

/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    rules:{
      /* 关闭prettier format on save关闭 */
      'prettier/prettier': [
        'warn',
        {
          singleQuote:true, /* 单引号 */
          semi:false, /* 无分号 */
          printWidth:80, /*  */
          tarilingComma:'none',
          EndOfLine: 'auto'
        }
      ],
      'vue/multi-word-component-names':[
        'warn',
        {
          ignores:['index']
        }
      ],
      
    }
  }
}
