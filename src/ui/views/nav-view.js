import { NODE_ID } from "../refs/node-id.js";
import { Nav } from "../units/Nav.js";
import { node } from "../utils/utils.js";
import { Logo } from "../units/Logo.js";

// Refererar existerande HTML-element
const logo = node(NODE_ID.LOGO_LINK);
const pTitle = node(NODE_ID.PAGE_TITLE);
const routes = node(NODE_ID.ROUTES);
const menuBtn = node(NODE_ID.MENU_BTN);

// Skapa logotypen dynamiskt (Behövs för att anpassa färgtema)
new Logo(logo);

// Skapa navigeringsfältet
const nav = new Nav(routes, pTitle);
nav.wire(menuBtn);

