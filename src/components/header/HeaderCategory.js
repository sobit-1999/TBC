import { Box } from "@mui/system";
import React from "react";

export default function HeaderCategory({ data, index, category1, category2, setCategory1, setCategory2 }) {
  console.log(data, index);
  return (
    <>
        {index === 0 ? (category1 &&
          <div className="header-category" 
          onMouseLeave={() => setCategory1(false)}
          >
            {data.category.map((item, i) => {
              return (
                <Box key={i}>
                  <h3>{item.nameCategory}</h3>
                  {item.section.map((item2, i) => {
                    return <p key={i}>{item2.nameSection}</p>;
                  })}
                </Box>
              );
            })}
          </div>
        ) : (
          category2 && <div className="header-category"
          onMouseLeave={() => setCategory2(false)}
          >
          { data.category.map((item, i) => {
            return (
                <p key={i}>{item.nameCategory}</p>
            );
          })}</div>
        )}
    </>
  );
}
