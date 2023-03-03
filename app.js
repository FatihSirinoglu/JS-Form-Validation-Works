// let userNameEl = document.getElementById("userName")
// let eMailEl = document.getElementById("eMail")
// let passwordEl = document.getElementById("password")
// let submitEl = document.getElementById("submit")

// let id = (id) => {
//     return document.getElementById(id)
// }

let id = (id) =>  document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes)

let userNameEl = id("userName"),
    eMailEl = id("eMail"),
    passwordEl = id("password"),
    submitEl = id("submit"),
    formEl = id("form"),
    errorMsgEl = classes("error"),
    successIconEl = classes("success-icon"),
    failureIconEl = classes("failure-icon");

    // getElement'S'ByClassName 's' means there is more than single error and we should know how to target which error is whom's.
    // errorMsg[] = [userNameError, eMailError, passwordError]
    // when we say errorMsg[1].innerHTML = "xxxx" eMailError will be manipulated.
    // successIconEl and failureIconEl are just the same.

    formEl.addEventListener("submit", (e)=>{
        e.preventDefault()
        // if (userNameEl.value === "") {
        //     errorMsgEl[0].innerHTML = "This area can not be empty";
        //     failureIconEl[0].style.opacity = "1"
        //     successIconEl[0].style.opacity = "0"
        // } else{
        //     errorMsgEl[0].innerHTML = ""
        //     failureIconEl[0].style.opacity = "0"
        //     successIconEl[0].style.opacity = "1"
        // }
        // instead of this we should define a function and use it for all of the HTML inputs. So we ll create a function that called engine below

        engine(userNameEl,[0],"Username area cannot be empty!")
        engine(eMailEl,[1],"E-mail area cannot be empty!")
        engine(passwordEl,[2],"Password area cannot be empty!")
    })


let engine = (id,serial,comment) => {
    // JS does considers space button as a value, so if user uses space button for any input value it will accepted as a value. To resolve this issue we should use trim() function. 
     if (id.value.trim() === "") {
            errorMsgEl[serial].innerHTML = comment
            failureIconEl[serial].style.opacity = "1"
            successIconEl[serial].style.opacity = "0"
        } else{
            errorMsgEl[serial].innerHTML = ""
            failureIconEl[serial].style.opacity = "0"
            successIconEl[serial].style.opacity = "1"
        }
}







