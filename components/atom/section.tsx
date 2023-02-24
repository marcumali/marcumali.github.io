import Container from 'react-bootstrap/Container'

const Section: React.FC<Props> = ({ className, children, fluid, containerClassName, id }: Props) => {
  return (
    <div className={ "position-relative " + className} id={id}>
      <Container fluid={ fluid ? true : false } className={containerClassName}>
        {children}
      </Container>
    </div>
  )
}

interface Props {
	className?: string
  children?: React.ReactNode
  fluid?: boolean
  containerClassName?: string
  id?: string
}

Section.defaultProps = {
	className: '',
  containerClassName: '',
}

export default Section
