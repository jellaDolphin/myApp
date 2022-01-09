import GroupRounded from '@mui/icons-material/GroupRounded';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
const svgColor = '#A7A7A7';
const MenuItems = [
  {
    id: 1,
    name: 'User list',
    icon: <GroupRounded htmlColor={svgColor} />,
    url: '/user-list',
  },
  {
    id: 2,
    name: 'Family Tree',
    icon: <FamilyRestroomIcon htmlColor={svgColor} />,
    url: '/family-tree',
  },
];
export default function Menu() {
  return (
    <List>
      {(MenuItems || []).map(({ name, id, icon, url }) => {
        return (
          <ListItem button key={`${name} -  ${id}`} component={Link} to={url}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        );
      })}
    </List>
  );
}
