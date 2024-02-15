import "./App.css";
import HeaderComp from "./AddTaskComponent/HeaderComp";
import { useState } from "react";
import { InfoContext } from "./AddTaskComponent/InfoContext";
import BodyComp from "./AddTaskComponent/BodyComp";

function App() {
  const [value, setValue] = useState([]);
  const [filterValue, setFilterValue] = useState([]);
  const [input, setInput] = useState({
    title: "",
    status: "",
    time: "",
    date: "",
  });
  const [inputId, setInputId] = useState([]);
  const [popup, setPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const [btnTask, setBtnTask] = useState(true);
  const [showFilterData, setShowFilterData] = useState(false);

  const deleteItem = (id) => {
    setValue((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  const editItem = (id) => {
    setBtnTask(false);
    setEditPopup(true);
    let newEditItem = value.find((item, index) => {
      return index === id;
    });
    setInput(newEditItem);
    setInputId(id);
  };

  const editDeleteItem = (id, e) => {
    let name =
      e.target.id ||
      e.target.parentElement.parentElement.id ||
      e.target.parentElement.id;
    if (name === "delete") {
      deleteItem(id);
    } else if (name === "edit") {
      editItem(id);
    }
  };

  // filtering data
  let filterItemList = value.filter((item) => {
    if (item.status === filterValue) {
      return item.status === filterValue;
    } else if (filterValue === "all") {
      return item;
    }
  });

  const filterData = (category) => {
    setShowFilterData(true);
    setFilterValue(category);
  };

  return (
    <>
      <InfoContext.Provider
        value={{
          value,
          setValue,
          input,
          setInput,
          inputId,
          popup,
          setPopup,
          editPopup,
          setEditPopup,
          btnTask,
          setBtnTask,
          editItem,
        }}
      >
        <main className="testApp">
          <HeaderComp filterData={filterData} />
          <div className="tasks-items">
            {(showFilterData === false ? value : filterItemList).map(
              (value, index) => {
                return (
                  <BodyComp
                    key={index}
                    id={index}
                    title={value.title}
                    status={value.status}
                    date={value.date}
                    time={value.time}
                    onSelect={editDeleteItem}
                  />
                );
              }
            )}
          </div>
        </main>
      </InfoContext.Provider>
    </>
  );
}

export default App;
