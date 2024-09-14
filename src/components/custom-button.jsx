const CustomButton = ({
        children,
        className='', 
        onClick=()=>{},
    }) => {
    
    return (
        <button 
            className={`custom_button ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default CustomButton