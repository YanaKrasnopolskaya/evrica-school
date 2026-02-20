import type {SmallCard} from "~/entities/cards/ui/SmallCardWithFeatures.vue";

export const FOOD_DATA: SmallCard[] = [
    {
        id: 1,
        title: 'Завтрак',
        description: 'Молочная каша или творожный пудинг; хлеб, масло, сыр; напиток',
        icon: 'icon_paper-clip-green',
        iconWidth: '54',
        iconHeight: '70',
    },
    {
        id: 2,
        title: 'Полдник',
        description: 'Выпечка; кисло-молочный продукт',
        icon: 'icon_paper-clip-violet',
        iconWidth: '54',
        iconHeight: '70',
    },
    {
        id: 3,
        title: 'Обед',
        description: 'Овощное ассорти; первое; второе; напиток',
        icon: 'icon_robot-light',
        iconWidth: '85',
        iconHeight: '100',
    },
    {
        id: 4,
        title: 'Ужин',
        description: 'Мясо/рыбы, гарнир; напиток',
        icon: 'icon_palette-light',
        iconWidth: '86',
        iconHeight: '92',
    },
]