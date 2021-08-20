// header component in next.js syntax
import copy from "copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Header({ markdown }) {
  function copyToClipboard() {
    copy(markdown);
    toast.success("Text copied to clipboard!");
  }
  return (
    <nav className="w-full site-header bg-indigo-800 text-white flex items-center justify-start pl-20">
      <div className="text-lg font-bold">Create Frontend README</div>
      <div className="ml-auto mr-6">
        <button onClick={() => copyToClipboard()} className="flex items-center">
          <FaCopy className="mr-1" />
          Copy to Clipboard
        </button>
        <ToastContainer
          autoClose={2000}
          hideProgressBar={true}
          pauseOnHover={false}
        />
      </div>
    </nav>
  );
}
export default Header;
