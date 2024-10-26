import Category from "./Category";
import room from "../../assets/room.jpg";
import villa from "../../assets/villa.jpg";
import resort from "../../assets/resort.jpg";
import apartment from "../../assets/apartment.jpg";

function CategoryMain() {
  return (
    <div className="flex items-center justify-between mt-12 px-8">
      <Category categoryName="Resort" image={resort} />
      <Category categoryName="House & Villa" image={villa} />
      <Category categoryName="Apartment" image={apartment} />
      <Category categoryName="Single Room" image={room} />
    </div>
  );
}

export default CategoryMain;
