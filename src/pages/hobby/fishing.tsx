import Link from "next/link"

export default function Fishing() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <h2>Halo hobby saya memancing ikan laut</h2>
            <Link href="/">Home Page</Link>
          </div>
        </main>
      )
}