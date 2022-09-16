import { Text } from 'src/components';

const formatDate = (value) => {
  if (!value) {
    return 'Дата';
  }
  const formatDate = new Date(value)
    .toLocaleString('default', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
    .replace(/\./g, '')
    .replace(/\s *г/g, '');
  return formatDate;
};

const numberFormat = (sum) => {
  const correctSum = Number(sum).toFixed(0);
  const number = Number(correctSum).toLocaleString();
  return number;
};

const columns = [
  {
    Header: 'Дата',
    accessor: 'date',
    sort: 'transaction_date',
    Cell: ({ value }) => {
      return (
        <Text weight={400} color="contrast">
          {formatDate(value)}
        </Text>
      );
    },
  },
  {
    Header: 'Категория',
    accessor: 'category',
    sort: 'category',
    Cell: ({ value }) => {
      return (
        <Text weight={400} color="contrast">
          {value}
        </Text>
      );
    },
  },
  {
    Header: 'Сумма',
    accessor: 'amount',
    sort: 'amount',
    Cell: ({ value }) => {
      return (
        <Text weight={400} color="contrast">
          {numberFormat(value)}
        </Text>
      );
    },
  },
  {
    Header: '',
    accessor: 'button',
  },
];

export default columns;
