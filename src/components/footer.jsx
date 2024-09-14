const Footer = ({children, className=''}) => {
    return (
        <footer className={className}>
            <div className="inside">
                {children}
            </div>
        </footer>
    )
}

export default Footer