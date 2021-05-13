module.exports = class Page {
    open(path) {
        return browser.url(
            `https://sbmedina.github.io/login-register-forms/${path}`
        );
    }
};
