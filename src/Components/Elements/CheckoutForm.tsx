import { useRef, useState } from "react";
import CheckoutCSS from "../../CSSFiles/checkoutForm.module.css";
import { topPathsArray } from "../constants";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

import { increment,decrement , clearCart} from "../../Redux/Slices/cartCounter";
import { useAppDispatch } from "../../Redux/Hooks/hooks";

export const CheckoutForm = () => {

  const dispatch = useAppDispatch();

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data:any) => {
    dispatch(clearCart())
    alert("Order Confirmed, Navigating to Home Page");
        console.log("submit")
        navigate(topPathsArray.HomePagePath, { replace: true });
  };


const options=[
{ label: "Select", value: 1, disabled: true },
{ label: "India", value: 2 },
{ label: "United States", value: 3 },
];


return (
<>
<form onSubmit={handleSubmit(onSubmit)}>
<div className="ui column fluid centered grid" style={{margin:"min(50px, 2rem) min(60px, 2rem)"}}>
<div className="row"> <h2>CHECKOUT</h2></div>
<div className="row">
<div className="ui equal width form">

<div className="field 4 wide">
<select >
{options.map(option => (
<option key={option.value} value={option.value} disabled={option.disabled}>{option.label} </option>
))}
</select>
</div>
<div className="fields six wide">

<div className="field" style={{ textAlign: 'left' }}>
<label>
First Name 
</label>
<input type="text" 
required
placeholder="First Name" 
{...register("firstName", { required: true})}
/>
{errors.firstName && <p>First Name is required and must be valid</p>}
</div>
<div className="field" style={{ textAlign: 'left' }}>
<label>
Last Name <span>*</span>
</label>
<input type="text" required placeholder="Last Name" 
{...register("lastName", { required: true})}
/>
{errors.lastName && <p>Last Name is required and must be valid</p>}
</div>
</div>



<div className="field" style={{ textAlign: 'left' }}>
<label >
Address Line 1<span>*</span>
</label>{" "}
<input
type="text"
required

placeholder="Address Line 1"

{...register("Address", { required: true})}
/>
{errors.Address && <p>Address is required and must be valid</p>}
</div>
<div className="field" style={{ textAlign: 'left' }}>
<label style={{ textAlign: 'left' }}>
Address Line 2<span>*</span>
</label>{" "}
<input
type="text"
name="adressLine2"
placeholder="Address Line 2"

/>
</div>

<div className="fields our wide">
<div className="field " style={{ textAlign: 'left' }}>
<label>
City<span>*</span>
</label>{" "}
<input type="text"  placeholder="City" required
{...register("City", { required: true})}/>
{errors.City && <p>City is required and must be valid</p>}
</div>
<div className="field" style={{ textAlign: 'left' }}>
<label>
State<span>*</span>
</label>{" "}
<input
type="text"
required
placeholder="State"
{...register("State", { required: true})}
/>
{errors.State && <p>State is required and must be valid</p>}

</div>

<div className="field" style={{ textAlign: 'left' }}>
<label>
Pin Code<span>*</span>
</label>
<input
type="text"
required

placeholder="Pin Code"

{...register("pincode", { required: true})}
/>
{errors.pincode && <p>Pincode is required and must be valid</p>}

</div>
</div>

<div className="fields 6 wide">
<div className="field " style={{ textAlign: 'left' }}>
<label>
Mobile Number<span>*</span>
</label>
<input
required
type="text"
placeholder="9876543210"
{...register("mobile", { required: true})}

/>
{errors.mobile && <p>Mobile no. is required and must be valid</p>}
</div>
<div className="field" style={{ textAlign: 'left' }}>
<label>
    Email<span>*</span>
</label>
<input
type="email"
placeholder="Email"
{...register("email", { required: true, pattern: /^\S+@\S+$/i })}
/>
{errors.email && <p>Email is required and must be valid</p>}
</div>
</div>
<div className="field">
<button  className="ui teal fluid button" type="submit"> Submit</button>
</div>
</div>
</div>
</div>
</form>
</>
);
};