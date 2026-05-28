import {useState, useEffect} from "react";
import type {CounterType, NewCounterType} from "../utils/types.ts";
import {createCounter, deleteCounter, getCounters, updateCounter} from "../utils/api.ts";
 
function useCounters() {
    const [counters, setCounters] = useState<CounterType[]>([])

    useEffect(() => {
        async function loadDashboard() {
            try {
                const allCounters = await getCounters()
                setCounters(allCounters)
            } catch (error) {
                console.error("Failed to load counters.", error)
            }
        }
        
        void loadDashboard()
    }, [])

    async function  handlePlus(id: number) {
        const counterToUpdate = counters.find(counter => counter.id === id)
        if (!counterToUpdate) return
        
        const updatedCounter = {
            ...counterToUpdate,
            count: Math.min(counterToUpdate.count + counterToUpdate.step, counterToUpdate.max)
        }
        
        setCounters(previous => {
            return previous.map(counter => {
                if (counter.id === id) {
                    return updatedCounter
                }

                return counter
            })
        })
        
        try {
            await updateCounter(id, updatedCounter)
        } catch {
            setCounters(counters)
        }
    }

    async function handleMinus(id: number) {
        const counterToUpdate = counters.find(counter => id === counter.id)
        if (!counterToUpdate) return
        
        const updatedCounter = {
            ...counterToUpdate,
            count: Math.max(counterToUpdate.min, counterToUpdate.count - counterToUpdate.step)
        }
        
        setCounters(previous => {
            return previous.map(counter => {
                if (counter.id === id) {
                    return updatedCounter
                }
                
                return counter
            })
        })
        
        try {
            await updateCounter(id, updatedCounter)
        } catch {
            setCounters(counters)
        }
    }

    async function handleReset(id: number) {
        const counterToUpdate = counters.find(counter => id === counter.id)
        if (!counterToUpdate) return

        const updatedCounter = {
            ...counterToUpdate,
            count: 0
        }

        setCounters(previous => {
            return previous.map(counter => {
                if (counter.id === id) {
                    return updatedCounter
                }

                return counter
            })
        })

        try {
            await updateCounter(id, updatedCounter)
        } catch {
            setCounters(counters)
        }
    }

    async function handleAddCounter(counter: NewCounterType) {
        try {
            const createdCounter = await createCounter(counter)
            setCounters(previous => [...previous, createdCounter])
        } catch (error) {
            console.error("Failed to create counter.", error)
        }
    }

    async function handleDelete(id: number) {
        const updatedCounter = counters.filter(counter => id != counter.id)
        setCounters(updatedCounter)
        
        try {
            await deleteCounter(id)
        } catch (error) {
            console.error("Failed deletion.", error)
        }
    }

    async function handleResetAll() {
        const updatedCounters = counters.map(counter => {
            return {...counter, count: 0}
        })
        setCounters(updatedCounters)
        
        for (const c of updatedCounters) {
            try {
                await updateCounter(c.id, c)
            } catch (error) {
                console.error("Failed to update all in database.", error)
            }
        }
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

export default useCounters
