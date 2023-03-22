import { createContext, useContext, useState } from "react";

// export const IsloginContext = createContext({ currentLanguage: "vi" });

// export const IsloginProvider = ({ children, value }) => {
//   const [currentLanguage, setCurrentLanguage] = useState("en");

//   return (
//     <IsloginContext.Provider
//       value={{ currentLanguage, setCurrentLanguage }}
//     >
      
//       {children}
//     </IsloginContext.Provider>
//   );
// };

export const IsloginContext = createContext({ Vislogin: false });

export const IsloginProvider = ({ children, value }) => {
  const [Vislogin, setVislogin] = useState(false);

  return (
    <IsloginContext.Provider
      value={{ Vislogin, setVislogin }}
    >
      
      {children}
    </IsloginContext.Provider>
  );
};
