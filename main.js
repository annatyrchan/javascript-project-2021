(()=>{const e=document.querySelector(".allCats"),t=document.querySelector(".addNewCat"),n=()=>{e.style.display="none"===getComputedStyle(e).display?"block":"none",t.style.display="none"===getComputedStyle(t).display?"block":"none"};let c=[],a="";const o=()=>{document.getElementById("inputNewName").value="",document.getElementById("inputNewAge").value="",document.getElementById("inputNewColour").value="",document.getElementById("inputNewDescription").value="",fetch("https://api.thecatapi.com/v1/images/search").then((e=>{if(!e.ok)throw Error("error");return e.json()})).then((e=>{a=e[0].url;const t=`<image src=${e[0].url} class="">`;document.querySelector("#catImage").innerHTML=t})).catch((e=>{console.log(e)}))};document.querySelector("#goToHome").addEventListener("click",(()=>{o(),n()})),document.querySelector("#addNewCatBtn").addEventListener("click",(()=>n())),fetch("https://api.thecatapi.com/v1/images/search").then((e=>{if(!e.ok)throw Error("error");return e.json()})).then((e=>{a=e[0].url;const t=`<image src=${e[0].url} class="">`;document.querySelector("#catImage").innerHTML=t})).catch((e=>{console.log(e)})),fetch("./assets/data.json").then((e=>e.json())).then((e=>{console.log(e),c=e.cats;const t=c.map((e=>`\n      <div class="col-md-4">\n        <div class="card mb-3">\n            <img src="${e.url}">\n            <div class="card-body" id="picture">\n                <p class="card-text" id="cats">Name: ${e.name}</p>\n                <p class="card-text" id="cats">Colour: ${e.colour}</p>\n                <p class="card-text" id="cats">Age: ${e.age}</p>\n                <p class="card-text" id="cats">Description: ${e.description}</p>\n            </div>\n        </div>\n      </div>\n      `)).join("");document.querySelector(".allCats .row").insertAdjacentHTML("afterbegin",t)})).catch((e=>{console.log(e)})),document.querySelector("#saveBtn").addEventListener("click",(()=>{if(""!==document.getElementById("inputNewName").value.trim()||(document.getElementById("inputNewName").style.borderColor="red",0)){const e={name:document.getElementById("inputNewName").value,age:document.getElementById("inputNewAge").value,colour:document.getElementById("inputNewColour").value,description:document.getElementById("inputNewDescription").value,url:a};c.push(e);const t=`\n      <div class="col-md-4">\n        <div class="card mb-3">\n            <img src="${e.url}">\n            <div class="card-body" id="picture">\n                <p class="card-text" id="cats">Name: ${e.name}</p>\n                <p class="card-text" id="cats">Colour: ${e.colour}</p>\n                <p class="card-text" id="cats">Age: ${e.age}</p>\n                <p class="card-text" id="cats">Description: ${e.description}<p>\n            </div>\n        </div>\n      `;document.querySelector(".allCats .row").insertAdjacentHTML("afterbegin",t),o(),n()}}))})();
//# sourceMappingURL=main.js.map