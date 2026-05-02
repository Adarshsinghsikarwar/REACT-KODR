  import useModal from "./useModel";
import Modal from "./Model.jsx";

function App() {
  const { isOpen, open, close } = useModal();

  return (
    <div className="p-4">
      <button
        onClick={open}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Modal Kholo
      </button>

      <Modal isOpen={isOpen} onClose={close}>
        <h2 className="text-xl font-bold mb-2">Namaste!</h2>
        <p>Ye modal React Portal ke through dikh raha hai.</p>
        <button
          onClick={close}
          className="mt-4 bg-red-500 text-white px-3 py-1 rounded"
        >
          Band Karo
        </button>
      </Modal>
    </div>
  );
}

export default App;
