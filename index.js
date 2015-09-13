$(".submit").click(function clikcing() {

	var my_name = $(".name").val();
	var my_msg = $(".msg").val();
	var new_li = $("<li></li>");

	new_li.text(my_name + "'s messages is: " + my_msg);

	$(".messages").append(new_li);
});