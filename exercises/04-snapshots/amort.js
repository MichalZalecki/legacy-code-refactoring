export function amort(balance, interestRate, terms) {
  var monthlyRate = interestRate / 12;

  var payment =
    balance * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -terms)));

  var result =
    "Loan amount: $" +
    balance.toFixed(2) +
    "<br />" +
    "Interest rate: " +
    (interestRate * 100).toFixed(2) +
    "%<br />" +
    "Number of months: " +
    terms +
    "<br />" +
    "Monthly payment: $" +
    payment.toFixed(2) +
    "<br />" +
    "Total paid: $" +
    (payment * terms).toFixed(2) +
    "<br /><br />";

  result +=
    "<table border='1'><tr><th>Month #</th><th>Balance</th>" +
    "<th>Interest</th><th>Principal</th>";

  for (var count = 0; count < terms; ++count) {
    var interest = 0;

    var monthlyPrincipal = 0;

    result += "<tr align=center>";

    result += "<td>" + (count + 1) + "</td>";

    result += "<td> $" + balance.toFixed(2) + "</td>";

    interest = balance * monthlyRate;
    result += "<td> $" + interest.toFixed(2) + "</td>";

    monthlyPrincipal = payment - interest;
    result += "<td> $" + monthlyPrincipal.toFixed(2) + "</td>";

    result += "</tr>";

    balance = balance - monthlyPrincipal;
  }

  result += "</table>";

  return result;
}
