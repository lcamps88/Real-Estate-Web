const Container = ({ children, customStyle, ...otherProps }) => {
    return (
      <div
        className={`w-full mx-auto min-h-[3.75rem] ${customStyle}`}
        {...otherProps}
      >
        {children}
      </div>
    )
  }
  
  export default Container