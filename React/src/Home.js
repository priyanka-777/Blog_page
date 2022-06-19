import { useState} from 'react';
const Home = ()=>{
    // let name="mario";
    const [name,setName]= useState('priya');
    const [age,setAge] = useState(25);
    const handleClick = (e)=>{
        setName('teju');
        setAge(30);
    }
    return(
        <div className="home">
            <h2>Home Page</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Home;