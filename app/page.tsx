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
import Slide from '@/components/Slide';

// Server-side function to fetch data
async function fetchData(): Promise<Data> {
  const filePath = path.join(process.cwd(), './public/data.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data: Data = JSON.parse(jsonData);
  return data;
}

export default async function Home() {
  const data = await fetchData();

  return (
    <div className="overflow-x-hidden">
       <Slide delay={0.04}>
      <Hero {...data.hero} />
      </Slide>
      <Slide delay={0.34}>
      <Features  {...data.features} />
      </Slide >
      <Advantages  {...data.Advantages}/>
      <Slide delay={0.34}>
      <Testimonial {...data.testimonials}  />
      </Slide>
      <Slide delay={0.34}>
      <Faq faqItems={data.FAQ} />
      </Slide>
      <Slide delay={0.14}>
      <Footer  />
      </Slide>
    </div>
  );
}
