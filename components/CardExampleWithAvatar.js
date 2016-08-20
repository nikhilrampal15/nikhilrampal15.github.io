import React from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const CardExampleWithAvatar = () => (
    <Card>
        <CardMedia
            overlay={<CardTitle title="Front End Web Development"  />}
        >
            <img src="./components/Screen Shot 2016-08-17 at 1.50.35 PM.png" />
        </CardMedia>
        <CardTitle title="Summary of skills" />
        <CardText>
            I am an expert in HTML5, CSS, and Javascript(ES6) and adept in creating one page apps using Angular and React/Redux. This web-page is built in react.
        </CardText>
    </Card>
);

export default CardExampleWithAvatar;

