const AllImagenMosaico = document.querySelectorAll(".mosaico_box-imgs")

AllImagenMosaico.forEach((Select) => {
     Select.addEventListener("mouseenter", () => {
        Select.classList.toggle("box-select")
    }) 
        Select.addEventListener("mouseleave", () => {
            Select.classList.toggle("box-select")
        })
    AllImagenMosaico.forEach((NoSelect) => {
        if(NoSelect !== Select) {
            Select.addEventListener("mouseenter",() => {
                NoSelect.classList.toggle("box-noselect")
                

            })
            Select.addEventListener("mouseleave", () => {
                NoSelect.classList.toggle("box-noselect")
            } ) 
        }
    })
});