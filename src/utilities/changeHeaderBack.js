
const changeHeaderBack = (event) => {
    const headerElement = document.getElementById('header');
    event.target.scrollTop > 10 ?
        headerElement.style.background = '#000000bb'
        : headerElement.style.background = 'transparent';
};

export default changeHeaderBack;