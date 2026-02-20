// скрол страницы блокируется при открытых меню и попап
export const useScrollLock = (states: Ref<boolean>[]) => {
    watch(
        states,
        (newVal) => {
            if (typeof document === 'undefined') return;
            const locked = newVal.some(Boolean);
            document.body.classList.toggle('no-scroll', locked);
        },
        { immediate: true }
    );
}