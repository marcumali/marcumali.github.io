import getConfig from 'next/config'
import Link from 'next/link'
import {Image} from 'react-bootstrap'

const Footer: React.FC<Props> = ({ className }: Props) => {

  const { publicRuntimeConfig } = getConfig()
  const linkList = [
    {
      id: 0,
      label: 'Web Tools',
      link: 'https://github.com/marcumali/wiki-css'
    }
  ];

  return (
    <div className={className}>
      <div className="mb-4">
        <Image src="logo.png" className="w-80px mb-1 h-auto" alt="Marc Umali" width={150} height={149}/>
        <div className="text-spacing-3px">MARC UMALI</div>
      </div>
      <div className="fs-12px">
        © Copyright {new Date().getFullYear()} {publicRuntimeConfig.APP_NAME} | Alrights Reserved. 
        { linkList && linkList.map( item => (
          <Link href={item.link} key={item.id}>
            <span className="ms-1"></span>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

interface Props {
  className?: string
}

Footer.defaultProps = {
  className: '',
}

export default Footer