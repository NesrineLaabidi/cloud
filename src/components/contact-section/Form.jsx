import React from 'react'
import { Icon } from '@iconify/react'
import sendCircle from '@iconify/icons-mdi/send-circle'

import './form.css'

const formInputs = [
  { id: 'name', type: 'text', label: 'Your name', placeholder: 'Your Name' },
  {
    id: 'tel',
    type: 'tel',
    label: 'Phone number',
    placeholder: 'Enter Your Phone Number',
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email address',
    placeholder: 'Enter Your Email',
  },
  {
    id: 'message',
    type: 'textarea',
    label: 'Your message',
    placeholder: 'Message',
  },
]

const Form = () => (
  <form className="form">
    <h2 className="form-h2">Send us a message</h2>

    {formInputs.map(input => (
      <label key={input.label} id={input.id} className="form-label">
        {input.label}

        {input.type === 'textarea' ? (
          <textarea className="form-textarea" placeholder={input.placeholder} />
        ) : (
          <input
            className="form-input"
            type={input.type}
            placeholder={input.placeholder}
          />
        )}
      </label>
    ))}

    <Icon className="form-submit" icon={sendCircle} />

    {/* <button className="form-submit" type="submit">
      Send message
    </button> */}
  </form>
)

export default Form
