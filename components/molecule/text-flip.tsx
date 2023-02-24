const TextFlip: React.FC<Props> = ({ className, label }: Props) => {
  return (
    <>
      <div className={"text-white transform-rotate-n90deg position-absolute top-0 my-auto bottom-0 d-flex align-items-center justify-content-center h-20px " +  className}>
        <div className="text-spacing-5px fs-10px mt-n50px">{label}</div>
      </div>
    </>
  )
}

interface Props {
	className?: string
  label?: string
}

TextFlip.defaultProps = {
	className: '',
}

export default TextFlip
