import { FC } from "react";

export const LayoutFooter: FC = () => {
  return (
    <footer className=" footer  flex w-full justify-center  bg-[#232428] p-2 text-lg tracking-wide text-base-content">
      <section className="flex items-center">
        <span className="footer-title justify-center text-gray-400">
          Copyright &#169; &nbsp;
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
