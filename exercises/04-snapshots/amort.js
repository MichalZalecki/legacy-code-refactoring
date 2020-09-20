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

    result += "<tr align=center>\n";

    result += "\t<td>" + (count + 1) + "</td>\n";

    result += "\t<td> $" + balance.toFixed(2) + "</td>\n";

    interest = balance * monthlyRate;
    result += "\t<td> $" + interest.toFixed(2) + "</td>\n";

    monthlyPrincipal = payment - interest;
    result += "\t<td> $" + monthlyPrincipal.toFixed(2) + "</td>\n";

    result += "</tr>\n";

    balance = balance - monthlyPrincipal;
  }

  result += "</table>";

  return result;
}
