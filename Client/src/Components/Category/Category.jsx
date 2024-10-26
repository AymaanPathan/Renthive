/* eslint-disable react/prop-types */
import right from "../../assets/right.png";

function Category({ image, categoryName }) {
  return (
    <div className="flex items-center cursor-pointer  justify-between">
      <div className="bg-[#FFFFFF] w-64 pb-2 rounded-2xl shadow-lg ">
        <img
          src={image}
          alt="room"
          className="w-full  rounded-t-md object-cover h-44"
        />
        <div className="flex justify-start gap-2 items-center">
          <p className="m-2 font-semibold">{categoryName}</p>
          <img src={right} alt="arrow" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

export default Category;
