import React from "react";
import { cn } from "../../utils";
import Container from "./Container";
import { Link } from "react-router-dom";

export default function Navbar() {
  const links = [
    { title: "Blog", link: "/#blog" },
    { title: "Works", link: "/#works" },
  ];
  return (
    <div className="py-10 mb-8">
      <Container>
        <div className="w-full flex justify-between items-center">
          <Link to="/" className="">
            <span className="font-sans-bold text-7xl">a</span>
            <span className="text-7xl text-orange-500">.</span>
          </Link>
          <div className="flex items-start gap-4 flex-col">
            {links.map((itm) => (
              <a
                href={itm.link}
                className="flex items-center gap-3 group overflow-hidden"
              >
                {" "}
                <div className="size-4 rounded-full bg-primary-foreground border-2 border-primary-foreground group-hover:bg-transparent transition-all"></div>
                <div className="relative ">
                  {itm.title.split("").map((t, i) => {
                    return (
                      <span
                        key={i}
                        className={cn(
                          "inline-block group-hover:-translate-y-[100%] transition-transform"
                        )}
                        // style={{ transitionDelay: `${i * 100}ms` }}
                        style={{
                          transition: `transform 0.5s ease ${i * 50}ms`,
                        }}
                      >
                        {t}
                      </span>
                    );
                  })}
                  <div className="absolute top-[100%] left-0">
                    {itm.title.split("").map((t, i) => {
                      return (
                        <span
                          key={i}
                          className={cn(
                            "inline-block group-hover:-translate-y-[100%] transition-transform"
                          )}
                          style={{
                            transition: `transform 0.5s ease ${i * 50}ms`,
                          }}
                        >
                          {t}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
