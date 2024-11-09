/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState } from "react";

export const PageBtnContext = createContext(null);

const PageBtnContextProvider = (props) => {
  const [page, setPage] = useState(0);
  const [width, setWidth] = useState(1);

  const handlePage = (e) => {
    e.preventDefault();
    if (page < 2) {
      setPage((prev) => prev + 1);
      setWidth((prevWidth) => prevWidth + 30);
    } else if (page === 2) {
      setPage(2);
      setWidth(100);
    }
  };
  return (
    <PageBtnContext.Provider
      value={{ page, setPage, handlePage, PageBtnContextProvider, width }}
    >
      {props.children}
    </PageBtnContext.Provider>
  );
};

export default PageBtnContextProvider;
