interface CTAButton {
    text: string;
    link: string;
  }
  
  interface Feature {
    title: string;
    description: string;
    icon: string;
  }
  
  interface Testimonial {
    heading: string;
    subHeading: string;
    name: string;
    title: string;
    feedback: string;
    avatar: string;
  }
  
  interface FAQItem {
    title: string;
    description: string;
  }
  
  interface Advantage {
    title: string;
    description: string;
  }
  
  interface FooterLinks {
    [key: string]: string; // Key-value pairs of link names and URLs
  }
  
  interface NewsletterLinks {
    [key: string]: string; // Key-value pairs of link names and URLs
  }
  
  interface LegalLinks {
    [key: string]: string; // Key-value pairs of link names and URLs
  }
  
  interface ProductLinks {
    [key: string]: string; // Key-value pairs of link names and URLs
  }
  
  interface Footer {
    Links: FooterLinks;
    Newletter: NewsletterLinks;
    Legal: LegalLinks;
    Product: ProductLinks;
    urify: {
      mail: string;
      phone: string;
    };
  }
  
  interface Advantages {
    heading: string;
    subheading: string;
    advantage: Advantage[];
  }
  
  interface Hero {
    headline: string;
    subheadline: string;
    ctaButtons: CTAButton[];
  }
  
  interface Features {
    heading: string;
    subheading: string;
    feature: Feature[];
  }
  
  interface FAQSection {
    title: string;
    description: string;
  }
  
  interface Data {
    hero: Hero;
    features: Features;
    testimonials: Testimonial;
    FAQ: FAQItem[];
    Advantages: Advantages;
    Footer: Footer;
  }
  
  export default Data;
  