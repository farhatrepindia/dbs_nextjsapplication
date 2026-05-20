import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CollaborationBanner from "../../../components/CollaborationBanner";
import ReadOurBlogs from "../../../components/ReadOurBlogs";
import ReadyWhenYouAre from "../../../components/ReadyWhenYouAre";

import LocationDetailHero from "../../../components/location-detail/LocationDetailHero";
import LocationDetailAmenities from "../../../components/location-detail/LocationDetailAmenities";
import LocationDetailPlans from "../../../components/location-detail/LocationDetailPlans";
import LocationDetailGettingThere from "../../../components/location-detail/LocationDetailGettingThere";
import LocationDetailFaqs from "../../../components/location-detail/LocationDetailFaqs";
import LocationExploreOthers from "../../../components/location-detail/LocationExploreOthers";

import {
  heroLocation,
  locationDetail,
  locationDetailMetadata,
  getOtherLocationsForDetailPage,
} from "./locationDetailPageData";

export const metadata = locationDetailMetadata;

export default function LocationDetailPage() {
  const otherLocations = getOtherLocationsForDetailPage();

  return (
    <div className="relative bg-[#f5f5f7]">
      <Header />
      <main>
        <LocationDetailHero location={heroLocation} />
        <LocationDetailAmenities amenities={locationDetail.amenities} />
        <LocationDetailGettingThere
          items={locationDetail.gettingThere}
          mapImage={locationDetail.mapImage}
          mapInset={locationDetail.mapInset}
        />
        <LocationDetailPlans plans={locationDetail.plans} />
        <LocationDetailFaqs faqs={locationDetail.faqs} />
        <CollaborationBanner />
        <ReadyWhenYouAre />
        <LocationExploreOthers locations={otherLocations} />
        <ReadOurBlogs variant="detail" />
      </main>
      <Footer />
    </div>
  );
}
