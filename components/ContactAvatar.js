import React from 'react';
import Avatar from 'material-ui/Avatar'
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

const ContactAvatar = () => (
    <List>
        <ListItem
            disabled={true}
            leftAvatar={
        <Avatar src="images/uxceo-128.jpg" />
      }
        >
    </ListItem>
    </List>
);

export default ContactAvatar;
