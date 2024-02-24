import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { Helmet } from "react-helmet-async";
import NewsCard from "../components/NewsCard";
import { useEffect, useState } from "react";
import { client } from "../config/sanityConfig";
import { data } from "autoprefixer";

const News = () => {
  const [news, setNews] = useState([]);

  const [categories, setCategory] = useState([]);

  const getNews = async () => {
    let query = `*[_type== "news"]{newsTitle, "description": description[].children[].text,"thumbnail":thumbnail.asset->url,_id,"category":category->categoryName}`;
    const newsData = await client.fetch(query);
    setNews(newsData);
  };

  const getCategory = async () => {
    let queries = `*[_type== "category"]{_id,categoryName}`;
    const categoryData = await client.fetch(queries);
    setCategory(categoryData);
  };

  const searchHandaler =(e) => {
    const userSearch = e.target.value;
    newsSearch(userSearch);
  };

  const newsSearch = async (searchValue) => {
    if (!searchValue) {
      getNews();
    } else {
      let query = `*[_type== "news" && (newsTitle match "${searchValue}*" )]{newsTitle, description,"thumbnail":thumbnail.asset->url,_id,"category":category->categoryName}`;
      const newsData = await client.fetch(query);
      setNews(newsData);
    }
  };


  const newsCategory = async (selectedCategory) => {
    if (!selectedCategory) {
      getNews();
    } else {
      let queries = `*[_type== "news" && category->categoryName== "${selectedCategory}"]{newsTitle, description,"thumbnail":thumbnail.asset->url,_id,"category":category->categoryName}`;
      const categoryData = await client.fetch(queries);
      setNews(categoryData); 
    }
  };

  useEffect(() => {
    getNews();
    getCategory();
    newsCategory();
  }, []);
  return (
    <>
      <Helmet>
        <title>News</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="mx-auto container ">
        <form className="flex justify-center items-center flex-wrap md:flex-nowrap gap-4 ">
          <Input
            name="userSearchValue"
            onChange={searchHandaler}
            color="success"
            className="w-72 my-3"
            type="search"
            label="Search Here"
          />

          <Select
            label="Favourite Category"
            color="secondary"
            placeholder="Select a Category"
            className="max-w-xs"     
                   
          >
            <SelectItem key="" value="" onClick={getNews}>All</SelectItem>
            {categories.map((category) => (
              // console.log(categories.categoryName)
              <SelectItem  onClick={()=>newsCategory(category.categoryName)} key={category._id} >
                {category.categoryName}
              </SelectItem>
            ))}
          </Select>
        </form>
        <div className="flex justify-center flex-wrap gap-2 py-10">
          {news.map((news) => (
            <NewsCard key={news._id} newsInfo={news} />
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
