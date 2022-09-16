import { MainPagesLayout } from 'src/layouts';

import Operations from './Operations';
import Statistics from './Statistics';

const PocketsPage = () => {
  return (
    <MainPagesLayout pageName="Операции" leftColumnChildren={<Statistics />} rightColumnChildren={<Operations />} />
  );
};

export default PocketsPage;
