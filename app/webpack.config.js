const createExpoWebpackConfigAsync = require("@expo/webpack-config");
const { DefinePlugin } = require("webpack");

module.exports = async function (env, argv) {
	const config = await createExpoWebpackConfigAsync(env, argv);

	config.resolve.fallback = {
		...config.resolve.fallback,
		crypto: require.resolve("expo-crypto"),
	};

	config.module.rules = config.module.rules.map((rule) => {
		if (rule.oneOf) {
			let hasModified = false;

			const newRule = {
				...rule,
				oneOf: rule.oneOf.map((oneOfRule) => {
					if (oneOfRule.test && oneOfRule.test.toString().includes("svg")) {
						hasModified = true;
						const test = oneOfRule.test.toString().replace("|svg", "");
						return { ...oneOfRule, test: new RegExp(test) };
					} else {
						return oneOfRule;
					}
				}),
			};

			if (hasModified) {
				newRule.oneOf.unshift({
					test: /\.svg$/,
					exclude: /node_modules/,
					use: [
						{
							loader: "@svgr/webpack",
						},
					],
				});
			}

			return newRule;
		} else {
			return rule;
		}
	});

	config.plugins = config.plugins.map((plugin) => {
		if (
			plugin instanceof DefinePlugin &&
			plugin.definitions["process.env"] !== undefined
		) {
			const expoPublicEnvVars = Object.fromEntries(
				Object.entries(process.env)
					.filter(([key]) => key.startsWith("EXPO_PUBLIC_"))
					.map(([key, value]) => [key, JSON.stringify(value)]),
			);
			Object.assign(plugin.definitions["process.env"], expoPublicEnvVars);
		}
		return plugin;
	});

	return config;
};
