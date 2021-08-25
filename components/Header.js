// header component in next.js syntax
import copy from "copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import RenderUserSettings from "./UserSettings";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header({ markdown }) {
  function copyToClipboard() {
    copy(markdown);
    toast.success("Text copied to clipboard!");
  }
  return (
    <nav className="w-full site-header bg-indigo-800 text-white flex items-center justify-start md:pl-20 pl-4">
      <div className="text-lg font-bold">README gen</div>
      <div className="ml-auto md:mr-6 mr-2 flex items-center flex-row-reverse">
        <RenderUserSettings />
        <div>
          <button
            onClick={() => copyToClipboard()}
            className="flex items-center border-white border rounded p-2 bg-white text-indigo-800 bg-opacity-90"
          >
            <FaCopy className="mr-1" />
            Copy to Clipboard
          </button>
        </div>

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
