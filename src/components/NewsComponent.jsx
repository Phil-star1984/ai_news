import React, { useState, useEffect } from "react";

export default function NewsComponent() {
  /* save data from API in state */
  const [data, setData] = useState([]);
  /* Get the latest news from an API through fetch method */
  const URL = "http://hn.algolia.com/api/v1/search?tags=front_page";
  async function getData() {
    try {
      /* fetch URL and save in variable */
      const response = await fetch(URL);
      /* response is a promise, change it to json */
      const result = await response.json();
      console.log(result.hits);
      /* save array in actual state with setData function */
      setData(result.hits.slice(0, 5));
      /* array is now saved in data*/
    } catch (error) {
      console.log(error);
    }
  }
  /* get titles */
  /* console.log(data[0].title); */
  /* create function to map titles: {data.map((title, index) => (<h1>{data[index].title}</h1>))} */

  useEffect(() => {
    /* the function getData should be called just one time */
    getData();
  }, []);

  return (
    <>
      {data.map((title, index) => (
        <h2>{data[index].title}</h2>
      ))}
    </>
  );
}
