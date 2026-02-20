import type {BgAndIconCard} from "~/entities/cards/ui/InfoCardWithBgAndIcon.vue";

export const FOOD_DATA: BgAndIconCard[] = [
    {
        id: 1,
        icon: 'icon_palette',
        iconWidth: '85',
        iconHeight: '90',
        background: 'blue',
        title: 'Готовое питание',
        description: 'На&nbsp;продлёнке два приёма пищи: тёплый обед и&nbsp;полдник с&nbsp;чаем.<br>Питание оплачивается отдельно&nbsp;&mdash; 350&nbsp;₽ в&nbsp;день',
    },
    {
        id: 2,
        icon: 'icon_monitor',
        iconWidth: '82',
        iconHeight: '77',
        background: 'violet-light',
        title: 'Домашняя еда',
        description: 'Если вам ближе домашний формат, ребёнок может приносить еду в&nbsp;ланч-боксе&nbsp;&mdash; на&nbsp;продлёнке есть&nbsp;холодильник и&nbsp;микроволновка',
    }
]