import { AlignJustify } from "lucide-react";

const routes = [
    {
        path: '/',
        icon: <AlignJustify size={24} />,
        name: 'Dashboard',
    },
    {
        path: '/admin/orders',
        icon:  <AlignJustify size={24} />,
        name: 'Orders',
    },
    {
        path: '/admin/profit',
        icon:  <AlignJustify size={24} />,
        name: 'Profit',
    },
    {
        path: '/admin/reviews',
        icon:  <AlignJustify size={24} />,
        name: 'Reviews',
    },
    {
        path: '/admin/barcode',
        icon:  <AlignJustify size={24} />,
        name: 'Barcode',
    }
]

export default routes;