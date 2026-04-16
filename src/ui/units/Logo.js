import logoSvg from '../assets/mittlogo.svg?raw';

export class Logo {
  constructor(logo) {
    console.log(logo)
    logo.innerHTML = logoSvg;
  }
}