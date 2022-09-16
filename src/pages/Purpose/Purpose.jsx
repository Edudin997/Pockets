import { MainPagesLayout } from 'src/layouts';

import Analytics from './Analytics';
import Intent from './Intent';

const Dashboard = () => {
  return <MainPagesLayout pageName="Цели" leftColumnChildren={<Analytics />} rightColumnChildren={<Intent />} />;
};

export default Dashboard;
