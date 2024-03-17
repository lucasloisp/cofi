import * as Crypto from "expo-crypto";

const webCrypto = typeof crypto !== "undefined" ? crypto : Crypto;

if (typeof crypto === "undefined") {
	Object.defineProperty(window, "crypto", {
		configurable: true,
		enumerable: true,
		get: () => webCrypto,
	});
}
