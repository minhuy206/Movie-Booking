import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import { Search } from "./Search";

export default {
  title: "Components/Search",
  component: Search,
};

export const SearchMovies = () => (
  <Search
    tailwindClasses={["py-2"]}
    placeholder="Search movies"
    backgroundColor={"transparent"}
    prefix={<SearchOutlined style={{ color: "grey" }} />}
  />
);
