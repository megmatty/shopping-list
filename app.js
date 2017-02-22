
//Add item to list
function addItem() {
	var item = $('#shopping-list-entry').val();
	//capture list value
	var newListItem = $('.shopping-list li:last').clone();
	//clone an existing list item
	newListItem.appendTo('.shopping-list');
	//attach it to the end of the list
	$(newListItem).children('.shopping-item').first().text(item);
	//select the span inside this list item, change the text to entered value
}

//Check and uncheck item
function checkItemToggle() {
	$(this).parents('li').children('.shopping-item').toggleClass('shopping-item__checked');
}

//Remove item
function removeItem() {
	$(this).parents('ul li').remove();
}

//Event handler for add item - button
$('#js-shopping-list-form button').on('click', function(event) {
	event.preventDefault();
	addItem();
});

//Event handler for add item - return key
$('#js-shopping-list-form button').keypress(function(event) {
	event.preventDefault();
	if(event.which == 13) {
		addItem();
	}
});

//Event handler for remove item
$(document).on('click', '.shopping-item-delete', removeItem); 
	//this syntax apparently makes it handle dynamically generated items

//Event handler for check toggle item
$(document).on('click', '.shopping-item-toggle', checkItemToggle);

