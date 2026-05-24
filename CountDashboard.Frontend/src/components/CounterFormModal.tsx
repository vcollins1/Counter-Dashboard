import {FocusTrap} from "focus-trap-react";
import type {CounterType} from "../utils/types.ts";
import CounterForm from "./CounterForm.tsx";

function CounterFormModal({onAdd, toggle}: {onAdd: (counter: CounterType) => void, toggle: () => void}) {
    return (
        <FocusTrap>
            <div className="modal" role="dialog" id="modal" aria-modal="true" aria-labelledby="add-counter-title" >
                <CounterForm
                    onAdd={onAdd}
                    toggle={toggle}
                />
            </div>
        </FocusTrap>
    )
}

export default CounterFormModal
