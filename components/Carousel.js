import React from 'react';
import {Carousel} from 'react-bootstrap';
 import {Grid,Row,Col} from 'react-bootstrap';

const CarouselInstance = () => (
    <Grid>
        <Row>
            <Col md={8} mdOffset ={2}>
                <Carousel indicators ={false}>
                    <Carousel.Item>
                        <img width={900} height={500} src="./components/images/JobChaser.png"/>
                        <Carousel.Caption id="JobChaser">
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img width={900} height={500}  src="./components/images/LetsCook.png"/>
                        <Carousel.Caption id="LetsCook">
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500}  src="./components/images/VirtualRealtor.png"/>
                        <Carousel.Caption id="VirtualRealtor">
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
    </Grid>

);


export default CarouselInstance;