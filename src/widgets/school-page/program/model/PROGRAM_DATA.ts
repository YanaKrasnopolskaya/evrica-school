import type {BgAndIconCard} from "~/entities/cards/ui/InfoCardWithBgAndIcon.vue";

export const PROGRAM_DATA: BgAndIconCard[] = [
    {
        id: 1,
        icon: 'icon_film',
        iconWidth: '106',
        iconHeight: '79',
        title: 'Госпрограмма без&nbsp;перегруза',
        description: 'Учимся по&nbsp;государственной программе (ФГОС): объясняем простым языком, разбираем сложное и&nbsp;укрепляем базу знаний',
        background: 'green',
    },
    {
        id: 2,
        icon: 'icon_monitor-light',
        iconWidth: '83',
        iconHeight: '77',
        title: 'Домашка&nbsp;&mdash; в&nbsp;школе, не&nbsp;дома',
        description: 'Домашние задания выполняем в&nbsp;школе с&nbsp;учителем&nbsp;&mdash; вечером остаётся время на&nbsp;семью, отдых и&nbsp;свои дела',
        background: 'violet',
    },
    {
        id: 3,
        title: 'Проекты вместо теории',
        description: 'Через учебные проекты дети учатся мыслить, искать решения, договариваться и&nbsp;работать в&nbsp;команде',
        background: 'red',
    },
]