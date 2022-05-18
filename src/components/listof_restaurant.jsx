import "./restaurant.css"
function List_of_restaurant({data})
{
   
    
    
    
    let {cost,name,categories,image,payment_methods,reviews,votes} = data;
    return (<div  className="restaurant_main_div">
    <div className="restaurant_first_part">
    <div>
       

        <img src={image} alt="" />
    </div>
   <div>
       <p>{name}</p>
       <p>{categories}</p>
       <p>`cost $ +${cost} for one `  </p>
      <div> <span>Min $50</span>
      <span>Upto 30Mins</span>
      </div>
      <div>{payment_methods.cash&payment_methods.upi&payment_methods.card?"Accepts Cards,Upi & Cash":payment_methods.card&payment_methods.upi?"Accepts online only":payment_methods.upi&payment_methods.cash?"Accepts Cash and Upis, No cards":payment_methods.card&payment_methods.cash?"Accepts Card & Cash only":payment_methods.card?"Accepts Card only":payment_methods.cash?"Accepts Cash only":payment_methods.upi?"Accepts upi only":""}</div>
      
   </div>
   <div>
       <p>{votes}</p>
       <p>766votes</p>
       <p>512 reviews</p>
   </div>
  
    </div>
   
<div className="restaurant_second_part">
  <button>Order Online </button>
</div>
</div>)
}
export default List_of_restaurant