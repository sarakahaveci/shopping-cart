import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { CLEAR_CART, GET_TOTALS } from "../actions";
const CartContainer = ({ cart = [], total, dispatch }) => {
  React.useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [cart, dispatch]);
  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <>
    <img  responsive style={{ 
      height:'100%',
      width:'100',
      position: 'fixed',
      zIndex: '-1',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'}}
      src='https://i.imgur.com/mDFNcTm.jpg'  alt="beackground" />
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => dispatch({ type: CLEAR_CART })}
        >
          clear cart
        </button>
      </footer>
    </section>
    </>
  );
};

function mapStateToProps(store) {
  const { cart, total } = store;
  return { cart, total };
}
export default connect(mapStateToProps)(CartContainer);
