
type ItemDatePropsType = {
    time: number
}

export const ItemDate = (props: ItemDatePropsType) => {
    const t = props.time
    
    const data = new Intl.DateTimeFormat('ru-RU').format(t)
    const hours = Math.floor(t / (1000 * 60 * 60) % 24)
    const minutes = Math.floor((t / 1000 / 60) % 60)

    function getZero(num: number) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    return (
        <>
            {data} / {getZero(hours)}:{getZero(minutes)}
        </>
    )
}