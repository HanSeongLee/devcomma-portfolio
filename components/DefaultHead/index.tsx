import React from 'react';
import Script from 'next/script';

interface IProps {
    title?: string;
    description?: string;
    url?: string;
    ogi?: string;
};

const DefaultHead: React.FC<IProps> = ({ title, description, url, ogi }) => {
    return (
        <>
            <meta charSet="UTF-8"/>
            <meta name="viewport"
                  content="width=device-width, initial-scale=1.0"
            />

            <title>{title}</title>
            <meta name="description"
                  content={description}
            />

            <meta name="description"
                  content={description}
            />

            <meta property="og:url"
                  content={url}
            />
            <meta property="og:type"
                  content="website"
            />
            <meta property="og:title"
                  content={title}
            />
            <meta property="og:description"
                  content={description}
            />
            <meta property="og:image"
                  content={ogi}
            />

            <meta name="twitter:card"
                  content="summary_large_image"
            />
            <meta property="twitter:url"
                  content={url}
            />
            <meta name="twitter:title"
                  content={title}
            />
            <meta name="twitter:description"
                  content={description}
            />
            <meta name="twitter:image"
                  content={ogi}
            />
            <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta name="msapplication-TileColor" content="#F8F8F8" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <meta name="theme-color" content="#F8F8F8" />

            {process.env.NEXT_PUBLIC_GOOGLE_AD_CLIENT && (
                <Script async
                        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_AD_CLIENT}`}
                        crossOrigin="anonymous"
                    />
            )}
        </>
    );
};

DefaultHead.defaultProps = {
    title: process.env.NEXT_PUBLIC_TITLE,
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
    url: process.env.NEXT_PUBLIC_URL,
    ogi: process.env.NEXT_PUBLIC_OG_IMAGE,
};

export default DefaultHead;
