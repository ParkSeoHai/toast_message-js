
function ShowCoast({
    title = '',
    message = '',
    type = 'info',
    duration = 3000
}) {
    const main = document.getElementById("toast");
    const toast = document.createElement("div");

    const timeOut = duration + 1000;
    const removeToast = setTimeout(function() {
        main.removeChild(toast);
    }, timeOut)

    toast.onclick = function(e) {
        if(e.target.closest('.toast__close')) {
            main.removeChild(toast);
            clearTimeout(removeToast);
        }
    }

    const delay = (duration / 1000).toFixed(2);

    const icons = {
        success: 'fa-solid fa-circle-check',
        info: 'fa-solid fa-circle-info',
        warning: 'fa-solid fa-circle-exclamation',
        error: 'fa-solid fa-circle-exclamation'
    };
    const icon = icons[type];

    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slineInLeft .3s ease-in, fadeOut 1s ${delay}s linear forwards`;
    toast.innerHTML = `
        <div class="toast__icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close">
            <i class="fas fa-times"></i>    
        </div>
    `;
    main.appendChild(toast);
}

function ShowSuccessToast() {
    ShowCoast({
        title: 'Thành công!',
        message: 'Chúc mừng bạn đã đăng ký thành công',
        type: 'success',
        duration: 3000
    });
}

function ShowErrorToast() {
    ShowCoast({
        title: 'Thất bại!',
        message: 'Chúc bạn may mắn lần sau',
        type: 'error',
        duration: 3000
    });
}

function ShowInfoToast() {
    ShowCoast({
        title: 'Thông tin!',
        message: 'Bạn nên làm theo đúng hướng dẫn của chúng tôi',
        type: 'info',
        duration: 3000
    });
}

function ShowWarnToast() {
    ShowCoast({
        title: 'Nguy hiểm!',
        message: 'Bạn đang cố truy cập đến một trang web không an toàn',
        type: 'warning',
        duration: 3000
    });
}