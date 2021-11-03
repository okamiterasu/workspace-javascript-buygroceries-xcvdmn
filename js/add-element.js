/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
$('.hot').each(function () {
  const self = $(this);
  self.removeClass('hot');
  self.addClass('cool');
});

// traverse the elements
$('#one').next().next().text('milk');

// add a new element by clicking the plus sign
$('#todo').append('<li>candy</li>');
$('#add').click(addElement);
// before and after are for siblings
// append and prepend are for parent

const todo = $('#todo');
function addElement() {
  // add a new element
  const new_element = document.createElement('li');
  new_element.setAttribute('class', 'cool');
  todo.append(new_element);
  // add a input text box
  new_element.appendChild(document.createElement('input'));
  // whenever the user are done add the element
}

// bind click with the event handler

//  click the li element will change the changeStyle
//  three style : complete, cool, hot
function changeStyle() {
  const self = $(this);
  if (self.hasClass('cool')) {
    self.removeClass('cool');
    self.addClass('complete');
  } else if (self.hasClass('complete')) {
    self.removeClass('complete');
    self.addClass('hot');
  } else if (self.hasClass('hot')) {
    self.removeClass('hot');
    self.addClass('cool');
  }
}
$('#todo').children().click(changeStyle);

// delete complete element by clicking the trash can
document.getElementById('remove').addEventListener('click', removeElement);

function removeElement() {
  // remove the marked elements  -- element with style complete
}
