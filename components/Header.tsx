import Link from "next/link";

export default function Header() {
    return (
  
      <>
<nav className="bg-red-400 p-4 text-white">
  <div className="container mx-auto flex justify-between">
    
  <h1 className="text-xl font-bold">Ghouri Nexus</h1>
    <div className="space-x-4">
    <Link href="/" className="hover:underline font-bold">HOME</Link>
    <Link href="/about" className="hover:underline font-bold">ABOUT</Link>
    <Link href="/contact" className="hover:underline font-bold">CONTACT US</Link>
    </div>
  </div>
</nav>
</>
    );
  }