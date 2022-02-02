import React from 'react';
import PropTypes from 'prop-types';
import { TailSpin } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { toast } from 'react-toastify';
import { getLoadingForDelete } from 'redux/contacts/contacts-selectors';
import { Button, TableCell, TableRow, Typography } from '@mui/material';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

const ContactListItem = ({ id, name, number }) => {
  const loadingForDelete = useSelector(getLoadingForDelete);
  const dispatch = useDispatch();

  const onDeleteItem = id => {
    dispatch(deleteContact(id));
    toast.success('Contact deleted successfully!');
  };

  return (
    <>
      <TableRow>
        <TableCell>
          <Typography variant="subtitle2" component="p">
            {name}:
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body2" component="p">
            {number}
          </Typography>
        </TableCell>
        <TableCell>
          <Button
            color="secondary"
            variant="contained"
            type="button"
            onClick={() => onDeleteItem(id)}
          >
            {loadingForDelete ? (
              <TailSpin
                color="#00BFFF"
                height="18"
                width="18"
                wrapperStyle={{
                  display: 'inline',
                  marginRight: '10px',
                }}
              />
            ) : (
              <PersonRemoveIcon sx={{ mr: '5px' }} />
            )}
            Delete
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

ContactListItem.propTypes = {
  contacs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactListItem;
