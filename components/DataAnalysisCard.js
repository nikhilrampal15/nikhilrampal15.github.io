import React from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const DataAnalysisCard = () => (
    <Card>
        <CardMedia
            overlay={<CardTitle title="Data Analysis and Machine learning tools"  />}
        >
            <img src="./components/logo-stack-python.png" />
        </CardMedia>
        <CardTitle title="Summary of skills" />
        <CardText>
            I have used python mainly for big data analysis along with some implementation of machine learning. I have experience using numpy,pandas, jupyter notebook and matplotlib for graphing results.
        </CardText>
    </Card>
);

export default DataAnalysisCard;