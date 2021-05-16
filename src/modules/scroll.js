// плавный скролл
const scroll = () => {
    const scrollLinks = document.querySelectorAll(".scroll");
    // console.log('scrollLinks: ', scrollLinks);

    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener("click", event => {
            // отключаем обычный способ возвращения наверх
            event.preventDefault();
            // задаем свои свойства скролла, делаем плавно
            const id = scrollLink.children[0].getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    }
};

export default scroll;