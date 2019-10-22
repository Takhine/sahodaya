import React from 'react';
import Layout from 'components/Layout';

import {
    GridList,
    GridListTile
} from '@material-ui/core/';

import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const tileData = [
    {
        id:1,
        img: 'https://picsum.photos/id/534/1280/400',
        title: 'Image',
        cols: 2,
    },
    {
        id:2,
        img: 'https://picsum.photos/id/534/1280/400',
        title: 'Image',
        cols: 1,
    },
    {
        id:3,
        img: 'https://picsum.photos/id/534/1280/400',
        title: 'Image',
    },
    {
        id:4,
        img: 'https://picsum.photos/id/534/1280/400',
        title: 'Image',
    },
    {
        id:5,
        img: 'https://picsum.photos/id/534/1280/400',
        title: 'Image',
    },
]
const Events = (props) => {
     const getGridListCols = () => {
        if (isWidthUp('lg', props.width)) {
          return 3;
        }
    
        if (isWidthUp('md', props.width)) {
          return 2;
        }
        if (isWidthUp('sm', props.width)) {
            return 1;
          }    
        return 1;
      }
    return (
        <Layout>
            <div className="container">
                <h1 className="activities">Activities</h1>
                <hr />
                <div className="event-container">
                    <h2 className="event-subtitle">Event Name</h2>
                    <p className="event-description">Sahodaya, a concept literally meaning ‘’Rising Together’ came into being in the year 1986, to facilitate synergy of ideas among the schools of CBSE for excellence in the education.
                        A Sahodaya School Complex is a group of neighbourhood schools voluntarily coming together to share their innovative practices in all aspects of school education including curriculum design,
                        evaluation and pedagogy and also providing support services for teachers and students.</p>
                    {/* Images Grid */}
                    <GridList cellHeight={260} cols={getGridListCols()} spacing={4} style={{width:'100%'}}>
                        {tileData.map(tile => (
                            <GridListTile key={tile.id} cols={!isWidthUp('md',props.width) ? (1):(tile.cols || 1) }>
                                <img src={tile.img} alt={tile.title} />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </div>
        </Layout>
    )
}

export default withWidth()(Events);