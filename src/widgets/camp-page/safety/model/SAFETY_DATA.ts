import type {BgAndIconCard} from "~/entities/cards/ui/InfoCardWithBgAndIcon.vue";

export const SAFETY_DATA: BgAndIconCard[] = [
    {
        id: 1,
        title: 'Постоянный присмотр',
        description: 'С&nbsp;детьми работают опытные педагоги и&nbsp;вожатые&nbsp;&mdash; они&nbsp;сопровождают ребят на&nbsp;всех активностях и&nbsp;следят за&nbsp;их&nbsp;безопасностью',
        icon: 'icon_palette',
        iconWidth: '85',
        iconHeight: '90',
        background: 'blue'
    },
    {
        id: 2,
        title: 'Правила и&nbsp;медподдержка',
        description: 'Во&nbsp;всех сменах действуют одинаковые стандарты: есть&nbsp;медработник, контроль локаций и&nbsp;постоянный учёт перемещений группы',
        icon: 'icon_monitor',
        iconWidth: '82',
        iconHeight: '78',
        background: 'violet-light'
    },
]