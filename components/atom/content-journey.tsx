import React from 'react'
import { Image } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import Skills from '@/data/skills.json'

const ContentJourney: React.FC<Props> = ({ className }: Props) => {

  const slide = [
    {
      id: 0,
      label: 'ReactJs',
      img: 'logo-react.png',
      title: 'Js Library',
    },
    {
      id: 1,
      label: 'NextJs',
      img: 'logo-next.png',
    },
    {
      id: 2,
      label: 'React Bootstrap',
      img: 'logo-react-bootstrap.png',
    },
    {
      id: 3,
      label: 'React Native',
      img: 'logo-react.png',
    },
    {
      id: 4,
      label: 'VueJs',
      img: 'logo-vue.png',
    },
    {
      id: 5,
      label: 'jQuery',
      img: 'logo-jquery.png',
    },
    {
      id: 6,
      label: 'SwiperJs',
      img: 'logo-swiper.png',
      isLast: true,
    },
    {
      id: 7,
      label: 'Bootstrap',
      img: 'logo-bootstrap.png',
      title: 'CSS Framework',
    },
    {
      id: 8,
      label: 'Tailwind',
      img: 'logo-tailwind.png',
    },
    {
      id: 9,
      label: 'Sass',
      img: 'logo-sass.png',
    },
    {
      id: 10,
      label: 'Less',
      img: 'logo-less.png',
      isLast: true,
    },
    {
      id: 11,
      label: 'Wordpress',
      img: 'logo-wordpress.png',
    },
    {
      id: 12,
      label: 'Joomla',
      img: 'logo-joomla.png',
    },
    {
      id: 13,
      label: 'Duda',
      img: 'logo-duda.png',
    },
    {
      id: 14,
      label: 'WiX',
      img: 'logo-wix.png',
      isLast: true,
    },
    {
      id: 15,
      label: 'Browserstack',
      img: 'logo-browserstack.png',
    },
    {
      id: 16,
      label: 'LambdaTest',
      img: 'logo-lambdatest.png',
      isLast: true,
    },
    {
      id: 17,
      label: 'Yarn',
      img: 'logo-yarn.png',
    },
    {
      id: 18,
      label: 'Gulp',
      img: 'logo-gulp.png',
    },
    {
      id: 19,
      label: 'Grunt',
      img: 'logo-grunt.png',
      isLast: true,
    },
    {
      id: 20,
      label: 'Adobe Photoshop',
      img: 'logo-photoshop.png',
    },
    {
      id: 21,
      label: 'Adobe XD',
      img: 'logo-xd.png',
    },
    {
      id: 22,
      label: 'Figma',
      img: 'logo-figma.png',
      isLast: true,
    },
    {
      id: 23,
      label: 'Xampp',
      img: 'logo-xampp.png',
    },
    {
      id: 24,
      label: 'Docker',
      img: 'logo-docker.png',
      isLast: true,
    },
    {
      id: 25,
      label: 'Git',
      img: 'logo-git.png',
    },
    {
      id: 26,
      label: 'SVN',
      img: 'logo-svn.png',
    },
    {
      id: 27,
      label: 'Tortoise Git/Svn',
      img: 'logo-tortoise.png',
    },
    {
      id: 28,
      label: 'Sourcetree',
      img: 'logo-sourcetree.png',
      isLast: true,
    },
    {
      id: 29,
      label: 'Jira',
      img: 'logo-jira.png',
    },
    {
      id: 30,
      label: 'ClickUp',
      img: 'logo-clickup.png',
    },
    {
      id: 31,
      label: 'Trello',
      img: 'logo-trello.png',
    },
    {
      id: 32,
      label: 'Asana',
      img: 'logo-asana.png',
    },
    {
      id: 33,
      label: 'Bitrix24',
      img: 'logo-bitrix.png',
      isLast: true,
    },
    {
      id: 34,
      label: 'Slack',
      img: 'logo-slack.png',
    },
    {
      id: 35,
      label: 'Skype',
      img: 'logo-skype.png',
    },
    {
      id: 36,
      label: 'WhatsApp',
      img: 'logo-whatsapp.png',
    },
    {
      id: 37,
      label: 'Hangouts',
      img: 'logo-hangouts.png',
    },
    {
      id: 38,
      label: 'Discord',
      img: 'logo-discord.png',
      isLast: true,
    },
    {
      id: 39,
      label: 'Visual Studio',
      img: 'logo-visual-studio.png',
    },
    {
      id: 40,
      label: 'Sublime',
      img: 'logo-sublime.png',
    },
    {
      id: 41,
      label: 'Atom',
      img: 'logo-atom.png',
    },
    {
      id: 42,
      label: 'Notepad++',
      img: 'logo-notepad.png',
      isLast: true,
    },
    {
      id: 43,
      label: 'NoMachine Service',
      img: 'logo-nomachine.png',
    },
    {
      id: 44,
      label: 'Tizen Studio',
      img: 'logo-tizen.png',
    },
    {
      id: 45,
      label: 'Sony Vegas',
      img: 'logo-vegas.png',
      isLast: true,
    },
  ];

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
                <Image src={item.img} className="mb-2" alt=""  />
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
