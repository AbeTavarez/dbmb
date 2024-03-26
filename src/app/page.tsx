import Hero from "@/components/hero";
import img from '/public/jason-goodman-vbxyFxlgpjM-unsplash.jpg'
import Link from "next/link";

const url = 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function Home() {
 

  return (
    <div className="mx-auto">

      <Hero imageUrl={img} imageAlt="Group of people setting on a desk" heading="Core Members"/>

      <div className="border p-10 flex flex-col justify-center items-center rounded bg-slate-800 text-white mt-48 mx-60 h-80 shadow-xl">
        <div className="text-3xl mb-10 font-bold underline">Best fast growing application!</div>

        <div className="text-2xl font-bold animate-bounce">Get started for free!</div>

        <div className="font-bold bg-green-500 p-3 rounded text-white mt-5 shadow-md hover:bg-green-400 hover:cursor-pointer">
          <Link href={'/api/auth/signup'}>Sign up</Link>
        </div>
      </div>
    </div>
  );
}
