import { selectedCartItems } from "../slices/cartItemSlice";
import { fetchCart } from "../slices/cartAction";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAuthTokenFromCookie, getUserIDFromCookie } from "../utils/cookie";

function Carts({user_id}) {
    const dispatch = useDispatch()
    const cartProducts = useSelector(selectedCartItems)
    useEffect(() => {
        dispatch(fetchCart(user_id))
    }, [dispatch])
    console.log(cartProducts)
  return (
    <div>Carts</div>
  )
}

export default Carts


export const getServerSideProps = async (context) => {
    const user_id = getUserIDFromCookie(context.req);
    const authToken = getAuthTokenFromCookie(context.req);
      return {
        props: {
          authToken,
          user_id,
        },
      };
  };