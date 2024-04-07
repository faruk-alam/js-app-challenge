var addItem = document.getElementById("addForm")
var listItem = document.getElementById("items")

var filter = document.getElementById("filter")


addItem.addEventListener("submit",newitemAdd)
listItem.addEventListener("click",removeItem)
filter.addEventListener("keyup",itemFilter)

// function for adding new item-
  function newitemAdd(e){
    e.preventDefault();

      var newItem = document.getElementById("item").value;
      var newEliment = document.createElement ("li");
      var newText = document.createTextNode(newItem)
      newEliment.appendChild(newText)
      listItem.appendChild(newEliment)
      var addButton = document.createElement("button")
      addButton.appendChild(document.createTextNode("X"))
      newEliment.appendChild(addButton)
  }

  // function for deleting an item-
  function removeItem(e) {
    if(e.target.classList.contains("delete")){
        if (confirm("Are you sure ?")){
         var selectedItem = e.target.parentElement;
        listItem.removeChild(selectedItem);
        }
    }
  }

  // function for filtering item -

  function itemFilter(e) {
    var textInput = e.target.value.toLowerCase();
    var items = listItem.getElementsByTagName("li");
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(textInput) != -1){
           item.style.display = "flex";
        }
        else{
            item.style.display = "none";
        }
    })
  }