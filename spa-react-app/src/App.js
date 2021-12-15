
import './App.css';

function App() {
  const user = {
    name: 'Chris on Code',
    location: 'Las Vegas',
    foodType: 'Everything',
    age: 28,
    likes: 'Coding into the wee hours of the morning',
    twitterUsername: 'chrisoncode',
    avatar:
      'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
  };
  return (
  <div className="App">
           <div className="user-detail">
          {user.name}
          <img src={user.avatar} alt="" />
          <h3>{user.name}</h3>
          <p>Location <br></br>{user.location}</p>
          <p>Eats <br></br>{user.foodType}</p>
          <p>Age <br></br> {user.age}</p>
          <p>Likes <br></br>{user.likes}</p>
          <p>Twitter <br></br><a href={`https://twitter.com/@${user.twitterUsername}`}>@{user.twitterUsername}</a></p>
        </div>
      </div>
    );
  }

export default App;
