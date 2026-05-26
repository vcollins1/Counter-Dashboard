import {useState} from "react"
import type {CounterType} from "../utils/types.ts";
 
function UseCounters(initialCounters: CounterType) {
    const [counters, setCounters] = useState(initialCounters)

    function handlePlus(id: string) {
        setCounters(previous => {
            return previous.map(counter => {
                if (counter.id === id) {
                    return {...counter, count: counter.count == counter.max ? counter.max : counter.count + counter.step}
                }

                return counter
            })
        })
    }

    function handleMinus(id: string) {
        setCounters(previous => {
            return previous.map(counter => {
                if (counter.id === id) {
                    return {...counter, count: counter.count == counter.min ? counter.min : counter.count - counter.step}
                }

                return counter
            })
        })
    }

    function handleReset(id: string) {
        setCounters(previous => {
            return previous.map(counter => {
                if (id === counter.id) {
                    return {...counter, count: 0}
                }

                return counter
            })
        })
    }

    function handleAddCounter(counter: CounterType) {
        setCounters(previous => {
            return [...previous, counter]
        })
    }

    function handleDelete(id: string) {
        setCounters(previous => {
            return previous.filter(counter => counter.id != id)
        })
    }

    function handleResetAll() {
        setCounters(previous => {
            return previous.map(counter => ({...counter, count:0}))
        })
    }
    
    return {
        counters,
        handlePlus,
        handleMinus,
        handleReset,
        handleAddCounter,
        handleDelete,
        handleResetAll
    }
}

export default UseCounters
