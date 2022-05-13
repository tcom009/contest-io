import Head from 'next/head';
import config from '../src/config.js';
import PlayersForm from '../src/Forms/PlayersForms.js';
export default function Home() {
  return (
    <>
      <Head>
        <title>{config.PROJECT} | Pro fingerboarding EC</title>
        <meta
          name='description'
          content='Contestio es la plataforma del ranking ecuatoriano de fingerboarding'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='navbar has-background-black'>
        <div className='container has-text-white is-size-2 has-text-left'>
          Contestio
        </div>
      </div>
      <section className='hero background-gradient is-fullheight is-max-desktop'>
        <div className='container'>
          <PlayersForm />
        </div>
      </section>
    </>
  );
}
