import React from "react";
import { Pagination } from "@mui/material";

const Cpagination = ({setpage,setnpages,npages}) => {

  const PageChange = (page) => {
    setpage(page);
    window.scroll(0, 0);
  };

  return (
    <div>
      <Pagination
          onChange={(e) =>PageChange(e.target.textContent)}
          count={npages}
          color="info"
        />
    </div>
  )
}

export default Cpagination
