import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CollaborationBanner from "../../components/CollaborationBanner";
import ReadyWhenYouAre from "../../components/ReadyWhenYouAre";

import LocationClientPage from "../../components/location/LocationClientPage";

export const metadata = {
  title: "Locations | Align by DBS Workspace",
};

export default function LocationPage() {
  return (
    <div className="relative bg-[#f5f5f7]">
      <Header />
      <main>
        <LocationClientPage />
        <CollaborationBanner />
        <ReadyWhenYouAre />
      </main>
      <Footer />
    </div>
  );
}

