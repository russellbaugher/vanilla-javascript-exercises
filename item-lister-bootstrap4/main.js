var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form Submit Event
form.addEventListener('submit', addItem);

// Delete Event
itemList.addEventListener('click', removeItem);
//Filter addEventListener
filter.addEventListener('keyup', filterItems);

// Add Item
function addItem(e){
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    // Create New li Element
    var li = document.createElement('li');
    // Add Class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create del button Element
    var deleteBtn = document.createElement('button');

    // Add classes to deleteBtn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);
};

// Remove Item
function removeItem(e){
    if (e.target.classList.contains('delete')){
      if (confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
}

//Filter items
function filterItems(e){
    // Convert to lowercase
    var text = e.target.value.toLowerCase();
    //Get li's
    var items = itemList.getElementsByTagName('li');
    //Convert to array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if (itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    })

};
