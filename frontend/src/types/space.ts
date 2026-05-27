export type SpaceType =
  | "dance"
  | "classroom"
  | "yoga"
  | "gym"
  | "seminar"
  | "music";

export type SpaceStatus = "Available" | "Few Slots Left";

export type SpaceSort = "rating" | "price-asc" | "price-desc";

export interface Space {
  id: string;
  title: string;
  city: string;
  type: SpaceType;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  amenities: string[];
  status: SpaceStatus;
  capacity: number;
}

export const SPACE_TYPE_LABELS: Record<SpaceType, string> = {
  dance: "Dance Studio",
  classroom: "Classroom",
  yoga: "Yoga Space",
  gym: "Gym",
  seminar: "Seminar Hall",
  music: "Music Room",
};
