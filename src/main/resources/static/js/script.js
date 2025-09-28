const today = new Date().toISOString().split('T')[0]

const tripTypes = document.querySelectorAll('input[name="tripType"]')
const tripTypeError = document.getElementById('tripTypeError')

const departureCity = document.getElementById('departureCity')
const departureCityError = document.getElementById('departureCityError')

const arrivalCity = document.getElementById('arrivalCity')
const arrivalCityError = document.getElementById('arrivalCityError')

const sameCityErrors = document.querySelectorAll('.sameCityError')

const airline = document.getElementById('airline')
const airlineError = document.getElementById('airlineError')

const departureDate = document.getElementById('departureDate')
const departureDateError = document.getElementById('departureDateError')

const returnDate = document.getElementById('returnDate')
const returnDateError = document.getElementById('returnDateError')

const adultsCount = document.getElementById('adultsCount')
const adultsCountError = document.getElementById('adultsCountError')

const firstName = document.getElementById('firstName')
const firstNameError = document.getElementById('firstNameError')

const lastName = document.getElementById('lastName')
const lastNameError = document.getElementById('lastNameError')

const passportNumber = document.getElementById('passportNumber')
const passportNumberError = document.getElementById('passportNumberError')

const nationality = document.getElementById('nationality')
const nationalityError = document.getElementById('nationalityError')

const expiryDate = document.getElementById('expiryDate')
const expiryDateError = document.getElementById('expiryDateError')

const issueDate = document.getElementById('issueDate')
const issueDateError = document.getElementById('issueDateError')

const phoneNumber = document.getElementById('phoneNumber')
const phoneNumberError = document.getElementById('phoneNumberError')

const email = document.getElementById('email')
const emailError = document.getElementById('emailError')

const confirmEmail = document.getElementById('confirmEmail')
const confirmEmailError = document.getElementById('confirmEmailError')

const streetAddress = document.getElementById('streetAddress')
const streetAddressError = document.getElementById('streetAddressError')

const city = document.getElementById('city')
const cityError = document.getElementById('cityError')

const province = document.getElementById('province')
const provinceError = document.getElementById('provinceError')

const postalCode = document.getElementById('postalCode')
const postalCodeError = document.getElementById('postalCodeError')

const country = document.getElementById('country')
const countryError = document.getElementById('countryError')

// Clear Error
const clearErrors = (element, error, input = false) => {
  element.addEventListener(!input ? 'change' : 'input', () => {
    error.textContent = ''
    error.style.display = 'none'
  })
}

// Clears trip type error message
tripTypes.forEach((tripType) => {
  tripType.addEventListener('change', () => {
    tripTypeError.textContent = ''
    tripTypeError.style.display = 'none'
  })
})

// Clears departure city error message
clearErrors(departureCity, departureCityError)

// Clears arrival city error message
clearErrors(arrivalCity, arrivalCityError)

// Clears same city error message
const clearSameCityErrors = (element) => {
  element.addEventListener('change', () => {
    if (validateArrivalDepartureCityDistinct()) {
      sameCityErrors.forEach((sameCityError) => {
        sameCityError.textContent = ''
        sameCityError.style.display = 'none'
      })
    }
  })
}
clearSameCityErrors(departureCity)
clearSameCityErrors(arrivalCity)

// Clears airline error message
clearErrors(airline, airlineError)

// Clears departure date error message
clearErrors(departureDate, departureDateError)

// Clears return date error message
clearErrors(returnDate, returnDateError)

// Clears adult count error message
clearErrors(adultsCount, adultsCountError, true)

// Clears first name error message
clearErrors(firstName, firstNameError, true)

// Clears last name error message
clearErrors(lastName, lastNameError, true)

// Clears passport number error message
clearErrors(passportNumber, passportNumberError, true)

// Clears nationality error message
clearErrors(nationality, nationalityError)

// Clears expiry date error message
clearErrors(expiryDate, expiryDateError)

// Clears issue date error message
clearErrors(issueDate, issueDateError)

// Clears phone number error message
clearErrors(phoneNumber, phoneNumberError, true)

// Clears email error message
clearErrors(email, emailError, true)

// Clears confirm email error message
clearErrors(confirmEmail, confirmEmailError, true)

// Clears street address error message
clearErrors(streetAddress, streetAddressError, true)

// Clears city error message
clearErrors(city, cityError, true)

// Clears province error message
clearErrors(province, provinceError, true)

// Clears postal code error message
clearErrors(postalCode, postalCodeError, true)

// Clears country error message
clearErrors(country, countryError, true)

//Validate
const validate = (element, errorElement, errorMessage = 'This field') => {
  if (!element.value) {
    errorElement.textContent = `${errorMessage} is required`
    errorElement.style.display = 'block'
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return false
  }
  return true
}

//validates that the trip type is selected
const validateTripType = () => {
  const selectedTrip = document.querySelector('input[name="tripType"]:checked')
  if (selectedTrip == null) {
    tripTypeError.textContent =
      'Please select either "Round Trip" or "One Way Trip"'
    tripTypeError.style.display = 'block'

    tripTypeError.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return false
  }
  return true
}

//validates that the arrival and departure cities are different
const validateArrivalDepartureCityDistinct = () => {
  if (
    departureCity.value &&
    arrivalCity.value &&
    departureCity.value == arrivalCity.value
  ) {
    sameCityErrors[0].textContent = 'Must be different from arrival city'
    sameCityErrors[0].style.display = 'block'
    sameCityErrors[1].textContent = 'Must be different from departure city'
    sameCityErrors[1].style.display = 'block'
    sameCityErrors[0].scrollIntoView({ behavior: 'smooth', block: 'start' })
    return false
  }
  return true
}

//Disables return date field if one way trip is selected
tripTypes.forEach((tripType) => {
  tripType.addEventListener('change', () => {
    returnDate.disabled = false

    const selectedTrip = document.querySelector(
      'input[name="tripType"]:checked'
    )

    if (selectedTrip.value == 'One Way Trip') {
      returnDate.disabled = true
      returnDateError.textContent = ''
      returnDateError.style.display = 'none'
    }
  })
})

//validates that the return date is entered
const validateReturnDate = () => {
  if (!returnDate.value && !returnDate.disabled) {
    returnDateError.textContent = 'Return date is required'
    returnDateError.style.display = 'block'
    returnDateError.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return false
  }
  return true
}

//Ensures that user can only select today's date or futures date for departure and return date
departureDate.min = today
returnDate.min = today

//Ensures return date is always greater than or equal to departure date
departureDate.addEventListener('change', () => {
  returnDate.min = departureDate.value
  returnDate.value = ''
})

// This prevents the user to enter value less than 1 as adult count
adultsCount.addEventListener('input', () => {
  if (adultsCount.value < 1) adultsCount.value = ''
})

expiryDate.min = today //ensures that user can only select today's date or future dates for expiry date
issueDate.max = today //ensures that user can only select today's date or past dates for issue date

//checks if phone number is valid input
phoneNumber.addEventListener('input', () => {
  const phoneNumberRegex =
    /^[\+]?[0-9]{0,3}\W?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

  phoneNumberError.textContent = ''
  phoneNumberError.style.display = 'none'
  if (!phoneNumber.value.match(phoneNumberRegex)) {
    phoneNumberError.textContent = 'Phone number is not valid'
    phoneNumberError.style.display = 'block'
  }
})

//checks whether email matches confirm email
const emailMatch = () => {
  confirmEmailError.textContent = ''
  confirmEmailError.style.display = 'none'
  if (email.value != confirmEmail.value) {
    confirmEmailError.textContent = "Email doesn't match"
    confirmEmailError.style.display = 'block'
  }
}
email.addEventListener('input', emailMatch)
confirmEmail.addEventListener('input', emailMatch)

//checks whether email is valid input
email.addEventListener('input', () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  emailError.textContent = ''
  emailError.style.display = 'none'
  if (!email.value.match(emailRegex)) {
    emailError.textContent = 'Email is not valid'
    emailError.style.display = 'block'
  }
})

const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', (event) => {
  event.preventDefault()

  let isValid = true

  if (!validateTripType()) isValid = false

  //validates that the departure city is selected
  if (!validate(departureCity, departureCityError, 'Departure city'))
    isValid = false

  //validates that the arrival city is selected
  if (!validate(arrivalCity, arrivalCityError, 'Arrival city')) isValid = false

  if (!validateArrivalDepartureCityDistinct()) isValid = false

  //validates that the airline is selected
  if (!validate(airline, airlineError, 'Airline')) isValid = false

  //validates that the departure date is entered
  if (!validate(departureDate, departureDateError, 'Departure date'))
    isValid = false

  if (!validateReturnDate()) isValid = false

  //validates that the adult count is entered
  if (!validate(adultsCount, adultsCountError)) isValid = false

  //validates that the first name is entered
  if (!validate(firstName, firstNameError, 'First name')) isValid = false

  //validates that the last name is entered
  if (!validate(lastName, lastNameError, 'Last name')) isValid = false

  //validates that the passport number is entered
  if (!validate(passportNumber, passportNumberError, 'Passport number'))
    isValid = false

  //validates that the nationality is entered
  if (!validate(nationality, nationalityError, 'Nationality')) isValid = false

  //validates that the passport expiry date is entered
  if (!validate(expiryDate, expiryDateError, "Passport's expiry date"))
    isValid = false

  //validates that the passport issue date is entered
  if (!validate(issueDate, issueDateError, "Passport's issue date"))
    isValid = false

  //validates that the phone number is entered
  if (!validate(phoneNumber, phoneNumberError, 'Phone Number')) isValid = false

  //validates that the email is entered
  if (!validate(email, emailError, 'Email')) isValid = false

  //validates that the confirm email is entered
  if (!validate(confirmEmail, confirmEmailError, 'Confirm email'))
    isValid = false

  //validates that the confirm is entered
  if (!validate(confirmEmail, confirmEmailError, 'Confirm email'))
    isValid = false

  //validates that the street address is entered
  if (!validate(streetAddress, streetAddressError, 'Street address'))
    isValid = false

  //validates that the city is entered
  if (!validate(city, cityError, 'City')) isValid = false

  //validates that the province is entered
  if (!validate(province, provinceError, 'Province')) isValid = false

  //validates that the postal code is entered
  if (!validate(postalCode, postalCodeError, 'Postal code')) isValid = false

  //validates that the country is entered
  if (!validate(country, countryError, 'Country')) isValid = false

  if(isValid) document.getElementById('bookingForm').submit()
})