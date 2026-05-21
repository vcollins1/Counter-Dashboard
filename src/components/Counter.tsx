import {useState} from "react";

function Counter({title}: {title: string}) {
    const [count, setCount] = useState<number>(0)
    
    function handlePlus() {
        setCount(previous => previous + 1)
    }
    
    function handleMinus() {
        setCount(previous => previous - 1)
    }
    
    function handleReset() {
        setCount(0)
    }
    return (
        <article className="counter">
            <div className="counter__header">
                <div>
                    <span className="counter__kicker">Module</span>
                    <h3 className="counter__title">{title}</h3>
                </div>

                <button className="counter__delete">X</button>
            </div>

            <div className="counter__readout">
                <span className="counter_count">{count}</span>
            </div>
            
            <div className="counter__meter">
                <span></span>
            </div>
            
            <div className="counter__controls">
                <button className="counter__btn counter__btn--plus" onClick={handlePlus}>+</button>
                <button className="counter__btn counter__btn--reset" onClick={handleReset}>Reset</button>
                <button className="counter__btn counter__btn--minus" onClick={handleMinus}>-</button>
            </div>
        </article>
    )
}

export default Counter
