const basePath = "https://finnhub.io/api/v1";
const auth_token = "cl4r7dpr01qrlanq2sv0cl4r7dpr01qrlanq2svg";

export const searchSymbol = async (query) => {
  // const url = `https://finnhub.io/api/v1/search?q=META&token=cl4r7dpr01qrlanq2sv0cl4r7dpr01qrlanq2svg`;
  
  const url = `${basePath}/search?q=${query}&token=${auth_token}`;

  // fetch(url)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("data received :: ", data);

  //     return data;
  //   })
  //   .catch(console.error);


  
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json().then(function (json) {
    return json;
  });

};


export const fetchStockDetails = async (stockSymbol) => {
  
  const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${auth_token}`;
  console.log("api_key" , auth_token)
  const response = await fetch(url);
  
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};


export const fetchQuote = async (stockSymbol) => {
  const url = `${basePath}/quote?symbol=${stockSymbol}&token=${auth_token}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};


export const fetchHistoricalData = async (
  stockSymbol,
  resolution,
  from,
  to
) => {
  const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${auth_token}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};






