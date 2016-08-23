import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FrontEndCard from './Cards/FrontEndCard';
import BackEndCard from './Cards/BackEndCard'
import DataAnalysisCard from './Cards/DataAnalysisCard'
import ContactCard from './ContactCard'
import CarouselInstance from './Carousel'
import ContactAvatar from './ContactAvatar'
import AboutMeBlock from './AboutMePanel'
import ProjectPanel from './ProjectsPanel'

const TabsExampleSimple = () => (
    <Tabs>
        <Tab label="About" >
            <div id="avatar">
                <ContactAvatar />
            </div>
            <div id="About">
                <AboutMeBlock />
            </div>
            <div id="carousel">
            </div>
        </Tab>
        <Tab label="Projects" >
            <div id="carousel">
                <CarouselInstance />
            </div>
            <div id="Project">
                <ProjectPanel />
            </div>
        </Tab>
        <Tab label="Skills" >
            <div id="FrontEndCard">
                <FrontEndCard  />
            </div>
            <div id="BackEndCard">
                <BackEndCard />
            </div>
            <div id="DataAnalysisCard">
                <DataAnalysisCard />
            </div>
        </Tab>
        <Tab label="Contact">
            <div id ="Contact">
                <ContactCard />
            </div>
        </Tab>
    </Tabs>
);

export default TabsExampleSimple;

//Job Chaser:
