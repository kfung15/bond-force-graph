import {useState, useEffect, useRef} from 'react'
import './Card.css'
import {Container, Row, Col, Form, FormLabel, Dropdown} from 'react-bootstrap'
import ForceGraphMaker from './forceGraphMaker'
import raw from 'raw.macro';

function Card () {
    
    const maturityValues = ["5y","2y","1y"]
    const [region, setRegion] = useState(["All"])
    const [country, setCountry] = useState(["All"])
    const [rating, setRating] = useState(["All"])
    const [sector, setSector] = useState(["All"])
    const [ticker, setTicker] = useState([])
    const [selectedTickers, setSelectedTickers] = useState([])
    const [maturity, setMaturity] = useState(["5y","2y","1y"])
    const tickerBoxRef = useRef(null)
    console.log(ticker)
    console.log(selectedTickers)

    let rawBonds = raw("../data/bondData.txt")
    let masterBondData = JSON.parse(rawBonds)


    function convertBondDataToJson(criteria) {
        
        // console.log("Filtering now")

        let bond_data = {"nodes" : []}

        console.log(criteria)
        console.log(masterBondData.nodes)
        // Go through the filtering process
        bond_data.nodes = criteria.region != "All" ? masterBondData.nodes.filter(node => criteria.region.includes(node.region)) : masterBondData.nodes
        bond_data.nodes = criteria.country != "All" ? bond_data.nodes.filter(node => criteria.country.includes(node.country)) : bond_data.nodes
        bond_data.nodes = criteria.rating != "All" ? bond_data.nodes.filter(node => criteria.rating === node.rating) : bond_data.nodes
        bond_data.nodes = criteria.sector != "All" ? bond_data.nodes.filter(node => criteria.sector.includes(node.sector)) : bond_data.nodes
        
        let bondTickers = []


        for(let x = 0; x < bond_data.nodes.length; x++){
            if(!bondTickers.includes(bond_data.nodes[x].ticker)) {
                bondTickers.push(bond_data.nodes[x].ticker)

            }
        }

        console.log(bondTickers)

        setSelectedTickers([])
        setTicker(bondTickers)
      }

    useEffect(() => {
        // console.log("in useEffect")
        convertBondDataToJson({region, country, rating, sector})
    },[region, country, rating, sector])
    

    return (
        <div>
            <br />
            <Container fluid>
                <Row>
                    <Col xs={7}>
                        <ForceGraphMaker content={{region, country, rating, sector, maturity, selectedTickers}}/>
                    </Col>
                    <Col>
                        <Form>
                            <FormLabel>
                                Region
                            </FormLabel>
                            <Dropdown>
                                <Dropdown.Toggle>
                                    {region}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={e => setRegion("All")}>All</Dropdown.Item>
                                    <Dropdown.Item onClick={e => setRegion("Asia")}>Asia</Dropdown.Item>
                                    <Dropdown.Item onClick={e => setRegion("Africa")}>Africa</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <br />
                            <FormLabel>
                                Country
                            </FormLabel>
                            <Dropdown>
                                <Dropdown.Toggle>
                                    {country}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={e => setCountry("All")}>All</Dropdown.Item>
                                    <Dropdown.Item onClick={e => setCountry("Singapore")}>Singapore</Dropdown.Item>
                                    <Dropdown.Item onClick={e => setCountry("USA")}>USA</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <br />
                            <FormLabel>
                                Rating
                            </FormLabel>
                            <Dropdown>
                                <Dropdown.Toggle>
                                    {rating}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={e => setRating("All")}>All</Dropdown.Item>
                                    <Dropdown.Item onClick={e => setRating("AA+")}>AA+</Dropdown.Item>
                                    <Dropdown.Item onClick={e => setRating("AA")}>AA</Dropdown.Item>
                                    <Dropdown.Item onClick={e => setRating("A")}>A</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <br />
                            <FormLabel>
                                Sector
                            </FormLabel>
                            <Dropdown>
                                <Dropdown.Toggle>
                                    {sector}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={(e) => {setSector("All"); convertBondDataToJson({region, country, sector, rating})}}>All</Dropdown.Item>
                                    <Dropdown.Item onClick={(e) => {setSector("govt"); convertBondDataToJson({region, country, sector, rating})}}>govt</Dropdown.Item>
                                    <Dropdown.Item onClick={(e) => {setSector("energy"); convertBondDataToJson({region, country, sector, rating})}}>energy</Dropdown.Item>
                                    <Dropdown.Item onClick={(e) => {setSector("automotive"); convertBondDataToJson({region, country, sector, rating})}}>automotive</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <br />
                            <FormLabel>
                                Maturity
                            </FormLabel>
                            
                            {
                                maturityValues.map((mats => (
                                    <Form.Check type="checkbox" defaultChecked={true} label={mats} value={mats} onChange={ e => e.target.checked ? setMaturity([...maturity, e.target.value]) : setMaturity(maturity.filter(mat => mat !== e.target.value)) } ></Form.Check>

                                ) ) )
                            }
                            <br />
                            <FormLabel>
                                Tickers
                            </FormLabel>
                            {

                                ticker.map(((ticks, i) => (
                                    <Form.Check ref={tickerBoxRef} key={ticks + "_" + i} type="checkbox" defaultChecked={false} label={ticks} value={ticks} onChange={ e => e.target.checked ? setSelectedTickers([...selectedTickers, e.target.value]) : setSelectedTickers(selectedTickers.filter(t => t !== e.target.value)) }></Form.Check>

                                ) ) )

                            }
                            
                            
                            {/* <Form.Check type="checkbox" defaultChecked={true} label="1y" value="1y" onChange={ e => e.target.checked ? setMaturity([...maturity, e.target.value]) : setMaturity(maturity.filter(mat => mat !== e.target.value)) } ></Form.Check>
                            <Form.Check type="checkbox" label="2y"></Form.Check>
                            <Form.Check type="checkbox" label="5y"></Form.Check> */}

                            {/* <Form.Control type="text" placeholder={maturity} onChange={e => setMaturity(e.target.value)}/>       */}
                        </Form>
                    </Col>
                </Row>
            </Container>          
        </div>
    )

}
export default Card;