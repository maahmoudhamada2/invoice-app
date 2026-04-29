import ButtonsGroup from "../ButtonsGroup";
import useAppUiStore from "@/store/useAppUiStore";

const DeletePrompt = () => {
  const selectedInvoiceId = useAppUiStore((state) => state.selectedInvoiceId);
  return (
    <div
      className="w-full h-full z-1 px-6 
                 flex justify-center items-center 
                 bg-backdrop fixed top-0 left-0">
      <section
        className="bg-card rounded-md shadow-card
                     px-[clamp(32px,27.661px+1.3559vw,48px)] 
                     pt-[clamp(34px,29.3898px+1.4407vw,51px)] 
                     pb-[clamp(32px,27.661px+1.3559vw,48px)]">
        <h3 className="text-main text-heading mb-2">Confirm Deletion</h3>
        <p className="text-body text-subtle mb-5.5 leading-5.5  ">
          Are you sure you want to delete invoice #{selectedInvoiceId}? This
          action cannot be undone.
        </p>
        <ButtonsGroup groupKey="delete" />
      </section>
    </div>
  );
};

export default DeletePrompt;
