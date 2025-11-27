// Splash screen: redireciona para login após 3 segundos
const splashDuration = 5000;

setTimeout(() => {
    window.location.href = "../../src/pages/profile.html";
}, splashDuration);
