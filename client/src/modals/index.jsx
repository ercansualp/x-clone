import modals from "~/routes/modals.js";
import {useModal} from "~/store/modal/hooks.js";

export default function Modal() {

    const modal = useModal();
    const currentModal = modals.find(m => m.name === modal.name);

    return (
        <div className="fixed inset-0 bg-[color:var(--background-modal)] flex items-center justify-center z-50">
            <div className="bg-[color:var(--background-primary)] min-w-[600px] max-w-[80vw] max-h-[90vh] rounded-2xl overflow-auto">
                <div className="max-w-[600px]">
                    {currentModal && <currentModal.element />}
                </div>
            </div>
        </div>
    )
}