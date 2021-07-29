// header component in next.js syntax
import copy from "copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
function Header({ markdown }) {
  function copyToClipboard() {
    copy(markdown);
  }
  return (
    <nav className="w-full h-14 bg-indigo-800 text-white flex items-center justify-start pl-20">
      <div className="text-lg font-bold">Create Frontend README</div>
      <div className="ml-auto mr-6">
        <button onClick={() => copyToClipboard()} className="flex items-center">
          <FaCopy className="mr-1" />
          Copy to Clipboard
        </button>
      </div>
    </nav>
  );
}
export default Header;
