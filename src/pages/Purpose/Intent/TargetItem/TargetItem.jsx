import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ChartFinish } from 'src/assets/icons';
import { Box, Button, Text } from 'src/components';
import { closedTarget } from 'src/store/slices/targetsActions';

import { FinishTargetModal } from '../../IntentModal';

import ProgressBar from './ProgressBar';
import styles from './TargetItem.module.scss';
import TargetItemEdit from './TargetItemEdit';
import Terms from './Terms/Terms';

const TargetItem = ({ props }) => {
  const [isOpened, setIsOpened] = useState(false);
  const handleClose = () => {
    dispatch(closedTarget({ data: { is_closed: true }, targetId: props.id, callback: handleClose }));
    setIsOpened(false);
  };

  const remSum = props.amount - props.initial_deposit;
  const numberView = (sum) => {
    const correctSum = Number(sum).toFixed(0);
    const number = Number(correctSum).toLocaleString();
    return number;
  };

  const numberFormat = (sum) => {
    const number = Number(sum).toFixed(0);
    return number;
  };

  const sumPercent = Math.floor((numberFormat(props.initial_deposit) / numberFormat(props.amount)) * 100);
  let bgColor = [];
  let textColor;

  if (sumPercent < 25) {
    bgColor = ['#F9F023', '#333'];
    textColor = 'warning';
  } else if (sumPercent > 25 && sumPercent < 75) {
    bgColor = ['#FF9F43', '#333'];
    textColor = 'defect';
  } else {
    bgColor = ['#28C76F', '#333'];
    textColor = 'success';
  }

  const dispatch = useDispatch();

  const openModal = () => {
    setIsOpened(true);
  };

  return (
    <>
      <div className={styles.item}>
        {!props.is_closed ? <TargetItemEdit props={props} /> : ''}
        <Box mb={24}>
          <div className={styles.item__header}>
            <div className={styles.percent}>
              {!(props.initial_deposit >= props.amount) ? (
                <>
                  <ProgressBar sumStart={props.total_amount} sumEnd={remSum} bgColor={bgColor} />
                  <div className={styles.chart}>
                    <Text weight={700} size="xs" color={textColor}>
                      {sumPercent + ' %'}
                    </Text>
                  </div>
                </>
              ) : (
                <ChartFinish fill={props.is_closed ? '#8B8C8E' : '#28C76F'} />
              )}
            </div>
            <div className={styles.name}>
              <Text size="s" color="default">
                {String(props.name)}
              </Text>
              <div className={styles.amount}>
                <Text weight={700} size="m" color={!props.is_closed ? 'contrast' : 'default'}>
                  {String(numberView(props.total_amount))}
                </Text>
                <Box ml={6} mr={5}>
                  <Text size="m" color="primary">
                    /
                  </Text>
                </Box>
                <Text size="m" color="primary">
                  {String(numberView(props.amount))}
                </Text>
              </div>
            </div>
          </div>
        </Box>
        <Box mb={20}>
          <Terms text={'В текущем месяце'} number={numberFormat(props.current_month_amount)} />
        </Box>
        <Box mb={20}>
          <Terms text={'Ставка'} number={String(numberView(props.percent)) + ' %'} />
        </Box>
        <Box mb={24}>
          <Terms text={'Осталось дней'} number={numberFormat(props.days_to_end)} />
        </Box>
        <div className={`${styles.button} ${props.is_closed ? styles.closed : ''}`}>
          <Button
            width={208}
            height={56}
            radius={1000}
            variant={!props.is_closed ? (props.initial_deposit >= props.amount ? 'success' : 'brand') : 'closed'}
            onClick={props.initial_deposit >= props.amount && !props.is_closed ? openModal : ''}
          >
            <Text weight={500} color={!props.is_closed ? 'contrast' : 'default'} align="center" size="xl">
              {!props.is_closed ? (props.initial_deposit >= props.amount ? 'Завершить' : 'Пополнить') : 'Завершена'}
            </Text>
          </Button>
        </div>
      </div>
      <FinishTargetModal name={props.name} isOpened={isOpened} handleClose={handleClose} />
    </>
  );
};

export default TargetItem;
