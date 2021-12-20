import { useEffect } from "react";

const useRemoveDuplicateSpans = () => {
  useEffect(() => {
    const removeDuplicateSpans = (classname) => {
      let spans = document.querySelectorAll(`.${classname}`);
      spans.forEach((element, index) => {
        if (index > 0) {
          element?.remove();
        }
      });
    };
    let classNames = [
      "sapore-di-mare",
      "moules",
      "aperitifs",
      "digestifs",
      "eaux",
      "softs",
      "bieres",
      "boissons-chaudes",
    ];
    classNames.forEach((className) => removeDuplicateSpans(className));
    //methode caca pour faire ça
  });
};

export default useRemoveDuplicateSpans;
