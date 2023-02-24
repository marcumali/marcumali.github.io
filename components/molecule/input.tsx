import React from 'react'
import Form from 'react-bootstrap/Form'

const Input: React.FC<Props> = ({ className, label, name, type }: Props) => {
  return (
    <div className={ "mb-3 " + className }>
      <Form.Group>
        <Form.Label for={name} className="text-gray-5">{label}</Form.Label>
        <Form.Control type={type} name={name} required></Form.Control>
      </Form.Group>
    </div>
  )
}

interface Props {
	className?: string
  label?: string
  name?: string
  type?: string
}

Input.defaultProps = {
	className: '',
  type: 'text',
}

export default Input
