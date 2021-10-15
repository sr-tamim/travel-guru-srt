
const changeHeaderBack = (event) => {
    const headerElement = document.getElementById('header');
    event.target.scrollTop || window.scrollY > 10 ?
        headerElement.style.background = event.target.scrollTop ? '#000000dd' : '#fffffffa'
        : headerElement.style.background = 'transparent';
};

export default changeHeaderBack;