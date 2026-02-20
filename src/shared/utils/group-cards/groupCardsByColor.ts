/* функция групировки карточек по цветам в массив объектов.
    Принимаем массив карточек */
import type {TimeTableCard} from "../../../entities/cards/ui/TimeTableCard.vue";

export function groupCardsByColor<T extends TimeTableCard>(array: T[]): Array<{ color: string; cards: T[] }> {
    // коллекция цветов
    const setColor = new Set<string>();
    // массив объектов с цветами и карточками
    const result: Array<{ color: string; cards: T[] }> = [];

    // группируем по цвету
    for (const item of array) {
        if (!setColor.has(item.color)) {
            setColor.add(item.color);

            const cardsThisColor = array.filter(card => card.color === item.color);

            result.push({color: item.color, cards: cardsThisColor});
        }
    }
    return result;
}