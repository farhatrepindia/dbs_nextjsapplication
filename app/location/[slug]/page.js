import { notFound } from "next/navigation";

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

import { getLocationDetail, getOtherLocations } from "../../../components/location/locationDetailData";

export async function generateStaticParams() {
  const { LOCATION_ITEMS } = await import("../../../components/location/locationData");
  return LOCATION_ITEMS.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = getLocationDetail(slug);
  if (!location) return { title: "Location | Align by DBS Workspace" };
  return {
    title: `${location.title} | Align by DBS Workspace`,
    description: location.description[0],
  };
}

export default async function LocationDetailPage({ params }) {
  const { slug } = await params;
  const location = getLocationDetail(slug);

  if (!location) {
    notFound();
  }

  const otherLocations = getOtherLocations(location.id);

  return (
    <div className="relative bg-[#f5f5f7]">
      <Header />
      <main>
        <LocationDetailHero location={location} />
        <LocationDetailAmenities amenities={location.amenities} />
        <LocationDetailPlans plans={location.plans} />
        <LocationDetailGettingThere
          items={location.gettingThere}
          mapImage={location.mapImage}
          mapInset={location.mapInset}
        />
        <LocationDetailFaqs faqs={location.faqs} />
        <LocationExploreOthers locations={otherLocations} />
        <CollaborationBanner />
        <ReadOurBlogs />
        <ReadyWhenYouAre />
      </main>
      <Footer />
    </div>
  );
}
