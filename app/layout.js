import { toastOptions } from '@/configs/toastOptions';
import AuthProvider from '@/contexts/AuthProvider';
import { Inter, Roboto } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({
    subsets: ['latin'],
    weight: ['500'],
    variable: '--roboto-font',
});
const fonts = inter.className + ' ' + roboto.variable;

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={
                    fonts +
                    ' max-425:text-xs 425:text-sm md:text-base lg:text-lg 1152:text-xl'
                }
                suppressHydrationWarning={true}
            >
                <AuthProvider>{children}</AuthProvider>
                <Toaster toastOptions={toastOptions} />
            </body>
        </html>
    );
}
