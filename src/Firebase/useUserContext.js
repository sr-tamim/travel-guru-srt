import { useContext } from "react";
import { UserContext } from "../components/UserContextProvider/UserContextProvider";

const useUserContext = () => {
    return useContext(UserContext);
};

export default useUserContext;