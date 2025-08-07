import React from "react";
import Posts from "../components/Posts";
import AddPost from "../components/AddPost";

export default function TimeLine() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-body py-10">
      <AddPost/>
      <Posts />    
    </div>
  );
}
