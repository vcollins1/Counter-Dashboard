import CounterPanel from "./CounterPanel.tsx";
import "../assets/dashboard.css"

function Dashboard() {
    return (
        <div className="dashboard">
            <main className="dashboard__panels">
                <CounterPanel />
            </main>
        </div>
    )
}

export default Dashboard
