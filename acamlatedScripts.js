function openSidebar()
{
    if (window.innerWidth >= 993)
    {
        return;
    }

    openOverlay();

    let sidebar = document.getElementById("sidebar");

    sidebar.classList.add("animateInFromLeft");
    sidebar.style.display = "block";
    document.getElementById("overlay").style.display = "block";
    setTimeout(function() {
        sidebar.classList.remove("animateInFromLeft");
    }, 400);
}

function closeSidebar()
{
    if (window.innerWidth >= 993)
    {
        return;
    }

    closeOverlay();

    let sidebar = document.getElementById("sidebar");

    sidebar.classList.add("animateOutToLeft");
    setTimeout(function() {
        sidebar.style.display = "none";
        sidebar.classList.remove("animateOutToLeft");
    }, 400);
}

function openProjectDetails(detailElement)
{
    openOverlay();

    detailElement.classList.add("animateZoomIn");
    detailElement.style.display='block';
    document.getElementById("overlay").style.zIndex = "3";
    setTimeout(function() {
        detailElement.classList.remove("animateZoomIn");
    }, 600);
}

function closeProjectDetails(detailElement)
{
    closeOverlay();

    detailElement.classList.add("animateZoomOut");
    setTimeout(function() {
        detailElement.style.display = "none";
        detailElement.classList.remove("animateZoomOut");
        document.getElementById("overlay").style.zIndex = "2";
    }, 600);
}

function openOverlay()
{
    let overlay = document.getElementById("overlay");

    overlay.style.display = "block";
    overlay.classList.add("animateOpacityIn");
    setTimeout(function() {
        overlay.classList.remove("animateOpacityIn");
    }, 600);
}

function closeOverlay()
{
    let overlay = document.getElementById("overlay");

    overlay.classList.add("animateOpacityOut");
    setTimeout(function() {
        overlay.style.display = "none";
        overlay.classList.remove("animateOpacityOut");
    }, 600);
}

function closeEverything()
{
    closeSidebar();

    let modalElements = document.getElementsByClassName("modal");

    for (let modalElement of modalElements)
    {
        closeProjectDetails(modalElement);
    }
}

let currentPageNumber = 0;

function changePage(targetPage)
{
    if (targetPage === currentPageNumber)
    {
        return;
    }

    window.scrollTo({ top: 70, behavior: "smooth"});
    closePage(currentPageNumber);
    setTimeout(function(){
        openPage(targetPage);
        currentPageNumber = targetPage;
    }, 600);
}

function openPage(pageNumber)
{
    let pageNumberString = "page" + pageNumber;
    let pageElements = document.getElementsByClassName(pageNumberString);

    let pageNumberButtonString = "page" + pageNumber + "Button";
    let pageNumberButton = document.getElementById(pageNumberButtonString);

    pageNumberButton.classList.remove("w3-hover-black");
    pageNumberButton.classList.add("w3-black");

    for (let pageElement of pageElements)
    {
        pageElement.style.display = "block";
        pageElement.classList.add("animateOpacityIn");
        setTimeout(function() {
            pageElement.classList.remove("animateOpacityIn");
        }, 600);
    }
}

function closePage(pageNumber)
{
    let pageNumberString = "page" + pageNumber;
    let pageElements = document.getElementsByClassName(pageNumberString);

    let pageNumberButtonString = "page" + pageNumber + "Button";
    let pageNumberButton = document.getElementById(pageNumberButtonString);

    pageNumberButton.classList.remove("w3-black");
    pageNumberButton.classList.add("w3-hover-black");

    for (let pageElement of pageElements)
    {
        pageElement.classList.add("animateOpacityOut");
        setTimeout(function() {
            pageElement.style.display = "none";
            pageElement.classList.remove("animateOpacityOut");
        }, 600);
    }
}

function goTo(element)
{
    scrollToElement(element);
    closeSidebar();
}

function scrollToElement(element)
{
    let yPos = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({ top: yPos, behavior: "smooth"});
}