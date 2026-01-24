import Button from "@/components/Button/Button";
import invoiceButtonsConfig from "../../config/invoiceButtons.config";

const DeletePrompt = ({ invoiceId }: { invoiceId: string }) => {
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
          Are you sure you want to delete invoice #{invoiceId}? This action
          cannot be undone.
        </p>
        <div className="flex justify-end gap-2">
          <Button
            {...invoiceButtonsConfig.cancel}
            onClick={() => console.log(`Cancel invoice deletion`)}
          />
          <Button
            {...invoiceButtonsConfig.delete}
            onClick={() => console.log(`Confirm invoice deletion`)}
          />
        </div>
      </section>
    </div>
  );
};

export default DeletePrompt;
