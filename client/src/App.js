import './App.css';
import { Calendar } from './components/Calendar';
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Calendar/>
    </GlobalProvider>
  );
}

export default App;
