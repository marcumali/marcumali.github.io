import { Icon } from '@iconify/react'

const ContentBuiltWith: React.FC<Props> = ({ className }: Props) => {

  return (
    <div className="py-md-10 px-md-10 px-lg-5 d-md-flex align-items-center justify-content-between maxw-370px maxw-md-100p w-lg-650px w-xl-1030px mx-auto">
      <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-5 mb-md-0">
        <div className="h-85px w-85px rounded-circle bg-gray-1 d-flex align-items-center justify-content-center me-3">
          <div>
            <Icon icon="carbon:tools" className="fs-40px text-primary" />
          </div>
        </div>
        <div className="fs-20px w-140px">This page was built with</div>
      </div>
      <div className="d-flex flex-column flex-xl-row lh-1 align-items-center">
        <div className="d-flex flex-column flex-sm-row align-items-center">
          <div>
            <div className="fw-800 fs-34px text-gray-3">ReactJS</div>
            <div className="d-flex align-items-end">
              <div className="fs-18px fw-800 text-gray-4 me-1">EmailJS</div>
              <div className="fs-13px fw-800 text-gray-5">SwiperJS</div>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-between">
              <div className="fs-19px fw-800 text-gray-4 me-1">Vercel</div>
              <div className="fs-19px fw-800 text-gray-3">Github</div>
              <div className="fs-19px fw-800 text-gray-5">NextJS</div>
            </div>
            <div className="fw-800 fs-38px text-gray-3">Bootstrap5</div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div>
            <div className="fw-800 fs-34px text-gray-4">Git</div>
            <div className="fs-20px fw-800 text-gray-5">SASS</div>
          </div>
          <div className="fw-800 fs-78px text-gray-5">CSS</div>
          <div>
            <div className="fw-800 fs-44px text-gray-3">HTML</div>
            <div className="d-flex">
              <div className="fs-18px fw-800 text-gray-4 me-1">Iconify</div>
              <div className="fs-18px fw-800 text-gray-5 me-1">JSON</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface Props {
	className?: string
}

ContentBuiltWith.defaultProps = {
	className: '',
}

export default ContentBuiltWith
