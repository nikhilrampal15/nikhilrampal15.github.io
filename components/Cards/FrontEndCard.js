import React from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Grid,Row,Col} from 'react-bootstrap';

const FrontEndCard = () => (
    <Grid>
        <Row>
            <Col md={8} mdOffset ={2}>
                <Card>
                    <CardMedia
                        overlay={<CardTitle title="Front End Web Development"  />}
                    >
                        <img src="./components/Images/FrontEndTechnologies.png" />
                    </CardMedia>
                    <CardTitle title="Summary of skills" />
                    <CardText>
                        I am an expert in HTML5, CSS, and Javascript(ES6) and adept in creating one page apps using Angular and React/Redux. This web-page is built in react.
                    </CardText>
                </Card>
            </Col>
        </Row>
    </Grid>
);

export default FrontEndCard;

