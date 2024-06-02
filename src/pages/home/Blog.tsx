import React from "react";
import Container from "../../components/layout/Container";
import SectionTitle from "../../components/shared/SectionTitle";
import { cn } from "../../utils";

const BlogCard = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="w-full rounded-md overflow-hidden">
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
    <section className="py-32 bg-dot-pattern-light" data-color="light">
      <Container>
        <SectionTitle title="Blog" />
        <div className="flex gap-8 py-10">
          {Array(3)
            .fill("")
            .map((itm, i) => {
              if (i % 2 !== 0) {
                return <BlogCard key={i} className="mt-32" />;
              } else {
                return <BlogCard key={i} />;
              }
            })}
        </div>
      </Container>
    </section>
  );
}
