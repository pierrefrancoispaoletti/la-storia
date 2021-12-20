import {
  faCheeseburger,
  faWineBottle,
  faPizza,
  faSalad,
  faFishCooked,
  faSteak,
  faHatChef,
  faGlassCheers,
} from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../_const";
export const categories = [
  {
    name: "Suggestions",
    icon: <FontAwesomeIcon icon={faHatChef} size="2x" />,
    link: "/",
    slug: "suggestions",
  },
  {
    name: "Pizze",
    icon: <FontAwesomeIcon icon={faPizza} size="2x" />,
    link: "/products/pizze",
    slug: "pizze",
  },
  {
    name: "Antipasti",
    icon: <FontAwesomeIcon icon={faSalad} size="2x" />,
    link: "/products/antipasti",
    slug: "antipasti",
  },
  {
    name: "Insalate",
    icon: <FontAwesomeIcon icon={faSalad} size="2x" />,
    link: "/products/insalate",
    slug: "insalate",
  },
  {
    name: "Burgers",
    icon: <FontAwesomeIcon icon={faCheeseburger} size="2x" />,
    link: "/products/burgers",
    slug: "burgers",
  },
  {
    name: "Le Grill",
    icon: <FontAwesomeIcon icon={faSteak} size="2x" />,
    link: "/products/grill",
    slug: "grill",
  },
  {
    name: "La Mer",
    icon: <FontAwesomeIcon icon={faFishCooked} size="2x" />,
    link: "/products/la-mer",
    slug: "la-mer",
    subCategory: [
      { name: "Sapore di mare", slug: "sapore-di-mare" },
      { name: "Les Moules", slug: "moules" },
    ],
  },
  {
    name: "Boissons",
    icon: <FontAwesomeIcon icon={faGlassCheers} size="2x" />,
    link: "/products/boissons",
    slug: "boissons",
    subCategory: [
      { name: "Apéritifs", slug: "aperitifs" },
      { name: "Digéstifs", slug: "digestifs" },
      { name: "Eaux", slug: "eaux" },
      { name: "Softs", slug: "softs" },
      { name: "Bières", slug: "bieres" },
      { name: "Boissons chaudes", slug: "boissons-chaudes" },
    ],
  },
  {
    name: "Le Vin",
    icon: <FontAwesomeIcon icon={faWineBottle} size="2x" />,
    link: "/products/le-vin",
    slug: "le-vin",
  },
  // {
  //   name: "Le Café",
  //   icon: <FontAwesomeIcon icon={faCoffee} size="2x" />,
  //   link: "/products/le-cafe",
  //   logo: LogoIlly,
  //   alt: "Logo Illy",
  //   width: "50px",
  //   widthCategorySelector: "30px",
  //   slug: "le-cafe",
  //   subCategory: [
  //     {
  //       name: "Les Classiques",
  //       slug: "classiques",
  //       logo: LogoIlly,
  //       alt: "Logo Illy",
  //     },
  //   ],
  // },
];
