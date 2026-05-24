import Counter from "./Counter.tsx";
import "../assets/panels.css"
import type {CounterFuncType, CounterType} from "../utils/types.ts";

function CounterPanel({counters, plus, minus, reset, onDelete, resetAll, toggle}: {counters: CounterType[], resetAll: () => void, toggle: () => void} & CounterFuncType) {
    
    const activeCounters = counters.length;
    const counterModules = counters.map(counter => {
        return <Counter 
            key={counter.id}
            id={counter.id}
            title={counter.title} 
            count={counter.count} 
            min={counter.min} 
            max={counter.max} 
            step={counter.step}
            plus={plus}
            minus={minus}
            reset={reset}
            onDelete={onDelete}
        />
    });
    return (
        <section className="counter-panel">
            <div className="counter-panel__header">
                <div>
                    <span className="kicker">modules</span>
                    <h2>Counters</h2>
                </div>
                <span className="counter-panel__chip">{activeCounters} online</span>
            </div>

            <div className="controls">
                <button className="controls__btn controls__btn--primary" onClick={toggle}>+ Add Counter</button>
                <button className="controls__btn controls__btn--secondary" onClick={resetAll}>Reset All</button>
            </div>
            
            <div className="counters">
                {counters.length > 0 ? counterModules : (
                    <div className="counters__empty">
                        <h3>No counters online</h3>
                        <p>Add a counter module to start tracking a new signal.</p>
                    </div>
                )} 
            </div>
        </section>
    )
}

export default CounterPanel
