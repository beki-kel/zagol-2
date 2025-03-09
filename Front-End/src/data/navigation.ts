import { NavItemType } from "@/shared/Navigation/NavigationItem";
import ncNanoId from "@/utils/ncNanoId";
import { Route } from "@/routers/types";
import __megamenu from "./jsons/__megamenu.json";

const otherPageChildMenus: NavItemType[] = [
  { id: ncNanoId(), href: "/blog", name: "Blog page" },
  { id: ncNanoId(), href: "/blog/single" as Route, name: "Blog single" },
  { id: ncNanoId(), href: "/about", name: "About" },
  { id: ncNanoId(), href: "/contact", name: "Contact us" },
  { id: ncNanoId(), href: "/signup", name: "Signup" },
];

const templatesChildrenMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/add-listing/1" as Route,
    name: "Add listing",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/add-listing/1" as Route,
        name: "Add listing 1",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/2" as Route,
        name: "Add listing 2",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/3" as Route,
        name: "Add listing 3",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/4" as Route,
        name: "Add listing 4",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/5" as Route,
        name: "Add listing 5",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/6" as Route,
        name: "Add listing 6",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/7" as Route,
        name: "Add listing 7",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/8" as Route,
        name: "Add listing 8",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/9" as Route,
        name: "Add listing 9",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/10" as Route,
        name: "Add listing 10",
      },
    ],
  },
  //
  { id: ncNanoId(), href: "/", name: "Checkout" },
  { id: ncNanoId(), href: "/pay-done", name: "Pay done" },
  //
  { id: ncNanoId(), href: "/author", name: "Author page" },
  { id: ncNanoId(), href: "/account", name: "Account page" },
  //
  {
    id: ncNanoId(),
    href: "/subscription",
    name: "Subscription",
  },
];

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/flight-listings/listing-flights",
    name: "Flights",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "/stay-listings/listing-stay",
    name: "Hotels",
    type: "none",
  },

  {
    id: ncNanoId(),
    href: "#FeaturedPackages",
    name: "Packages",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "/stay-listings/listing-stay",
    name: "Flight + Hotel",
    type: "none",
  },

  {
    id: ncNanoId(),
    href: "/contact",
    name: "Contact Us",
    type: "none",
  },
];

export const NAVIGATION_MOBILE: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "/experience-listings/listing-experiences",
    name: "Packages",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "/contact",
    name: "Contact Us",
    type: "none",
  },
];

export const NAVIGATION_ALTERNATE: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "/flight-listings/listing-flights",
    name: "Flights",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "/stay-listings/listing-stay",
    name: "Hotels",
    type: "none",
  },

  {
    id: ncNanoId(),
    href: "/experience-listings/listing-experiences",
    name: "Packages",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "#FeaturedPackages",
    name: "Flight + Hotel",
    type: "none",
  },
];
