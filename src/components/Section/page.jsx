import { moviesPath, peoplePath } from "@/common/routes";

export default function Section({ children, path }) {
  return (
    <section
      className={`grid gap-4 md:gap-6 ${
        path.includes(moviesPath)
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          : path.includes(peoplePath)
            ? "grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
            : ""
      }`}
    >
      {children}
    </section>
  );
}
