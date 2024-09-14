const InputText = ({className='', value='', disable=false, onInput=()=>{}, id = '', type = 'text'}) => {
    return (
        <input id={id} type={type} className={`${className} ${disable ? 'input_disable' : ''}`} value={value} disabled={disable} onInput={onInput}/>
    )
}

export default InputText