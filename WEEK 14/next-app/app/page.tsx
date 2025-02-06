import axios from "axios";

async function fetch() { 
  const data =await axios.get("http://localhost:3000/api/user")
  return data.data
}

export default async function Home() {
  const userdetails =await fetch();
  return (

    <div>
      hello from next
      {userdetails.name}
    </div>
  );
}
