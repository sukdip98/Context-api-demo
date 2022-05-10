import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import {Routes,Route} from 'react-router-dom'
import Header from './Components/Header';
import Cart from './Components/Cart';
// import faker from 'faker'
const products=[...Array(20)];
// products.map(()=>({
//   id:faker
// }))
function App() {
  return (
    <BrowserRouter>
 <div className="App">
   <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
