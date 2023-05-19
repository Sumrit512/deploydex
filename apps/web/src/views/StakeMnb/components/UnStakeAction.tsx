import React from "react";
import StakingList from "./StakingList";


interface UnStakeActionProps {
    pSelected? : string;
}


const UnStakeAction: React.FC<UnStakeActionProps> = ({
    pSelected
}) => {
    console.log(pSelected)

let display;

    if(pSelected === 'Gold'){
        display = (
            <>
            <StakingList
            pSelected={pSelected}/>
            </>
        )
    }
    else{
         display = (
            <>
              <StakingList
            pSelected={pSelected}/>
            </>
        )
    }
return(
    <div>
        
     {display}
    </div>
)
}

export default UnStakeAction;