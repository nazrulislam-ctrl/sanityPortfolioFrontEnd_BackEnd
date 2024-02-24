import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { client } from "../config/sanityConfig";

const NewsDetails = () => {
  const [singleNews, setSingleNews] = useState([]);
  const { id } = useParams();

  const getSingleNews = async (id) => {
    const queries = `*[_type== "news"][_id=="${id}"]{newsTitle, "description": description[].children[].text,"thumbnail":thumbnail.asset->url,"category":category->categoryName, _id}`;
    const oneNews = await client.fetch(queries);
    setSingleNews(oneNews[0]);
  };

  useEffect(() => {
    getSingleNews(id);
  }, []);

  return (
    <>
      <Helmet>
        <title>News Details</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <div className="flex justify-center h-[100%] ">
        <div className="flex max-w-2xl flex-col items-start rounded-md border ">
          <div className="h-full w-full ">
            <img
              src={singleNews.thumbnail}
              alt="Laptop"
              className="h-full w-full rounded-md object-cover"
            />
          </div>
          <div>
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                {singleNews.newsTitle}
                
              </h1>
              <div className="mt-4">
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #{singleNews.category}
                </span>
              </div>
              <p className="mt-3 text-gray-600">
                {singleNews.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
