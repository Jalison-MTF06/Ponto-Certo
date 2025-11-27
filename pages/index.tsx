import Head from "next/head";
import RegisterPage from "@/components/Desktop";

export default function Home() {
  return (
    <>
      <Head>
        <title>Criar conta - Ponto Certo</title>
      </Head>
      <RegisterPage />
    </>
  );
}
