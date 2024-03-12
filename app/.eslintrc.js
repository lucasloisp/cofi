module.exports = {
	root: true,
	extends: ["universe/native"],
	overrides: [
		{
			files: ["*.js", "*.ts", "*.tsx"],
			rules: {
				"no-restricted-imports": [
					"error",
					{
						patterns: [
							{
								group: ["@segment/"],
								message: "Please use the `analytics` service instead.",
							},
						],
					},
				],
			},
		},
	],
};
