export interface TA {
  name: string;
  acronym: string;
  email: string[];
  avatar: string;
}

// TODO: Fix avatar with static image import
export const TAs: { [key: string]: TA[] | null } = {
  "Spring 2025": null,
  "Spring 2024": [
    {
      name: "Arnau Ros Sánchez",
      acronym: "AR",
      email: ["arnau.ros@salle.url.edu", "arnaurossanchez@gmail.com"],
      avatar: "../../../../../ta_photos/arnau_ros_profile.jpeg",
    },
  ],
};
