import Link from 'next/link';

const icon = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Search',
        path: '/search',
    },
    {
        name: 'Tasks',
        path: '/tasks',
    },
    {
        name: 'Documents',
        path: '/documents',
    },
    {
        name: 'Settings',
        path: '/settings',
    },

]
export default function Navbar() {
    return (
        <ul className="flex flex-row divide-gray-200">
            {icon.map((icon) => (
                <li key={icon.name} className="py-4 flex">
                    <div className="ml-3">
                        <Link href={icon.path} className="text-sm font-medium text-gray-900">{icon.name}</Link>
                    </div>
                </li>
            ))}
        </ul>
    )
}