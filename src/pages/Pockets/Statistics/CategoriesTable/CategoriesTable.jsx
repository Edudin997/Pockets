import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { EmptyList } from 'src/components';
import { getCategoriesPeriod } from 'src/store/slices/categoriesActions';
import { classnames } from 'src/utils';

import { AddNewCategoryModal } from '../../TableModals';

import styles from './CategoriesTable.module.scss';
import CategoriesTableBody from './CategoriesTableBody';
import CategoriesTableHeader from './CategoriesTableHeader';

const CategoriesTable = ({ toDay }) => {
  const [isOpened, setIsOpened] = useState(false);
  const categories = useSelector((state) => state.categories.list);

  const handleOpen = () => setIsOpened(true);
  const handleClose = () => setIsOpened(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesPeriod(toDay));
  }, [dispatch]);

  return (
    <div className={classnames([styles.wrapper, styles.wrapBorder])}>
      <CategoriesTableHeader />
      {!!categories.length ? (
        <CategoriesTableBody />
      ) : (
        <>
          <EmptyList height={267} text="У вас нет ни одной категории" bText="Добавить категорию" onClick={handleOpen} />
          <AddNewCategoryModal isOpened={isOpened} handleClose={handleClose} />
        </>
      )}
    </div>
  );
};

export default CategoriesTable;
