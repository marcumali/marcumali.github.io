import React from 'react'
import { Image } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import Skills from '@/data/skills.json'

const ContentJourney: React.FC<Props> = ({ className }: Props) => {

  return (
    <div className={className}>
      <div className="text-center">
        <div className="fs-24px fw-600">{new Date(new Date().valueOf() - new Date(2023).valueOf()).getFullYear() - 2013} Year Work Anniversary</div>
        <div>A short story of What I've Learnt and What I'm still learning for all these years</div>
      </div>
        <Swiper
          spaceBetween={0}
          slidesPerView={1.4}
          className="px-5"
          breakpoints={{
            580: {
              slidesPerView: 3.4,
            },
            768: {
              slidesPerView: 4.4,
            },
            992: {
              slidesPerView: 5.4,
            },
            1200: {
              slidesPerView: 6.4,
            },
            1400: {
              slidesPerView: 7.4,
            },
          }}
        >
          { Skills?.map( (item: any, index: number) => (
            <SwiperSlide key={item.id}>
              <div className="text-center py-8 cursor-grab">
                <div>
                  { index === 0 ? 
                    <div className="bg-gray-2 w-100 h-30px rounded-10px d-flex align-items-center justify-content-center mb-5 fs-13px">Js Library</div> : 
                    index === 7 ?
                    <div className="bg-gray-2 w-100 h-30px rounded-10px d-flex align-items-center justify-content-center mb-5 fs-13px">CSS Framework</div>
                    : 
                    index === 11 ?
                    <div className="bg-gray-2 w-100 h-30px rounded-10px d-flex align-items-center justify-content-center mb-5 fs-13px">CMS</div>
                    : 
                    index === 15 ?
                    <div className="bg-gray-2 w-100 h-30px rounded-10px d-flex align-items-center justify-content-center mb-5 fs-13px">Testing Cloud</div>
                    : 
                    index === 17 ?
                    <div className="bg-gray-2 w-100 h-30px rounded-10px d-flex align-items-center justify-content-center mb-5 fs-13px">Task Runner</div>
                    : 
                    index === 20 ?
                    <div className="bg-gray-2 w-100 h-30px rounded-10px d-flex align-items-center justify-content-center mb-5 fs-13px">Design Tools</div>
                    : 
                    index === 23 ?
                    <div className="bg-gray-2 w-100 h-30px rounded-10px d-flex align-items-center justify-content-center mb-5 fs-13px">Server/Container</div>
                    : 
                    index === 25 ?
                    <div className="bg-gray-2 w-100 h-30px rounded-10px d-flex align-items-center justify-content-center mb-5 fs-13px">Version Control</div>
                    : 
                    index === 29 ?
                    <div className="bg-gray-2 w-100 h-30px rounded-10px d-flex align-items-center justify-content-center mb-5 fs-13px">Project Management</div>
                    : 
                    index === 34 ?
                    <div className="bg-gray-2 w-100 h-30px rounded-10px d-flex align-items-center justify-content-center mb-5 fs-13px">Team Chat</div>
                    : 
                    index === 39 ?
                    <div className="bg-gray-2 w-100 h-30px rounded-10px d-flex align-items-center justify-content-center mb-5 fs-13px">Text Editor</div>
                    : 
                    index === 43 ?
                    <div className="bg-gray-2 w-100 h-30px rounded-10px d-flex align-items-center justify-content-center mb-5 fs-13px">Others</div>
                    : 
                    <div className="h-30px mb-5 d-flex align-items-center position-relative">
                      <div className="w-10px h-10px rounded-circle position-absolute top-0 bottom-0 start-0 end-0 m-auto bg-gray-2"></div>
                      <div className={"h-1px bg-gray-2 " + `${item.isLast ? 'w-50p' : 'w-100' }` }></div>
                    </div> 
                  }
                </div>
                <Image src={item.img} className="mb-2 h-auto" alt="" width={item.width} height={60} />
                <div className="fs-13px">{item.label}</div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

interface Props {
	className?: string
}

ContentJourney.defaultProps = {
	className: '',
}

export default ContentJourney
