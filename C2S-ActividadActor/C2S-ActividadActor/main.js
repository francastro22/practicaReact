const Header = () => {
    return (
        <header style={{display: "flex", justifyContent: "center", marginBottom: "30px"}}>
            <nav>
                <ul style={{display: "flex", listStyle: "none"}}>
                    {
                        ["Home", "About", "Carreer", "Education"].map((menu) => (<li key={menu} style={{padding:"0px 100px 0px 100px", border:"1px solid black", backgroundColor: "darkgrey", fontFamily: "Helvetica, Arial, sans-serif", fontWeight: "bold"}}> {menu} </li>))
                    }
                </ul>
            </nav>
        </header>
    )
}

const Image = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", gap: "100px", fontFamily: "Helvetica, Arial, sans-serif", fontWeight: "bold"}}>
            <section>
                <img src={"https://i.guim.co.uk/img/media/5827279817bdc9e8c7b655c8f6798c2d53ca1170/0_21_3000_1801/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=79479e545975b375a2bebfbd2f90df8c"} style={{width: "300px", height: "300px", borderRadius: "50%"}}></img>
            </section>

            <section>
                <p>Personal information</p>
                <p>Name:</p>
                <p>Last Name:</p>
                <p>Age:</p>
                <p>Nationality:</p>

                Experience in movies:
                <ul>
                    <li>Pirates of Caribbean</li>
                    <li>Johnny scissors hand</li>
                    <li>Trascendent</li>
                </ul>

                Education:
                <ul>
                    <li>University of Arts</li>
                    <li>University of UCLA</li>
                </ul>

                Bio:
                <p>Johnny Depp es un tipazo</p>
            </section>
        </div>
    )
}


const App = () => {
    return (
        <>
            <Header/>
            <Image/>
        </>
    )
}

const Node = ReactDOM.createRoot(document.getElementById("root"));
Node.render(<App />)