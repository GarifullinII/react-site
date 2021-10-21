import "./Main.css";
import articles from "../data/articles.json";

function Main() {
    return(
        <div className="main">
            {
                articles.map(item =>
                    <section key={item.title}>
                        <h2>{item.title}</h2>
                        <div>{item.body}</div>
                    </section>
                )
            }
        </div>
    );
}

export default Main;