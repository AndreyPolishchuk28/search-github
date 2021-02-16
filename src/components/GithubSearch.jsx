import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import { fetchUsers } from '../redux/ducks/user';
import { getUsers } from '../redux/ducks/selectors';
import { RepositoryList } from './RepositoryList';
import '../style/style.scss';

export const GithubSearch = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUsers);

  const [value, setValue] = useState('');

  const handleClick = () => {
    setTimeout(() => {
      dispatch(fetchUsers(value))
    },2000)
  };

  return (
    <>
      <div className='container'>
        <TextField
          id="outlined-basic"
          label="NickName"
          value={value}
          variant="outlined"
          onChange={e => setValue(e.target.value)}
          className='container__field'
        />
        <Button className='container__field' variant="outlined" color="primary" onClick={handleClick}>Search</Button>
      </div>
      <RepositoryList repository={user}/>
    </>
  );
};
