import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";

//console.log(blogData);

function App() {
  
  return (
    <div className="App">
      <About about={blogData.about} image={blogData.image}/>
      <Header name={blogData.name}/>
      <ArticleList posts={blogData.posts}/>
     </div> 
  );
}

export default App;
