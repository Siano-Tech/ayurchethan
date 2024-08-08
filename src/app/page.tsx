/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/yyEqxsK64RZ
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Prata } from 'next/font/google'

prata({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function BlogHome() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white py-4 px-6 flex items-center justify-between border-b">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <LeafIcon className="h-6 w-6 text-black" />
          <span className="text-xl font-semibold text-black">AyurChethan</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-black hover:text-gray-600 font-medium" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-black hover:text-gray-600 font-medium" prefetch={false}>
            Blog
          </Link>
          <Link href="#" className="text-black hover:text-gray-600 font-medium" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-black hover:text-gray-600 font-medium" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6 text-black" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="md:hidden">
            <div className="grid gap-4 py-6 px-4">
              <Link
                href="#"
                className="flex items-center gap-2 text-black hover:text-gray-600 font-medium"
                prefetch={false}
              >
                <HomeIcon className="h-5 w-5" />
                Home
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-black hover:text-gray-600 font-medium"
                prefetch={false}
              >
                <BookIcon className="h-5 w-5" />
                Blog
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-black hover:text-gray-600 font-medium"
                prefetch={false}
              >
                <InfoIcon className="h-5 w-5" />
                About
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-black hover:text-gray-600 font-medium"
                prefetch={false}
              >
                <MailIcon className="h-5 w-5" />
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1 container mx-auto grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8 px-4 md:px-6 py-12">
        <div>
          <div className="mb-8">
          <Card>
          <CardHeader>
            <img
              src="/placeholder.svg"
              width={1200}
              height={600}
              alt="Featured Post"
              className="w-full h-[400px] object-cover rounded-lg"
              style={{ aspectRatio: "1200/600", objectFit: "cover" }}
            />
          </CardHeader>
          <CardContent>
            <Link href="/blog/the-ayurvedic-approach-to-gut-health" className="text-2xl font-bold hover:underline" prefetch={false}>
                Featured Post: The Ayurvedic Approach to Gut Health
              </Link>
          </CardContent>
          <CardFooter>
            <div>
              <div className="text-muted-foreground text-sm mt-2">By John Doe | August 24, 2023</div>
              <p className="mt-4">
                Discover how Ayurvedic principles can help you achieve optimal gut health and improve your overall well-being.
              </p>
            </div>
          </CardFooter>
          </Card>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <img
                  src="/placeholder.svg"
                  width={600}
                  height={400}
                  alt="Recent Post 1"
                  className="w-full h-[200px] object-cover rounded-lg"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </CardHeader>
              <CardContent>
              <Link href="#" className="text-xl font-bold hover:underline" prefetch={false}>
                <h3 className="text-xl font-bold">Unlocking the Secrets of Ayurvedic Nutrition</h3>
              </Link>
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
            </Card>
            <Card>
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    width={600}
                    height={400}
                    alt="Blog Post 2"
                    className="w-full h-[200px] object-cover rounded-lg"
                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                  />
                </CardHeader>
                <CardContent>
                  <Link href="#" className="text-xl font-bold hover:underline" prefetch={false}>
                    <h3 className="text-xl font-bold">Ayurvedic Rituals for a Balanced Life</h3>
                  </Link>
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
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    width={600}
                    height={400}
                    alt="Blog Post 3"
                    className="w-full h-[200px] object-cover rounded-lg"
                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                  />
                </CardHeader>
                <CardContent>
                <Link href="#" className="text-xl font-bold hover:underline" prefetch={false}>
                  <h3 className="text-xl font-bold">Ayurvedic Herbs for Immune Boosting</h3>
                  </Link>
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
            </Card>
            <Card>
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    width={600}
                    height={400}
                    alt="Blog Post 3"
                    className="w-full h-[200px] object-cover rounded-lg"
                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                  />
                </CardHeader>
                <CardContent>
                <Link href="#" className="text-xl font-bold hover:underline" prefetch={false}>
                  <h3 className="text-xl font-bold">The Ayurvedic Approach to Stress Management</h3>
                  </Link>
                  <p className="mt-2 text-muted-foreground">
                    Learn how Ayurvedic principles can help you manage stress and achieve a more balanced, peaceful life.
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
            </Card>
          </div>
        </div>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline" prefetch={false}>
                    Nutrition
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline" prefetch={false}>
                    Lifestyle
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline" prefetch={false}>
                    Herbs & Supplements
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline" prefetch={false}>
                    Wellness
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline" prefetch={false}>
                    Ayurvedic Practices
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Link href="#" className="bg-muted px-2 py-1 rounded-md hover:underline" prefetch={false}>
                  Health
                </Link>
                <Link href="#" className="bg-muted px-2 py-1 rounded-md hover:underline" prefetch={false}>
                  Lifestyle
                </Link>
                <Link href="#" className="bg-muted px-2 py-1 rounded-md hover:underline" prefetch={false}>
                  Diet
                </Link>
                <Link href="#" className="bg-muted px-2 py-1 rounded-md hover:underline" prefetch={false}>
                  Fasting
                </Link>
                <Link href="#" className="bg-muted px-2 py-1 rounded-md hover:underline" prefetch={false}>
                  Yoga
                </Link>
                <Link href="#" className="bg-muted px-2 py-1 rounded-md hover:underline" prefetch={false}>
                  Meditation
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="flex items-center gap-4 hover:underline" prefetch={false}>
                    <img
                      src="/placeholder.svg"
                      width={80}
                      height={60}
                      alt="Recent Post 1"
                      className="w-20 h-15 object-cover rounded-md"
                      style={{ aspectRatio: "80/60", objectFit: "cover" }}
                    />
                    <div>
                      <div className="font-medium">Ayurvedic Herbs for Stress Relief</div>
                      <div className="text-muted-foreground text-sm">August 22, 2023</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center gap-4 hover:underline" prefetch={false}>
                    <img
                      src="/placeholder.svg"
                      width={80}
                      height={60}
                      alt="Recent Post 2"
                      className="w-20 h-15 object-cover rounded-md"
                      style={{ aspectRatio: "80/60", objectFit: "cover" }}
                    />
                    <div>
                      <div className="font-medium">The Ayurvedic Approach to Skincare</div>
                      <div className="text-muted-foreground text-sm">August 20, 2023</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center gap-4 hover:underline" prefetch={false}>
                    <img
                      src="/placeholder.svg"
                      width={80}
                      height={60}
                      alt="Recent Post 3"
                      className="w-20 h-15 object-cover rounded-md"
                      style={{ aspectRatio: "80/60", objectFit: "cover" }}
                    />
                    <div>
                      <div className="font-medium">Ayurvedic Remedies for Better Sleep</div>
                      <div className="text-muted-foreground text-sm">August 18, 2023</div>
                    </div>
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Newsletter</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input type="email" placeholder="Enter your email" className="w-full" />
                <Button type="submit" className="w-full">
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="bg-muted py-8 px-4 md:px-6 border-t">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-black font-bold mb-4">Site Map</h3>
              <nav className="grid gap-2">
                <Link href="#" className="text-black hover:text-gray-600" prefetch={false}>
                  Home
                </Link>
                <Link href="#" className="text-black hover:text-gray-600" prefetch={false}>
                  Blog
                </Link>
                <Link href="#" className="text-black hover:text-gray-600" prefetch={false}>
                  About
                </Link>
                <Link href="#" className="text-black hover:text-gray-600" prefetch={false}>
                  Contact
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-black font-bold mb-4">Resources</h3>
              <nav className="grid gap-2">
                <Link href="#" className="text-black hover:text-gray-600" prefetch={false}>
                  Ayurvedic Principles
                </Link>
                <Link href="#" className="text-black hover:text-gray-600" prefetch={false}>
                  Herbal Remedies
                </Link>
                <Link href="#" className="text-black hover:text-gray-600" prefetch={false}>
                  Nutrition
                </Link>
                <Link href="#" className="text-black hover:text-gray-600" prefetch={false}>
                  Lifestyle
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-black font-bold mb-4">Connect</h3>
              <nav className="grid gap-2">
                <Link href="#" className="flex items-center gap-2 text-black hover:text-gray-600" prefetch={false}>
                  <FacebookIcon className="h-5 w-5" />
                  Facebook
                </Link>
                <Link href="#" className="flex items-center gap-2 text-black hover:text-gray-600" prefetch={false}>
                  <InstagramIcon className="h-5 w-5" />
                  Instagram
                </Link>
                <Link href="#" className="flex items-center gap-2 text-black hover:text-gray-600" prefetch={false}>
                  <TwitterIcon className="h-5 w-5" />
                  Twitter
                </Link>
                <Link href="#" className="flex items-center gap-2 text-black hover:text-gray-600" prefetch={false}>
                  <LinkedinIcon className="h-5 w-5" />
                  LinkedIn
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-black font-bold mb-4">Subscribe</h3>
              <p className="text-black mb-4">Stay up-to-date with our latest Ayurvedic insights.</p>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white text-black placeholder-gray-500 focus:ring-black focus:border-black"
                />
                <Button type="submit" className="bg-black text-white hover:bg-gray-800">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-black">&copy; 2024 Ayurvedic Insights. All rights reserved.</div>
      </footer>
    </div>
  )
}

function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function SearchIcon(props: any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function BookIcon(props: any) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function FacebookIcon(props: any) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function HomeIcon(props: any) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function InfoIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function InstagramIcon(props: any) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LeafIcon(props: any) {
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


function LinkedinIcon(props: any) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MailIcon(props: any) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MenuIcon(props: any) {
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


function TwitterIcon(props: any) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
