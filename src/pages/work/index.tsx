import React from "react";
import Container from "../../components/layout/Container";
import { useLocation } from "react-router-dom";

export default function Work() {
  const location = useLocation();
  console.log(location);
  const { work } = location?.state || {};
  return (
    <section data-color="dark">
      <div>
        <Container>
          <div className="h-[500px] overflow-hidden rounded-md">
            <img
              src={work.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-5 mb-6 flex gap-4">
            {work.techStacks.map((itm: string) => (
              <span
                key={itm}
                className="lowercase px-6 py-1 border text-2xl rounded-full text"
              >
                {itm}
              </span>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text max-w-5xl text-2xl leading-relaxed">
              {work.description}
            </div>
            <a href={work.live} target="_blank">
              <button className="size-[120px] rounded-full flex items-center justify-center border-2">
                Live view
              </button>
            </a>
          </div>
        </Container>
      </div>
    </section>
  );
}
