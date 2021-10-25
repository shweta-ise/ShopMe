
import './App.css';
import Main from './Components/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Main/>
     
    </div>

    </BrowserRouter>
  );
}

export default App;
