import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document{
    render() {
        return (
            <Html>

                <link rel='shortchut icon' href='/favicon.png' type='image/png' />
                <Head>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}