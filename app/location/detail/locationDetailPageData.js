import {
  getOtherLocations,
  getStaticLocationDetail,
  STATIC_DETAIL_LOCATION_ID,
} from "../../../components/location/locationDetailData";
import { getLocationGallery } from "../../../components/location/locationDetailGalleries";

export { STATIC_DETAIL_LOCATION_ID };

const locationDetail = getStaticLocationDetail();
const locationGallery = getLocationGallery(STATIC_DETAIL_LOCATION_ID);

/** Hero expects `gallery`; keep base detail record separate from image list. */
export const heroLocation = { ...locationDetail, gallery: locationGallery };

export const locationDetailMetadata = {
  title: `${locationDetail.title} | Align by DBS Workspace`,
  description: locationDetail.description[0],
};

export function getOtherLocationsForDetailPage() {
  return getOtherLocations(STATIC_DETAIL_LOCATION_ID);
}

export { locationDetail };
