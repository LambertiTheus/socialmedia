import "~/styles/globals.css";
import { api } from "~/utils/api";
import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";
import { Toaster } from "react-hot-toast";
import Head from "next/head";


const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Head>
        <title>SocialMedia</title>
        <meta name="description" content="💭" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster position="bottom-center" reverseOrder={true} />
      <Component {...pageProps} />
    </ClerkProvider>
  )
};

export default api.withTRPC(MyApp);
