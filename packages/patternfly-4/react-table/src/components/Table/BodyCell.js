import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Table/table.css';

const BodyCell = ({
  'data-label': dataLabel,
  className,
  colSpan,
  component: Component,
  isVisible,
  parentId,
  textCenter,
  ...props
}) => {
  const mappedProps = {
    ...(dataLabel ? { 'data-label': dataLabel } : {}),
    ...props
  };
  return (parentId !== undefined && colSpan === undefined) || !isVisible ? null : (
    <Component {...mappedProps} className={css(className, textCenter && styles.modifiers.center)} colSpan={colSpan} />
  );
};

BodyCell.propTypes = {
  'data-label': PropTypes.string,
  className: PropTypes.string,
  colSpan: PropTypes.number,
  component: PropTypes.node,
  isVisible: PropTypes.bool,
  parentId: PropTypes.number,
  textCenter: PropTypes.bool
};

BodyCell.defaultProps = {
  'data-label': '',
  className: undefined,
  colSpan: undefined,
  component: 'td',
  isVisible: undefined,
  parentId: undefined,
  textCenter: false
};

export default BodyCell;
