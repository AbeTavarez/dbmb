import Hero from "@/components/hero";
import img from '/public/jason-goodman-vbxyFxlgpjM-unsplash.jpg'

const url = 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function Home() {
  return (
    <div className="mx-auto">

      <Hero imageUrl={img} imageAlt="Group of people setting on a desk" heading="Core Members"/>
    </div>
  );
}
