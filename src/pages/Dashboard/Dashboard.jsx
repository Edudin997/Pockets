import { Link } from 'src/components';
import { MainPagesLayout } from 'src/layouts';

import PATHNAMES from '../../consts/pathnames';

const Dashboard = () => {
  return (
    <MainPagesLayout
      pageName="Дашбоард"
      leftColumnChildren={
        <Link to={PATHNAMES.pockets} textSize="m">
          Операции
        </Link>
      }
      rightColumnChildren={
        <Link to={PATHNAMES.purpose} textSize="m">
          Цели
        </Link>
      }
    />
  );
};

export default Dashboard;
