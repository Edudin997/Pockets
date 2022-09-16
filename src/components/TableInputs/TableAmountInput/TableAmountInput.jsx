import TableDefaultInput from '../TableDefaultInput';

const TableAmountInput = ({ textAlign, isError, value, placeholder, maxLength, extraClasses, onError, onChange }) => {
  const handleOnChange = (event) => {
    const value = event.target.value;
    if (!value) onChange(event);
    if (!value.match(/^[0-9]{1}[0-9.]{0,10}$/)) return;
    if (value[0] === '0') {
      if (value.length > 1 && value[1] !== '.') return;
    }
    if (value.length === 9 && value[8] !== '.') return;
    if (value.includes('.')) {
      if (!value.match(/^[0-9]{0,8}\.{1}[0-9]{0,2}$/)) return;
    }
    onChange(event);
  };

  return (
    <TableDefaultInput
      textAlign={textAlign}
      isError={isError}
      value={value.toString()}
      placeholder={placeholder}
      maxLength={maxLength}
      extraClasses={extraClasses}
      onChange={handleOnChange}
    />
  );
};

export default TableAmountInput;
