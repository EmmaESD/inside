import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex justify-between items-center w-full py-6 px-16">
        <p className="font-display text-2xl">Inside</p>
    <nav className="flex gap-10 items-center">
      <Link className="hover:underline" href="/">Home</Link>
      <Link className="hover:underline" href="/about">Année n°1</Link>
      <Link className="hover:underline" href="/about">Année n°2</Link>
      
      <Link href="/about">
      <button className="border-main border-2 px-3 py-2 rounded-lg hover:bg-main hover:text-background transition-all duration-300 cursor-pointer">
        Portfolio
      </button>
      </Link>
    </nav>
    </div>
  )
}