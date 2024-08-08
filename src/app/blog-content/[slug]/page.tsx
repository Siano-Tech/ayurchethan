/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qmL0qsv1g2H
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-4 px-6 md:px-8 lg:px-12">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <LeafIcon className="h-6 w-6" />
            <span className="text-xl font-bold">AyurChethan</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Blog
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </header>
      <main>
        <section className="py-12 px-6 md:px-8 lg:px-12">
          <div className="container mx-auto max-w-4xl">
            <article>
              <img
                src="/placeholder.svg"
                alt="Featured Blog Post"
                width={800}
                height={450}
                className="rounded-lg object-cover"
                style={{ aspectRatio: "800/450", objectFit: "cover" }}
              />
              <div className="mt-8 space-y-4">
                <h1 className="text-4xl font-bold">Unlocking the Secrets of Ayurvedic Nutrition</h1>
                <div className="flex items-center text-muted-foreground">
                  <UserIcon className="h-4 w-4 mr-2" />
                  <span>John Doe</span>
                  <span className="mx-2">·</span>
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  <span>May 15, 2023</span>
                </div>
                <div className="prose prose-lg">
                  <p>
                    Ayurvedic nutrition is a holistic approach to health and well-being that has been practiced in India
                    for thousands of years. At its core, Ayurveda recognizes that each individual has a unique
                    constitution, or "dosha," that determines their physical, mental, and emotional characteristics.
                  </p>
                  <p>
                    By understanding your dosha and the principles of Ayurvedic nutrition, you can create a personalized
                    diet and lifestyle that supports your body's natural balance and promotes optimal health. In this
                    blog post, we'll explore the fundamental concepts of Ayurvedic nutrition and provide practical tips
                    for incorporating them into your daily life.
                  </p>
                  <h2>The Three Doshas: Vata, Pitta, and Kapha</h2>
                  <p>
                    In Ayurveda, the three primary doshas are Vata, Pitta, and Kapha. Each dosha is associated with
                    specific physical, mental, and emotional characteristics:
                  </p>
                  <ul>
                    <li>
                      <strong>Vata</strong> is associated with air and space elements, and is characterized by qualities
                      like lightness, dryness, and mobility. Vata individuals tend to be creative, energetic, and prone
                      to anxiety and insomnia.
                    </li>
                    <li>
                      <strong>Pitta</strong> is associated with the fire and water elements, and is characterized by
                      qualities like heat, sharpness, and intensity. Pitta individuals tend to be ambitious, driven, and
                      prone to digestive issues and skin problems.
                    </li>
                    <li>
                      <strong>Kapha</strong> is associated with the earth and water elements, and is characterized by
                      qualities like heaviness, coolness, and stability. Kapha individuals tend to be nurturing,
                      grounded, and prone to weight gain and respiratory issues.
                    </li>
                  </ul>
                  <p>
                    Understanding your dominant dosha is the first step in creating an Ayurvedic nutrition plan that
                    supports your unique needs. By choosing foods, herbs, and lifestyle practices that balance your
                    dosha, you can promote well-being, reduce imbalances, and achieve greater harmony.
                  </p>
                  <h2>Ayurvedic Nutrition Principles</h2>
                  <p>
                    The principles of Ayurvedic nutrition are based on the concept of the three doshas and the six
                    tastes: sweet, sour, salty, pungent, bitter, and astringent. Each taste is associated with specific
                    qualities and effects on the body and mind.
                  </p>
                  <p>
                    When creating an Ayurvedic meal, the goal is to balance these six tastes to support your dosha and
                    promote overall health. This may involve:
                  </p>
                  <ul>
                    <li>
                      Choosing foods that have a predominant taste that balances your dosha. For example, Vata
                      individuals may benefit from more sweet, sour, and salty foods, while Pitta individuals may do
                      better with more bitter and astringent foods.
                    </li>
                    <li>
                      Incorporating a variety of spices and herbs that have therapeutic properties, such as turmeric,
                      ginger, and cumin.
                    </li>
                    <li>
                      Paying attention to the preparation methods, as certain cooking techniques can enhance or diminish
                      the effects of different tastes.
                    </li>
                    <li>
                      Eating in a calm, mindful manner, as Ayurveda emphasizes the importance of the mind-body
                      connection in digestion and overall health.
                    </li>
                  </ul>
                  <h2>Practical Tips for Ayurvedic Nutrition</h2>
                  <p>
                    Here are some practical tips for incorporating Ayurvedic nutrition principles into your daily life:
                  </p>
                  <ul>
                    <li>
                      Start your day with a warm, nourishing breakfast, such as a porridge or kitchari (a traditional
                      Ayurvedic dish made with rice, lentils, and spices).
                    </li>
                    <li>
                      Favor seasonal, locally-grown produce, as Ayurveda emphasizes the importance of eating foods that
                      are in harmony with your local environment.
                    </li>
                    <li>
                      Experiment with different spice blends and herbal teas to support your dosha and address any
                      imbalances.
                    </li>
                    <li>
                      Avoid or limit processed foods, as they are often difficult to digest and can disrupt the body's
                      natural balance.
                    </li>
                    <li>
                      Practice mindful eating, taking the time to savor your food and pay attention to how it makes you
                      feel.
                    </li>
                  </ul>
                  <p>
                    By incorporating these Ayurvedic nutrition principles into your daily life, you can support your
                    body's natural rhythms, promote optimal digestion, and cultivate a deeper sense of well-being.
                    Remember, the key is to find what works best for your unique constitution and to be patient and
                    compassionate with yourself as you explore this ancient, holistic approach to health.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
      <section className="py-12 px-6 md:px-8 lg:px-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <h2 className="text-3xl font-bold mb-8">All Blog Posts</h2>
            <div className="space-y-8">
              <Card>
                <CardContent>
                  <img
                    src="/placeholder.svg"
                    alt="Blog Post 4"
                    width={400}
                    height={225}
                    className="rounded-t-lg object-cover"
                    style={{ aspectRatio: "400/225", objectFit: "cover" }}
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2 underline">The Ayurvedic Approach to Gut Health</h3>
                    <p className="text-muted-foreground line-clamp-3">
                      Discover how Ayurvedic principles can help you achieve optimal gut health and improve your overall
                      well-being.
                    </p>
                    <div className="flex items-center mt-4 text-sm text-muted-foreground">
                      <UserIcon className="h-4 w-4 mr-2" />
                      <span>John Doe</span>
                      <span className="mx-2">·</span>
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      <span>August 1, 2023</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <img
                    src="/placeholder.svg"
                    alt="Blog Post 5"
                    width={400}
                    height={225}
                    className="rounded-t-lg object-cover"
                    style={{ aspectRatio: "400/225", objectFit: "cover" }}
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2 underline">
                      Ayurvedic Self-Care Rituals for a Balanced Life
                    </h3>
                    <p className="text-muted-foreground line-clamp-3">
                      Explore simple Ayurvedic self-care practices that can help you achieve greater harmony and
                      well-being.
                    </p>
                    <div className="flex items-center mt-4 text-sm text-muted-foreground">
                      <UserIcon className="h-4 w-4 mr-2" />
                      <span>Jane Smith</span>
                      <span className="mx-2">·</span>
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      <span>September 15, 2023</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Blog Categories</CardTitle>
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
                <CardTitle>Popular Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src="/placeholder.svg"
                      alt="Blog Post 6"
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                      style={{ aspectRatio: "80/80", objectFit: "cover" }}
                    />
                    <div>
                      <h4 className="text-lg font-medium underline">Ayurvedic Herbs for Stress Relief</h4>
                      <div className="text-sm text-muted-foreground">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        <span>July 15, 2023</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src="/placeholder.svg"
                      alt="Blog Post 7"
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                      style={{ aspectRatio: "80/80", objectFit: "cover" }}
                    />
                    <div>
                      <h4 className="text-lg font-medium underline">The Ayurvedic Approach to Skincare</h4>
                      <div className="text-sm text-muted-foreground">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        <span>June 30, 2023</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src="/placeholder.svg"
                      alt="Blog Post 8"
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                      style={{ aspectRatio: "80/80", objectFit: "cover" }}
                    />
                    <div>
                      <h4 className="text-lg font-medium underline">Ayurvedic Remedies for Better Sleep</h4>
                      <div className="text-sm text-muted-foreground">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        <span>May 20, 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

function CalendarIcon(props: any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
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


function UserIcon(props: any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}