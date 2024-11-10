import { useContext } from "react";
import { PageBtnContext } from "../../Context/pageBtnContext";

function Payment() {
  const { handlePage } = useContext(PageBtnContext);
  return (
    <div>
      <h1>Payment</h1>
      <div>
        <button onClick={handlePage}>Submit</button>
      </div>
    </div>
  );
}

export default Payment;
