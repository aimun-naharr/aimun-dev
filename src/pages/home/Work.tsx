import Container from "../../components/layout/Container";
import SectionTitle from "../../components/shared/SectionTitle";

const Work = () => {
  return (
    <div>
      <section className="py-20">
        <Container>
          <SectionTitle title="Work"></SectionTitle>
          <div>
            <div className="h-56 w-64 bg-primary"></div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Work;
