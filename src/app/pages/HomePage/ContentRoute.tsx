import { Switch, Route, Redirect } from 'react-router-dom';
import { User } from '../User/Loadable';
import { FamilyTree } from '../FamilyTree/Loadable';

const ContentRoutes = () => {
  return (
    <Switch>
      <Route exact path="/user-list" component={User} />
      <Route exact path="/family-tree" component={FamilyTree} />
      <Redirect to="/" />
    </Switch>
  );
};

export default ContentRoutes;
