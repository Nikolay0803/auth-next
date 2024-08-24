import Avatar from "../assets/Avatar.png"
import AvatarDavid from "../assets/AvatarDavid.png"
import AvatarSarah from "../assets/AvatarSarah.png"
import JaneFrank from "../assets/jane-frank.png"
import JaneEve from "../assets/jane-eve.png"
import DavidGrace from "../assets/david-grace.png"
import DavidHenry from "../assets/david-henry.png"
import SarahEmily from "../assets/sarah-emily.png"
import SarahAlex from "../assets/sarah-alex.png"


import { StaticImageData } from "next/image";

export interface Teacher {
  name: string;
  avatar: StaticImageData;
  lessonsDone: number;
  rating: number;
  price: number;
  speaks: string;
  lessonInfo: string;
  conditions: string;
  reviews?: {
    name: string;
    photo: StaticImageData;
    rating: number;
    text: string;
  }[];
  levels: string[];
}


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
    reviews: [
      {
        photo: JaneFrank,
        name: "Jack",
        rating: 4.0,
        text: "Jane's lessons were very helpful. I made good progress.",
      },
      {
        photo: JaneEve,
        name: "Eve",
        rating: 5.0,
        text: "Jane is an amazing teacher! She is patient and supportive.",
      },
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
    reviews: [
      {
        photo: DavidGrace,
        name: "Grace",
        rating: 4.0,
        text: "David explains things clearly and is knowledgeable in the subject.",
      },
      {
        photo: DavidHenry,
        name: "Henry",
        rating: 3.0,
        text: "David's teaching style didn't suit me, but he is still a good teacher.",
      },
    ],
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
    reviews: [
      {
        photo: SarahEmily,
        name: "Emily",
        rating: 4.0,
        text: "Sarah is a patient and helpful teacher. I enjoyed her lessons.",
      },
      {
        photo: SarahAlex,
        name: "Alex",
        rating: 5.0,
        text: "Sarah's teaching style is engaging and effective. Highly recommended.",
      },
    ],
  },
];
