/* Thanksgiving JS */
//function to add a new meal item to the table
function newMeal()
{
  var newFoodText = document.getElementById('new-food').value;
  var newRatingText = document.getElementById('new-rating').value;
  var newCookText = document.getElementById('new-cook').value;

  var tableElement = document.getElementById('food-table');

  var tableRow = tableElement.insertRow(-1);

  var tableData = tableRow.insertCell(0);
  tableData.className = 'normal-text';
  tableData.innerText = newFoodText;

  tableData = tableRow.insertCell(1);
  tableData.className = 'normal-text';
  tableData.innerText = newRatingText;

  tableData = tableRow.insertCell(2);
  tableData.className = 'normal-text';
  tableData.innerText = newCookText;

  return;

}//end of newMeal()
