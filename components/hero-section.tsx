import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-900 to-blue-700 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Liberty County Roleplay
              </h1>
              <p className="max-w-[600px] text-white/90 md:text-xl">
                Join the most immersive ERLC roleplay community. Experience realistic emergency services, law
                enforcement, and civilian life in a friendly and professional environment.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Link href="#join">Join Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="#about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center p-6">
                  <h2 className="text-2xl font-bold mb-2">Server Trailer</h2>
                  <p className="mb-4">Watch our community in action</p>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Play Video
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
