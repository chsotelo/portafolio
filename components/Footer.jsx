const footerData = {
  year: 2024,
  text: "Christian Sotelo Gutierrez",
  rights: "Todos los derechos reservados.",
};

export default function Footer() {
  return (
    <footer className="bg-secondary py-6 ">
      <div className="container mx-auto text-center">
        <p>
          &copy; {footerData.year} {footerData.text}. {footerData.rights}
        </p>
      </div>
    </footer>
  );
}
