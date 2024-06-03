import Container from "../../components/layout/Container";
import RevealText from "../../components/RevealText";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <section data-color="dark" className="h-max py-40 w-full z-[9]">
      <Container>
        <h1 className="text-[10.5vw] -tracking-[0.8vw]  leading-[10.5vw] uppercase  overflow-hidden text-primary">
          <RevealText word="Get" whileInView />
          <span> </span>
          <RevealText word="In" animDelay={5} whileInView />
          <span> </span>
          <RevealText word="Touch" animDelay={10} whileInView />
        </h1>

        <div className="mt-20 flex  justify-center">
          <SocialLinks />
        </div>
      </Container>
    </section>
  );
}
