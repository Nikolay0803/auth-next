import Avatar from "../assets/Avatar.png"
import AvatarDavid from "../assets/AvatarDavid.png"
import AvatarSarah from "../assets/AvatarSarah.png"
export const teachers = [
  {
    avatar: Avatar,
    lessonsDone: 1098,
    rating: 4.8,
    price: 30,
    name: "Jane Smith",
    speaks: "German, French",
    lessonInfo:
      "Lessons are structured to cover grammar, vocabulary, and practical usage of the language.",
    conditions:
      "Welcomes both adult learners and teenagers (13 years and above). Provides personalized study plans.",
    levels: [
      "#A1 Beginner",
      "#A2 Elementary",
      "#B1 Intermediate",
      "#B2 Upper-Intermediate",
    ],
  },
  {
    avatar: AvatarDavid,
    lessonsDone: 1203,
    rating: 4.2,
    price: 35,
    name: "David Johnson",
    speaks: "Mandarin Chinese",
    lessonInfo:
      "Lessons focus on developing all four language skills: speaking, listening, reading, and writing.",
    conditions:
      "Teaches all age groups, including children, teenagers, and adults. Offers group lessons at discounted rates.",
    levels: ["#A1 Beginner", "#A2 Elementary", "#B1 Intermediate"],
  },
  {
    avatar: AvatarSarah,
    lessonsDone: 1120,
    rating: 4.6,
    price: 28,
    name: "Sarah Johnson",
    speaks: "English",
    lessonInfo:
      "Lessons focus on building conversational skills and grammar knowledge.",
    conditions:
      "Conditions: Teaches adults and teenagers (15 years and above).",
    levels: ["#A1 Beginner", "#A2 Elementary", "#B1 Intermediate"],
  },
];
