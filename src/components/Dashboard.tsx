import {useState} from "react";
import CounterPanel from "./CounterPanel.tsx";
import {initialCounters} from "../data/initialCounters.ts";
import "../assets/dashboard.css"
import type {CounterType} from "../utils/types.ts";
import CounterFormModal from "./CounterFormModal.tsx";

function Dashboard() {
    const [counters, setCounters] = useState(initialCounters)
    const [modal, setModal] = useState(false)
    
    function toggleModal() {
        setModal(previous => !previous)
    }
    
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
    return (
        <div className="dashboard">
            {modal && <CounterFormModal onAdd={handleAddCounter} toggle={toggleModal}/>}
            <main className="dashboard__panels">
                <CounterPanel 
                    counters={counters}
                    plus={handlePlus}
                    minus={handleMinus}
                    reset={handleReset}
                    onDelete={handleDelete}
                    resetAll={handleResetAll}
                    toggle={toggleModal}
                />
            </main>
        </div>
    )
}

export default Dashboard
