
type ItemAutorPropsType = {
    surname: string
    name: string
    patronymic: string
}

export const ItemAutor = (props: ItemAutorPropsType) => {
    
    return (
        <div>
            {props.surname} {props.name.slice(0, 1)}. {props.patronymic.slice(0, 1)}.
        </div>
    )
}