import './App.css';
import HomePage from './Pages/HomePage';
import CheckoutPage  from './Pages/CheckoutPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
   <Router>
      <Routes>
      <Route path="/" element={<HomePage />}>
           
      </Route>
         {/* 
         <Route path="/login">
            <Login />
         </Route>
         */}
      <Route path="/checkout" element={<CheckoutPage />}>
      </Route>
         
      </Routes>
   </Router>
</div>

  );
}

export default App;
