export interface TA {
  name: string;
  acronym: string;
  email: string;
  avatar: string;
}

export const TAs: { [key: string]: TA[] | null } = {
  "Spring 2025": null,
  "Spring 2024": [
    {
      name: "Arnau Ros Sánchez",
      acronym: "AR",
      email: "arnau.ros@salle.url.edu",
      avatar:
        "https://media.licdn.com/dms/image/D4D03AQEwHlJcEnq1bw/profile-displayphoto-shrink_200_200/0/1710265939013?e=1723680000&v=beta&t=qw86bi2QFqWNjuvpGJu6q7iOlUL6gZCnJgkC4xiuYQ8",
    },
  ],
};
