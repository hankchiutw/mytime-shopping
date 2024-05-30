module.exports = {
	bracketSpacing: true,
	singleQuote: true,
	trailingComma: "es5",
	printWidth: 100,
	importOrder: ["^@(.*)/(.*)$", "^[./]"],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	importOrderParserPlugins: ["decorators", "typescript"],
	plugins: ["@trivago/prettier-plugin-sort-imports"],
};
