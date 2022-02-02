import { useSelector } from 'react-redux';
import ContactListItem from './ContactListItem';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { TableContainer, Paper, Table, TableBody } from '@mui/material';

const ContactList = () => {
  const items = useSelector(getFilteredContacts);

  return (
    <TableContainer component={Paper} sx={{ width: '500px', m: '0 auto' }}>
      <Table>
        <TableBody>
          {items.map(item => (
            <ContactListItem key={item.id} {...item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactList;
