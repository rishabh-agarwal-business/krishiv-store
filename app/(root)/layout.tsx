import { Footer } from '@/components/layouts/Footer'
import { Header } from '@/components/layouts/Header'
import React, { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className='background-light850_dark100 relative'>
            <Header />
            {children}
            <Footer />
        </main>
    )
}

export default RootLayout