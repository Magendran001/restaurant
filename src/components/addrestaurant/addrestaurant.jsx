import { useState } from "react"

function Addrestaurant()
{

    let [obj,setobj] = useState({});

const datacollector=(target)=>{
         
    let {name,value} = target;

    setobj({...obj,[name]:value,reviews:[],votes:"", payment_methods:["phone_pe","Google_pay","upi"],})

}

const submitform = (event)=>{
 event.preventDefault();

    


}

    return (<div>
        <form onSubmit={submitform}>

        <input type="text" name="name" placeholder="name of the restaurant" onChange={(e)=>{datacollector(e.target)}}/>
        <input type="number" name="cost" placeholder="cost per quantity" onChange={(e)=>{datacollector(e.target)}}/>
        <input type="url" name="image" placeholder="paste your hotel link"  onChange={(e)=>{datacollector(e.target)}} />
        <input type="text" name="categories" placeholder="Categories"  onChange={(e)=>{datacollector(e.target)}} />
        <input type="submit" />
        </form>
    </div>)
}
export default Addrestaurant