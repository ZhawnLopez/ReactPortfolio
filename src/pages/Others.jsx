import PageTransition from "../components/PageTransition";
import Accordion from "../components/Accordion";

export default function Others({ darkMode }) {
  return (
    <PageTransition>
      <div className="container py-4">
        <Accordion darkMode={darkMode} />
      </div>
    </PageTransition>
  );
}
