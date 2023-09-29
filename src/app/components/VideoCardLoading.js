import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function VideoCardLoading() {
  return (
    <div className="h-[350px]">
      <Skeleton height={250} />
      <div className="mt-5 text-black">
        <Skeleton height={25} />
      </div>
      <div className="mt-2 text-gray-400">
        <Skeleton height={15} />
      </div>
    </div>
  );
}
