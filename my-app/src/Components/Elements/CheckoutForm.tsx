import { useRef } from "react";
import CheckoutCSS from "../../CSSFiles/checkoutForm.module.css";
export const CheckoutForm = () => {
let country = useRef<HTMLSelectElement>(null);
let firstName = useRef<HTMLInputElement>(null);
let email = useRef<HTMLInputElement>(null);
let lastName = useRef<HTMLInputElement>(null);
let mobile = useRef<HTMLInputElement>(null);
let addressL1 = useRef<HTMLInputElement>(null);
let addressL2 = useRef<HTMLInputElement>(null);
let City = useRef<HTMLInputElement>(null);
let State = useRef<HTMLInputElement>(null);
let Pincode = useRef<HTMLInputElement>(null);

const options = [
{ label: "Select", value: 1, disabled: true },
{ label: "India", value: 2 },
{ label: "United States", value: 3 },
];
return (
<>
<div className="ui column fluid centered grid" style={{margin:"min(50px, 2rem) min(60px, 2rem)"}}>
<div className="row"> <h2>CHECKOUT</h2></div>
<div className="row">
<div className="ui equal width form">

<div className="field 4 wide">
<select ref={country}>
{options.map(option => (
<option key={option.value} value={option.value} disabled={option.disabled}>{option.label} </option>
))}
</select>
</div>
<div className="fields six wide">

<div className="field">
<label>
First Name <span>*</span>
</label>
<input type="text" 
required 
placeholder="First Name" 
name="firstName"
ref={firstName}/>
</div>
<div className="field">
<label>
Last Name <span>*</span>
</label>
<input type="text" required placeholder="Last Name" name="lastName"
ref={lastName} />
</div>
</div>




<label>
Address Line 1<span>*</span>
</label>{" "}
<input
type="text"
required
name="adressLine1"
placeholder="Address Line 1"
ref={addressL1}
/>

<label>
Address Line 2<span>*</span>
</label>{" "}
<input
type="text"
required
name="adressLine2"
placeholder="Address Line 2"
ref={addressL2}
/>


<div className="fields our wide">
<div className="field f">
<label>
City<span>*</span>
</label>{" "}
<input type="text" required name="City" placeholder="City" ref={City} />

</div>
<div className="field">
<label>
State<span>*</span>
</label>{" "}
<input
type="text"
required
name="State"
placeholder="State"
ref={State}
/>
</div>

<div className="field">
<label>
Pin Code<span>*</span>
</label>
<input
type="number"
required
name="Pincode"
placeholder="Pin Code"
ref={Pincode}
/>
</div>
</div>

<div className="fields 6 wide">
<div className="field ">
<label>
Mobile Number<span>*</span>
</label>
<input
required
ref={mobile}
type="number"
name="mobile"
placeholder="9876543210"
/>
</div>
<div className="field">
<label>
    Email<span>*</span>
</label>
<input
required
ref={email}
type="text"
name="email"
placeholder="Email"
/>
</div>
</div>
<div className="field">
<div  className="ui teal fluid button"> Submit</div>
</div>
</div>
</div>
</div>
</>
);
};