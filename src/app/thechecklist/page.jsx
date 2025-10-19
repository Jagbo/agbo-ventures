import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { Button } from '@/components/button'

export const metadata = {
  title: 'theChecklist - Discover London Together',
  description:
    'Find places everyone wants to visit in London. Swipe through curated restaurants, cafes, bars, and attractions. Create shared lists with friends and discover unanimous matches instantly.',
}

function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset bg-linear-115 from-[#8b7be8] from-28% via-[#615ba0] via-70% to-[#373854] sm:bg-linear-145" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Find places everyone actually wants to go.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Swipe through places, create lists with friends, and see where your
            preferences match. Stop debating where to go—start going.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="https://www.thechecklist.london" target="_blank">
              Visit theChecklist →
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
        <Subheading>About theChecklist</Subheading>
        <Heading as="h2" className="mt-2">
          Group planning made effortless
        </Heading>
        <div className="mt-8 space-y-6 text-lg/8 text-gray-950/75">
          <p>
            theChecklist is a mobile app that eliminates the endless "where should
            we go?" debates. Using a familiar Tinder-style swipe interface, you and
            your friends can independently browse through curated places in London—
            restaurants, cafes, bars, attractions, and activities.
          </p>
          <p>
            Create shared lists with friends, family, or coworkers. Everyone swipes
            on their own time, and theChecklist instantly shows you the places
            everyone has liked. No more group chat chaos, no more decision fatigue—
            just unanimous matches that everyone actually wants to visit.
          </p>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <h3 className="text-xl font-medium text-gray-950">
            Swipe to Discover
          </h3>
          <p className="mt-4 text-sm/6 text-gray-950/75">
            Browse curated places with an intuitive interface. Swipe right on
            places you want to try, left on ones you don't. Every place you like is
            saved automatically.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-gray-950">Create Lists</h3>
          <p className="mt-4 text-sm/6 text-gray-950/75">
            Invite friends via simple codes or links. Create different lists for
            different occasions—date nights, family outings, team lunches, and more.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-gray-950">Find Matches</h3>
          <p className="mt-4 text-sm/6 text-gray-950/75">
            See places everyone in your group has liked instantly. No more
            debating—just spots you all want to visit, making decisions unanimous.
          </p>
        </div>
      </div>
    </Container>
  )
}

function Features() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading>Features</Subheading>
        <Heading as="h2" className="mt-2 max-w-3xl">
          Everything you need to plan better
        </Heading>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-950">
                Multiple Lists
              </h3>
              <p className="mt-2 text-sm/6 text-gray-950/75">
                Create different lists for different occasions. Weekend brunch
                spots, date night ideas, team building activities—organize your
                plans your way.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-950">
                Category Filters
              </h3>
              <p className="mt-2 text-sm/6 text-gray-950/75">
                Find exactly what you're looking for with smart filters for
                restaurants, cafes, bars, attractions, and activities across London.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-950">
                Personal Stats
              </h3>
              <p className="mt-2 text-sm/6 text-gray-950/75">
                Track your exploration journey with stats on places saved, lists
                created, and matches found. See your London adventure unfold.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-950">
                Offline Browsing
              </h3>
              <p className="mt-2 text-sm/6 text-gray-950/75">
                Browse previously loaded places even without an internet connection.
                Perfect for planning on the go or in the tube.
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 lg:p-12">
            <div className="text-sm font-medium text-gray-950/50">
              Available Now
            </div>
            <h3 className="mt-4 text-2xl font-medium text-gray-950">
              Start planning better together
            </h3>
            <p className="mt-4 text-sm/6 text-gray-950/75">
              Download theChecklist and make group decisions effortless. Available
              for iOS and Android, completely free to use.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-gray-950/5">
                  <svg
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-950">
                    Completely Free
                  </h4>
                  <p className="text-xs text-gray-950/50">
                    Core features always free
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-gray-950/5">
                  <svg
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-950">
                    Unlimited Groups
                  </h4>
                  <p className="text-xs text-gray-950/50">
                    Invite as many friends as you want
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-gray-950/5">
                  <svg
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-950">
                    Private & Secure
                  </h4>
                  <p className="text-xs text-gray-950/50">
                    Your swipes stay private
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button
                href="https://www.thechecklist.london"
                target="_blank"
                className="w-full"
              >
                Download the App →
              </Button>
            </div>
            <p className="mt-6 text-xs text-gray-950/50">
              Visit thechecklist.london to download for iOS or Android and start
              discovering places everyone loves.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function TheChecklistPage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Overview />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

