import React from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Grid,Row,Col} from 'react-bootstrap';

const BackEndCard = () => (
    <Grid>
        <Row>
            <Col md={8} mdOffset ={2}>
    <Card>
        <CardMedia
            overlay={<CardTitle title="Server-Side Technologies"  />}
        >
            <img src="./components/Images/BackEndTechnologies.png" />
        </CardMedia>
        <CardTitle title="Summary of skills" />
        <CardText>
            <div id="BackEndCardText">
           The back end technologies I currently use are node.js(express) and flask(python), my database tool of choice is PostgresQL. I have experience with encryption using bycrpt and have used oAuth as well. 
            </div>
        </CardText>
    </Card>
    </Col>
    </Row>
    </Grid>
);

export default BackEndCard;