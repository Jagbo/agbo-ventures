import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { Button } from '@/components/button'

export const metadata = {
  title: 'InAfrika',
  description:
    'A crowdfunding platform connecting investors with exciting opportunities across Africa.',
}

function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset bg-linear-115 from-[#FDE8B0] from-28% via-[#4db88d] via-70% to-[#039161] sm:bg-linear-145" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Invest in Africa. Shape its future.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            A crowdfunding platform connecting investors with exciting opportunities across Africa.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="https://inafrika.co.uk" target="_blank">
              Visit InAfrika →
            </Button>
            <Button variant="secondary" href="/">
              Back to Home
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function Overview() {
  return (
    <Container className="py-24">
      <div className="max-w-3xl">
        <Subheading>About InAfrika</Subheading>
        <Heading as="h2" className="mt-2">
          Crowdfunding for African growth
        </Heading>
        <div className="mt-8 space-y-6 text-lg/8 text-gray-950/75">
          <p>
            InAfrika is a crowdfunding platform that connects investors with
            exciting opportunities across the African continent. We're building a
            bridge between those who want to invest and businesses that are
            driving sustainable growth and community impact.
          </p>
          <p>
            Through our platform, investors can access carefully vetted
            opportunities in sectors like agriculture, transportation, property,
            and manufacturing. Every business on our platform undergoes rigorous
            due diligence to ensure legitimacy and viability.
          </p>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <h3 className="text-xl font-medium text-gray-950">P2P Finance</h3>
          <p className="mt-4 text-sm/6 text-gray-950/75">
            Connect directly with vetted borrowers across the continent. Earn
            competitive returns while supporting businesses in property,
            agriculture, and transportation sectors.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-gray-950">Equity Finance</h3>
          <p className="mt-4 text-sm/6 text-gray-950/75">
            Own a piece of tomorrow's startups. Our equity crowdfunding makes
            startup investment accessible, allowing you to back promising African
            tech, finance, and business ventures.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-gray-950">
            Managed Funds
          </h3>
          <p className="mt-4 text-sm/6 text-gray-950/75">
            Invest in professionally managed funds focused on the best African
            opportunities in startups, infrastructure, and sustainability
            projects.
          </p>
        </div>
      </div>
    </Container>
  )
}

function KeyHighlights() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <Subheading>Our Approach</Subheading>
            <Heading as="h3" className="mt-2">
              Rigorous vetting, continuous support
            </Heading>
            <div className="mt-8 space-y-8">
              <div>
                <h4 className="text-lg font-medium text-gray-950">
                  Deep Due Diligence
                </h4>
                <p className="mt-2 text-sm/6 text-gray-950/75">
                  Every business and business owner goes through extensive
                  vetting to ensure legitimacy, viability, and trustworthiness
                  before appearing on our platform.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-950">
                  Fund Management
                </h4>
                <p className="mt-2 text-sm/6 text-gray-950/75">
                  We manage the flow of investment funds while providing
                  continuous business support and monitoring to protect investor
                  interests.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-950">
                  Investment Protection
                </h4>
                <p className="mt-2 text-sm/6 text-gray-950/75">
                  Our investment guarantee scheme protects 30% of your first
                  investment up to £500, making it easier to get started with
                  confidence.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 lg:p-12">
            <h3 className="text-2xl font-medium text-gray-950">
              Ready to invest in Africa's future?
            </h3>
            <p className="mt-4 text-sm/6 text-gray-950/75">
              Browse investment opportunities, learn about our due diligence
              process, and start building your African investment portfolio today.
            </p>
            <div className="mt-8">
              <Button href="https://inafrika.co.uk" target="_blank">
                Explore Opportunities →
              </Button>
            </div>
            <p className="mt-6 text-xs text-gray-950/50">
              Visit inafrika.co.uk to see current investment opportunities,
              returns, and detailed business profiles.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function InAfrikaPage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Overview />
        <KeyHighlights />
      </main>
      <Footer />
    </div>
  )
}

