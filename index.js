
var customerName = `bob`
var bestCustomer
// bestCustomer
const leastFavoriteCustomer = "billy"

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
// how can i make this pass if bob is modife already with uppercase
function setBestCustomer() {
    bestCustomer = `not bob`
}

function overwriteBestCustomer(text1) {
    bestCustomer = text1
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'maybe fred'
}
