import Counter from "./Counter.tsx";
import "../assets/panels.css"

function CounterPanel() {
    const activeCounters = 3;
    return (
        <section className="counter-panel">
            <div className="counter-panel__header">
                <div>
                    <span>modules</span>
                    <h2>Counters</h2>
                </div>
                <span className="counter-panel__chip">{activeCounters} online</span>
            </div>
            
            <div className="counters">
                <Counter
                    title="Test Counter 1"
                    min={0}
                    max={20}
                    step={2}
                />

                <Counter
                    title="Test Counter 2"
                    min={0}
                    max={40}
                    step={4}
                />

                <Counter
                    title="Test Counter 3"
                    min={0}
                    max={60}
                    step={6}
                />
            </div>
        </section>
    )
}

export default CounterPanel
