
function requirePassword(callback) {
  const pwd = prompt("Enter password:");
  if (pwd === "admin123") {
    callback();
  } else {
    alert("Incorrect password!");
  }
}

function addRow(tableId) {
  requirePassword(() => {
    const table = document.getElementById(tableId).getElementsByTagName('tbody')[0];
    const row = table.insertRow();
    const date = prompt("Enter Date:");
    const cr = prompt("Enter Amount CR:");
    const db = prompt("Enter Amount DB:");
    const duration = prompt("Enter Duration:");
    const maturity = prompt("Enter Maturity:");
    const details = prompt("Enter Details:");

    row.innerHTML = `<td>${date}</td><td>${cr}</td><td>${db}</td><td>${duration}</td><td>${maturity}</td><td class="${details.toLowerCase()==='closed'?'green':''}">${details}</td><td><button onclick='deleteRow(this)'>Delete</button></td>`;
  });
}

function deleteRow(btn) {
  requirePassword(() => {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  });
}
