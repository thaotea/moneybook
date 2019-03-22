

document.getElementById('add1').addEventListener('click', function() {
  var value = document.getElementById('input1').value;
  if (value) {
    var item2 = document.createElement('li');
    item2.innerText = "Coffee";
    addItemList(value, item2);
    document.getElementById('input1').value = '';
  }
});

document.getElementById('add2').addEventListener('click', function() {
  var value = document.getElementById('input2').value;
  if (value) {
    var item2 = document.createElement('li');
    item2.innerText = "Groceries";
    addItemList(value, item2);
    document.getElementById('input2').value = '';
  }
});

document.getElementById('add3').addEventListener('click', function() {
  var value = document.getElementById('input3').value;
  if (value) {
    var item2 = document.createElement('li');
    item2.innerText = "Gas";
    addItemList(value, item2);
    document.getElementById('input3').value = '';
  }
});

document.getElementById('add4').addEventListener('click', function() {
  var value = document.getElementById('input4').value;
  if (value) {
    var item2 = document.createElement('li');
    item2.innerText = "Bills";
    addItemList(value, item2);
    document.getElementById('input4').value = '';
  }
});

function addItemList(text, item2) {
  var list = document.getElementById('list');
  var list2 = document.getElementById('list3');
  var item = document.createElement('li');
  item.innerText = '$'+(parseInt(text)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
;
  list2.insertBefore(item2, list2.childNodes[0]);
  list.insertBefore(item, list.childNodes[0]);
}
