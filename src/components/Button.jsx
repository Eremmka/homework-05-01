import { useState } from 'react'
import './style/Button.css'

export default function Button() {
  const [config, setConfig] = useState({
    fullName: 'button',
    label: 'Full name',
    description: 'Description',
    error: '',
    variant: 'default',
    radius: 1,
    size: 2,
    withAsterisk: false
  });
  const handleChange = (e) => {
    const {name, value, type, checked} =  e.target
    setConfig(prevState => ({
      ...prevState,
      [name]: type === 'checkbox'? checked : value
    }))
  }
  const variants = {
    default: '',
    filled: 'input-filled',
    unstyled: 'input-unstyled'
  };
  return(
    <div className='divFirst'>
      <div className='divSecond' aria-readonly>
        <div className='divFour'>
          <label>{config.label}{config.withAsterisk && <span className='asteriskSecond'>*</span>}</label>
          <button type="button"
            style={ config.size && {
              width: `calc(${config.size} * 5rem)`,
              height: `calc(${config.size} * 1rem)`,
              borderRadius: `calc(${config.radius} * 0.5rem)`
            }}
            className={`inputField ${variants[config.variant]}`}
            disabled={config.disabled}
          >{config.fullName}</button>
          { config.description && <div className='descriptionSecond'>{config.description}</div>}
          { config.error && <div className='errorSecond'>{config.error}</div>}
        </div>
      </div>
      <div className='divThree'>
        <form>
          <div>
            <label>Placeholder</label>
            <input type="text" placeholder='Your name' onChange={handleChange} name='fullName'/>
          </div>
          <div>
            <label>Label</label>
            <input type="text" placeholder='Full name' onChange={handleChange} name='label'/>
          </div>
          <div>
            <label>Description</label>
            <input type="text" placeholder='Description' onChange={handleChange} name='description'/>
          </div>
          <div>
            <label>Error</label>
            <input type="text" placeholder='error' onChange={handleChange} name='error'/>
          </div>
          <div>
            <label>Variant</label>
            <select name="variant" value={config.variant} onChange={handleChange}>
            <option value="default">default</option>
            <option value="filled">filled</option>
            <option value="unstyled">unstyled</option>
          </select>
          </div>
          <div>
            <label>Radius</label>
            <input type='range' name='radius' max={4} min={1} value={config.radius} onChange={handleChange}/>
          </div>
          <div>
            <label>Input size</label>
            <input type='range' name='size' max={4} min={1} value={config.size} onChange={handleChange}/>
          </div>
          <div>
            <label>Disabled</label>
            <input type="checkbox" name='disabled' checked={config.disabled} onChange={handleChange}/>
          </div>
          <div>
            <label>Asterisk</label>
            <input type="checkbox" name='withAsterisk' checked={config.withAsterisk} onChange={handleChange}/>
          </div>
        </form>
      </div>
    </div>
  )
}