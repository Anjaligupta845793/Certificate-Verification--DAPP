import { useAccount, useEnsName } from "wagmi";
import { useConnect } from "wagmi";
import { injected } from "wagmi/connectors";

export function Profile() {
  const { connect } = useConnect();
  const account = useAccount();
  return (
    <>
      <button onClick={() => connect({ connector: injected() })}>
        Connect
      </button>
      <button onClick={() => console.log(account.chainId)}>account</button>
    </>
  );
}
