interface Data {
    color: string;
    title: string;
    description: string;
    icon: string;
    iconWidth: string;
    iconHeight: string;
    items: string[];
    page: string;
}

export const DIRECTION_DATA: Data[] = [
    {
        color: 'orange',
        title: 'Технические и&nbsp;инженерные',
        description: 'Учим понимать, как устроены технологии, и&nbsp;развиваем проектное мышление',
        icon: 'icon_robot',
        iconWidth: '137',
        iconHeight: '161',
        items: ['Программирование', 'Робототехника'],
        page: '/',
    },
    {
        color: 'azure',
        title: 'Образовательные и&nbsp;развивающие',
        description: 'Тренируем внимание, память и&nbsp;мышление, помогаем чувствовать уверенность в&nbsp;учёбе',
        icon: 'icon_globe',
        iconWidth: '133',
        iconHeight: '164',
        items: ['Шахматы', 'Подготовка к школе', 'Ментальная арифметика', 'Английский язык', 'Китайский язык'],
        page: '/',
    },
    {
        color: 'green',
        title: 'Творческие и&nbsp;коммуникативные',
        description: 'Развиваем воображение, креативность и&nbsp;умение выражать себя',
        icon: 'icon_film',
        iconWidth: '170',
        iconHeight: '129',
        items: ['Футбол для детей', 'Хореография', 'Ментальная музыка', 'Рукоделие'],
        page: '/',
    }
]