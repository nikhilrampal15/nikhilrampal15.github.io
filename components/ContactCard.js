import React from 'react';
import MobileTearSheet from './mobile-tear-sheet';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import {indigo500} from 'material-ui/styles/colors';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import ActionWork from 'material-ui/svg-icons/action/work';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Avatar from 'material-ui/Avatar';
import {Grid,Row,Col} from 'react-bootstrap';

const ContactCard = () => (
    <Grid>
        <Row className="show-grid">
            <Col xs={8} xsOffset ={2} md ={8} mdOffset={2} sm ={10} smOffset={2}>
                <MobileTearSheet>
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
                </MobileTearSheet>
            </Col>
        </Row>
    </Grid>
);

export default ContactCard;