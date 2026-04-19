import logoSvg from '../assets/mittlogo.svg?raw';

// Skapar logotypen dynamiskt, så att det anpassas till natt- respektive dagsläget
export class Logo {
  constructor(logo) {
    console.log(logo)
    logo.innerHTML = logoSvg;
  }
}