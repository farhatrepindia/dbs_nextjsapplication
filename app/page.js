import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import PlansSetUps from "../components/PlansSetUps";
import Map from "../components/Map";
import Amenities from "../components/Amenities";
import AboutUs from "../components/AboutUs";
import FocusedEnvironment from "../components/FocusedEnvironment";
import AlignedWithGoodCompany from "../components/AlignedWithGoodCompany";
import ReadOurBlogs from "../components/ReadOurBlogs";
import ReadyWhenYouAre from "../components/ReadyWhenYouAre";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative bg-[#f5f5f7]">
      <Header />
      <main>
        <HeroBanner />
        <PlansSetUps />
        <Map />
        <Amenities />
        <AboutUs />
        <FocusedEnvironment />
        <AlignedWithGoodCompany />
        <ReadOurBlogs />
        <ReadyWhenYouAre />
      </main>
      <Footer />
    </div>
  );
}
