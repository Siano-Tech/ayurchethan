/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mmsWBcJqWxr
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <LeafIcon className="h-6 w-6" />
            <span className="text-lg font-bold">Ayurveda Blog</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-primary/90" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-primary/90" prefetch={false}>
              Blog
            </Link>
            <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-primary/90" prefetch={false}>
              About
            </Link>
            <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-primary/90" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 p-4">
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                  prefetch={false}
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                  prefetch={false}
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                  prefetch={false}
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                  prefetch={false}
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-primary py-20 text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Discover the Wisdom of Ayurveda</h1>
                <p className="mt-4 text-lg">
                  Explore the ancient science of Ayurveda and learn how to achieve balance, wellness, and a fulfilling
                  life.
                </p>
                <div className="mt-6 flex space-x-4">
                  <Link
                    href="#"
                    className="inline-flex items-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Read Blog
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center rounded-md border border-primary-foreground px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div>
                <img
                  src="/placeholder.svg"
                  width={600}
                  height={400}
                  alt="Ayurveda"
                  className="mx-auto rounded-lg object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight">Featured Blog Posts</h2>
              <p className="mt-2 text-muted-foreground">
                Explore our latest articles on Ayurvedic wellness and lifestyle.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <Link href="#" prefetch={false}>
                  <CardHeader>
                    <img
                      src="/placeholder.svg"
                      width={600}
                      height={400}
                      alt="Blog Post 1"
                      className="aspect-video rounded-t-lg object-cover"
                    />
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-bold">Unlocking the Secrets of Ayurvedic Nutrition</h3>
                    <p className="mt-2 text-muted-foreground">
                      Discover how Ayurvedic principles can transform your relationship with food and nourish your body.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg"
                        width={40}
                        height={40}
                        alt="Author"
                        className="h-10 w-10 rounded-full"
                        style={{ aspectRatio: "40/40", objectFit: "cover" }}
                      />
                      <div>
                        <p className="text-sm font-medium">John Doe</p>
                        <p className="text-xs text-muted-foreground">August 8, 2024</p>
                      </div>
                    </div>
                  </CardFooter>
                </Link>
              </Card>
              <Card>
                <Link href="#" prefetch={false}>
                  <CardHeader>
                    <img
                      src="/placeholder.svg"
                      width={600}
                      height={400}
                      alt="Blog Post 2"
                      className="aspect-video rounded-t-lg object-cover"
                    />
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-bold">Ayurvedic Rituals for a Balanced Life</h3>
                    <p className="mt-2 text-muted-foreground">
                      Explore simple Ayurvedic practices to cultivate mindfulness, reduce stress, and achieve holistic
                      well-being.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg"
                        width={40}
                        height={40}
                        alt="Author"
                        className="h-10 w-10 rounded-full"
                        style={{ aspectRatio: "40/40", objectFit: "cover" }}
                      />
                      <div>
                        <p className="text-sm font-medium">Jane Smith</p>
                        <p className="text-xs text-muted-foreground">July 15, 2024</p>
                      </div>
                    </div>
                  </CardFooter>
                </Link>
              </Card>
              <Card>
                <Link href="#" prefetch={false}>
                  <CardHeader>
                    <img
                      src="/placeholder.svg"
                      width={600}
                      height={400}
                      alt="Blog Post 3"
                      className="aspect-video rounded-t-lg object-cover"
                    />
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-bold">Ayurvedic Herbs for Immune Boosting</h3>
                    <p className="mt-2 text-muted-foreground">
                      Discover the power of Ayurvedic herbs and how they can strengthen your immune system naturally.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg"
                        width={40}
                        height={40}
                        alt="Author"
                        className="h-10 w-10 rounded-full"
                        style={{ aspectRatio: "40/40", objectFit: "cover" }}
                      />
                      <div>
                        <p className="text-sm font-medium">Sarah Lee</p>
                        <p className="text-xs text-muted-foreground">June 1, 2024</p>
                      </div>
                    </div>
                  </CardFooter>
                </Link>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-8 text-muted-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <LeafIcon className="h-6 w-6" />
              <span className="text-lg font-bold">Ayurveda Blog</span>
            </div>
            <nav className="flex space-x-4">
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Home
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Blog
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                About
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Contact
              </Link>
            </nav>
            <p className="text-xs">&copy; 2024 Ayurveda Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function LeafIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}