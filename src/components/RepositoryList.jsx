import React from 'react';
import PropTypes from 'prop-types';
import {Typography, Grid, ListItem, ListItemIcon, ListItemText, List} from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import '../style/style.scss';

export const RepositoryList = ({repository}) => {
  return (
    <Grid className='wrapper-repository' item xs={12} md={6}>
      <Typography className='title' variant="h6">
        Repositories
      </Typography>
      <div>
        <List>
          {repository.length ? repository.map(item =>
            <ListItem>
              <ListItemIcon>
                <FolderIcon/>
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                key={item.id}
              />
            </ListItem>) : null
          }
        </List>
      </div>
    </Grid>
  );
};

RepositoryList.propTypes = {
  repository: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
};
