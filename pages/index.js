import Head from 'next/head'

function Home() {
    return(
        <div>
            <Head>
                <title>SurvivalBrasil</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <div class="Amainbar">
                <a href="/" class="AmainbarButton">KITS</a>
                <a href="/" class="AmainbarButton">KITS</a>
                <a href="/" class="AmainbarButton">KITS</a>
                <a href="/" class="AmainbarButton">KITS</a>
            </div>
            <img src="/background.webp" width="100%"></img>
        </div>
    )
}

export default Home
