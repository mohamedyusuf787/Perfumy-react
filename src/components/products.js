import pone from "../assets/images/p--one.jpg";
import ptwo from "../assets/images/p-two.jpg";
import pthree from "../assets/images/p-three.jpg";   // you need to put double dot ".." to get back from the component folder because the images or in the assets folder which is outside component folder.

function Products(){
  return(
    <div className="products">
      <div className="product-card">
        <img src={pone}></img>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque tempora doloribus ipsam pariatur architecto et, enim iste ducimus vero natus.</p>
      </div>
      <div className="product-card">
        <img src={ptwo}></img>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque tempora doloribus ipsam pariatur architecto et, enim iste ducimus vero natus.</p>
      </div>
      <div className="product-card">
        <img src={pthree}></img>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque tempora doloribus ipsam pariatur architecto et, enim iste ducimus vero natus.</p>
      </div>
    </div>
  )
}

export default Products