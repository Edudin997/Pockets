import TableItemButtons from '../TableItemButtons';

const processServerDataIntoTableData = (serverData) => {
  return serverData.map((item) => {
    return {
      date: item.transaction_date,
      category: item.category?.name || 'Доход',
      amount: item.amount,
      button: <TableItemButtons key={item.id} item={item} />,
    };
  });
};

export default processServerDataIntoTableData;
