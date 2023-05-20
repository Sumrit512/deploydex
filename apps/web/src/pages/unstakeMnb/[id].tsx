import UnStakeMnbView from "views/UnStakeMnbView";
import {useRouter} from 'next/router';

const UnStakeMnb = () =>{
    const router = useRouter()
    const {id} = router.query 
    console.log(id)
    return (
        <UnStakeMnbView id={id}/>
        
    )
}

export default UnStakeMnb;