import useTrending from "../../Hooks/useTrending";
import Single from "../Single/Single";

const Trending = () => {
  const [trending] = useTrending();
  let page = 6;

  const onClickBtn = () => {
    trending.slice(0, page + 3).map((trend) => {
      return (
        <div key={trend.id}>
          <Single
            trend={trend}
            type={trend.media_type ? trend.media_type : "movie"}
          />
        </div>
      );
    });
  };

  return (
    <div className="my-10 flex flex-col">
      <div className="header flex items-center justify-between ">
        <h1 className="text-white text-2xl font-bold">Trending Now</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-2">
        {trending.slice(0, page).map((trend) => {
          return (
            <div key={trend.id}>
              <Single
                trend={trend}
                type={trend.media_type ? trend.media_type : "movie"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
