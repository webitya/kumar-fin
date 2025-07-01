import HomeHero from "@/components/home/HomeHero"
import HomeServices from "@/components/home/HomeServices"
import HomeAbout from "@/components/home/HomeAbout"
import HomeCTA from "@/components/home/HomeCTA"

export default function HomePage() {
  return (
    <div>
      <HomeHero />
      <HomeServices />
      <HomeAbout />
      <HomeCTA />
    </div>
  )
}
