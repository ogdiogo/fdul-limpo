import { Helmet } from "react-helmet";
import NewsSection from "../components/NewsSection";
import ImageCarousel from "../components/ImageCarousel";
import Advertisement from "../components/Advertisement";
import CreditAdvertisement from "../components/CreditAdvertisement";
import { useRef } from "react";

const Home = () => {
  const adRef = useRef<HTMLDivElement | null>(null);  // Create a ref for the Advertisement

  return (
    <>
      <Helmet>
        <title>Glosadores e Associados - Soluções Bancárias Personalizadas</title>
        <meta name="description" content="Glosadores e Associados oferece soluções bancárias personalizadas com segurança e excelência para indivíduos e empresas." />
      </Helmet>
      
      <ImageCarousel />
      <NewsSection />
      <CreditAdvertisement />
      <Advertisement ref={adRef} /> {/* Pass the ref to Advertisement */}

      {/* Optionally, add a button or trigger to focus on the ad */}
      <button onClick={() => {
        if (adRef.current) {
          adRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
          adRef.current.focus();  // Focus on the advertisement
        }
      }}>
        Go to Advertisement
      </button>
    </>
  );
};

export default Home;
