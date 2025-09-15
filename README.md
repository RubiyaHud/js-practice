# js-practice

## class - 4 (Let, const and var ki kahani | chai aur #javascript)
<img width="732" height="601" alt="image" src="https://github.com/user-attachments/assets/402fdb31-4324-4180-a3d4-1a6ffa44a156" />

---

## class - 5 (Datatypes and ECMA standards | chai aur #javascript)
<img width="492" height="382" alt="image" src="https://github.com/user-attachments/assets/f0b48181-2169-48fc-aea1-2a305f05acf9" />

Example:

```
  const id1 = Symbol("id");
  const id2 = Symbol("id");
  
  console.log(id1 === id2); // false (each Symbol is unique)
  
  // Using Symbol as a key
  const user = {
    [id1]: "User123"
  };
  
  console.log(user[id1]); // "User123"
```

⚡ In short: Yes, Symbol is a primitive data type in JS and is useful for creating unique identifiers.

<img width="709" height="372" alt="image" src="https://github.com/user-attachments/assets/fb3695e7-945c-4284-8f39-510b35b04ea7" />

<img width="782" height="464" alt="image" src="https://github.com/user-attachments/assets/e2d9ca70-84e6-4d38-8e65-f663fcd2515b" />

---

## class - 6 (Datatype conversion confusion | chai aur #javascript)
```
  let score = 33
  //let score = "33ab"
  //let score = null
  //let score = undefined
  //let score = true
  //let score = false
  console.log(typeof score);
  
  
  let valueInNumber = Number(score)
  console.log(typeof valueInNumber);
  console.log(valueInNumber);
```
<img width="999" height="610" alt="image" src="https://github.com/user-attachments/assets/bd77e265-e97e-48ed-b463-7eea83202bed" />

```
  //let isLoggedIn = 1
  //let isLoggedIn = 0
  //let isLoggedIn = ""
  //let isLoggedIn = "abc"
  //let isLoggedIn = null
  //let isLoggedIn;
  let isLoggedIn = NaN
  console.log(typeof isLoggedIn);
  
  let booleanIsLoggedIn = Boolean(isLoggedIn)
  console.log(booleanIsLoggedIn);
  console.log(typeof booleanIsLoggedIn);

```
<img width="996" height="587" alt="image" src="https://github.com/user-attachments/assets/586053c8-62ff-4fd8-903f-b1621ac8a26c" />

```
  //let someNumber = 33
  //let someNumber = NaN
  //let someNumber = null
  let someNumber;
  console.log(typeof someNumber);
  
  let stringNumber = String(someNumber)
  console.log(stringNumber);
  console.log(typeof stringNumber);

```
<img width="988" height="445" alt="image" src="https://github.com/user-attachments/assets/4735e657-73b1-45ce-a9ba-4c9c31d81101" />

---
## Exceptions / Important Notes 
<img width="776" height="387" alt="image" src="https://github.com/user-attachments/assets/563fa9ea-5786-4a76-bc0e-50669f96d44f" />

### typeof
<img width="793" height="250" alt="image" src="https://github.com/user-attachments/assets/550bc298-8241-4e93-b6ad-6f770f649a6b" />

---

### VS Code Extension
<img width="1573" height="844" alt="image" src="https://github.com/user-attachments/assets/990eefd8-aa0a-4154-85c0-392a0b1ec0bb" />

---

### JS Documentation (Official website)
<img width="1811" height="800" alt="image" src="https://github.com/user-attachments/assets/a82b66cf-45d6-4591-91e7-c2ae4c9b2527" />

---
