

$.getJSON('https://jsonplaceholder.typicode.com/todos/', function (data) {
    $.each(data, function (index) {
        // alert(data[index].title);
        // alert(data[index].id);
        $(".set").append(data[index].title + "<hr>");
        $("ul").click(function () {
            // if ($("#1").click(function () {
            //     $("#1").load("https://jsonplaceholder.typicode.com/todos/1");
            // }));

            $("li").each(function () {
                $(this).load("https://jsonplaceholder.typicode.com/todos/" + this.id);
            });
        });
    });
});


// $(document).ready(function () {
//     if ($("#1").click(function () {
//         $(this).load("https://jsonplaceholder.typicode.com/todos/1 ");
//     }));
// });
//https://jsonplaceholder.typicode.com/todos/