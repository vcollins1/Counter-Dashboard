import Counter from "./components/Counter.tsx";
import "./assets/shared.css";

function App() {
    return (
        <div className="app">
            <Counter 
                title="Test Counter"
                min={0}
                max={20}
            />
        </div>
    )
}

export default App
