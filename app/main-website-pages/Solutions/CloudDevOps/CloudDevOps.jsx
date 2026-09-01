import SolutionDetailPage from "@/app/main-website-components/SolutionDetailPage/SolutionDetailPage";
import { getSolutionPage } from "@/app/_lib/data/solutionProductPages";

export default function CloudDevOps() {
  return (
    <SolutionDetailPage
      page={getSolutionPage("cloud-devops")}
    />
  );
}
