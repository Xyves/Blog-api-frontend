import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <section>
        <div className="hero flex min-h-[calc(100vh-64px)] justify-center bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="/images/hero.webp"
              className="max-w-lg rounded-lg shadow-2xl"
            />
            <div className="mx-10   flex flex-col">
              <h1 className="text-5xl font-bold">
                Looking for fresh ideas or a quick, inspiring read? Our blog is
                filled with content to entertain and inform.
              </h1>
              <Link to={"/blogs"}>
                <button className="btn-primary btn  mt-5 w-64">
                  Start Reading
                </button>
              </Link>
              <p className="py-5"></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
