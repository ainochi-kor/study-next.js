import "@/styles/globals.css";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-50 w-full min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}
