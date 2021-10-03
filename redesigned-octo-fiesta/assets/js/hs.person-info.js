const singleSelector = document.querySelector.bind(document);
const multiSelector = document.querySelectorAll.bind(document);

// Change full name
const btn_changeFullName = singleSelector("#js__change-full-name");
const fullName = singleSelector("#js__fullName");
const input_fullName = singleSelector("#js__full-name-inp");
input_fullName.value = fullName.textContent;
btn_changeFullName.onclick = () => {
    fullName.classList.add("d-none");
    btn_changeFullName.classList.add("d-none");
    input_fullName.classList.remove("d-none");
    input_fullName.select();
}
// End change full name
// ---
// Change email
const btn_changeEmail = singleSelector("#js__change-email");
const email = singleSelector("#js__email");
const input_email = singleSelector("#js__email-inp");
input_email.value = email.textContent;
btn_changeEmail.onclick = () => {
    email.classList.add("d-none");
    btn_changeEmail.style.visibility = "hidden";
    input_email.classList.remove("d-none");
    input_email.select();
}
// End change email
// ---
// Change phone
const btn_changePhone = singleSelector("#js__change-phone");
const phone = singleSelector("#js__phone");
const input_phone = singleSelector("#js__phone-inp");
input_phone.value = phone.textContent;
btn_changePhone.onclick = () => {
    phone.classList.add("d-none");
    btn_changePhone.style.visibility = "hidden";
    input_phone.classList.remove("d-none");
    input_phone.select();
}
// End change phone
// ---
// Change address
const btn_changeAddress = singleSelector("#js__change-address");
const address = singleSelector("#js__address");
const input_address = singleSelector("#js__address-inp");
input_address.value = address.textContent;
btn_changeAddress.onclick = () => {
    address.classList.add("d-none");
    btn_changeAddress.style.visibility = "hidden";
    input_address.classList.remove("d-none");
    input_address.select();
}
// End change address
// ---
// Change delivered address
const btn_changeDeliveredAddress = singleSelector("#js__change-delivered-address");
const deliveredAddress = singleSelector("#js__delivered-address");
const input_deliveredAddress = singleSelector("#js__delivered-address-inp");
input_deliveredAddress.value = deliveredAddress.textContent;
btn_changeDeliveredAddress.onclick = () => {
    deliveredAddress.classList.add("d-none");
    btn_changeDeliveredAddress.style.visibility = "hidden";
    input_deliveredAddress.classList.remove("d-none");
    input_deliveredAddress.select();
}
// End change delivered address

const btn_saveInfo = singleSelector("#js__save-person-info");
btn_saveInfo.onclick = () => {
    //Save full name
    fullName.innerText = input_fullName.value;
    fullName.classList.remove("d-none");
    btn_changeFullName.classList.remove("d-none");
    input_fullName.classList.add("d-none");
    // Save email
    email.innerText = input_email.value;
    email.classList.remove("d-none");
    btn_changeEmail.style.visibility = null;
    input_email.classList.add("d-none");
    // Save phone
    phone.innerText = input_phone.value;
    phone.classList.remove("d-none");
    btn_changePhone.style.visibility = null;
    input_phone.classList.add("d-none");
    // Save address
    address.innerText = input_address.value;
    address.classList.remove("d-none");
    btn_changeAddress.style.visibility = null;
    input_address.classList.add("d-none");
    // Save delivered address
    deliveredAddress.innerText = input_deliveredAddress.value;
    deliveredAddress.classList.remove("d-none");
    btn_changeDeliveredAddress.style.visibility = null;
    input_deliveredAddress.classList.add("d-none");

}