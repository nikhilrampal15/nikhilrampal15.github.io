import React from 'react';
import AppBar from 'material-ui/AppBar';
import SvgIconExampleSimple from './navbarIcons'


const AppBarExampleIconMenu = () => (
    <AppBar
        style={{backgroundColor : '#737373'}}
        title="Nick Rampal"
        iconElementRight={
      <SvgIconExampleSimple />
    }
    />
);

export default AppBarExampleIconMenu;