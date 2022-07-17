$(function () {
    $(".confirm_image_delete").click(function (event) {
        event.preventDefault()

        let form = $(this).closest("form")

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((willDelete) => {
            if (willDelete.isConfirmed) {
                form.submit()
            }
        })
    })
})
