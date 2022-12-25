import { Navigation } from "../components/Navigation";

export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                <title>Mi app con Next</title>
            </head>
            <body>
                <Navigation />
                {children}
            </body>
        </html>
    );
}
