import { useState } from "preact/hooks";
import { ethers } from "ethers";
import contractABI from "../components/abi.json" assert { type: "json" };

interface AddressProps {
  address: string;
  id: string;
}

declare global {
  interface Window {
    ethereum: string;
  }
}

export default function Counter(props: AddressProps) {
  //const [count, setCount] = useState(props.address);
  //const [account, setAccount] = useState();

  async function buyNFT() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const nftContract = new ethers.Contract(
      props.address,
      contractABI,
      signer,
    );
    //await nftContract.connect(signer);
    // @ts-ignore: abi function
    const transaction = await nftContract.mint(
      signer.getAddress(),
      props.id,
      ethers.BigNumber.from(1),
      "",
    );
    console.log(transaction);
  }

  return (
    <button
      class="text-[#bae6fd] hover:text-[#0ea5e9] inline-flex items-center mr-3 p-2 border-0 focus:outline-none "
      onClick={buyNFT}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>

      Mint Resume
    </button>
  );
}
