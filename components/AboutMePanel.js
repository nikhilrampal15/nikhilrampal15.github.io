import React from 'react';
import {Well} from 'react-bootstrap';
import {Grid,Row,Col} from 'react-bootstrap';

const AboutMeBlock = () => (
    <Grid>
        <Row>
            <Col md={6}>
                <Well>My name is Nick and I am a software developer based in San Francisco. I am a huge fan of Javascript and Python. I specialize in web development and recently have been exploring data analytics. I built this website to further progress my development skills please take a look at my projects below to better understand my skill set.</Well>
            </Col>
        </Row>
    </Grid>
);

export default AboutMeBlock;