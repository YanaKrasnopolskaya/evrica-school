import { ref } from 'vue';

export const useHorizontalScroll = (scrollStep: number) => {
    const container = ref<HTMLElement | null>(null);
    const showLeftBtn = ref(false);

    // скролл вправо
    const scrollRight = () => {
        const element = container.value;
        if (!element) return;

        container.value?.scrollBy({ left: scrollStep});

        //  если сдвинулись вправо - показать левую кнопку.
        updateScrollState();
    }

    // скролл влкво
    const scrollLeft = () => {
        const element = container.value;
        if (!element) return;

        container.value?.scrollBy({ left: -scrollStep});

        // если вернулись в начало - скрыть левую кнопку
        updateScrollState();
    }

    // считает, есть ли смещение
    const updateScrollState = () => {
        const element = container.value
        if (!element) return

        // показать левую кнопку, если уже немного сместились вправо. scrollLeft - сколько пикселей сместились вправо.
        showLeftBtn.value = element.scrollLeft > 0
    }

    // слушаем скролл
    onMounted(() => {
        const element = container.value
        if (!element) return

        element.addEventListener('scroll', updateScrollState)
    })

    onBeforeUnmount(() => {
        const element = container.value
        if (!element) return

        element.removeEventListener('scroll', updateScrollState)
    })

    return {
        container,
        showLeftBtn,
        scrollLeft,
        scrollRight,
    }
}