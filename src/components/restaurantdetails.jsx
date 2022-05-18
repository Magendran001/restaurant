import { useEffect } from "react"
import { useState } from "react"
import data from "../data.json";
import List_of_restaurant from "./listof_restaurant";
import "./restaurant.css"
function Restaurant()
{
    
    let [restaurant_details,setrestaurant_details] = useState(data.restaurant_data);
    console.log(restaurant_details);
    let [sort,setsort] = useState("");
    console.log(sort);

    const sortfun= (value)=>{

      let sorted_data=  data.restaurant_data.filter((e)=> e.votes>=value).sort((a,b)=>a.votes-b.votes);
      console.log(sorted_data)
      setrestaurant_details(sorted_data)
    }

    const Payments=(value)=>{
          
        // if(value=="card")
        // {
        //     let sorted_data=  data.restaurant_data.filter((e)=> {return e.payment_methods.card});
        // }
        // else if(value =="cash")
        // {
        //     let sorted_data = data.restaurant_data.filter((e)=>e.payment_methods.cash)
        // }
        // else if(value ==)

        switch (value)
        {
             case "card":
                 {
                    let sorted_data=  data.restaurant_data.filter((e)=> {return e.payment_methods.card});
                    setrestaurant_details(sorted_data);
                    return 
                 }
                 case "cash":
                     {
                        let sorted_data = data.restaurant_data.filter((e)=>e.payment_methods.cash)
                        setrestaurant_details(sorted_data);
                        return 
                     }
                     case "upi":
                         {
                            let sorted_data = data.restaurant_data.filter((e)=>e.payment_methods.upi)
                            setrestaurant_details(sorted_data);
                            return 
                         }
                
        }
       
        

    }

    
  
    return (<div className="whole_restaurant_body">
        <div>
            <div>Payment methos sort</div>
            <div><button onClick={()=>{Payments("card")}}>Card</button><button onClick={()=>{Payments("cash")}}>Cash</button><button onClick={()=>{Payments("upi")}}>upi</button></div>
        </div>
        <div>
            <select name="" id="" onChange={(e)=>{sortfun(e.target.value)}}>
                <option value="">sort by ratings</option>
                <option value="4">Above 4</option>
                <option value="3">Above 3</option>
                <option value="2">Above 2</option>
                <option value="1">Above 1</option>
            </select>
        </div>
          
          {restaurant_details.map((e)=>{return <List_of_restaurant data={e}/> })}

    </div>)
}



export default Restaurant