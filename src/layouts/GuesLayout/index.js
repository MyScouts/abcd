import { useContext } from "react";
import { AlertContext } from "../../contexts/AlertContext";

const GuesLayout = ({ children }) => {
    const allertContext = useContext(AlertContext);
    console.log("🚀 ~ file: index.js ~ line 6 ~ GuesLayout ~ allertContext", allertContext)
    // const { message, type } = allertContext.state;
    return (
        <div>
            {children}
        </div>
    )
}

export default GuesLayout;