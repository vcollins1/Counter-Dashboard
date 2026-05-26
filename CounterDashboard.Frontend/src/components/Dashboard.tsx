import useCounters from "../hooks/useCounters.tsx"
import useModal from "../hooks/useModal.tsx"
import CounterPanel from "./CounterPanel.tsx";
import {initialCounters} from "../data/initialCounters.ts";
import "../assets/dashboard.css"
import CounterFormModal from "./CounterFormModal.tsx";

function Dashboard() {
   const {
       counters,
       handlePlus,
       handleMinus,
       handleReset,
       handleAddCounter,
       handleDelete,
       handleResetAll
   } = useCounters(initialCounters)
    
    const {
        modal,
        toggleModal
    } = useModal(false)
    
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
