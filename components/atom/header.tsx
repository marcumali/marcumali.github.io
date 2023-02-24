import Head from 'next/head'
import getConfig from 'next/config'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { Icon } from '@iconify/react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MenuItems from '@/data/menu-items.json'

const Header: React.FC<Props> = ({ title, name, content }: Props) => {
  
  const { publicRuntimeConfig } = getConfig()

  return (
    <div>
      <Head>
        <title>{publicRuntimeConfig.APP_NAME} | {title}</title>
        <meta name={name} content={content} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="position-fixed w-100 top-0 start-0 bg-black z-index-1020">
        <Navbar bg="black">
          <Container className="justify-content-between align-items-center">
            <Navbar.Brand href="/">
              <Image src="logo.png" className="w-40px h-auto" alt="Marc Umali" width={150} height={149} />
            </Navbar.Brand>
            <Nav>
              { MenuItems && MenuItems.map( (item: any, index: number) => (
                <Nav.Link key={item.id} className="d-flex me-1 me-sm-3 me-md-5 text-white" onClick={ () => { const element = document.getElementById('section-' + index ); (element && element.scrollIntoView({ behavior: 'smooth' }) ) } }>
                  <div>
                    <Icon icon={ "lucide:" + item.icon } className="fs-20px me-2" />
                  </div>
                  <div className="d-none d-md-block">{item.label}</div> 
                </Nav.Link>
              ))}
              <a className="btn btn-light" download href="cv-janmarcquianoumali.pdf">
                <div className="d-none d-md-block">Curriculum Vitae</div>
                <div className="d-md-none">CV</div>
              </a>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className="h-62px"></div>
    </div>
  )
}

interface Props {
	title?: string
  name?: string
  content?: string
}

Header.defaultProps = {
	title: 'Home',
  name: '',
  content: ''
}

export default Header
