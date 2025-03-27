document.addEventListener('DOMContentLoaded', function(){
    lightGallery(document.getElementById('grid-gallery'), {
        plugins: [lgZoom, lgThumbnail],
        licenseKey: 'your_license_key',
        speed: 500,
        controls: true,
    });
})
