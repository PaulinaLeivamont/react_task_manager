import Header from "../components/header"
import CustomButton from "../components/custom-button"
import InputText from "../components/input-text"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import useApp from "../context/use-app"

const apiRoot = import.meta.env.VITE_API || 'http://localhost:3000/'

const Login = () => {

    const navigate = useNavigate()
    const {user, updateUser} = useApp()

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({visibility: false, message: ''})

    const handleSubmit = (e) => {
        e.preventDefault()
        setError({visibility: false, message: ''})
        fetch(`${apiRoot}user/login`, {
            method : "POST",
            body : JSON.stringify({name: name, password: password}),
            headers : {
                "Content-type" : "application/json"
            }
        })
        .then((res) => res.json())
        .then((res) => {

            if (res.error) {
                setError({visibility: true, message: 'Usuario no encontrado'})
                updateUser({id: '', name: '', tasks: []})
            }
            else {
                updateUser(res)
                navigate('/dashboard')
            }

        })
        .catch((err) => { })
    }

    useEffect(() => {
        if (user.id !== '') navigate('/dashboard')
    }, [])

    return (
    <>
        <Header>
            <CustomButton 
                onClick={()=> navigate('/')}
                className="info_b"
            >
                Home
                <span className="material-symbols-outlined">
                home
                </span>
            </CustomButton>
        </Header>
        <main className="login">
            <form onSubmit={handleSubmit}>

                <p className="text_l">Log into Task Manager</p>
                <InputText id="name" className={'text_m'} value={name} onInput={(e) => setName(e.target.value)}/>
                <InputText id="password" type="password" className={'text_m'} value={password} onInput={(e) => setPassword(e.target.value)}/>
                <CustomButton className="info_bg action text_m" >
                    Log in
                </CustomButton>

                {   error.visibility && (
                    <p className="error_message">{error.message}</p>
                )}
            </form>
        </main>
    </>
    )
}

export default Login