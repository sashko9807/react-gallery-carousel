import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import styles from './Buttons.module.css';

export const ArrowButtons = memo((props) => {
  if (props.disabled) return null;

  const leftButton = !props.isLeftDisabled && (
    <div className={styles.buttonWrapper + ' ' + styles.centerLeft}>
      <IconButton
        name='left'
        label={props.rtl ? 'Next Slide' : 'Previous Slide'}
        clickCallback={props.onClickLeft}
      />
    </div>
  );

  const rightButton = !props.isRightDisabled && (
    <div className={styles.buttonWrapper + ' ' + styles.centerRight}>
      <IconButton
        name='right'
        label={props.rtl ? 'Previous Slide' : 'Next Slide'}
        clickCallback={props.onClickRight}
      />
    </div>
  );

  return (
    <Fragment>
      {leftButton}
      {rightButton}
    </Fragment>
  );
});

ArrowButtons.propTypes = {
  disabled: PropTypes.bool,
  rtl: PropTypes.bool,
  isLeftDisabled: PropTypes.bool,
  isRightDisabled: PropTypes.bool,
  onClickLeft: PropTypes.func.isRequired,
  onClickRight: PropTypes.func.isRequired
};

export const MediaButtons = memo((props) => {
  if (props.disabled) return null;

  return (
    <div className={styles.buttonWrapper + ' ' + styles.topLeft}>
      <IconButton
        name={props.isPlaying ? 'pause' : 'play'}
        label={props.isPlaying ? 'Pause Autoplay' : 'Start Autoplay'}
        clickCallback={props.clickCallback}
      />
    </div>
  );
});

MediaButtons.propTypes = {
  disabled: PropTypes.bool,
  isPlaying: PropTypes.bool.isRequired,
  clickCallback: PropTypes.func.isRequired
};

export const SizeButtons = memo((props) => {
  if (props.disabled) return null;

  return (
    <div className={styles.buttonWrapper + ' ' + styles.topRight}>
      <IconButton
        name={props.isMaximized ? 'minimize' : 'maximize'}
        label={props.isMaximized ? 'Minimize Slides' : 'Maximize Slides'}
        clickCallback={props.clickCallback}
      />
    </div>
  );
});

SizeButtons.propTypes = {
  disabled: PropTypes.bool,
  isMaximized: PropTypes.bool.isRequired,
  clickCallback: PropTypes.func.isRequired
};

export const IndicatorButtons = memo((props) => {
  if (props.disabled) return null;
  const callbacks = props.callbacks;

  return (
    <div className={styles.buttonWrapper + ' ' + styles.bottomCenter}>
      <div className={styles.buttonContainer}>
        {Object.keys(callbacks).map((key, index) => (
          <IconButton
            key={index}
            name={Number(key) === props.curIndex ? 'circleLight' : 'circle'}
            label={
              Number(key) === props.curIndex
                ? `Stay on Slide Number ${index + 1}`
                : `Go to Slide Number ${index + 1}`
            }
            clickCallback={callbacks[key]}
          />
        ))}
      </div>
    </div>
  );
});

IndicatorButtons.propTypes = {
  disabled: PropTypes.bool,
  curIndex: PropTypes.number.isRequired,
  callbacks: PropTypes.shape(PropTypes.function).isRequired
};
