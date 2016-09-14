import React from 'react';
import {Well} from 'react-bootstrap';
import {Grid,Row,Col} from 'react-bootstrap';

const AboutMeBlock = () => (
    <Grid>
        <Row>
            <Col md={6}>
                <Well> Hi, my name is Nick and I am a software developer from San Francisco. I specialize in web development using javascript and python. </Well>
            </Col>
        </Row>
    </Grid>
);

export default AboutMeBlock;