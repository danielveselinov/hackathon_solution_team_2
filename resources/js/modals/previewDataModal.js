$(function() {
    let path = `http://localhost:8000`

    $('body').on('click', '.view_data', function(e) {
        let image = $(this).attr('data-img')
        Swal.fire({
            width: 600,
            height: 670,
            imageUrl: `${path}/storage/${image}`,
            imageWidth: 600,
            imageHeight: 400,
            confirmButtonText: 'Close',
        })
    })
})
