// app/page.tsx
import fs from 'fs';
import path from 'path';
import Data from '../types/types'; // Ensure this path is correct

// Components imports
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import Advantages from "@/components/Advantages";

// Server-side function to fetch data
async function fetchData(): Promise<Data> {
  const filePath = path.join(process.cwd(), '../uifry/public/data.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data: Data = JSON.parse(jsonData);
  return data;
}

export default async function Home() {
  const data = await fetchData();

  return (
    <div className="overflow-x-hidden">
      <Hero {...data.hero} />
      <Features  {...data.features} />
      <Advantages  {...data.Advantages}/>
      <Testimonial {...data.testimonials}  />
      <Faq faqItems={data.FAQ} />
      <Footer  />
    </div>
  );
}
