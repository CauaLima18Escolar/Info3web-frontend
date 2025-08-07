import Posts from "../components/Posts";
import AddPost from "../components/AddPost";

export default function TimeLine() {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-3xl">
        <AddPost />
        <Posts />
      </div>
    </div>
  );
}
