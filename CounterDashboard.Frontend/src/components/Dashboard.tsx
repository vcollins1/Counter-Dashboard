import useCounters from "../hooks/useCounters.ts"
import useModal from "../hooks/useModal.ts"
import CounterMetricsPanel from "./CounterMetricsPanel.tsx";
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
    
    const totalCount = counters.reduce((sum, counter) => 
        counter.count + sum, 0)
    const totalCapacity = 
        counters.reduce((sum, counter) => counter.max + sum, 0)
    const activeCounters = counters.length;
    const systemLoad = totalCount === 0 ? 0 : Math.round((totalCount / totalCapacity) * 100)

    const metrics = [
        { label: "Total Count", value: totalCount, meta: "Aggregate signal" },
        { label: "Active Modules", value: activeCounters, meta: "Counters online" },
        { label: "System Load", value: `${systemLoad}%`, meta: "Capacity used" }
    ];
    
    return (
        <div className="dashboard">
            {modal && <CounterFormModal onAdd={handleAddCounter} toggle={toggleModal}/>}
            <main className="dashboard__panels">
                <CounterMetricsPanel metrics={metrics} />
                <CounterPanel 
                    counters={counters}
                    activeCounters={activeCounters}
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
