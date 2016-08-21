import React from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Grid,Row,Col} from 'react-bootstrap';

const DataAnalysisCard = () => (
    <Grid>
        <Row>
            <Col md={8} mdOffset ={2}>
                <Card>
                    <CardMedia
                        overlay={<CardTitle title="Data Analysis and Machine learning tools"  />}
                    >
                        <img src="./components/Images/logo-stack-python.png" />
                    </CardMedia>
                    <CardTitle title="Summary of skills" />
                    <CardText>
                        I have used python mainly for big data analysis along with some implementation of machine learning. I have experience using numpy,pandas, jupyter notebook and matplotlib for graphing results.
                    </CardText>
                </Card>
            </Col>
        </Row>
    </Grid>
);

export default DataAnalysisCard;