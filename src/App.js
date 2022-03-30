import './App.css';
import ForceGraphMaker from './components/forceGraphMaker';
import Card from './components/Card';
import {useState} from 'react'
import { render } from '@testing-library/react';



function App() {
  // The user can filter for different variables such as 

  // let contentObj = ForceGraphMaker({"region": region, "country": country, "rating": rating, "sector": sector, "ticker": ticker, "maturity": maturity})

  return(
    <div>
      <Card/>
    </div>     
  )
}

export default App;





