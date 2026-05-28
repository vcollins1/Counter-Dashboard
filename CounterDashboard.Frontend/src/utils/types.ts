export type CounterType = {
    id: number,
    title: string,
    count: number,
    min: number,
    max: number,
    step: number,
}

export type NewCounterType = Omit<CounterType, "id">

export type CounterFuncType = {
    plus: (id: number) => void,
    minus: (id: number) => void,
    reset: (id: number) => void,
    onDelete: (id: number) => void
}

export type  RequestType = {
    method?: string,
    body?: string
}
