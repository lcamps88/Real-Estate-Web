import PropTypes from 'prop-types'

const CustomButton = ({
  children,
  isDisabled,
  btnType,
  handleClick,
  ...otherProps
}) => {
  return (
    <button
      disabled={isDisabled}
      type={btnType || 'button'}
      onClick={handleClick}
      {...otherProps}
    >
      {children}
    </button>
  )
}

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  btnType: PropTypes.string,
}

CustomButton.displayName = 'CustomButton'

export default CustomButton
