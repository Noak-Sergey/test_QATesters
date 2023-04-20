// example use .env file
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const key = process.env.REACT_APP_API_KEY;

export const getData = async (url: string) => {
  const res = await fetch(url);

  const data = await res.json();

  return data;
};
