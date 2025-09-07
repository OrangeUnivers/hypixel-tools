const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
window.isMobile = isMobile;
if (isMobile) {
    document.documentElement.classList.add('mobile');
}