import '../styles/globals.css'
import type { AppProps } from 'next/app'
import FinanceContextProvider from '@/lib/store/financeStore';

export default function App({ Component, pageProps }: AppProps) {
  return <FinanceContextProvider><Component {...pageProps} /></FinanceContextProvider>
}
