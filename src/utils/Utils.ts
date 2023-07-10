const isInViewport = (elementId: string) => {
    const element = document.querySelector(elementId);
    const rect = element?.getBoundingClientRect();

    return (
        rect!.top >= 0 &&
        rect!.left >= 0 &&
        rect!.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect!.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

export const attachClassWhenInVieport = (menuItems: any[], className: string) => {
    menuItems.forEach(x => {
        if (isInViewport(x.link)) {
            let element = document.getElementById(x.id);
            element?.classList.add(className);
        }
        else {
            let element = document.getElementById(x.id);
            element?.classList.remove(className);
        }
    })
}