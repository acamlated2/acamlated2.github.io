window.addEventListener('scroll', function ()
{
    if (window.scrollY <= 100)
    {
        headerAnimation();
    }
});

function headerAnimation()
{
    const header = document.getElementById("header");
    const scrollY = window.scrollY;

    const newLeft = scrollY / 100 * window.innerWidth;
}

function openPortfolioWithDetails(projectIndex)
{
    localStorage.setItem('projectIndex', projectIndex);

    window.location.href = "portfolio.html";
}

function downloadCV()
{
    window.open('Downloads/Calvin OktavialdySetia - CV.pdf', '_blank');
}