import React, {useState} from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import Divider from '../molecule/divider';
import SliderVertical from './slider-vertical';
import DataSliderWho from '@/data/slider-who.json'
import DataSliderWhat from '@/data/slider-what.json'
import TextFlip from '../molecule/text-flip';

const ContentABout: React.FC<Props> = ({ className }: Props) => {

  const [ show, setShow ] = useState(false)

  return (
    <div className={className}>    
      <Row>
        <Col lg={10} className="mx-auto">
          <Row className="align-items-center">
            <Col lg={6} className="position-relative">
              <TextFlip label="WORKSPACE 2.0" className="start-n30px"/>
              <Image src="workspace.jpg" alt="Marc Umali" width={771} height={593} fluid/>
            </Col>
            <Col lg={6}>
              <div className="text-center text-white maxw-490px mx-auto px-5 px-md-0">
                <div className="text-primary fs-26px fw-800 mb-3">ABOUT ME</div>
                <div>Allow me to introduce myself. I'm Marc Umali, a professional front-end developer and UIX designer based in Manila, Philippines.</div>
                <Divider className="bg-white mx-auto mt-3 mb-5" />
                { show ?
                  <SliderVertical contentList={DataSliderWhat} onClick={ () => setShow(false) } btnLabel="Who I Am?" /> :
                  <SliderVertical contentList={DataSliderWho} onClick={ () => setShow(true) } btnLabel="What I can do?" />
                }
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

ContentABout.defaultProps = {
	className: '',
}

export default ContentABout
