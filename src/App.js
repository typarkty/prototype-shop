import Home from "./Components/Home";
import AppStateProvider from "./providers/AppStateProvider";
import { BrowserRouter, Route, Routes, Switch, Link } from "react-router-dom";
import Checkout from "./Components/Checkout";

function App() {
  return (
    <AppStateProvider>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="/checkout" element={<Checkout />} />
        </Routes>
        </BrowserRouter>  
    </AppStateProvider>
      
  );
}

export default App;
