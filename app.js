import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIconMenu from './components/navbar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TabsExampleSimple from './components/tabs'

injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <div>
            <AppBarExampleIconMenu />
            <TabsExampleSimple />
        </div>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);