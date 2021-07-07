import React from 'react';
import classNames from 'classnames/bind';
import styles from './Pannel.module.css';

const cx = classNames.bind(styles);

export default function Pannel({ time }) {
  return (
    <div className={cx('wrapper')}>
      <span className={cx('text')}>{time}</span>
    </div>
  );
}
