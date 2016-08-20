import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import GridListExampleSimple from './GridListExampleSimple';
import CardExampleWithAvatar from './CardExampleWithAvatar';
import BackEndCard from './BackEndCard'
import DataAnalysisCard from './DataAnalysisCard'
import ListExamplePhone from './DividerExampleForm'


const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400
    }
};

const TabsExampleSimple = () => (
    <Tabs>
        <Tab label="Projects" >
            <div>
                <h2 style={styles.headline}>Projects</h2>
                <GridListExampleSimple />
            </div>
        </Tab>
        <Tab label="Technical Skills" >
            <div id="technicalSkills">
                <br />
                <CardExampleWithAvatar  />
                <br />
                <br />
                <BackEndCard />
                <br />
                <br />
                <DataAnalysisCard />
                <br />
                <br />
                <br />
                <br />
            </div>
        </Tab>
        <Tab label="Resume">
            <div id ="Resume">
                <ListExamplePhone />
                <br />
                <br />
                <br />
                <br />
            </div>
        </Tab>
    </Tabs>
);

export default TabsExampleSimple;