import { Button, IconButton } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const getHeaders = () => {
  return [
    {
      Header: 'Name',
      id: 'name',
      accessor: 'name',
      sortable: true,
      filterable: true,
      width: '50px',
      paddingTop: '14px',
    },
    {
      Header: 'Phone',
      id: 'phone',
      accessor: 'phone',
      sortable: true,
      filterable: true,
      width: '50px',
      paddingTop: '14px',
    },
    {
      Header: 'Email',
      id: 'email',
      accessor: 'email',
      sortable: true,
      filterable: true,
      width: '50px',
      paddingTop: '14px',
    },
    {
      Header: () => null, // No header
      id: 'button', // It needs an ID
      width: '50px',
      paddingTop: '0',
      accessor: 'button',
      Cell: ({ row }: { row: any }) => (
        <span>
          <Button>Increase header counter</Button>
        </span>
      ),
    },
    {
      Header: () => null, // No header
      id: 'expander', // It needs an ID
      width: '70px',
      paddingTop: '0',
      accessor: 'id',
      textAlign: 'right',
      Cell: ({ row }: { row: any }) => (
        <span>
          <IconButton aria-label="expand">
            {row.isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </span>
      ),
    },
  ];
};

export default getHeaders;
