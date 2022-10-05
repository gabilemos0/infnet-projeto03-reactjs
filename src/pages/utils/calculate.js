const { modalUnstyledClasses } = require('@mui/material')

function calculateTotal(values) {
  const totalValue = values.reduce((pValue, cValue) => {
    return cValue[0] + pValue
  }, 0)
  return totalValue
}

function calculatePromo(values) {
  const promoValue = values.reduce((pValue, cValue) => {
    if (cValue[1]) {
      return cValue[1] + pValue
    }
    return 0 + pValue
  }, 0)

  return promoValue
}

module.exports = {
  calculateTotal,
  calculatePromo
}
