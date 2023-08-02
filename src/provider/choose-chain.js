import { useState, useEffect } from "react";
import { ChangeChainDropdown } from "./chain-dropdown";

export function ChooseChain({ chainName, chainInfos, onChange }) {
  const [selectedItem, setSelectedItem] = useState();
  useEffect(() => {
    if (chainName && chainInfos.length > 0)
      setSelectedItem(
        chainInfos.filter((options) => options.chainName === chainName)[0]
      );
    if (!chainName) setSelectedItem(undefined);
  }, [chainInfos, chainName]);
  return (
    <ChangeChainDropdown
      data={chainInfos}
      selectedItem={selectedItem}
      onChange={onChange}
    />
  );
}
