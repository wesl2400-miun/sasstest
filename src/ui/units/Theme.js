import mode from '../assets/mode.svg?raw';

export class Theme {
  constructor(body) {
    this._body = body;
  }

  wire = (themeBtn) => {
    this._light = true;
    this._changeSvg(themeBtn);
    themeBtn.addEventListener('click', () => {
      this._changeSvg(themeBtn);
      const theme = this._light
        ? 'dark' : 'light';
      this._body.setAttribute(
        'data-theme', theme);
      this._light = !this._light;
    });
  }

  _changeSvg = (themeBtn) => {
    const aria = this._light
      ? 'Nattläge' : 'Dagsläge';
    themeBtn.innerHTML = mode;
    themeBtn.ariaLabel = aria;
  }
}