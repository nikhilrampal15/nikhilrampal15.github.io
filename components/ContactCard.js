import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import {indigo500} from 'material-ui/styles/colors';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import ActionWork from 'material-ui/svg-icons/action/work';
import ActionInfo from 'material-ui/svg-icons/action/info';
import {Grid,Row,Col} from 'react-bootstrap';
import {Card} from 'material-ui/Card';

const ContactCard = () => (
    <Grid>
        <Row className="show-grid">
            <Col xs={10} xsOffset={1}  md ={8} mdOffset={2} sm ={10} smOffset={1}>
                <Card>
                <List>
                    <a href="tel:415-742-1573">
                        <ListItem
                            leftIcon={<CommunicationCall color={indigo500} />}
                            rightIcon={<CommunicationChatBubble />}
                            primaryText="(415) 742-1573"
                            secondaryText="Mobile"
                        />
                    </a>
                </List>
                <Divider inset={true} />
                <List>
                    <a href="mailto:nick.k.rampal@gmail.com?" target="_top">
                        <ListItem
                            leftIcon={<CommunicationEmail color={indigo500} />}
                            style={{fontSize:14}}
                            primaryText="nick.k.rampal@gmail.com"
                            secondaryText="Personal"
                        />
                    </a>
                </List>
                <Divider inset={true} />
                <List>
                    <a href = "https://docs.google.com/document/d/1KQuvL_uIrv5POaL6NrNJBXOLr3zlmdPUIUq8g5d9Lv4/edit?usp=sharing">
                        <ListItem
                            leftIcon={<ActionWork color={indigo500} />}
                            rightIcon={<ActionInfo />}
                            primaryText="Resume"
                            secondaryText ="NickRampalResume.pdf"
                        />
                    </a>
                </List>
                </Card>
            </Col>
        </Row>
    </Grid>
);

export default ContactCard;