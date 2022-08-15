import { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/header";
import Footer from "../components/footer";

const Document = () => {
	return (
		<Html data-theme="night">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Header />
				<main className="fluid-container mx-auto px-4">
					<Main />
				</main>

				<Footer />

				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
