import Counter from "./Counter.tsx";
import {initialCounters} from "../data/initialCounters.ts";
import "../assets/panels.css"

function CounterPanel() {
    const activeCounters = initialCounters.length;
    const counterModules = initialCounters.map(counter => {
        return <Counter title={counter.title} min={counter.min} max={counter.max} step={counter.step} />
    });
    return (
        <section className="counter-panel">
            <div className="counter-panel__header">
                <div>
                    <span>modules</span>
                    <h2>Counters</h2>
                </div>
                <span className="counter-panel__chip">{activeCounters} online</span>
            </div>

            <div className="controls">
                <button className="controls__btn controls__btn--primary">+ Add Counter</button>
                <button className="controls__btn controls__btn--secondary">Reset All</button>
            </div>
            
            <div className="counters">
                {counterModules}
            </div>
        </section>
    )
}

export default CounterPanel
