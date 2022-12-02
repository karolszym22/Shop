export class AddressModal {
  constructor() {
    this.addressContainer = new Array(); ///test
    this.isErrors = true;;
    this.emailError= true;;
    this.phoneNumberError = true;;
    this.cityNameError = true;;
    this.firstNameError = true;;
    this.lastNameError = true;;
    this.closeAddressModal();
    this.saveMailChanges();
  }

  updateDeliveryAddress = () => {
    const data = JSON.parse(sessionStorage.address);
    const addressElement = document.querySelectorAll(".user-address-value");
    addressElement.forEach((element, index) => {
      element.textContent = data[index];
    });
  }
  checkEmail = () => {
    let email = document.getElementById("email").value;

    let re = /^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*@([a-zA-Z0-9_-]+)(\.[a-zA-Z0-9_-]+)*(\.[a-zA-Z]{2,4})$/i;
    if (email.match(re) == null)
      document.querySelector(".email-attention").textContent =
        "Ten adres nie jest prawidłowy";
    else document.querySelector(".email-attention").textContent = "";
    this.emailError= false;
    this.addressContainer.push(email);
  }
  checkPhoneNumber = () => {
    let tel = document.getElementById("phone-number").value;
    console.log(tel);
    let reg = /^[0-9\+]{8,13}$/;
    if (!reg.test(tel))
      document.querySelector(".phone-number-attention").textContent =
        "nie poprawny numer telefonu";
    else document.querySelector(".phone-number-attention").textContent = "";
    this.phoneNumberError = false;
    this.addressContainer.push(tel);
  }
  addressValidation = () => {
    this.checkFirstName();
    this.checkLastName();
    this.checkCity();
    this.checkPhoneNumber();
    this.checkEmail();
    if (
      this.emailError== true &&
      this.phoneNumberError == true &&
      this.cityNameError == true &&
      this.firstNameError == true &&
      this.lastNameError == true
    ) {
      sessionStorage.setItem("address", JSON.stringify(this.addressContainer));
      this.hideAddressModal();
      this.updateDeliveryAddress();
    } else {
      this.addressContainer = new Array();
    }
  }
  checkFirstName = () => {
    const minimumLengthName = 1;
    let firstName = document.getElementById("first-name").value;
    if (firstName.length < minimumLengthName)
      document.querySelector(".first-name-attention").textContent =
        "błędne imię";
    else document.querySelector(".first-name-attention").textContent = "";
    this.firstNameError = false;
    this.addressContainer.push(firstName);
  }
  checkLastName = () => {
    let lastName = document.getElementById("last-name").value;
    if (lastName.length < 3)
      document.querySelector(".last-name-attention").textContent =
        "błędne nazwisko";
    else document.querySelector(".last-name-attention").textContent = "";
    this.lastNameError = false;
    this.addressContainer.push(lastName);
  }
  checkCity = () => {
    let cityName = document.getElementById("city").value;
    if (cityName.length < 2)
      document.querySelector(".city-attention").textContent = "błędne miasto";
    else document.querySelector(".city-attention").textContent = "";
    this.cityNameError = false;
    this.addressContainer.push(cityName);
  }
  openAddressModal = () => {
    document.querySelector(".address-modal").style.display = "inline-flex";
    document.querySelector(".dark-body").style.display = "inline-flex";
  }
  closeAddressModal = () => {
    const closeBttn = document.getElementById("close-address-modal");
    closeBttn.addEventListener("click", this.hideAddressModal);
  }
  hideAddressModal = () => {
    document.querySelector(".address-modal").style.display = "none";
    document.querySelector(".dark-body").style.display = "none";
  }
  saveMailChanges = () => {
    const saveBttn = document.querySelector(".save-information");
    saveBttn.addEventListener(
      "click",
      this.addressValidation.bind(this),
      false
    );
  }
}

const addressModal = new AddressModal();
