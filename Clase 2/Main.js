
// const Title = React.createElement(
//   "h1",
//   null,
//   "Hola Desde Main Con Create Element"
// );

// const AppElement = React.createElement(
//   "section",
//   { className: "title-wrapper" },
//   [ Title ]
// );

const TitleComponent = () => (
  <section className="section-title-app-function">
    <h1>Hola desde App Functional Component.</h1>
    <div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/1200px-Brad_Pitt_2019_by_Glenn_Francis.jpg" alt="actor_image" />
    </div>
  </section>
);

const Header = () => {
  return (
    <header>
      <nav>
        <ul style={{ display: "flex", gap: "20px", listStyle: "none"}}>
          {/* <li style={{ cursor: "pointer" }}>Home</li>
          <li style={{ cursor: "pointer" }}>About</li>
          <li style={{ cursor: "pointer" }}>Contact</li>
          <li style={{ cursor: "pointer" }}>More info</li> */}
          {
            ["Home", "About", "Contact", "More info", "Blog"].map((menu) => (
              <li key={menu} style={{ cursor: "pointer" }}>{menu}</li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

const App = () => {
  return (
    <>
      <Header />
      <TitleComponent />
    </>
  )
};

const Node = ReactDOM.createRoot(document.getElementById("root"));
Node.render(<App />)