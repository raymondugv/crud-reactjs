import { Html, Head, Main, NextScript } from "next/document";
import Header from "/components/Header";
import Footer from "/components/Footer";
import Breadcrumbs from "/components/Breadcrumbs";
import SideMenu from "/components/SideMenu";

const Document = () => {
	return (
		<Html data-theme="lofi">
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
				<div className="container-fluid mx-auto">
					<Header />

					<div className="drawer drawer-mobile">
						<input
							id="my-drawer-2"
							type="checkbox"
							className="drawer-toggle"
						/>
						<div className="drawer-content">
							<main className="fluid-container mx-auto px-4">
								<div className="p-4 pb-16">
									<Breadcrumbs />
									<Main />
								</div>
							</main>
						</div>
						<div className="drawer-side">
							<label
								htmlFor="my-drawer-2"
								className="drawer-overlay"
							></label>

							<SideMenu />
						</div>
					</div>

					<Footer />
				</div>

				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
