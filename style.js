
/*------------------------------------------profitilo image------------------------------------------------------------------*/
  document.addEventListener('DOMContentLoaded', function() {
            // Additional animation enhancements
            const elements = document.querySelectorAll('.text-content, .image-container');
            
            elements.forEach(el => {
                el.style.opacity = '1';
            });
            
            // Smooth scroll for anchors
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        });
/*------------------------------------------profitilo image------------------------------------------------------------------*/


