//Api URL GENERAL de CoinCap
const url = 'https://api.coincap.io/v2';

//Api URL de CriptoYa
const urlCriptoYa = 'https://criptoya.com/api';

/**
 * RETURN: all the assets with a limit of 20
 */
function getAssets() {
	return fetch(`${url}/assets?limit=20`)
		.then((res) => res.json())
		.then((res) => res.data);
}

/**
 *
 * @param {*} coin
 * RETURN: the only asset id.
 */
function getAsset(coin) {
	return fetch(`${url}/assets/${coin}`)
		.then((res) => res.json())
		.then((res) => res.data);
}
/**
 *
 * @param {*} coin
 * Return the history price for calculate min & max
 */
function getAssetHistory(coin) {
	const now = new Date();
	const end = now.getTime();
	now.setDate(now.getDate() - 1);
	const start = now.getTime();

	return fetch(
		`${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
	)
		.then((res) => res.json())
		.then((res) => res.data);
}

/**
 * Return the Dollar price from Argentina USD/Peso
 */
function getDollars() {
	return fetch(`${urlCriptoYa}/dolar`).then((res) =>
		res.json()
	);
}
export default {
	getAssets,
	getAsset,
	getAssetHistory,
	getDollars,
};
