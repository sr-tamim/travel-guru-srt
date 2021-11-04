
const changeHeader = (event) => {
    const headerElement = document.getElementById('header');
    event.target.scrollTop || window.scrollY > 10 ?
        headerElement.classList.add('scrolling')
        : headerElement.classList.remove('scrolling');
};

export default changeHeader;