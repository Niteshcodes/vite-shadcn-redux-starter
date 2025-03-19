import Header from '@/components/shared/header'
import { Outlet } from 'react-router'

export default function MainLayout() {
    return (
        <div>
            <div >
                <Header />
            </div>
            <Outlet />
        </div>
    )
}
