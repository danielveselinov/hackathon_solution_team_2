$(function() {
    let path = `http://localhost:8000`

    $('body').on('click', '.view_image', function(e) {
        let image = $(this).attr('data-img')
        Swal.fire({
            width: 600,
            imageUrl: `${path}/storage/${image}`,
            imageWidth: 600,
            imageHeight: 400,
            confirmButtonText: 'Close',
            confirmButtonColor: "#226CAF",
        })
    })
})
