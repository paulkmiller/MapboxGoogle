function updateCount(){
  var count = $('#todos li').length,
      done = $('#todos li input:checked').length;
  $('#count').html(count - done);
}

$('#add').click(function(e){
  e.preventDefault();

  var newValue = $('#newItem').val(),
      newIndex = $('#todos li').length,
      newItem = '<li><input type="checkbox" class="todo-check" id="todo-'+newIndex+'"><label for="todo-'+newIndex+'" class="todo-content">'+newValue+'</span></li>';

  $('#todos').append(newItem);
  $('#newItem').val('');
  updateCount();
});

$('body').on('click', '.todo-check', function(){
  updateCount();
});

$('#clear').click(function(){
  $('#todos').html('');
  updateCount();
});

$('#clearCompleted').click(function(){
  $('#todos .todo-check:checked').parent().remove();
  updateCount();
});