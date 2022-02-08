import React, { useState, useEffect } from "react";
import UserCard from "./components/UserCard.js";
import "./App.css";

function App() {
	const [usersList, setUsersList] = useState();
	const [name, setName] = useState("");
	const [lastName, setLastname] = useState("")
	const [age, setAge] = useState("");
	const [maleFilter, setMaleFilter] = useState(true)
	const [femaleFilter, setFemaleFilter] = useState(true)

	useEffect(() => {
		fetch("https://venbest-test.herokuapp.com/")
			.then((response) => response.json())
			.then((data) => {
				setUsersList(data);
			});
	}, []);

	const handleAge = (event) => {
		setAge(event.target.value);
	};
	const handleName = (event) => {
		setName(event.target.value);
	};
	const handleLastname = (event) =>{
		setLastname(event.target.value)
	}
	const handleMaleFilter = ()=>{
		setMaleFilter(!maleFilter)
	}
	const handleFemaleFilter = ()=>{
		setFemaleFilter(!femaleFilter)
	}

	console.log(maleFilter);

	if (!usersList) {
		return <></>;
	}
	return (
		<div className="App">
			<div className="container">
				<header className="appHeader">Venbest test task</header>
				<div className="searchBox">
					<input
						className="nameSearch"
						type="text"
						placeholder="Ім'я.."
						onChange={handleName}
					/>
					<input
						className="nameSearch"
						type="text"
						placeholder="Прізвище.."
						onChange={handleLastname}
					/>
					<input
						className="ageSearch"
						type="number"
						placeholder="Вік.."
						onChange={handleAge}
					/>
					<div className="checkboxContainer">
						<div>
							<input
								className="checkboxFilter"
								type="checkbox"
								id="male"
								value="Муж"
								defaultChecked={maleFilter}
								onChange={()=>{handleMaleFilter()}}
							/>
							<label for="male">Чоловік</label>
						</div>
						<div>
							<input
								className="checkboxFilter"
								type="checkbox"
								id="female"
								value="Женщина"
								defaultChecked={femaleFilter}
								onChange={()=>{handleFemaleFilter()}}
							/>
							<label for="female">Жінка</label>
						</div>
					</div>
				</div>
				{usersList
					.filter((item) => age == "" ? true : item.age == age)
					.filter((item) => name == "" ? true : item.name.toLowerCase().startsWith(name.toLowerCase()))
					.filter((item) => lastName == "" ? true : item.lastname.toLowerCase().startsWith(lastName.toLowerCase()))
					.filter((item) => item.sex == "m" ? maleFilter : femaleFilter)
					.map((item, index) => {
						return <UserCard info={item} key={index} />;
					})}
			</div>
		</div>
	);
}

export default App;
