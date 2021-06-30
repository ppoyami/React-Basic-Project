import React from 'react';

import classNames from 'classnames/bind';
import styles from './Button.module.css';

const cx = classNames.bind(styles);

export default function Button({ text, disabled, ...rest }) {
  return (
    <>
      <button className={cx('button', { disabled })} {...rest}>
        {text}
      </button>
    </>
  );
}
