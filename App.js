let xPos = 0;
let yPos = 0;

window.onload = Start()
{
}

function Start()
{
    xPos = Math.floor(Math.random() * 900) + 100;
    yPos = Math.floor(Math.random() * 600) + 100;
    document.getElementById("tresure").style.position = "absolute";
    document.getElementById("tresure").style.color = "red";
    document.getElementById("tresure").style.fontSize = "xx-large";
    //document.getElementById("tresure").style.visibility = "hidden";
    document.getElementById("tresure").style.left = xPos + "px";
    document.getElementById("tresure").style.top = yPos + "px";
    document.getElementById("tresure").style.cursor = "default";
}

function InRange(low, high, sum)
{
    return (low <= sum && sum <= high)
}

function OnClick()
{
    if (InRange(xPos - 50, xPos + 50, event.clientX) || InRange(xPos + 50, xPos - 50, event.clientX) && InRange(yPos - 50, yPos + 50, event.clientY) || InRange(yPos + 50, yPos - 50, event.clientY))
    {
        console.log("found");
        document.getElementById("tresure").style.visibility = "visible";
    }
    //if (event.clientX <= xPos - 10 && event.clientX >= xPos + 10 && event.clientY <= yPos - 10 && event.clientY >= yPos + 10 )
    //{
    //    console.log("found");
    //    document.getElementById("tresure").style.visibility = "visible";
    //}
}

