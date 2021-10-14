
var customerName = "bob"
var bestCustomer
const leastFavoriteCustomer = ""

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}
// how can i make this pass if bob is modife already with uppercase
function setBestCustomer() {
    bestCustomer = `not ${customerName}`
}

function overwriteBestCustomer(text1) {
    bestCustomer = text1
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "thank you"
}
