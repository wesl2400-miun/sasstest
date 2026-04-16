import openMenu from '../assets/open-menu.svg?raw';
import closeMenu from '../assets/close-menu.svg?raw';

export class Nav {
  constructor(routes, pTitle) {
    this._routes = routes;
    this._pTitle = pTitle;
  }

  wire = (menuBtn) => {
    this._closed = true;
    this._changeSvg(menuBtn);
    menuBtn.addEventListener('click', () => {
      this._closed = !this._closed;
      this._changeSvg(menuBtn);
      this._routes.style
      .display = this._closed
      ? 'none' : 'flex';
    });
  }

  _changeSvg = (menuBtn) => {
    const svg = this._closed
      ? openMenu : closeMenu;
    const aria = this._closed
      ? 'Öppna menyn' : 'Stäng menyn';
    menuBtn.innerHTML = svg;
    menuBtn.ariaLabel = aria;
  }
}