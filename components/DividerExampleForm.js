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

const ListExamplePhone = () => (
    <MobileTearSheet>
        <List>
            <ListItem
                leftIcon={<CommunicationCall color={indigo500} />}
                rightIcon={<CommunicationChatBubble />}
                primaryText="(415) 742-1573"
                secondaryText="Mobile"
            />
        </List>
        <Divider inset={true} />
        <List>
            <ListItem
                leftIcon={<CommunicationEmail color={indigo500} />}
                primaryText="nick.k.rampal@gmail.com"
                secondaryText="Personal"
            />
        </List>
        <Divider inset={true} />
        <List>
            <ListItem
                leftAvatar={<Avatar icon={<ActionWork />} />}
                rightIcon={<ActionInfo />}
                primaryText="Resume"
                secondaryText ="NickRampalResume.pdf"
            />
        </List>

    </MobileTearSheet>
);

export default ListExamplePhone;