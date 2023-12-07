import { moviesPath, peoplePath } from "@/common/routes";

export default function Section({ children, category }) {
  let sectionClass;
  category === moviesPath &&
    (sectionClass = "grid-cols-1 md:grid-cols-2 lg:grid-cols-4");
  category === peoplePath &&
    (sectionClass = "grid-cols-2 md:grid-cols-4 lg:grid-cols-5");

  return (
    <section className={`grid gap-4 md:gap-6 ${sectionClass}`}>
      {children}
    </section>
  );
}
