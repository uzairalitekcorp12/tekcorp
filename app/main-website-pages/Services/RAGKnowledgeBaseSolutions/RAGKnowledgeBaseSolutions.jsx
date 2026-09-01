import ServicePageLayout from "@/app/_shared/ServicePageLayout/ServicePageLayout";
import RAGKnowledgeBaseSolutionsPage from "@/app/main-website-components/RAGKnowledgeBaseSolutionsPage/RAGKnowledgeBaseSolutionsPage";

export default function RAGKnowledgeBaseSolutions() {
  return (
    <ServicePageLayout page="rag-knowledge-base-solutions" contactId="rag-contact" navbarProps={{ variant: "adaptive", transparentTargetId: "rag-hero", ctaHref: "#rag-contact" }} footerProps={{ ctaHref: "#rag-contact" }}>
      <RAGKnowledgeBaseSolutionsPage />
    </ServicePageLayout>
  );
}
