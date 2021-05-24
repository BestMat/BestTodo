function InputArea(props) {
    const [inputText, setInputText] = React.useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    return (
        <div className="form">
            <input onChange={handleChange} type="text" value={inputText} />
            <button
                onClick={() => {
                    props.onAdd(inputText);
                    setInputText("");
                }}
            >
                <span>Add</span>
            </button>
        </div>
    );
}
function ToDoItem(props) {
    return (
        <div
            onClick={() => {
                props.onChecked(props.id);
            }}
        >
            <li>{props.text}</li>
        </div>
    );
}
function App() {
    const [items, setItems] = React.useState([]);

    function addItem(inputText) {
        setItems(prevItems => {
            return [...prevItems, inputText];
        });
    }

    function deleteItem(id) {
        setItems(prevItems => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>BestTodo</h1>
            </div>
            <InputArea onAdd={addItem} />
            <div>
                <ul>
                    {items.map((todoItem, index) => (
                        <ToDoItem
                            key={index}
                            id={index}
                            text={todoItem}
                            onChecked={deleteItem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

function Style() {
    return <div>
        <link rel="stylesheet" href="style.css"></link>
    </div>
}
ReactDOM.render(
    <div className="main" style={{ backgroundColor: "#ffeaa7" }}>
        <Style />
        <App />
    </div>
    , document)
