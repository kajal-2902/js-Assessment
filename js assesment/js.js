function formee() {
    var a = document.getElementById("bookingType").value;
    var b = document.getElementById("slot")
    var c = document.getElementById("time")
    var d = document.getElementById("date")


    if (a === "fullDay") {
        b.style.display = "none"
        c.style.display = "none"
        d.style.display = "none"
    }
    else if (a === "halfDay") {
        b.style.display = "block"
        c.style.display = " none"

    }
    else if (a === "Hourlyday") {
        b.style.display = "none"
        c.style.display = " block"

    }
}

function validity_form(src) {


    if (src.booked == "") {
        document.getElementById("demo1").innerHTML = " plase enter the dayss ";

        src.booked.focus()
        return false;
    }



    if (src.uname.value == "") {
        document.getElementById("demo1").innerHTML = " please enter the first name";
        document.getElementById("demo1").style.color = "red"
         
        src.uname.focus()
        return false;
    }

    if (src.phonenumber.value == "") {
        document.getElementById("demo1").innerHTML = " please enter the  phone number ";
        src.phonenumber.focus()
        return false;

    }

    if (src.email.value == "") {
        document.getElementById("demo1").innerHTML = " please enter your email id ";
        src.email.focus()
        return false;
    }


    if (src.person.value == "") {
        document.getElementById("demo1").innerHTML = " please enter your number of person ";
        src.person.focus()
        return false;
    }

    if (src.dob.value == "") {
        document.getElementById("demo1").innerHTML = " please enter your date of birth      ";
        src.dob.focus()
        return false;
    }
}