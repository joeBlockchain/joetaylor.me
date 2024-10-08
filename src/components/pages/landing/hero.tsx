//import next stuff
import Link from "next/link";

//import shadcnui stuff
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-full py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-center space-y-10">
          <div className="mx-3 space-y-4 lg:space-y-5 max-w-md md:max-w-2xl lg:max-w-3xl">
            <h1 className="leading-tight lg::leading-snug font-black text-5xl lg:text-7xl ">
              Welcome to my little corner of the internet.
            </h1>
            <p className="leading-normal text-xl text-muted-foreground">
              I tend to build and tinker on occasion. I often like to share and
              pulling up localhost:3000 isn&apos;t always an option when
              I&apos;m out and about!
            </p>
          </div>
          <div className="flex flex-row  space-x-4">
            {/* <Button
              asChild
              variant="outline"
              className="mx-3 w-40 text-lg h-12 lg:h-14 lg:rounded-xl lg:text-xl"
            >
              <Link href="/blog">The Blog</Link>
            </Button>
            <Button
              asChild
              variant="default"
              className="mx-3 w-40 text-lg h-12 lg:h-14 lg:rounded-xl lg:text-xl"
            >
              <Link href="/projects">Projects</Link>
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
