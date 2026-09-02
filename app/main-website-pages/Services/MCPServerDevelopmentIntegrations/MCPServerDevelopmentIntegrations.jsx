import ServicePageLayout from "@/app/_shared/ServicePageLayout/ServicePageLayout";
import MCPServerDevelopmentIntegrationsPage from "@/app/main-website-components/MCPServerDevelopmentIntegrationsPage/MCPServerDevelopmentIntegrationsPage";

export default function MCPServerDevelopmentIntegrations() {
  return (
    <ServicePageLayout page="mcp-server-development-integrations" contactId="mcp-contact" navbarProps={{ variant: "adaptive", transparentTargetId: "mcp-hero", ctaHref: "/contact" }} footerProps={{ ctaHref: "/contact" }}>
      <MCPServerDevelopmentIntegrationsPage />
    </ServicePageLayout>
  );
}
