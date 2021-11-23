let xPos = 0;
let yPos = 0;
let clickCount = 0;
let distanceHelper = 90;

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
    document.getElementById("tresure").style.visibility = "hidden";
    document.getElementById("tresure").style.left = xPos + "px";
    document.getElementById("tresure").style.top = yPos + "px";
    document.getElementById("tresure").style.cursor = "default";
    document.getElementById("checker").innerHTML = "";
    clickCount = 0;
}

function InRangeX(low, high, sum)
{
    return ((sum - high) * (sum - low) <= 0);
}

function OnClick()
{
    if (!IsGameOver())
    {
        const yClick = event.clientY - 50;
        if (InRangeX(xPos + distanceHelper, xPos - distanceHelper, event.clientX) && InRangeX(yPos + distanceHelper, yPos - distanceHelper, yClick))
        {
            document.getElementById("tresure").style.visibility = "visible";
            document.getElementById("checker").innerHTML = "YOU WON!";
            setTimeout(Start, 15000);
        }
        Helper(event.clientX, yClick);
        clickCount++;
    }
    else
    {
        document.getElementById("checker").innerHTML = "YOU LOST!";
        document.getElementById("tresure").style.visibility = "visible";
        setTimeout(Start, 15000);
    }
}

function IsGameOver()
{
    if (clickCount >= 4)
    {
        return true;
    }
    return false;
}

function Helper(clickX, clickY)
{
    if (clickX > xPos && clickY > yPos)
    {
        document.getElementById("checker").innerHTML = "More to the left and up!";
    }
    else if (clickX < xPos && clickY < yPos)
    {
        document.getElementById("checker").innerHTML = "More to the right and down!";
    }
    else if (clickX > xPos && clickY < yPos)
    {
        document.getElementById("checker").innerHTML = "More to the left and down!";
    }
    else if (clickX < xPos && clickY > yPos)
    {
        document.getElementById("checker").innerHTML = "More to the right and up!";
    }
}

