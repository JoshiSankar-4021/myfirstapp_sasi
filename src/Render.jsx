import { useEffect,useState } from "react";
function Render(){
    const products = [
    { id: 1, name: "Nike Shoes", price: 2999 },
    { id: 2, name: "Adidas T-Shirt", price: 1499 },
    { id: 3, name: "Puma Jacket", price: 3499 },
    { id: 4, name: "Reebok Shorts", price: 999 },
    { id: 5, name: "Under Armour Cap", price: 799 },
    { id: 6, name: "New Balance Socks", price: 499 },
    { id: 7, name: "Asics Running Shoes", price: 3999 },
    { id: 8, name: "Fila Backpack", price: 1999 },
    { id: 9, name: "Skechers Sandals", price: 1299 },
    { id: 10, name: "Converse Sneakers", price: 2499 },
    { id: 11, name: "Converse Sneakers", price: 2499 },
    { id: 12, name: "Converse Sneakers", price: 2499 },
    { id: 13, name: "Converse Sneakers", price: 2499 },
    { id: 14, name: "Converse Sneakers", price: 2499 },
    { id: 15, name: "Converse Sneakers", price: 2499 },
    { id: 16, name: "Converse Sneakers", price: 2499 }
  ];

const [ddata,setDdata]=useState([])

  useEffect(()=>{

    fetch("http://localhost:3002/getroutes/allusers")
    .then(res=>res.json())
    .ten(data=>setDdata(data))
    .catch(err=>console.log(err))

  },[])

  useEffect(()=>{
    console.log(ddata)
  },[ddata])
  
    return(
        <div>
            <h1>List Rendering</h1>
            <ol>
                {
                    products.map(
                        (product)=>(
                            <li key={product.id}>
                                {product.name}
                                 RS.{product.price}
                            </li>
                        )
                    )
                }
            </ol>

            <h1>Table Rendering </h1>
            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                </tr>

                {
                    products.map(
                       (product)=>(
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                            </tr>
    
                       )
                    )
                }
            </table>



                <h1>Card</h1>
                <div style={{
                    "border":"2px solid red",
                    "borderRadius":"10px",
                    "height":"200px",
                    "width":"200px",
                    "backgroundColor":"AccentColor"

                }}>
                    <h1> card </h1>
                </div>

                <h1>Dynamic Rendering</h1>




        </div>
    );
}

export default Render