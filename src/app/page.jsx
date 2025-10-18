import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

export const metadata = {
  description:
    'AGBO Ventures builds products that fit consumer needs. From investment platforms to property management, we create solutions that solve real problems.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="#portfolio"
              className="flex items-center gap-1 rounded-full bg-gray-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-gray-950/30"
            >
              Discover our portfolio of consumer-focused products
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Building products that fit consumer needs.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            We create solutions that solve real problems. From investment platforms to social apps, each product is designed to meet genuine consumer needs.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#portfolio">View Our Products</Button>
            <Button variant="secondary" href="/company">
              About Us
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading id="portfolio">Our Products</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Four brands, one mission: solving consumer problems.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Investment"
          title="InAfrika"
          description="Connecting investors with African opportunities. A crowdfunding platform making it easier to invest in businesses driving sustainable growth across the continent."
          graphic={
            <div className="absolute inset-0 bg-[url(/images/Inafrika.png)] bg-cover bg-center bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Property"
          title="ZenRent"
          description="Property management simplified. An all-in-one platform helping landlords manage properties, tenants, and maintenance with ease."
          graphic={
            <div className="absolute inset-0 bg-[url(/images/Zenrent.png)] bg-cover bg-center bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Social"
          title="theChecklist"
          description="Discover London together. A mobile app helping you find things to do and create curated lists with friends and loved ones."
          graphic={
            <div className="flex size-full pt-10 pl-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Fitness"
          title="ChallengeCircle"
          description="Fitness meets competition. Set gym challenges with friends, stay motivated, and win money based on your performance."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Our Philosophy"
          title="Consumer-first thinking"
          description="Every product we build starts with a real consumer need. We identify problems people actually face and create solutions that fit seamlessly into their lives."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <BentoSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
