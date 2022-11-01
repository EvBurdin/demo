export enum IgetColorClass {
    Black_800 = 'Black_800',
    Text_1000 = 'Text_1000',
    Bg_800 = 'Bg_800',
    White_1000 = 'White_1000',
}

export const getColorClass = (color: IgetColorClass) => `UI_Colors_${color}`