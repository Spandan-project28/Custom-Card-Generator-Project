let form=document.querySelector("#searchBox");
let main=document.querySelector("#main");
let formInputs=document.querySelectorAll("input");
// let cardLayout=document.createElement("div");
// let img=document.createElement("img");
let load=document.querySelector("#load");


form.addEventListener("submit",(det)=>{

    det.preventDefault();
//removes hiden from loader
    load.classList.remove("hidden");

    setTimeout(() => {
        load.classList.add("hidden");
        //card outer part
    let cardLayout=document.createElement("div");
    main.appendChild(cardLayout);
    cardLayout.classList.add("cardSpace")
//pfp
let img=document.createElement("img");
img.classList.add("image");
img.setAttribute("src",formInputs[3].value);
cardLayout.appendChild(img);

//name div
let nameSpace=document.createElement("div");
nameSpace.classList.add("name-prof");
cardLayout.appendChild(nameSpace);

//name
let name=document.createElement("h1");
name.textContent= formInputs[0].value;
name.classList.add("nameStyle");
nameSpace.appendChild(name);

//profession
let profession=document.createElement("p");
profession.textContent= `(${formInputs[2].value})`;
profession.classList.add("profession");
nameSpace.appendChild(profession);

//phone
let phn=document.createElement("p");
phn.textContent= formInputs[1].value;
phn.classList.add("phone");
cardLayout.appendChild(phn);


//info
let info=document.createElement("p");
info.textContent= formInputs[4].value;
info.classList.add("para");
cardLayout.appendChild(info);
    }, 1500);

    console.log(formInputs);


});
