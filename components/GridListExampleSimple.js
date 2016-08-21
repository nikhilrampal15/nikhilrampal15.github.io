import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    gridList: {
        width: 500,
        height: 500,
        overflowY: 'auto',
        marginBottom: 24
    }
};

const tilesData = [
    {
        img: './components/Screen Shot 2016-08-16 at 6.36.07 PM.png',
        title: 'Job Chaser',
        description: 'Find your dream job',
    },
    {
        img: './components/Screen Shot 2016-08-16 at 6.36.36 PM.png',
        title: "Let's Cook",
        description: 'Create amazing meals from whatever is in the fridge',
    },
    {
        img: './components/Screen Shot 2016-08-17 at 8.46.18 AM.png',
        title: 'Virtual Real Estate agent',
        description: 'Implemented with machine learning algorithms',
    }
];

const GridListExampleSimple = () => (
    <div style={styles.root}>
        <GridList
            cellHeight={200}
            style={styles.gridList}
        >
            {tilesData.map((tile) => (
                <GridTile
                    key={tile.img}
                    title={tile.title}
                    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                >
                    <img src={tile.img} />
                </GridTile>
            ))}
        </GridList>
    </div>
);

export default GridListExampleSimple;