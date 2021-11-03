import { useContext } from "react";
import { UserContext } from "../contexts/UserContextProvider/UserContextProvider";

const useUserContext = () => {
    return useContext(UserContext);
};

export default useUserContext;