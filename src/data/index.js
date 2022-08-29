import {
  html,
  css,
  javascript,
  reactImage,
  reduxImage,
  expo,
  materialUi,
  sass,
  antDesign,
  singleSpa,
  axios,
  graphql,
  github,
  styledComponents,
  node,
  pokedex,
  lofi,
  nikeShoes,
  card3D,
} from "../imgs";

export const headerLinks = [
  {
    id: 1,
    link: "home",
    offset: -100,
  },
  {
    id: 2,
    link: "skills",
    offset: -75,
  },
  {
    id: 3,
    link: "projects",
    offset: 75,
  },
  {
    id: 4,
    link: "contact",
    offset: 0,
  },
];

export const skills = [
  {
    id: 1,
    img: html,
    name: "HTML",
    borderColor: "#f16529",
  },
  {
    id: 2,
    img: css,
    name: "CSS",
    borderColor: "#039be5",
  },
  {
    id: 3,
    img: javascript,
    name: "JavaScript",
    borderColor: "#ffd600",
  },
  {
    id: 4,
    img: reactImage,
    name: "React",
    borderColor: "#33a8dc",
  },
  {
    id: 5,
    img: reduxImage,
    name: "Redux",
    borderColor: "#6f3cc1",
    style: { width: "85px" },
  },
  {
    id: 6,
    img: expo,
    name: "Expo",
    borderColor: "#4630eb",
  },
  {
    id: 7,
    img: materialUi,
    name: "Material Ui",
    borderColor: "#2259d1",
  },
  {
    id: 8,
    img: sass,
    name: "Sass",
    borderColor: "#cd4e8e",
  },
  {
    id: 9,
    img: antDesign,
    name: "Ant Design",
    borderColor: "#f85762",
  },
  {
    id: 10,
    img: styledComponents,
    name: "Styled Components",
    borderColor: "#d889c8",
  },
  {
    id: 11,
    img: singleSpa,
    name: "Single Spa",
    borderColor: "#0012f3",
  },
  {
    id: 12,
    img: axios,
    name: "Axios",
    borderColor: "#854195",
  },
  {
    id: 13,
    img: graphql,
    name: "Graphql",
    borderColor: "#e632ad",
  },
  {
    id: 14,
    img: node,
    name: "Node",
    borderColor: "#5dae47",
  },
  {
    id: 15,
    img: github,
    name: "GitHub",
    borderColor: "#8a909b",
  },
];

export const projects = [
  {
    id: 1,
    img: pokedex,
    name: "Pokédex",
    technologies: "React Js, Material Ui, Axios",
    demoLink: "https://jpedrdo.github.io/Pokedex/",
    codeLink: "https://github.com/Jpedrdo/Pokedex",
  },
  {
    id: 2,
    img: nikeShoes,
    name: "Nike Shoes Store",
    technologies: "React Native, Expo, Redux",
    demoLink: "",
    codeLink: "https://github.com/Jpedrdo/Nike-Shoes-Store",
  },
  {
    id: 3,
    img: lofi,
    name: "Lofi Music Player",
    technologies: "React Js, Sass",
    demoLink: "https://jpedrdo.github.io/Lofi-Music-Player/",
    codeLink: "https://github.com/Jpedrdo/Lofi-Music-Player",
  },
  {
    id: 4,
    img: card3D,
    name: "Card 3D Effect",
    technologies: "React Js, Material Ui, Redux",
    demoLink: "https://jpedrdo.github.io/Card-Template-3D-Effect/",
    codeLink: "https://github.com/Jpedrdo/Card-Template-3D-Effect",
  },
];
