export interface TA {
  name: string;
  acronym: string;
  email: string[];
  avatar: string;
}

// TODO: Fix avatar with static image import
export const TAs: { [key: string]: TA[] | null } = {
  "Spring 2025": [
    {
      name: "Carles Contreras i Urbita",
      acronym: "CC",
      email: ["carles.contreras@salle.url.edu"],
      avatar: "../../../../../ta_photos/carles_contreras_profile.jpeg",
    },
    {
      name: "Adrià Martínez Gallifa",
      acronym: "AM",
      email: ["adria.mg@salle.url.edu"],
      avatar: "../../../../../ta_photos/adria_martinez_profile.jpeg",
    },
  ],
  "Spring 2024": [
    {
      name: "Arnau Ros Sánchez",
      acronym: "AR",
      email: ["arnau.ros@salle.url.edu", "arnaurossanchez@gmail.com"],
      avatar: "../../../../../ta_photos/arnau_ros_profile.jpeg",
    },
  ],
};
