import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import getConfig from 'next/config'
import TextFlip from '../molecule/text-flip'

const BannerHero: React.FC<Props> = ({ className }: Props) => {

  const { publicRuntimeConfig } = getConfig()

  return (
    <div className={className}>
      <Row>
        <Col lg={10} className="mx-auto">
          <Row className="align-items-center">
            <Col md={6} className="position-relative">
              <TextFlip label="REACT & BOOTSTRAP5 VERSION" className="start-n100px" />
              <Image src="marcumali.jpg" width={529} height={486} alt={publicRuntimeConfig.APP_NAME} fluid />
            </Col>
            <Col md={6}>
              <div className="text-white text-center text-md-start">
                <div className="fs-20px fw-300">UIX Designer /</div>
                <div className="fs-40px fs-lg-60px fw-800 text-primary mt-n15px">FRONTEND</div>
                <div className="fs-40px fs-lg-60px fw-500 fst-italic mt-n20px mt-lg-n30px mb-5">Developer</div>
                <p>IN MANILA, PHILIPPINES</p>
                <p>Professional web design and front-end development balances the beauty and function, something I do best. So if you need a front–end web developer in the Philippines or Manila, you’ve come to the right person.</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

interface Props {
	className?: string
}

BannerHero.defaultProps = {
	className: '',
}

export default BannerHero
