import { send, people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, lead, community, professional, jinro, aldi  } from "../assets";
import { cj, deloitte, ey, gt, gw, jhu, kpmg, parsons, posco, purdue, ucla, uiuc, usg } from "../images"
import {SK, BC, HH, EK} from "../images"

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "initiatives",
    title: "Initiatives",
  },  
  {
    id: "team",
    title: "Team",
  },
  {
    id: "partners",
    title: "Partners",
  },
];

export const Initiatives = [
  {
    id: "initiatives-1",
    icon: community,
    title: "Community",
    content:
      "Established in 1996, the Korean Business Student Organization is a Marshall School recognized student volunteer group",
  },
  {
    id: "initiatives-2",
    icon: professional,
    title: "Professionalism",
    content:
      "KBSO will always stay true to our mission: ceaselessly trying to present new ideas to better assist the USC Korean community in reaching success",
  },
  {
    id: "initiatives-3",
    icon: lead,
    title: "Leadership",
    content:
      "KBSO will continue to grow as a unique and competitive organization that takes lead in introducing positive changes",
  },
];

export const partners = [
  {
    id: "partners-1",
    logo: jinro
  },
  {
    id: "partners-2",
    logo: aldi
  },
];

export const Teams = [
  {
    id: "team-1",
    name: "Brandon Choi",
    role: "President",
    image: BC,
  },
  {
    id: "team-2",
    name: "Stephanie Kim",
    role: "Co-President",
    image: SK,
  },
  {
    id: "team-3",
    name: "Heather Hong",
    role: "VP",
    image: HH,
  },
  {
    id: "team-4",
    name: "Erin Kim",
    role: "Secretary",
    image: EK,
  }
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/usckbso/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/KBSOUSC/",
  },
  {
    id: "social-media-3",
    icon: send,
    link: "mailto:kbso@usc.edu",
  },  
];