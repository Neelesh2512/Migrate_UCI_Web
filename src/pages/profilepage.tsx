import {useRouter} from "next/router";
import Navbar from "../components/Navbar";
export const ProfilePage = () => {
    const router = useRouter();
    return (
        <>
        <div className="chat-header">
          <div className="chat__header--info">
            <h3>Chakshu Gautam</h3>
          </div>
          <Navbar  />
          {/* <button onClick={()=>router.push('/')}>Home</button> */}
          <div className="chat__header--right">
            {/* <Notification /> */}
          </div>
        </div>
         <div>
            <h1 style={{paddingTop: "100px"}}>Profile Page</h1>
        </div>
        </>
       
    );
}

export default ProfilePage;