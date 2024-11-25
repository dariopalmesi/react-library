import MainMenu from "../components/MainMenu"


export default function About() {
    return (
        <>
            <header>
                <div className="logo">
                    Logo
                </div>
                <MainMenu />
            </header>
            <main>
                <h1>
                    About Page
                </h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, beatae sapiente. Nostrum, delectus in maxime beatae minus pariatur dicta dolorum eveniet repellat, animi consequatur tempora asperiores, fuga voluptate itaque facere?</p>
            </main>

            <footer>
                <p>copyright 2024</p>
            </footer>
        </>

    )
}