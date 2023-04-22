type ItemDatePropsType = {
  time: number;
};

function ItemDate({ time }: ItemDatePropsType) {
  const data = new Intl.DateTimeFormat('ru-RU').format(time);
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((time / 1000 / 60) % 60);

  function getZero(num: number) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    }
    return num;
  }

  return (
    <>
      {data} / {getZero(hours)}:{getZero(minutes)}
    </>
  );
}

export default ItemDate;
