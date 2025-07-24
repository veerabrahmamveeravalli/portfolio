import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import './styles/tailwind.css'; // Ensure Tailwind CSS is imported

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;