import { useEffect } from "react";
import { userIsLoggedIn } from "../../services/auth/auth";

const Checkout = () => {
  useEffect(() => {
    userIsLoggedIn();
  })
  return <h1>Finalizar Compra:</h1>
}

export default Checkout;