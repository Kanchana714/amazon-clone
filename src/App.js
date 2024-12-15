import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Home from './Home';
// Using PascalCase for component names
const Layout = () => (
  <div>
    <Header />
    <Home/>
    
  </div>
);

const Checkout = () => (
  <div>
    <Header />
    <h1>Checkout</h1>
    
  </div>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/login" element={<h1>Login page</h1>} />
          {/* Default route with Layout component */}
          <Route path="/" element={<Layout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;