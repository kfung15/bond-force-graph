import {useState} from 'react'
import './Card.css'
import {Container, Row, Col, Form, FormLabel} from 'react-bootstrap'
import ForceGraphMaker from './forceGraphMaker'





function Card () {

    const [region, setRegion] = useState(["Asia"])
    const [country, setCountry] = useState(["Singapore"])
    const [rating, setRating] = useState(["AA+"])
    const [sector, setSector] = useState(["govt"])
    const [ticker, setTicker] = useState(["SGGOV5Y", "SGGOV2Y", "SGGOV1Y"])
    const [maturity, setMaturity] = useState(["5y","2y","1y"])
    

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={7}>
                        <ForceGraphMaker content={{region, country, rating, sector, ticker, maturity}}/>
                    </Col>
                    <Col>
                        <Form>
                            <FormLabel>
                                Region
                            </FormLabel>
                            <Form.Control type="text" placeholder={region} onChange={e => setRegion(e.target.value)}/>
                            <FormLabel>
                                Country
                            </FormLabel>
                            <Form.Control type="text" placeholder={country} onChange={e => setCountry(e.target.value)}/>
                            <FormLabel>
                                Rating
                            </FormLabel>
                            <Form.Control type="text" placeholder={rating} onChange={e => setRating(e.target.value)}/>
                            <FormLabel>
                                Sector
                            </FormLabel>
                            <Form.Control type="text" placeholder={sector} onChange={e => setSector(e.target.value)}/>
                            <FormLabel>
                                Ticker
                            </FormLabel>
                            <Form.Control type="text" placeholder={ticker} onChange={e => setTicker(e.target.value)}/>
                            <FormLabel>
                                Maturity
                            </FormLabel>
                            <Form.Control type="text" placeholder={maturity} onChange={e => setMaturity(e.target.value)}/>      
                        </Form>
                    </Col>
                </Row>
            </Container>          
        </div>
    )

}
export default Card;