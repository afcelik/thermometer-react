import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Page() {

    const [result, setresult] = useState("82 °F")
    const [fahrenheit, setFahrenheit] = useState(false);


    const converter = (value) => {
        if (fahrenheit == false){
            setresult(((value * (9 / 5)) + 32).toString()+ "°F")
        }
        else {
            // C = 5/9 x (F-32)
            setresult(((5 / 9)* (value - 32)).toString()+ "°C")
        }
    }

    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <h1>
                        Temperature Transducer
                    </h1>
                </Row>
                <Row className='mt-3'>
                    <Col className="col-md-4">
                        <Form.Label>Temperature</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="0 °C"
                            onChange={(e) => converter(e.target.value)}
                        />
                    </Col>
                    <Col className="col-md-4">
                        <Form.Label>Unit</Form.Label>
                        <Form.Check
                            type="switch"
                            label="Fahrenheit"
                            onClick={() => setFahrenheit(true)}
                        />
                    </Col>
                    <Col className="col-md-4">
                        <h2>{result}</h2>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Page
