import React from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import {Grid,Row,Col} from 'react-bootstrap';

const ContactAvatar = () => (
    <Grid>
        <Row>
            <Col>
                <List>
                    <ListItem
                        disabled={true}
                        leftAvatar={
        <Avatar src="./components/Images/ProfilePic.jpg"
             size ={175}
        />
      }
                    >
                    </ListItem>
                </List>

            </Col>
        </Row>
    </Grid>
);


export default ContactAvatar;
