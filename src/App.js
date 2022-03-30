import './App.css';
import ForceGraphMaker from './components/forceGraphMaker';
import Card from './components/Card';
import {useState} from 'react'
import { render } from '@testing-library/react';



function App() {
  // The user can filter for different variables such as 
  const [region, setRegion] = useState(["Asia"])
  const [country, setCountry] = useState(["Singapore"])
  const [rating, setRating] = useState(["AA+"])
  const [sector, setSector] = useState(["govt"])
  const [ticker, setTicker] = useState(["SGGOV5Y", "SGGOV2Y", "SGGOV1Y"])
  const [maturity, setMaturity] = useState(["5y"])
  let contentObj = ForceGraphMaker({"region": region, "country": country, "rating": rating, "sector": sector, "ticker": ticker, "maturity": maturity})

  return(
    <Card content={contentObj = contentObj}
    />     
  )
}

export default App;





