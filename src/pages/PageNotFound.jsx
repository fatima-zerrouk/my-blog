import Title from "../components/Title/Title";

function PageNotFound() {
  Title("Page non trouvée");

  return (
    <section>
      <h2 className="error-404">Erreur 404 page introuvable</h2>
    </section>
  );

}
export default PageNotFound