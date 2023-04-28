import '../styles/globals.css'
import type { AppProps } from 'next/app'
import FinanceContextProvider from '@/lib/store/financeStore';

// Notifications
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }: AppProps) {
  return <FinanceContextProvider>
    <ToastContainer/><Component {...pageProps} /></FinanceContextProvider>
}
