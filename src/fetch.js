export const getCrypto = async (cryptocur, setCryptocur) => {
    const url = `https://min-api.cryptocompare.com/data/price?fsym=${cryptocur}&tsyms=USD,GBP,EUR`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setCryptocur(`USD: ${data.USD} EUR: ${data.EUR} GBP: ${data.GBP}`);
}

export const getCryptoforCalculate = async (cryptocur, setCryptocur) => {
    const url = `https://min-api.cryptocompare.com/data/price?fsym=${cryptocur}&tsyms=USD,GBP,EUR`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setCryptocur(`${data.USD}`);
}
