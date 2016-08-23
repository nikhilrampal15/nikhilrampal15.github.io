import React from 'react';
import {Well} from 'react-bootstrap';
import {Grid,Row,Col} from 'react-bootstrap';

const AboutMeBlock = () => (
    <Grid>
        <Row>
            <Col md={6}>
                <Well> Hi, my name is Nick and I am a software developer based in San Francisco.I specialize in web development with javascript but have also used python for some algorithmic data analysis. I built this website to further progress my development skills please take a look at my projects to better understand my skill set.</Well>
            </Col>
        </Row>
    </Grid>
);

export default AboutMeBlock;