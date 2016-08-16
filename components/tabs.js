import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400
    }
};

function handleActive(tab) {
    alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const TabsExampleSimple = () => (
    <Tabs>
        <Tab label="Projects" >
            <div>
                <h2 style={styles.headline}>Projects</h2>
                <ul>
                    <li>
                        <a href="https://github.com/nikhilrampal15/q3project"> A housing recommendation engine using k-means clustering.</a>
                    </li>
                    <li>
                        <a href="https://github.com/nikhilrampal15/q2project"> Job Chaser</a> a web portal to finding your next career
                    </li>
                    <li>
                        <a href="https://github.com/nikhilrampal15/q1project"> Let's Cook </a> just input whatever is in your fridge.
                    </li>
                </ul>
            </div>
        </Tab>
        <Tab label="Activities" >
            <div>
                <h2 style={styles.headline}>Tab Two</h2>
                <p>
                    This is another example tab.
                </p>
            </div>
        </Tab>
        <Tab label="Resume" >
            <div>
                <h2 style={styles.headline}>Tab Two</h2>
                <p>
                    This is another example tab.
                </p>
            </div>
        </Tab>
        <Tab
            label="onActive"
            data-route="/home"
            onActive={handleActive}
        >
            <div>
                <h2 style={styles.headline}>Tab Three</h2>
                <p>
                    This is a third example tab.
                </p>
            </div>
        </Tab>
    </Tabs>
);

export default TabsExampleSimple;