$(function() {
    $('body').on('click', '.view_image', function(e) {
        let image = $(this).attr('data-img')
        Swal.fire({
            imageUrl: image,
            imageWidth: 400,
            imageHeight: 200,
        })
        // $.post('', {}).then
    })

})