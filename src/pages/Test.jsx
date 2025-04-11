import React from "react";
import { useGetResourcesQuery } from "../redux/api/resourceApi";

const Test = () => {
  const { data } = useGetResourcesQuery("67f7d0cf005f649e014dd63b");
  console.log(data);
  return (
    <div>
      {data &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <img src={item.image} alt={item.title} />
            </div>
          );
        })}
    </div>
  );
};

export default Test;
