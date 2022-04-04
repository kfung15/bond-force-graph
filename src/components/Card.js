import {useState} from 'react'
import './Card.css'
import {Container, Row, Col, Form, FormLabel, Dropdown} from 'react-bootstrap'
import ForceGraphMaker from './forceGraphMaker'





function Card () {

    const maturityValues = ["5y","2y","1y"]
    const [region, setRegion] = useState(["All"])
    const [country, setCountry] = useState(["All"])
    const [rating, setRating] = useState(["All"])
    const [sector, setSector] = useState(["All"])
    const [ticker, setTicker] = useState(["SGGOV", "ENGY"])
    const [maturity, setMaturity] = useState(["5y","2y","1y"])
    console.log(maturity)
    

    return (
        <div>
            <br />
            <Container fluid>
                <Row>
                    <Col xs={7}>
                        <ForceGraphMaker content={{region, country, rating, sector, maturity}}/>
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
                                    <Dropdown.Item onClick={e => setSector("All")}>All</Dropdown.Item>
                                    <Dropdown.Item onClick={e => setSector("govt")}>govt</Dropdown.Item>
                                    <Dropdown.Item onClick={e => setSector("energy")}>energy</Dropdown.Item>
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