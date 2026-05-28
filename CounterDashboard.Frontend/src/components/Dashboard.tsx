import useCounters from "../hooks/useCounters.ts"
import useModal from "../hooks/useModal.ts"
import CounterPanel from "./CounterPanel.tsx";
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
   } = useCounters()
    
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
