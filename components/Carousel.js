import React from 'react';
import {Carousel} from 'react-bootstrap';
 import {Grid,Row,Col} from 'react-bootstrap';

const CarouselInstance = () => (
    <Grid>
        <Row>
            <Col md={8} mdOffset ={2}>
                <Carousel indicators ={false} interval ={1000}>
                    <Carousel.Item>
                        <a href="https://q2project.herokuapp.com/"><img width={900} height={500} src="./components/JobChaser.png"/></a>
                        <Carousel.Caption id="JobChaser">
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a href="https://q1project.herokuapp.com/"><img width={900} height={500}  src="./components/LetsCook.png"/></a>
                        <Carousel.Caption id="LetsCook">
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="https://github.com/nikhilrampal15/q3project"><img width={900} height={500}  src="./components/VirtualRealtor.png"/></a>
                        <Carousel.Caption id="VirtualRealtor">
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
    </Grid>

);


export default CarouselInstance;