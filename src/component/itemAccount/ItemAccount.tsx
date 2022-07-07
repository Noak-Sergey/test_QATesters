
type ItemAccountPropsType = {
    accountName: string
    terminalName: string
}

export const ItemAccount = (props: ItemAccountPropsType) => {
    
    return (
        <div>
            {props.accountName} / {props.terminalName}
        </div>
    )
}