import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Table from "../components/Table";
import SearchForm from "../components/SearchForm/index";


function Home() {
  const [users, setUsers] = useState([]);
  const [age, setAge] = useState();

  const loadUsers = () => {
    API.getRandomUsers().then(userRes => {
      console.log(userRes.data);
      setUsers(userRes.data.results);
    });
  }


  useEffect(() => {
    loadUsers();
  }, []);

  const handleAgeChange = event => {
    const ageValue = event.target.value;
    setAge(ageValue);
  }

  const handleFilterFormSubmit = event => {
    event.preventDefault();
    console.log(age);
    let trueAge = parseInt(age);
    let filteredUsers = users.filter(user =>
      user.dob.age === trueAge
    );
    setUsers(filteredUsers);
  }

  const handleSortSelect = event => {
    event.preventDefault();
    const selection = event.target.value;
    console.log(users);
    if (selection === "Youngest to Oldest"){
      function compare(a, b) {
        const ageA = a.dob.age;
        const ageB = b.dob.age;
        let comparison = 0;
        if (ageA > ageB) {
            comparison = 1;
        } else if (ageA < ageB) {
            comparison = -1;
        }
        return comparison;
        }
      
      let sortedUsers = users.slice(0).sort(compare);
      setUsers(sortedUsers);
      console.log(users);

    } else if (selection === "Oldest to Youngest"){
      function compare(a, b) {
        const ageA = a.dob.age;
        const ageB = b.dob.age;
        let comparison = 0;
        if (ageA < ageB) {
            comparison = 1;
        } else if (ageA > ageB) {
            comparison = -1;
        }
        return comparison;
        }

      let sortedUsers = users.slice(0).sort(compare);
      
      setUsers(sortedUsers);
      console.log(users);
    } 
  }

  return (
    <div>
      <Hero backgroundImage="https://cdn.corporatefinanceinstitute.com/assets/share-based-compensation-theme.jpg">
        <h1>Employee Directory</h1>
        <h2>Sort in ascending or descending age or enter a specific age to filter </h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <SearchForm handleFilterFormSubmit={handleFilterFormSubmit} handleAgeChange={handleAgeChange} handleSortSelect={handleSortSelect} />
        {age}
        <Row>
          <Table users={users} />
        </Row>
      </Container>
    </div>
  );
}

export default Home;
