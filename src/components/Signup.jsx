
import { useRef, useState } from 'react';
import './Signin.css';

export default function Signup(){
  const formRef = useRef(null)
  const [error, setError] = useState({})
  const [formInputs, setFormInputs] = useState({
    name: '',
    nick: '',
    email: '',
    gender: '',
    password: '',
    passwordAgain: ''
  })
  const handleChange = (event) => {
    setFormInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if(validate()) {
      setTimeout(() => {console.log(formInputs)
      formRef.current.reset()
      setFormInputs({
        name: '',
        nick: '',
        email: '',
        gender: '',
        password: '',
        passwordAgain: ''
      });}, 1000)
    } 
  }
  const validate = () => {
    const newError = {}
    if(formInputs.passwordAgain !== formInputs.password){
      newError.passwordAgain = 'Пароли не совпадают'
      setError(newError)
    } else {
      setError({})
    }
    return Object.keys(newError).length === 0;
  }
  return(
    <>
      <form className='div'
        ref={formRef}
        onSubmit={handleSubmit}
        onChange={handleChange}
      > 
        <h3>Регистрация</h3>
        <p>Имя</p>
        <input 
          required
          type="text"
          name='name'
        />
        <p>Ник</p>
        <input
          type="text"
          name='nick'
        />
        <p>Email</p>
        <input
          required
          type="email"
          name='email'
        />
        <p>Пол</p>
        <div className='secondDiv'>
          <label><input
            type="radio"
            name='gender'
          />Мужской</label>
          <label><input
            type="radio"
            name="gender"
          />Женский</label>
        </div>  
        <p>Пароль</p>
        <input
          required
          type="password"
          name='password'
        />
        <p>Повторить пароль</p>
        <label><input
          required
          type="password"
          name='passwordAgain'
        />{ error.passwordAgain && <span>Пароли не совпадают</span>}</label>
        <button>Отправить</button>
      </form>
    </>
  )
}