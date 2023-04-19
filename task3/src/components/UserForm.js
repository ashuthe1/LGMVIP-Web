import React, { useState } from 'react';

function UserForm(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("male");
    const [skills, setSkills] = useState([]);
    const [profilePic, setProfilePic] = useState(null);
    const [website, setWebsite] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const user = {
        name,
        email,
        gender,
        skills,
        profilePic,
        website,
      };
      props.addUser(user); // calling addUser function passed as prop
      setName("");
      setEmail("");
      setGender("male");
      setSkills([]);
      setProfilePic(null);
      setWebsite("");
    };

  const handleSkillChange = (event) => {
    const { value } = event.target;
    setSkills((prevSkills) =>
      prevSkills.includes(value)
        ? prevSkills.filter((skill) => skill !== value)
        : [...prevSkills, value]
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor='gender'>Gender:</label>
        <select
          id='gender'
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        >
          <option value=''>Select Gender</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='other'>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor='skills'>Skills:</label>
        <div>
          <input
            type='checkbox'
            id='javascript'
            value='javascript'
            checked={skills.includes('javascript')}
            onChange={handleSkillChange}
          />
          <label htmlFor='javascript'>JavaScript</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='react'
            value='react'
            checked={skills.includes('react')}
            onChange={handleSkillChange}
          />
          <label htmlFor='react'>React</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='nodejs'
            value='nodejs'
            checked={skills.includes('nodejs')}
            onChange={handleSkillChange}
          />
          <label htmlFor='nodejs'>Node.js</label>
        </div>
      </div>
      <div>
        <label htmlFor='website'>Website:</label>
        <input
          type='text'
          id='website'
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor='profilePic'>Profile Picture:</label>
        <input
          type='file'
          id='profilePic'
          accept='image/*'
          onChange={(event) => setProfilePic(event.target.files[0])}
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default UserForm;
