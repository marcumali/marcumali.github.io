import React, {useState} from 'react'
import { Row, Col, Button, Form, Alert } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
import {Icon} from '@iconify/react'
import Input from '../molecule/input';
import SocialItems from '@/data/social-items.json'

const ContentContact: React.FC<Props> = ({ className }: Props) => {

  const [ successMessage, showSuccessMessage ] = useState(false)

  const Result = () => {
    return (
      <Alert variant="success">Your message has been sent successfully.</Alert>
    )
  }
  const sendEmail = (e:any) => {
    e.preventDefault();
    emailjs.sendForm('service_x16fqxi', 'template_c1j6pcp', e.target, '-WwzC53qFtjyCjpgS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showSuccessMessage(true)
  };  

  return (
    <Row>
      <Col lg={6} className="align-items-center d-flex justify-content-center">
        <div className="px-3 py-10 py-lg-0">
          <div className="fs-24px">Say something about me</div>
          <div>Any question or remarks? Just write me a message</div>
          <form onSubmit={sendEmail} className="mt-5">
            { successMessage && <Result /> }
            <Input label="Your Name" name="from_name" />
            <Input label="Your Email" name="user_email" type="email" />
            <Form.Group className="mb-3">
              <Form.Label for="message" className="text-gray-5">Your Message</Form.Label>
              <Form.Control as="textarea" name="message" required></Form.Control>
            </Form.Group>
            <Button type="submit" variant="dark">Send</Button>
          </form>
        </div>
      </Col>
      <Col lg={6} className="bg-white">
        <div className="w-80p mx-auto py-10">
          <Row className="align-items-center">
            <div className="text-center mb-5">
              <div className="fs-24px">You want to go deeper?</div>
              <div>Keep up on my latest activity, come by and connect with me on my social media below</div>
            </div>
            { SocialItems && SocialItems.map( (item: any, index: number) => (
              <Col xs={6} className="mb-4" key={item.id}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <div className={ "box-shadow-1 text-center d-flex align-items-center justify-content-center h-150px rounded-10px " + ( index === 0 ? 'bg-primary text-white' : 'bg-white' ) }>
                    <div>
                      <Icon icon={`${item.icon}`} className="fs-50px" />
                      <div>{item.label}</div>
                    </div>
                  </div>
                </a>
              </Col>
            ))}
          </Row>
          </div>
      </Col>
    </Row>
  )
}

interface Props {
	className?: string
}

ContentContact.defaultProps = {
	className: '',
}

export default ContentContact
