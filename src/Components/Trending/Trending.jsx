import useTrending from "../../Hooks/useTrending";
import Single from "../Single/Single";

const Trending = () => {
  const [trending] = useTrending();
  console.log(trending);
  return (
    <div className="my-10">
      <div className="header flex items-center justify-between ">
        <h1 className="text-white text-2xl font-bold">Trending Now</h1>
        <button className="text-white">Show More</button>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-2">
        {trending.slice(0, 6).map((trend) => {
          return (
            <div key={trend.id}>
              <Single trend={trend} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
