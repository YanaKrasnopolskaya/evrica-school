interface Image {
    src: string;
    alt: string;
    width: string;
    height: string;
}
interface DevImageSet {
    mobile: Image;
    desktop: Image;
}

interface DevPathData {
    image: DevImageSet;
    title: string;
    description: string;
    page: string;
}

export const DEVELOPMENT_PATH_DATA: DevPathData[] = [
    {
        title: 'Детский клуб',
        description: 'Готовим к&nbsp;школе через игру и&nbsp;творчество',
        page: 'kids-club',
        image: {
            mobile: {
                src: '/images/mobile/3-image.png',
                alt: 'Детский клуб',
                width: '393',
                height: '274'
            },
            desktop: {
                src: '/images/desktop/3-image.webp',
                alt: 'Детский клуб',
                width: '393',
                height: '297'
            }
        }
    },
    {
        title: 'Школа',
        description: 'Среднее образование с&nbsp;проектным&nbsp;подходом',
        page: 'school',
        image: {
            mobile: {
                src: '/images/mobile/4-image.png',
                alt: 'Школа',
                width: '393',
                height: '274'
            },
            desktop: {
                src: '/images/desktop/4-image.webp',
                alt: 'Школа',
                width: '393',
                height: '297'
            }
        }
    },
    {
        title: 'Продлёнка',
        description: 'Домашка, кружки и&nbsp;развитие в&nbsp;одном&nbsp;месте',
        page: 'after-school',
        image: {
            mobile: {
                src: '/images/mobile/5-image.png',
                alt: 'Продлёнка',
                width: '393',
                height: '274'
            },
            desktop: {
                src: '/images/desktop/5-image.webp',
                alt: 'Продлёнка',
                width: '393',
                height: '297'
            }
        }
    },
    {
        title: 'Лагерь',
        description: 'Тематические смены с&nbsp;акцентом&nbsp;на&nbsp;новые навыки, творчество&nbsp;и&nbsp;исследования',
        page: 'camp',
        image: {
            mobile: {
                src: '/images/mobile/7-image.png',
                alt: 'Лагерь',
                width: '329',
                height: '274'
            },
            desktop: {
                src: '/images/desktop/7-image.webp',
                alt: 'Лагерь',
                width: '300',
                height: '250'
            }
        }
    }
]