import {nanoid} from "nanoid";
import React from "react";
import type {CounterType} from "../utils/types.ts";
import "../assets/counterForm.css"

function CounterForm({onAdd, toggle}: {onAdd: (counter: CounterType) => void, toggle: () => void}) {
    function handleCounterFormSubmit(event: React.SubmitEvent) {
        event.preventDefault()
        
        const data = new FormData(event.target);
        
        const title = data.get("title")?.toString().trim() ?? ""
        const count = Math.max(Number(data.get("count")), 0);
        const min = Math.max(Number(data.get("min")), 0);
        const max = Math.min(Number(data.get("max")), 100);
        const step = Math.max(Number(data.get("step")), 1);
        
        const newCount: CounterType = {
            id: nanoid(),
            title,
            count,
            min,
            max,
            step
        }
        
        onAdd(newCount)
        toggle()
        event.target.reset()
    }
    return (
        <form className="form" onSubmit={handleCounterFormSubmit}>
            <div className="form__header">
                <p className="kicker">New module</p>
                <h2 id="add-counter-title">Add Counter</h2>
            </div>
            
            <div className="form__grid">
                <label>
                    <span>title</span>
                    <input type="text" name="title" defaultValue="new counter"/>
                </label>

                <label>
                    <span>count</span>
                    <input type="number" name="count" defaultValue={0}/>
                </label>

                <label>
                    <span>min</span>
                    <input type="number" name="min" defaultValue={0}/>
                </label>

                <label>
                    <span>max</span>
                    <input type="number" name="max" defaultValue={100}/>
                </label>

                <label>
                    <span>step</span>
                    <input type="number" name="step" defaultValue={1}/>
                </label>
            </div>
            
            <div className="form__controls">
                <button type="button" className="controls__btn controls__btn--secondary" onClick={toggle}>cancel</button>
                <button type="submit" className="controls__btn controls__btn--primary">add module</button>
            </div>
        </form>
    )
}

export default CounterForm
