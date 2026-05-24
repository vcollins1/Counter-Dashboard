export type CounterType = {
    id: string,
    title: string,
    count: number,
    min: number,
    max: number,
    step: number,
}

export type CounterFuncType = {
    plus: (id: string) => void,
    minus: (id: string) => void,
    reset: (id: string) => void,
    onDelete: (id: string) => void
}