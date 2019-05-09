module.exports = {
  formatLong: date => {
    const year = date.slice(0, 4)
    const month = date.slice(5, 7)
    const day = date.slice(8)

    let stringMonth
    switch (month) {
      case "01":
        stringMonth = "Enero"
        break
      case "02":
        stringMonth = "Febrero"
        break
      case "03":
        stringMonth = "Marzo"
        break

      case "04":
        stringMonth = "Abril"
        break

      case "05":
        stringMonth = "Mayo"
        break

      case "06":
        stringMonth = "Junio"
        break

      case "07":
        stringMonth = "Julio"
        break

      case "08":
        stringMonth = "Agosto"
        break

      case "09":
        stringMonth = "Septiembre"
        break

      case "10":
        stringMonth = "Octubre"
        break

      case "11":
        stringMonth = "Noviembre"
        break

      case "12":
        stringMonth = "Diciembre"
        break
      default:
        stringMonth = "NONE"
    }

    let formatedDate = `${day} de ${stringMonth}, ${year}`

    return formatedDate
  },

  formatShort: date => {
    const year = date.slice(0, 4)
    const month = date.slice(5, 7)
    const day = date.slice(8)

    let stringMonth
    switch (month) {
      case "01":
        stringMonth = "ENE"
        break
      case "02":
        stringMonth = "FEB"
        break
      case "03":
        stringMonth = "MAR"
        break

      case "04":
        stringMonth = "ABR"
        break

      case "05":
        stringMonth = "MAY"
        break

      case "06":
        stringMonth = "JUN"
        break

      case "07":
        stringMonth = "JUL"
        break

      case "08":
        stringMonth = "AGO"
        break

      case "09":
        stringMonth = "SEP"
        break

      case "10":
        stringMonth = "OCT"
        break

      case "11":
        stringMonth = "NOV"
        break

      case "12":
        stringMonth = "DIC"
        break
      default:
        stringMonth = "NONE"
    }

    return { day , month: stringMonth, year}
  },
}
