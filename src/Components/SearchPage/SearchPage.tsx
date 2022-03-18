
import { useSearchParams } from "react-router-dom";
import { Button } from "../StyledButton/Button";
import { useEffect, useState } from "react";
import "./searchPage.css";
import { GetToken } from "../../Services/authService";
export const SearchPage = () =>
{
    const [searchParams] = useSearchParams();
    const usernameToSearch = searchParams.get("username") || "";
    const [users,setUsers] = useState<any>([]);


    const handleSearch = async () =>
    {
        let reqOptions = {
            method:"get",
            headers:
            {
                Authorization:GetToken(),
                "content-type" : "application/json",
            }
        }


        await fetch(`/api/user/search/${usernameToSearch}`,reqOptions).then((response)=>
        {
            return response.json();
        }).then((data)=>
        {
            setUsers([...data]);
        });
    }


    const handleFollowUnfollow = async (isFollowed:boolean,username:string) =>
    {
        let reqOptions = {
            method:"get",
            headers:{Authorization:GetToken()}
        };

        let routePart = isFollowed ? "unfollow/" : "follow/";

        await fetch(`/api/user/`+ routePart +`${username}`,reqOptions).then((response)=>
        {
            if(response.status === 204)
                return Promise.resolve();
            
            return Promise.reject();

        }).then(()=>
        {
            window.location.reload();
        }).catch(()=>
        {
            console.log("error");
        })
    }



    const showUserCard = (user:any) =>
    {
        return <div className="user-card-container">
            <div className="col-1">Mesto za profilnu</div>
            <div className="col-1">{user.userName}</div>
            <div className="col-2">{Button(user.isFollowed?"Unfollow":"Follow",()=>{handleFollowUnfollow(user.isFollowed,user.userName)})}</div>
        </div>
    }


    useEffect(()=>{
        handleSearch();
    },[usernameToSearch]);


    return (<div>{users.map((user:any)=>showUserCard(user))}</div>);
}