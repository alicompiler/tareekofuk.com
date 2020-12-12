import { AppDescriptorActionType, MenuDescriptor } from './../AppDescriptor';
export const menu: MenuDescriptor = {
    options: [
        {
            action: { type: AppDescriptorActionType.DOM_ID, value: '/#services' }, title: { ar: "الخدمات", en: "Services" },
        },
        {
            action: { type: AppDescriptorActionType.ROUTE, value: 'destinations' }, title: { ar: "وجهات سياحية", en: "Destinations" },
        },
        {
            action: { type: AppDescriptorActionType.DOM_ID, value: '/#contact' }, title: { ar: "تواصل معنا", en: "Contact Us" },
        },
        {
            action: { type: AppDescriptorActionType.ROUTE, value: 'who' }, title: { ar: "من نحن", en: "Who" },
        },
        {
            action: { type: AppDescriptorActionType.CHANGE_LANGUAGE, value: '' }, title: { ar: "English", en: "عربي" },
        }
    ],
    drawerIcon: '/res/icons/menu.png',
}