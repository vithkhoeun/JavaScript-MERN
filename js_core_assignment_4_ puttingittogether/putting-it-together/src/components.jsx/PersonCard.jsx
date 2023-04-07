import React, {useState} from 'react'

const PersonCard = (props) => {

const {firstName, lastName, age, hair} = props

const [years, setYears] = useState(age)

const addYears = () => {
    setYears(years + 1)
}

  return (
    <div>
      <h2>
        {lastName}, {firstName}
      </h2>
      <p>Age: {years}</p>
      <p>Hair Color: {hair}</p>
      <button onClick={addYears}>Birthday button for {firstName}</button>
      <hr />
    </div>
    
  )
}

export default PersonCard