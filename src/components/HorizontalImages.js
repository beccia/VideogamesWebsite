import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { makeStyles } from '@material-ui/core/styles';
import data from '../data/data.json';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }));

const HorizontalImages = (props) => {
    const classes = useStyles();
  console.log(data.articles.filter(item => item.title == props.title));
  console.log(props.title);
    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cellHeight="360" cols={2.5}>
          {data.articles.filter(item => item.title == props.title)[0].images[props.number].map(img => (
            <GridListTile  key={img.title}>
              <img src={require(`../images/${img.title}.jpg`)}/>
              <GridListTileBar title={img.text}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
export default HorizontalImages;