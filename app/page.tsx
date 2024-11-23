// import Image from "next/image";
import MarketFeatures from "@/components/MarketFeatures";
import ProfileShowcase from "@/components/ProfileShowcase"
// import ProductPage from "@/components/ProductPage";
import Footer from "@/components/Footer";

// "@/app/page.tsx"
import Header from "@/components/header/Header";
import Snacks from "@/components/header/Snacks";


import Craving from "@/components/header/Craving";
import ImportedVibes from "@/components/header/ImportedVibes";
import Middle from "@/components/header/Middle";
import ProductList from "@/components/header/ProductList";
import dynamic from "next/dynamic";
import Gallery from "@/components/header/Gallery";
import AdditionalInfo from "@/components/header/AdditonalInfo";
// Dynamically import the Maps component without ssr: false since it's a client component now
const Maps = dynamic(() => import("@/components/header/Map"));


export default function Home() {
  return (
    <>
      <Header />
      <Snacks/>
      <Middle />
      <ImportedVibes />
      <ProductList />
      {/* Map component */}
      <Maps />
      <Gallery />
      <Craving />
     <MarketFeatures/>
      <ProfileShowcase/>
      <AdditionalInfo />
       <Footer/>
    </>
  );
}
