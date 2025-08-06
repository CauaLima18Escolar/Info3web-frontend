import React from "react";
import Sidebar from "../components/Sidebar";
import Posts from "../components/Posts";

export default function TimeLine() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-body">
      <Posts />
    </div>
  );
}
