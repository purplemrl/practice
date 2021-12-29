
$(document).ready(function () {
    $("#btnshow").click(function () {
        $("#img1").css("display", "inline-block");
        $("#img2").css("display", "inline-block");
    });

    $("#img1").mouseover(function () {
        $("#img1").css("transform", "rotate(180deg");
    });

    $("#img1").mouseout(function () {
        $("#img1").css("transform", "rotate(360deg)");
    });

    $("#img2").mouseover(function () {
        $("#img2").css("opacity", "100%");
    });

    $("#img2").mouseout(function () {
        $("#img2").css("opacity", "50%");
    });

    $("#btnhide").click(function () {
        $("#img1").hide();
        $("#img2").hide();
    });

    $("#btnsave").click(function () {
        $("#name").text(fname.value + " " + lname.value);
    });

    $("#btnprint").click(function () {
        window.print();
    });
});


