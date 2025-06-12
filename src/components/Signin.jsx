
import { useRef, useState } from 'react';
import styles from './style/SigninSignupForm.module.css'

export default function Signin (){
  const formRef = useRef(null)
  const [formInputs, setFormInputs] = useState({
    email: '',
    password: '',
  })
  const handleChange = (event) => {
    setFormInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formInputs)
    formRef.current.reset()
    setFormInputs({
      email: '',
      password: '',
    });
  }
  return(
    <div>
      <form className={styles.div}
        ref={formRef}
        onSubmit={handleSubmit}
        onChange={handleChange}
      > 
        <h3>Вход</h3>
        <p>Email</p>
        <input
          required
          type="email"
          name='email'
        />
        <p>Пароль</p>
        <input
          required
          type="password"
          name='password'
        />
        <button>Войти</button>
      </form>
    </div>
  )
}