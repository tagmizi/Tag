window.addEventListener('load', function() {
    // Get all image containers
    var imageContainers = document.querySelectorAll('.equal-image-height .img-fluid');

    // Calculate the maximum height among all images
    var maxHeight = 0;
    for (var i = 0; i < imageContainers.length; i++) {
      var height = imageContainers[i].offsetHeight;
      if (height > maxHeight) {
        maxHeight = height;
      }
    }

    // Set the maximum height to all image containers
    for (var j = 0; j < imageContainers.length; j++) {
      imageContainers[j].style.height = maxHeight + 'px';
    }
  });