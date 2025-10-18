import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { Button } from '@/components/button'

export const metadata = {
  title: 'ZenRent',
  description:
    'Simplified property management for modern landlords. Streamline tenant communication, maintenance, and finances.',
}

function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset bg-linear-115 from-[#F4EFEF] from-28% via-[#f59578] via-70% to-[#EC532B] sm:bg-linear-145" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Simplified property management.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            From tenant communication to maintenance tracking, we streamline
            every aspect of property management. Perfect for landlords managing 1
            to 100+ properties.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="https://www.zenrent.co.uk" target="_blank">
              Visit ZenRent →
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
        <Subheading>About ZenRent</Subheading>
        <Heading as="h2" className="mt-2">
          Property management made effortless
        </Heading>
        <div className="mt-8 space-y-6 text-lg/8 text-gray-950/75">
          <p>
            ZenRent is a comprehensive property management platform designed for
            modern landlords. Whether you're managing a single property or a
            large portfolio, our platform brings all your property management
            needs into one seamless, mobile-friendly interface.
          </p>
          <p>
            Stop juggling multiple tools and spreadsheets. With ZenRent, you can
            track rent payments, manage maintenance requests, communicate with
            tenants via WhatsApp, and access financial reports—all from one
            intuitive dashboard.
          </p>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <h3 className="text-xl font-medium text-gray-950">
            Smart Management
          </h3>
          <p className="mt-4 text-sm/6 text-gray-950/75">
            Manage all your properties in one place. Track rent payments,
            maintenance requests, and tenant communications with our intuitive
            dashboard.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-gray-950">
            WhatsApp Integration
          </h3>
          <p className="mt-4 text-sm/6 text-gray-950/75">
            Direct communication with tenants through WhatsApp. Send automated
            rent reminders, maintenance updates, and important notices.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-gray-950">
            AI-Powered Insights
          </h3>
          <p className="mt-4 text-sm/6 text-gray-950/75">
            Leverage advanced analytics to optimize rental yields, predict
            maintenance needs, and identify cost-saving opportunities.
          </p>
        </div>
      </div>
    </Container>
  )
}

function KeyFeatures() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading>Key Features</Subheading>
        <Heading as="h2" className="mt-2 max-w-3xl">
          Everything you need to manage properties efficiently
        </Heading>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-950">
                HMO Management
              </h3>
              <p className="mt-2 text-sm/6 text-gray-950/75">
                Specialized features for Houses in Multiple Occupation. Track
                individual room rentals, shared facilities, and manage multiple
                tenants with ease.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-950">
                Automated Rent Collection
              </h3>
              <p className="mt-2 text-sm/6 text-gray-950/75">
                Set up automatic rent collection and reminders. Get notified of
                late payments and track rental income across your entire
                portfolio.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-950">
                Maintenance Tracking
              </h3>
              <p className="mt-2 text-sm/6 text-gray-950/75">
                Log and track maintenance requests, assign tasks to contractors,
                and keep tenants updated on progress. Full history of all property
                maintenance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-950">
                Tenant Portal
              </h3>
              <p className="mt-2 text-sm/6 text-gray-950/75">
                Give tenants their own secure portal to report issues, pay rent,
                and access important documents. Improve satisfaction with better
                communication.
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 lg:p-12">
            <div className="text-sm font-medium text-gray-950/50">
              Alpha Launch
            </div>
            <h3 className="mt-4 text-2xl font-medium text-gray-950">
              Join us for an extended 60 day free trial
            </h3>
            <p className="mt-4 text-sm/6 text-gray-950/75">
              Experience the future of property management with ZenRent. Start
              your free trial today and discover how we can transform your
              property management workflow.
            </p>
            <div className="mt-8">
              <Button href="https://www.zenrent.co.uk" target="_blank">
                Start Free Trial →
              </Button>
            </div>
            <p className="mt-6 text-xs text-gray-950/50">
              Visit zenrent.co.uk to sign up, explore features, and see pricing
              plans.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function ZenRentPage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Overview />
        <KeyFeatures />
      </main>
      <Footer />
    </div>
  )
}

