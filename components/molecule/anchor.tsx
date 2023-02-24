import React from 'react'

const Anchor: React.FC<Props> = ({ className, id }: Props) => {
  return (
    <div className={"position-absolute top-0 start-0 " + className} id={id}></div>
  )
}

interface Props {
	className?: string
  id?: string
}

Anchor.defaultProps = {
	className: '',
  id: '',
}

export default Anchor
