export type ItemType = {
    id: number
    oguid: string
    status: string
    order_type: OrderType
    terminal: TerminalType
    account: AccountType
    created_user: CreatedUserType
    created_date: number
}

type OrderType = {
    name: string
    oguid: string
}

type TerminalType = {
    name: string
    oguid: string
}

type AccountType = {
    name: string
    oguid: string
}

type CreatedUserType = {
    surname: string
    name: string
    patronymic: string
    oguid: string
}