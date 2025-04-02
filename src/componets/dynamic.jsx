import { useParams } from "react-router-dom"

export const Dynamiccomponent=()=>{
const {postid}=useParams()

return (
    <>
    <h1>{postid}</h1>
    </>
)
}