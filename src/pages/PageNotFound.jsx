import Title from "../components/Title/Title";

function PageNotFound() {
  Title("Page non trouvée");

  return (
    <section>
      <h2 className="error-404">404 Error Error Error page not found</h2>
    </section>
  );

}
export default PageNotFound