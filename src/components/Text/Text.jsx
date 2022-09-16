import { classnames } from 'src/utils';
import { getDefaultTextColor, getDefaultTextWeight } from 'src/utils/Text';

import styles from './Text.module.scss';

const Text = ({ as: Wrapper = 'p', color, weight, size, lh, children, align = 'left' }) => {
  if (typeof children !== 'string') {
    throw new Error('Text component accepts only string children');
  }

  if (!['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'].includes(Wrapper)) {
    throw new Error('Text component accepts only h1-h6 and p tags');
  }

  const textColor = color ? color : getDefaultTextColor(Wrapper);
  const textWeight = weight ? weight : getDefaultTextWeight(Wrapper);
  const textSize = size;
  const lineHeight = lh;

  return (
    <Wrapper
      className={classnames([
        styles[`color__${textColor}`],
        styles[`weight__${textWeight}`],
        [styles[`size__${textSize}`], !!size],
        styles[`lh__${lineHeight}`],
        styles[`align__${align}`],
      ])}
    >
      {children}
    </Wrapper>
  );
};

export default Text;
