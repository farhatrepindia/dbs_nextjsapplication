/**
 * Per-location hero gallery (main image first, then grid thumbnails).
 * Static data — import from `app/location/detail/page.js` (and helpers in `locationDetailData`).
 */

const andheri = [
  "/images/location/detail_page/detail_gallery1.webp",
  "/images/location/detail_page/detail_gallery2.webp",
  "/images/location/detail_page/detail_gallery3.webp",
  "/images/location/detail_page/explore-location_1.webp",
  "/images/location/detail_page/explore-location_1.webp",
];

const fort = [
  "/images/location/detail_page/detail_gallery2.webp",
  "/images/location/detail_page/detail_gallery1.webp",
  "/images/tab_image/tab_banner.webp",
  "/images/location/detail_page/detail_gallery4.webp",
  "/images/amenities.webp",
];

const oneWorldCenter = [
  "/images/location/detail_page/detail_gallery3.webp",
  "/images/location/detail_page/plan-location_1.webp",
  "/images/location/detail_page/detail_gallery1.webp",
  "/images/focus_1.webp",
  "/images/homebanner.webp",
];

const narimanPoint = [
  "/images/location/detail_page/detail_gallery4.webp",
  "/images/location/detail_page/detail_gallery2.webp",
  "/images/location/detail_page/explore-location_1.webp",
  "/images/tab_image/tab_banner.webp",
  "/images/location/detail_page/detail_gallery3.webp",
];

const donearOneTwelve = [
  "/images/location/detail_page/plan-location_1.webp",
  "/images/location/detail_page/detail_gallery1.webp",
  "/images/location/detail_page/detail_gallery4.webp",
  "/images/amenities.webp",
  "/images/location/detail_page/explore-location_1.webp",
];

const peninsulaBusinessPark = [
  "/images/homebanner.webp",
  "/images/location/detail_page/detail_gallery2.webp",
  "/images/location/detail_page/detail_gallery3.webp",
  "/images/focus_1.webp",
  "/images/location/detail_page/detail_gallery1.webp",
];

/** Fallback when unknown keys are used. */
export const defaultLocationGallery = andheri;

/** Keyed by `LOCATION_ITEMS[].id`. */
export const LOCATION_GALLERIES = {
  andheri,
  fort,
  "one-world-center": oneWorldCenter,
  "nariman-point": narimanPoint,
  "donear-one-twelve": donearOneTwelve,
  "peninsula-business-park": peninsulaBusinessPark,
};

/** @param {string} locationId — same as `LOCATION_ITEMS[].id` */
export function getLocationGallery(locationId) {
  return LOCATION_GALLERIES[locationId] ?? defaultLocationGallery;
}
