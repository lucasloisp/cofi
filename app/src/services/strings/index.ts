import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";

import translations from "./translations.json";

const i18n = new I18n(translations);

const deviceLocale = getLocales().at(0)?.languageTag;
if (deviceLocale) {
	i18n.defaultLocale = "en";
	i18n.locale = deviceLocale;
}

i18n.enableFallback = true;

export const t = i18n.t.bind(i18n);
