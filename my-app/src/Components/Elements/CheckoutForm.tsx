import { useRef, useState } from "react";
import CheckoutCSS from "../../CSSFiles/checkoutForm.module.css";
import { topPathsArray } from "../constants";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
export const CheckoutForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data:any) => {
    console.log(data)
    alert("Order Confirmed, Navigating to Home Page");
        console.log("submit")
        navigate(topPathsArray.HomePagePath, { replace: true });

  };
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

const [countryError, setCountryError] = useState(false);
const [firstNameError, setFirstNameError] = useState(false);
const [emailError, setEmailError] = useState(false);
const [lastNameError, setLastNameError] = useState(false);
const [mobileError, setMobileError] = useState(false);
const [addressError, setAddressError] = useState(false);
const [CityError, setCityError] = useState(false);
const [StateError, setStateError] = useState(false);
const [PincodeError, setPincodeError] = useState(false);

const options=[
{ label: "Select", value: 1, disabled: true },
{ label: "India", value: 2 },
{ label: "United States", value: 3 },
];

const submitHandler=()=>{
    if(country==null||country?.current?.value===null||country?.current?.value.length==0)setCountryError(true);
    if(firstName==null||firstName?.current?.value===null||firstName?.current?.value.length==0)setFirstNameError(true);
    if(email?.current?.value===null||email?.current?.value.length==0||!(email?.current?.value.includes('@')))setEmailError(true);
    if(lastName?.current?.value===null||lastName?.current?.value.length==0)setLastNameError(true);
    if(mobile?.current?.value===null||mobile?.current?.value.length!=10)setMobileError(true);
    if(addressL1?.current?.value===null||addressL1?.current?.value.length==0)setAddressError(true);
    if(City?.current?.value===null||City?.current?.value.length==0)setCityError(true);
    if(State?.current?.value===null||State?.current?.value.length==0)setStateError(true);
    if(Pincode?.current?.value===null||Pincode?.current?.value.length==0)setPincodeError(true);

    console.log(countryError)
    console.log(firstNameError)
    console.log(lastNameError)
    console.log(addressError)
    console.log(emailError)
    console.log(mobileError)
    console.log(StateError)
    console.log(CityError)
    console.log(PincodeError)
    if(!countryError&&!firstNameError&&!lastNameError&&!addressError&&!emailError&&!mobileError&&!CityError&&!StateError&&!PincodeError){
        
    }

}
return (
<>
<form onSubmit={handleSubmit(onSubmit)}>
<div className="ui column fluid centered grid" style={{margin:"min(50px, 2rem) min(60px, 2rem)"}}>
<div className="row"> <h2>CHECKOUT</h2></div>
<div className="row">
<div className="ui equal width form">

<div className="field 4 wide">
<select ref={country} onFocus={()=>setCityError(false)}>
{options.map(option => (
<option key={option.value} value={option.value} disabled={option.disabled}>{option.label} </option>
))}
</select>
</div>
<div className="fields six wide">

<div className="field" style={{ textAlign: 'left' }}>
<label>
First Name <span>*</span>{firstNameError?<p className="ui error message">First name cannot be empty</p>:""}
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

onFocus={()=>setAddressError(false)}
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
onFocus={()=>setEmailError(false)}
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