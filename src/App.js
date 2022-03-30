import './App.css';
import ForceGraphMaker from './components/forceGraphMaker';
import {useState} from 'react'
import { render } from '@testing-library/react';


function App() {
  // The user can filter for different variables such as 
  const [region, setRegion] = useState(["Asia"])
  const [country, setCountry] = useState(["Singapore"])
  const [rating, setRating] = useState(["AA+"])
  const [sector, setSector] = useState(["govt"])
  const [ticker, setTicker] = useState(["SGGOV5Y", "SGGOV2Y", "SGGOV1Y"])
  const [maturity, setMaturity] = useState(["5y","2y","1y"])


  return(
    ForceGraphMaker({"region": region, "country": country, "rating": rating, "sector": sector, "ticker": ticker, "maturity": maturity})
  );
}

export default App;





