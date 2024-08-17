import ReactDOM from 'react-dom';
import React,{useState,useEffect} from 'react';
// function Examplerender(){
//   const[count,setCount]=useState(0);
//   useEffect(()=>{
//     setTimeout(()=>
//     {
//       setCount(count=>count+1)
//     },1000)
//   },[]);
//   return(
//     <h1>Website counting details {count} times</h1>
//   )
// }
// ReactDOM.render(<Examplerender/>,document.getElementById('root'));
function Userdemo(){
  const[users,setUsers]=useState([]);
  const[loading,setLoading]=useState(true);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(data=>
        {
          setUsers(data);
          setLoading(false);
        })
      .catch(error=>{
        console.error("if it is not loading,will be error message");
        setLoading(false);
      });
  },[]);
  if(loading){
    return<p>Loading</p>;
  }
  return(
    <div>
      <h1>List out the users in API</h1>
      <ul>
        {users.map(user=>(
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
ReactDOM.render(<Userdemo/>,document.getElementById('root'));