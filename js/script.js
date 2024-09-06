const elsAccordion = document.querySelectorAll(".js-accordion"),
    elsAccordionToggler = document.querySelectorAll(".accordion__toggler");


elsAccordion.forEach(elAccordion=> {
    elAccordion.addEventListener("click", (e)=> {
        if(elAccordion.classList.contains("active")) {
            elAccordion.classList.remove("active");
        }
        else {
            elsAccordion.forEach(item=> {
                item.classList.remove("active");
            })
            elAccordion.classList.toggle("active");
        }




    })
})