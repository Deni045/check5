import { useState } from "react"


function Detective(){
 const [sherlock, setSherlock] = useState('психопат')

    function handlerClick(){
        setSherlock('высокоактивный социопат')
    }

    return(
        <div>
            Шерлок - {sherlock}

            <div>
                <button onClick={handlerClick}>
                Узнать правду
                </button>
            </div>

        </div>
    )
}

export default Detective