$(function()  {
    $(".devoured").on("click", function() {
        let id = $(this).attr("data-id");
        let devoured = $(this).data("devoured");
        let devouredStatus = {
            devoured: true
        };
        console.log(id)
        console.log(devouredStatus);
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: devouredStatus
        }).then(() => {
            location.reload();
        })
    });

    $(".create-form").on("submit", (i) => {
        i.preventDefault();

        let newBurger = {
            name: $("#burAdd").val().trim(),
            eaten: 0
        };

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("Created new Burger");
            location.reload();
        });
    });
});