$(document).ready(function() {

    // Delete function
    function registerDeleteCallBack() {
        $('.todo-list-remove').on('submit', function(event){
            $(this).parent().remove();
            return false;
        });
    }

    // Handle to-do item submission
    $('#todo-form').on('submit', function(event){

        // Check if user has input an item
        var itemText = $('#todo-form-add').val();
        if (itemText == '') {
            alert('Please enter something!');
            return false;
        }

        // Get the value and add it to the to-do list
        // Add delete button under each new item
        $('#todo-list').append('<li><div class="item-text">' + itemText +
                               '</div><form class="todo-list-remove"><input type="submit" id="delete" value="Hooray!! This is done."></form></li>');

        // Assign new delete button delete function
        registerDeleteCallBack();

        //Clear the form
        $('#todo-form-add').val('');
        return false;
    });

    // Assign existing delete buttons delete function
    registerDeleteCallBack();

    // Get user geolocation
    function showPosition(position) {
        console.log('Latitude: ' + position.coords.latitude);
        console.log('Latitude: ' + position.coords.longitude);
    }

    function errorHandler(err) {
        if(err.code == 1) {
            $('#show-error').html('Error: Geolocation access is denied!');
        } else if( err.code == 2) {
            $('#show-error').html('Error: Geeolcation is not unavailable!');
        }
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, errorHandler);
        }
        else {
            $('#show-error').html('Geolocation is not supported by this browser.');
        }
    }

    getLocation();
});