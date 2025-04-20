import Restaurant from "./Restaurant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmeer";

const Body = () => {
  const [resList2, SetResList2] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.51600&lng=76.21570&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      "json",
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    SetResList2(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  // let arr = [
  //   {
  //     firstname: "abc",
  //     education: {
  //       class: "2nd",
  //     },
  //   },
  //   {
  //     firstname: "ayz",
  //   },
  // ];
  // console.log(arr[1]?.education?.grade);

  return resList2.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      {console.log("retrun")}
      <div>
        <h1>Search container</h1>
        <button
          onClick={() => {
            resList = resList.filter((res) => res.info.avgRating > 4.7);
            const filteredData = resList2.filter(
              (res) => res.info.avgRating > 4.7
            );
            SetResList2(filteredData);
            console.log(resList);
          }}
        >
          Top Rated Restaurant
        </button>
        <button
          onClick={() => {
            resList = resList.filter((res) => res.price < 130);
            const filteredData = resList2.filter((res) => res.price < 130);
            SetResList2(filteredData);
            console.log(resList);
          }}
        >
          lowest price
        </button>
      </div>
      <div className="res_list_container">
        {resList2.map((res, index) => {
          return (
            <Restaurant
              key={index}
              res_name={res.info.name}
              rating={res.info.avgRating}
              price={res.price}
              img_id={res.info.cloudinaryImageId}
            />
          );
        })}
        {/* {arr.map((data) => {
          return (
            <div>
              <h1>{data.firstname}</h1>
              <h1>{data.class}</h1>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default Body;
