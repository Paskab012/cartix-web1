// import React, { useState } from 'react';
// import styled from 'styled-components';
// // import './formInput.css';

// const Label = styled.label`
//     font-size: 14px;
//     line-height: 17px;
//     margin-bottom: 1%;
// `;

// const Form = styled.div`
//     display: grid;
//     position: relative;
//     margin: 3.78% 0;
// `;

// const ErrorMessage = styled.span`
//     font-size: 12px;
//     color: white;
//     border-radius: 2px;
//     font-weight: semi-bold;
//     display: none;
//     position: absolute;
//     background-color: red;
//     width: 100%;
// `;

// const InputField = styled.input`
//     width: 100%;
//     background-color: #ffffff;
//     display: flex;
//     flex-direction: row;
//     align-items: flex-start;
//     padding: 9px 11px;
//     gap: 10px;
//     border: 1.2px solid #dee1e7;
//     border-radius: 4px;

//     ::placeholder {
//         color: #9da1a8;
//         font-size: 12px;
//     }

//     &:invalid ~ ${ErrorMessage} {
//         display: block;
//     }
//     /* &:focused(true) {
//         display: block;
//     } */
// `;

// // const SelectInput = styled.select`

// // `

// <select id="cars" name="cars">
// <option value="volvo">Volvo</option>
// <option value="saab">Saab</option>
// <option value="fiat">Fiat</option>
//  <option value="audi">Audi</option>
//</select>

// export const FormInput = () => {
//     const [focused, setFocused] = useState(false);


//     const handleFocus = (e) => {
//         setFocused(true);
//     };

//     return (
//         <>
//             <Form>
//                 <Label>Input Label</Label>
//                 <InputField
//                       name="email"
//                       id="email"
//                       type="email"
//                       placeholder="Enter email address"
//                       className="inputs"
//                         onchange={onchange}
//                         onBlur={handleFocus}
//                     // onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
//                         focused={focused.toString()}
//                 />
//                 {/* <p >hello</p> */}
//                 {/* <ErrorMessage className="span">{errorMessage}</ErrorMessage> */}
//             </Form>
//         </>
//     );
// };
