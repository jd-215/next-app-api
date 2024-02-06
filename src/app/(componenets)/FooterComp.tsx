
import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from 'flowbite-react';

async function FooterComp() {
  return (
    <Footer container>
      <FooterCopyright href="#" by="Jash Das" year={2024} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}


export default FooterComp;
