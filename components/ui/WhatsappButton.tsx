type WhatsAppButtonProps = {
  children?: React.ReactNode;
  className?: string;
};

const phoneNumber = "542216062175";

export default function WhatsAppButton({
  children = "Consultar por WhatsApp",
  className = "",
}: WhatsAppButtonProps) {
  const message = encodeURIComponent(
    "Hola, quisiera realizar una consulta."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}