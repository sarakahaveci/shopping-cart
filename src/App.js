import React, { Component } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { createStore } from "redux";
import reducer from "./reducer";  
import { Provider } from "react-redux";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class App extends Component {
  constructor(){
    super();
    this.state= {
      books:[],
      error: null
    }
  }
  buidlBooks= (data)=>{

  }
  componentDidMount(){
let url = "https://my-json-server.typicode.com/erhnml/MyJSONServer/books";
  } 
  render(){ 
  return (
    <>
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
    
    </>
  );
}
}
