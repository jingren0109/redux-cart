import { CartIcon, Testing } from "../icons";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "../features/cart/cartSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const amount = useSelector((store) => store.cart.amount);
  return (
    <>
      <nav>
        <div className="nav-center">
          <h2>Redux Toolkit</h2>
          <div className="nav-container">
            <CartIcon></CartIcon>
            <div className="amount-container">
              <p className="total-amount">{amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
