import js from '@eslint/js'
import configPrettier from 'eslint-config-prettier'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import pluginTs from 'typescript-eslint'

export default [
	js.configs.recommended,
	...pluginTs.configs.recommended,
	...pluginVue.configs['flat/recommended'],
	configPrettier,
	{
		languageOptions: {
			globals: {
				...globals.browser,
			},
			ecmaVersion: 2024,
		},
		rules: {
			'arrow-body-style': ['error', 'as-needed'],
			'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
			'@typescript-eslint/no-unused-vars': 'off',
		},
	},
	{
		files: ['.prettierrc'],
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
		rules: {
			'@typescript-eslint/no-var-requires': 'off',
			'@typescript-eslint/no-require-imports': 'off',
		},
	},
	{
		ignores: ['dist'],
	},
]
