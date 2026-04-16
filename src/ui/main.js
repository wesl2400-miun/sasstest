import { NODE_ID } from "./refs/node-id.js";
import { Nav } from "./units/Nav.js";
import { Theme } from "./units/Theme.js";
import { node } from "./utils/utils.js";
import { Logo } from "./units/Logo.js";

const body = document.body;
const logo = node(NODE_ID.LOGO_LINK);
const pTitle = node(NODE_ID.PAGE_TITLE);
const routes = node(NODE_ID.ROUTES);
const menuBtn = node(NODE_ID.MENU_BTN);
const themeBtn = node(NODE_ID.THEME_BTN);

new Logo(logo);
const nav = new Nav(routes, pTitle);
nav.wire(menuBtn);

const theme = new Theme(body);
theme.wire(themeBtn);
