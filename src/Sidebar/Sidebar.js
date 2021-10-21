import "./Sidebar.css";
import articles from "../data/articles.json";

function Sidebar() {
    return(
        <div className="sidebar">
            <nav>
                <ul>
                    {
                        articles.map(item =>
                            <li key={item.title}>
                                <a href={item.href}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    }
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;