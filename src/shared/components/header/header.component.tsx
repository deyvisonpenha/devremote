import Link from "next/link";
import { Container, ContentLinkPages } from "./styles";
import { Logo, ResponsiveAppBar } from "@components";

export const Header: React.FC = () => {
  const MenuList = () => {
    return (
      <ContentLinkPages>
        <Link href="/products">Products</Link>

        <Link href="/prices">Prices</Link>

        <Link href="/contact">Contact</Link>
      </ContentLinkPages>
    );
  };
  return (
    <Container>
      {/* <Logo />
      <ContentLinkPages>
        <Link href="/products">Products</Link>

        <Link href="/prices">Prices</Link>

        <Link href="/contact">Contact</Link>
      </ContentLinkPages>
      <div>PT | EN</div> */}
      <ResponsiveAppBar LogoComponent={Logo} ListMenu={<MenuList />} />
    </Container>
  );
};
