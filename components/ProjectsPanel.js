import React from 'react';
import {Panel,Grid,Row,Col,ListGroup,ListGroupItem} from 'react-bootstrap';


const ProjectPanel = () => (

    <Grid>
        <Row>
            <Col md={12}>
                <Panel collapsible defaultExpanded header="Projects" style={{textAlign:'center'}}>
                    <ListGroup fill>
                    <ListGroupItem style={{textAlign:'center'}}>
                    Job Chaser: <a href="https://github.com/nikhilrampal15/q2project">GitHub</a> <a href ="https://q2project.herokuapp.com/"> Job Chaser</a>
                    </ListGroupItem>
                        <ListGroupItem>A full-stack application that allows users to collaborate and compare interview questions, job postings, and provide general tips to other users.
                        </ListGroupItem>

                        <ListGroupItem style={{textAlign:'center'}}>
                         Technologies Used:
                        </ListGroupItem>
                        <ListGroupItem>
                            Javascript, jQuery, Node.js, Bcrypt, postgreSQL, Passport.js, Express
                        </ListGroupItem>

                        <ListGroupItem> Virtual Realtor: <a href="https://github.com/nikhilrampal15/q3project">GitHub</a></ListGroupItem>

                        <ListGroupItem> A recommendation system built using K-Means clustering and K-nearest Neighbors  machine learning algorithms to locate affordable housing nationwide. A potential homeowner would just have to input certain criteria they are looking for and leave the rest to the virtual realtor.
                        </ListGroupItem>
                        <ListGroupItem style={{textAlign:'center'}}>
                            Technologies Used:
                        </ListGroupItem>
                        <ListGroupItem>
                            Python, Numpy, Pandas, Flask, Plotly, Matplotlib, Ipython
                        </ListGroupItem>

                        <ListGroupItem> Lets Cook: <a href ="https://q1project.herokuapp.com/"> Let's Cook </a> </ListGroupItem>

                        <ListGroupItem> Ever wonder what to cook when you come home? Let's Cook has you covered. Just input the ingredients you already have in your refrigerator and you will view recipes that can be used to make just about anything. There are over 300,000 recipes available. </ListGroupItem>

                        <ListGroupItem>Technologies Used:</ListGroupItem>
                        <ListGroupItem>
                            Javascript, jQuery, RestFul Apis, Heroku, Mocha TDD
                        </ListGroupItem>
                    </ListGroup>
                </Panel>
            </Col>
        </Row>
    </Grid>
);

export default ProjectPanel;