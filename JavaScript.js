const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const birthDay = document.getElementById("birthDay");
const Address = document.getElementById("Address");
const City = document.getElementById("City");
const zipCode = document.getElementById("zipCode");
const landLine = document.getElementById("landLine");
const cellularPhone = document.getElementById("cellularPhone");
const Covide19Before = document.getElementById("Covide19Before");

const errorlist = document.getElementById("errors-list");
//event listeners
document.getElementById("prcbtn").addEventListener('click',proceed);
document.getElementById('bckbtn').addEventListener('click',back);
//reload

function back() {
    document.getElementById('formpage').style.display = 'block';
    document.getElementById('infopage').style.display = 'none';

}


function proceed() {
    if (!validator())
        return;
    <!-- alert('success');-->
    document.getElementById('formpage').style.display = 'none';
    document.getElementById('infopage').style.display = 'block';

    var list = document.getElementById('sum-data');
    var lstch = document.getElementById('sum-children');
    //we put fname,lname .... in data
    //so it will print :
    //*.yosi
    //*.cohen
    //etc

    //if we want to design it and print more info, for example instead of yosi we want : your name is yosi
    //then data = ['your name is'+firstName.value, ....] lets see
    var data = ['first name = '+firstName.value.trim(),lastName.value.trim(),birthDay.value.trim(),Address.value.trim(),
        City.value.trim(), zipCode.value.trim(), landLine.value.trim(), cellularPhone.value.trim(),
        Covide19Before.value.trim()];
    for(var i=0;i<data.length;i++)
        list.innerHTML+= "<li class='what you need here'>"+data[i]+"</li>";

    for(var i=0;i<x;++i)
        lstch.innerHTML += "<li class='what you need here'>"+ charr[i]+"</li>";//get values from sorted array instead of document

}

function validator() {
    errorlist.innerHTML = ''; //clear errors list

    function setInvalid(field, msg) {
        errorlist.innerHTML += '<li>' + field.getAttribute('id') + ': ' + msg + '</li>';
        field.classList.remove('is-valid')
        field.classList.add('is-invalid')
    }

    function setValid(field) {
        field.classList.remove('is-invalid')
        field.classList.add('is-valid')
    }

    function checkIfEmpty(field) {
        //alert(field.value.trim());
        return field.value == null || field.value.trim() == "";
       }
    }
