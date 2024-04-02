import { useRef } from "react";
export const CheckoutForm = () => {
    let country = useRef<HTMLSelectElement>(null);
    let firstName = useRef<HTMLInputElement>(null);
    let lastName = useRef<HTMLInputElement>(null);
    let password = useRef<HTMLInputElement>(null);
    let addressL1 = useRef<HTMLInputElement>(null);
    let addressL2 = useRef<HTMLInputElement>(null);
    let City = useRef<HTMLInputElement>(null);
    let State = useRef<HTMLInputElement>(null);
    let Pincode = useRef<HTMLInputElement>(null);
    
    
    const options = [
        {label: "Select", value: 1, disabled: true},
        {label: "India", value: 2},
        {label: "United States", value: 3}
      ]
    return (
        <>
        <h1>CHECKOUT</h1>

        <p>
                <select ref={country}>
                {options.map(option => (
          <option key={option.value} value={option.value} disabled={option.disabled}>{option.label} </option>
        ))}
                </select>
              </p>
        <p>
        <label>
          First Name <span>*</span>
        </label>
        <input
          ref={firstName}
          type="text"
          required
          name="firstName"
          placeholder="firstName"
        />
      </p>

      <p>
        <label>
          Last Name <span>*</span>
        </label>
        <input
          ref={lastName}
          type="text"
          required
          name="lastName"
          placeholder="lastName"
        />
      </p>
      <p>
      
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
      </p>
      <p>
      
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
      </p>
      <p>
      
        <label>
          City<span>*</span>
        </label>{" "}
        <input
          type="text"
          required
          name="City"
          placeholder="City"
          ref={City}
        />
      </p>
      <p>
      
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
      </p>
      <p>
      
        <label>
          City<span>*</span>
        </label>{" "}
        <input
          type="number"
          required
          name="Pincode"
          placeholder="Pincode"
          ref={Pincode}
        />
      </p>
      <p>
        {" "}
        <label>
          Mobile Number<span>*</span>
        </label>
        <input
          required
          ref={password}
          type="password"
          name="password"
          placeholder="Create Password"
        />
      </p>
      </>
    );
  };