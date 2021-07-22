import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import Popap from './Popap.js'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


const itemData = [
  {
    img: img1,
    title: 'Image',
    author: 'author',
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nam reprehenderit odio magni? Ullam repellat aliquid quaerat amet eveniet. Architecto nulla unde voluptatum obcaecati odio beatae quaerat in dolores doloribus."
  },
  {
    img: img2,
    title: 'Image',
    author: 'author',
    info: 'img2'
  },
  {
    img: img3,
    title: 'Image',
    author: 'author',
    info: 'img3'
  },
];

function ProjectsPage() {

  const classes = useStyles();

  const [inf, setInf] = useState(false)
  const [message, setMessage] = useState('Przykladowe info')

  const showInfo = (info) => {
    setInf(!inf);
    setMessage(info)
  }

  return (
    <>
      {inf
        ?
        <Popap message={message} />
        :
        <div className={classes.root}>
          <ImageList rowHeight={180} className={classes.imageList}>
            <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
              <ListSubheader component="div">Projects</ListSubheader>
            </ImageListItem>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img src={item.img} alt={item.title} />
                <ImageListItemBar
                  title={item.title}
                  subtitle={<span>by: {item.author}</span>}
                  actionIcon={
                    <IconButton aria-label={`info about ${item.title}`} className={classes.icon} onClick={() => showInfo(item.info)}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      }
    </>
  );
}
export default ProjectsPage;



// function ProjectsPage() {
//   return (
//     <div>
//       <h1>projects page</h1>
//     </div>
//   )
// }

// export default ProjectsPage
