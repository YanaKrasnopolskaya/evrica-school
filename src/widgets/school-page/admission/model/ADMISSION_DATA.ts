import type {IconCard} from "~/entities/cards/ui/InfoCardWithIcon.vue";

export const ADMISSION_DATA: IconCard[] = [
    {
        id: 1,
        title: '1',
        description: 'Беседа с&nbsp;родителями&nbsp;&mdash; узнаём ваши запросы',
        icon: 'icon_robot',
        iconWidth: '85',
        iconHeight: '99',
        color: 'orange'
    },
    {
        id: 2,
        title: '2',
        description: 'Персональная встреча с&nbsp;ребёнком (при&nbsp;необходимости&nbsp;&mdash; диагностика)',
        icon: 'icon_monitor',
        iconWidth: '82',
        iconHeight: '77',
        color: 'violet'
    },
    {
        id: 3,
        title: '3',
        description: 'Если переходите в&nbsp;середине года, пробные 2&ndash;3 дня в&nbsp;классе',
        icon: 'icon_globe',
        iconWidth: '82',
        iconHeight: '100',
        color: 'azure'
    }
]