import './App.css';
import Marketplace from './Components/Marketplace/Marketplace/Marketplace/Marketplace';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route path="*" component={Marketplace} />
     </BrowserRouter>
    </div>
  );
}

export default App;
