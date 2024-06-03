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
          <Link to="/" className="font-mono  tracking-wide text-3xl">
            aimun
          </Link>
          <div className="flex items-start gap-2 flex-col">
            {links.map((itm) => (
              <a href={itm.link} className="flex items-center gap-3">
                {" "}
                <div className="size-4 rounded-full bg-primary-foreground"></div>
                <span>{itm.title}</span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
