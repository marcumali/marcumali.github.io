import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Swiper, SwiperSlide } from 'swiper/react';
import DataProjects from '@/data/projects.json'
import { Icon } from '@iconify/react'

const ContentProjects: React.FC<Props> = ({ className }: Props) => {

  return (
    <Row className={className}>
      <Col lg={4} className="px-7 px-lg-0">
        <div className="bg-white rounded-8px box-shadow-1 px-5 py-5 py-lg-10 position-relative overflow-hidden transform-rotate-n10deg z-index-1010 start-lg-40px">
          <div className="bg-gray-2 position-absolute h-100 w-70px top-0 start-0"></div>
          <div className="bg-primary w-25px h-25px position-absolute top-0 end-0 rounded-circle d-flex align-items-center justify-content-center mt-3 me-3">
            <div className="w-15px h-15px rounded-circle bg-black"></div>
          </div>
          <div className="position-relative z-index-1010 d-md-flex d-lg-block align-items-end">
            <div className="text-uppercase fs-30px fs-lg-40px fw-800 w-220px lh-1 me-5 me-lg-0">Checkout my works online</div>
            <div>
              <div className="fs-30px fw-500 fst-italic text-gray-3 mb-3">With the team</div>
              Your website is a must-have in today's connected world. That's where I come in.
            </div>
            
          </div>
        </div>
      </Col> 
      <Col lg={8} className="px-0 d-flex align-items-center pt-sm-5">
        <Swiper
          spaceBetween={0}
          slidesPerView={1.2}
          className="ps-lg-10 pe-4 mt-10 mt-lg-0"
          wrapperClass="h-300px"
          breakpoints={{
            768: {
              slidesPerView: 2.5,
            },
            992: {
              slidesPerView: 1.5,
            },
            1200: {
              slidesPerView: 2.3,
            },
            1400: {
              slidesPerView: 2.5,
            },
          }}
        >
          { DataProjects && DataProjects.map( ( item:any, index:number ) => (
            <SwiperSlide key={item.id}>
              {({ isActive }) => (
              <div className="px-3 cursor-grab position-relative h-100 d-flex align-items-center">
                { index === 0 && 
                  <div className="position-absolute top-0 bg-white box-shadow-1 px-3 py-2 rounded-8px d-flex align-items-center">
                    <Icon icon="lucide:glasses" className="fs-22px me-2" />
                    <div>{ "I'm Here" }</div>
                    <div className="caret-down position-absolute bottom-n7px"></div>
                  </div>
                }
                <div className="d-flex rounded-10px overflow-hidden box-shadow-1 w-100">
                  <div className={ "w-100 d-flex flex-column p-3 transition-all-3s " + (isActive ? 'bg-black text-white' : 'bg-white') }>
                    <div className={"fw-800 fs-24px lh-1 transition-all-3s " + (isActive && 'text-primary') }>{item.name}</div>
                    <div className="fst-italic fs-12px mb-auto">Company</div>
                    <div className="fw-600">{item.date}</div>
                    <div className="fst-italic fs-12px">Experience</div>
                  </div>
                  <div className="w-150px">
                    <div className={ "text-center d-flex flex-column align-items-center justify-content-center transition-all-3s " + (isActive ? 'bg-primary text-white h-200px' : 'bg-gray-2 h-170px' ) }>
                      <div className="fw-800 fs-30px lh-1">{item.activeSite}</div>
                      <div className="fs-12px lh-sm w-60px mx-auto">Active Website</div>
                    </div>
                  </div>
                </div>
              </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </Col>
    </Row>
  )
}

interface Props {
	className?: string
}

ContentProjects.defaultProps = {
	className: '',
}

export default ContentProjects
