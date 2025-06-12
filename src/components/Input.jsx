import { useState } from 'react'
import './style/Input.css'

export default function Input() {
  const [config, setConfig] = useState({
    fullName: '',
    placeholder: 'Your name',
    label: 'Full name',
    description: 'Description',
    error: '',
    variant: 'default',
    radius: 1,
    size: 2,
    disabled: false,
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
    <div className='firstDiv'>
      <div className='secondDiv' aria-readonly>
        <div className='fourDiv'>
          <label>{config.label}{config.withAsterisk && <span className='asterisk'>*</span>}</label>
          <input type="text"
            style={{
              width: `calc(${config.size} * 5rem)`,
              height: `calc(${config.size} * 0.5rem)`,
              borderRadius: `calc(${config.radius} * 4px)`
            }}
            className={`inputField ${variants[config.variant]}`}
            placeholder={config.placeholder}
            value={config.fullName}
            disabled={config.disabled}
          />
          { config.description && <div className='description'>{config.description}</div>}
          { config.error && <div className='error'>{config.error}</div>}
        </div>
      </div>
      <div className='threeDiv'>
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