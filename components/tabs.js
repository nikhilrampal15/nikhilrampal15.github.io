import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FrontEndCard from './Cards/FrontEndCard';
import BackEndCard from './Cards/BackEndCard'
import DataAnalysisCard from './Cards/DataAnalysisCard'
import ContactCard from './ContactCard'
import CarouselInstance from './Carousel'

const TabsExampleSimple = () => (
    <Tabs>
        <Tab label="Projects" >
            <div>
                <br />
                <br />
                <CarouselInstance />
            </div>
        </Tab>
        <Tab label="Technical Skills" >
            <div id="technicalSkills">
                <br />
                <br />
                <FrontEndCard  />
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
                <br />
                <br />
                <ContactCard />
                <br />
                <br />
                <br />
                <br />
            </div>
        </Tab>
    </Tabs>
);

export default TabsExampleSimple;