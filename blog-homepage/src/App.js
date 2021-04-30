import "./App.css";
import Section from "./components/section";
import yourArticles from "./data/your-articles.json";
import missedArticles from "./data/missed-articles.json"

function App() {
  return (
    <div className="App">
      <body className="App-body">
        <Section
          header="For you"
          articles={yourArticles}
          bigCards={true}>
        </Section>
        <Section
          header="In case you missed it"
          articles={missedArticles}
          bigCards={false}
        >
        </Section>
      </body>
    </div>
  );
}

export default App;
