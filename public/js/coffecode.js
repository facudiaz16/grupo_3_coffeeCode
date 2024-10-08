document.addEventListener('DOMContentLoaded', function () {

    document.addEventListener('click', function (event) {
        if (!searchResultsContainer.contains(event.target) && event.target !== searchInput) {
            searchResultsContainer.style.display = 'none';
        }
    });

    
    const dropdownButton = document.getElementById('dropdownMenuButton1');
    const dropdownMenu = document.getElementById('dropdownMenu');


    document.querySelectorAll('.icono-eliminar').forEach(form => {
        form.onsubmit = confirmDelete;
    });

    // Funcion para comfirmar la eliminacion del productor
    function confirmDelete() {
        return confirm('¿Estás seguro de que deseas eliminar este producto? Esta acción no se puede deshacer.');
    }

    dropdownButton.addEventListener('click', function () {
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'block';
            adjustDropdownPosition();
        }
    });

    document.addEventListener('click', function (event) {
        if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });

    window.addEventListener('resize', adjustDropdownPosition);

    function adjustDropdownPosition() {
        const rect = dropdownButton.getBoundingClientRect();
       // dropdownMenu.style.top = `${rect.bottom + window.scrollY}px`;
        //dropdownMenu.style.left = `${Math.min(rect.left + window.scrollX+100, window.innerWidth - dropdownMenu.offsetWidth)}px`;
        dropdownMenu.style.right =`20px`;
        dropdownMenu.style.top =`127px`;
    }

    //codigo para menu acordeon en product detail
    let elementoAcordeon = document.getElementsByClassName("acordeon");
            for(let i=0; i<elementoAcordeon.length; i++ ){
                elementoAcordeon[i].addEventListener("click", function(){
                    this.classList.toggle("active");
                    let panel = this.nextElementSibling;
                    if(panel.style.display == "block"){
                        panel.style.display = "none";
                    }else{
                        panel.style.display = "block"
                    }
                });
            }
});
