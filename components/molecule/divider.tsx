const Divider: React.FC<Props> = ({ className, width, height }: Props) => {
  return (
    <div className={className} data-height={height} data-width={width}></div>
  )
}

interface Props {
	className?: string
  height?: number
  width?: number
}

Divider.defaultProps = {
	className: '',
  height: 2,
  width: 50,
}

export default Divider
