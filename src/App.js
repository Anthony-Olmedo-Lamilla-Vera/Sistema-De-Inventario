import "./App.css";
import ContextProduct from "./Context/ContextProduct";
import Index from "./Routes/Index";

function App() {
  return (
    <ContextProduct value>
      <Index />
    </ContextProduct>
  );
}

export default App;
