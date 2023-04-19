//example use .env
const key = process.env.REACT_APP_API_KEY;

export const getData = async (url: string) => {
  const res = await fetch(url);

  return await res.json();
};
