import Container from "../../components/layout/Container";
import SectionTitle from "../../components/shared/SectionTitle";
import { cn } from "../../utils";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ className }: { className?: string }) => {
  const navigate = useNavigate();
  return (
    <div
      className={cn("md:w-[31%] w-full sticky top-0 cursor-pointer", className)}
      onClick={() => {
        navigate("/blog/1");
      }}
    >
      <div className="w-full rounded-md overflow-hidden ">
        <img
          src="https://images.unsplash.com/photo-1714138665411-31c308b8e229?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 py-3">
        <p className=" opacity-40">10 January, 2023</p>
        <p className=" font-bold tracking-wide">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus,
          saepe.
        </p>
        <button className="w-max underline">Read more</button>
      </div>
    </div>
  );
};

export default function Blog() {
  return (
    <section
      id="blog"
      className="py-32 bg-dot-pattern-light z-10"
      data-color="light"
    >
      <Container>
        <SectionTitle title="Blog" />
        <div className="flex md:gap-8 gap-0  py-10 flex-wrap">
          {Array(3)
            .fill("")
            .map((itm, i) => {
              if (i % 2 !== 0) {
                return <BlogCard key={i} className="md:mt-32 mt-0" />;
              } else {
                return <BlogCard key={i} />;
              }
            })}
        </div>
      </Container>
    </section>
  );
}
