import SolutionDetailPage from "@/app/main-website-components/SolutionDetailPage/SolutionDetailPage";
import { getSolutionPage } from "@/app/_lib/data/solutionProductPages";

export default function APIIntegration() {
  return (
    <SolutionDetailPage
      page={getSolutionPage("api-integration")}
    />
  );
}
