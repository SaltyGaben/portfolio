import js from "@eslint/js"
import pluginVue from "eslint-plugin-vue"
import tseslint from "typescript-eslint"
import { defineConfig } from "eslint/config"

export default defineConfig([
	{
		ignores: ["**/components/ui/**"],
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs["flat/recommended"],
	{
		rules: {
			// JS / TS rules
			"prefer-const": ["error"],
			"no-var": ["error"],
			"func-style": ["error", "expression"],
			"no-unused-vars": ["warn"],
			"no-console": ["warn"],
			"no-debugger": ["warn"],
			"indent": ["error", "tab", { "SwitchCase": 1 }],
			"semi": ["error", "never"],
			"object-curly-spacing": ["error", "always"],

			// Vue rules (remove all formatting-related rules that Prettier used to handle)
			"vue/html-indent": ["error", "tab", { baseIndent: 1, alignAttributesVertically: true }],
			"vue/no-unused-vars": ["warn"],
			"vue/no-mutating-props": ["error"],
			"vue/require-prop-types": ["error"],
			"vue/multi-word-component-names": ["off"],
			"vue/attribute-hyphenation": ["error", "always"],
			"vue/max-attributes-per-line": ["error", { singleline: 3, multiline: 1 }],
			"vue/singleline-html-element-content-newline": ["off"],
			"vue/multiline-html-element-content-newline": ["off"],

			// TypeScript rules
			"@typescript-eslint/no-unused-vars": ["warn"],
			"@typescript-eslint/explicit-function-return-type": ["off"],
			"@typescript-eslint/no-explicit-any": ["off"],
			"@typescript-eslint/consistent-type-imports": ["off"],

			// Disable Prettier-specific rules
			"no-undef": "off",
		},
	},
])
