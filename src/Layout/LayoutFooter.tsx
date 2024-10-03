import { FC } from "react";

export const LayoutFooter: FC = () => {
  return (
    <footer className="footer flex   justify-center bg-base-300 p-6 text-base-content ">
      <div className="flex items-center">
        <span className="footer-title justify-center">
          Copyright &#169;
          <a
            className="link-hover link  justify-center text-white"
            href="https://github.com/Xyves"
          >
            Xyves
          </a>
        </span>
      </div>
    </footer>
  );
};

export default LayoutFooter;
