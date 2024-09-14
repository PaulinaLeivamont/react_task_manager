import { useNavigate } from "react-router-dom"

const Header = ({children, className = ''}) => {

    const navigate = useNavigate()

    return (
        <header className={className}>
            <div className="inside">
                <h3 className="text_l"  onClick={()=>navigate('/')}>
                <span className="material-symbols-outlined">
                    select_check_box
                </span>
                Task manager.</h3>
                <div>{children}</div>
            </div>
        </header>
    )
}

export default Header