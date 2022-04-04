import {useState} from 'react'
import './Card.css'
import {Container, Row, Col, Form, FormLabel, Dropdown} from 'react-bootstrap'
import ForceGraphMaker from './forceGraphMaker'





function Card () {

    const [region, setRegion] = useState(["All"])
    const [country, setCountry] = useState(["All"])
    const [rating, setRating] = useState(["All"])
    const [sector, setSector] = useState(["All"])
    const [ticker, setTicker] = useState(["SGGOV5Y", "SGGOV2Y", "SGGOV1Y"])
    const [maturity, setMaturity] = useState(["5y","2y","1y"])
    

    return (
        <div>
            <br />
            <Container fluid>
                <Row>
                    <Col xs={7}>
                        <ForceGraphMaker content={{region, country, rating, sector}}/>
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
                            {/* <Form.Control type="text" placeholder={region} onChange={e => setRegion(e.target.value)}/> */}
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
                            {/* <Form.Control type="text" placeholder={rating} onChange={e => setRating(e.target.value)}/> */}
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
                            {/* <Form.Control type="text" placeholder={sector} onChange={e => setSector(e.target.value)}/> */}
                            {/* <FormLabel>
                                Ticker
                            </FormLabel>
                            <Form.Control type="text" placeholder={ticker} onChange={e => setTicker(e.target.value)}/>
                            <FormLabel>
                                Maturity
                            </FormLabel>
                            <Form.Control type="text" placeholder={maturity} onChange={e => setMaturity(e.target.value)}/>       */}
                        </Form>
                    </Col>
                </Row>
            </Container>          
        </div>
    )

}
export default Card;