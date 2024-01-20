import Products from "/components/Products";
import Cart from "/components/Cart"
import Header from "/components/Header"
export default function Home() {



  return (
    <div className="relative top-0" >
      <Header></Header>
      <Products></Products>
      <Cart></Cart>
    </div>
  );
}
