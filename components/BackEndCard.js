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
            <img src="./components/Screen Shot 2016-08-18 at 2.18.25 PM.png" />
        </CardMedia>
        <CardTitle title="Summary of skills" />
        <CardText>
            With servers I have experience with node.js(express) along with flask(python). I have used SQL and implemented it in postgresSQL databases.
        </CardText>
    </Card>
    </Col>
    </Row>
    </Grid>
);

export default BackEndCard;