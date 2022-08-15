import { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/header";

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
				<main>
					<Main />
				</main>
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
