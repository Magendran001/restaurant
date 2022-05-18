import logo from './logo.svg';
import Restaurant from './components/restaurantdetails';
import './App.css';
import Addrestaurant from './components/addrestaurant/addrestaurant';
import { useState } from 'react';

function App() {
  let [switch_tabs,setswitchtabs] = useState(true);

  return (
    <div className="App">
      <div className='addrestaurant'> <button onClick={()=>{setswitchtabs(!switch_tabs)}}>{!switch_tabs?"restaurant":"Add restaurant"}</button></div>
        {switch_tabs?<Restaurant/>:<Addrestaurant />}
        
    </div>
  );
}

export default App;
