import {createContext} from "react"

export const AboutContext = createContext();

function AboutContextProvider({children}){
    const about= {
    name:"Dumba Theresa",
    bio:"i am a young lady who desire community growth",
    hobbies:["Dancing", "Music","Eating"]

    }
return(
<AboutContext.Provider value={{about}}>{children}</AboutContext.Provider>


)
}
export default AboutContextProvider