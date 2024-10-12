import { FC } from "react";

export const LayoutFooter: FC = () => {
  return (
    <footer className="space footer relative bottom-0 flex justify-center bg-[#232428]  p-4 text-lg tracking-wide text-base-content">
      <section className="flex items-center">
        <span className="footer-title justify-center">
          Copyright &#169;
          <a
            className="link-hover link  justify-center text-white"
            href="https://github.com/Xyves"
          >
            Xyves
          </a>
        </span>
      </section>
    </footer>
  );
};

export default LayoutFooter;
