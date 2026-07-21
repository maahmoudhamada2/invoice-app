import useActionButtons from "../../hooks/useActionButtons";
import Button from "@/components/Button/Button";
import useAppUiStore from "@/store/useAppUiStore";

interface HeaderProps {
  isEdit: boolean;
  invoiceId: string | null;
}

const Header = ({ isEdit, invoiceId }: HeaderProps) => {
  const closeForm = useAppUiStore((state) => state.closeForm);
  const backBtnConfigs = useActionButtons("goBack", () => closeForm());

  return (
    <header className="text-main mb-5.5 flex flex-col items-start gap-6.5 md:mb-11.5 ">
      {!isEdit && <Button {...backBtnConfigs} />}
      <h2 className="text-heading text-text-primary">
        {isEdit ? (
          <>
            Edit <span className="text-subtle">#</span>
            {invoiceId}
          </>
        ) : (
          "New Invoice"
        )}
      </h2>
    </header>
  );
};

export default Header;
