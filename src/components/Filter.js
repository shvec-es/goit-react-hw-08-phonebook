import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter } from 'redux/contacts/contacts-actions';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { Box, TextField, Typography } from '@mui/material';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e => dispatch(changeFilter(e.target.value));

  return (
    <Box component="div" sx={{ width: '350px', m: '0 auto 15px' }}>
      <Typography variant="h6" color="secondary" sx={{ textAlign: 'center' }}>
        Find contacts by name
      </Typography>
      <TextField
        size="small"
        margin="dense"
        fullWidth
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
        autoComplete="off"
      />
    </Box>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
};

export default Filter;
