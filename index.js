// First Part

function changeToIsrael()
{
    document.querySelector("#image").src = "images/israel.jpg"
}

function changeToUSA()
{
    document.querySelector("#image").src = "images/usa.jpg"
}

function changeToBrazil()
{
    document.querySelector("#image").src = "images/brazil.jpg"
}

function changeToFrance()
{
    document.querySelector("#image").src = "images/france.jpg"
}

document.querySelector("#Israel_Flag").addEventListener("click",changeToIsrael)
document.querySelector("#USA_Flag").addEventListener("click",changeToUSA)
document.querySelector("#Brazil_Flag").addEventListener("click",changeToBrazil)
document.querySelector("#France_Flag").addEventListener("click",changeToFrance)

// Second Part

function changeWidth()
{
    document.querySelector("#sasuke_img").style.width = document.querySelector("#input_id").value + "px"
}
document.querySelector("#sasuke_button").addEventListener("click",changeWidth)