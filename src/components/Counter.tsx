import "../assets/counter.css";
import type {CounterFuncType, CounterType} from "../utils/types.ts";

function Counter({id, title, count, min, max, step, plus, minus, reset, onDelete}: CounterType & CounterFuncType) {
    const range = max - min
    const meterProgress = Math.round(((count - min) / range) * 100)
    
    return (
        <article className="counter">
            <div className="counter__header">
                <div>
                    <span className="counter__kicker">Module</span>
                    <h3 className="counter__title">{title}</h3>
                </div>

                <button className="counter__delete" onClick={() => onDelete(id)}>X</button>
            </div>

            <div className="counter__readout">
                <span className="counter__count">{count}</span>
            </div>
            
            <div className="counter__meter">
                <span style={{width: `${meterProgress}%`}}></span>
            </div>
            
            <div className="counter__controls">
                <button className="counter__btn counter__btn--plus" onClick={() => plus(id)}>+</button>
                <button className="counter__btn counter__btn--reset" onClick={() => reset(id)}>Reset</button>
                <button className="counter__btn counter__btn--minus" onClick={() => minus(id)}>-</button>
            </div>

            <dl className="counter__specs">
                <div>
                    <dt>Step</dt>
                    <dd>{step}</dd>
                </div>
                <div>
                    <dt>State</dt>
                    <dd>{count === max ? "Max" : count === min ? "Min" : "Nominal"}</dd>
                </div>
            </dl>
        </article>
    )
}

export default Counter
