import type { NextPage } from 'next'
import Header from '@/components/atom/header'
import 'swiper/css';
import Section from '@/components/atom/section'
import BannerHero from '@/components/atom/banner-hero'
import ContentProjects from '@/components/atom/content-projects'
import ContentBuiltWith from '@/components/atom/content-builtwith'
import ContentABout from '@/components/atom/content-about'
import ContentContact from '@/components/atom/content-contact'
import ContentJourney from '@/components/atom/content-journey'
import Footer from '@/components/atom/footer';
import Anchor from '@/components/molecule/anchor';

const Home: NextPage = () => {

  return (
    <>
      <Header title="Frontend Developer" />
      <Section className="bg-black pt-2 pt-md-10 pb-10">
        <Anchor id="section-0" className="mt-n50px" />
        <BannerHero />
      </Section>
      <Section className="ps-lg-10 bg-gray-1" fluid>
        <Anchor id="section-1" className="mt-n100px" />
        <ContentProjects />
      </Section>
      <Section className="bg-white py-10" fluid>
        <ContentBuiltWith />
      </Section>
      <Section className="bg-black pb-10 pt-lg-10" fluid>
        <Anchor id="section-2" className="mt-n50px" />
        <ContentABout />
      </Section>
      <Section className="bg-gray-1" containerClassName="px-0" fluid>
      < Anchor id="section-3" className="mt-n50px" />
        <ContentContact />
      </Section>
      <Section className="bg-white pt-lg-10 pb-10" containerClassName="px-0" fluid>
        <ContentJourney />
      </Section>
      <Section className="bg-black text-white text-center py-5">
        <Footer />
      </Section>
    </>
  )
}

export default Home
