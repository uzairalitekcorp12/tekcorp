/* ========================================================================== 
   TEKCORP — PRODUCT + SOLUTION IMAGE MAP
   ========================================================================== 

   This is the single source of truth for the supplied page imagery. To swap
   an image later, replace the file in /public or update only its `src` here;
   no page component needs to change.

   The source directory is intentionally named `soloution-assets` on disk.
   ========================================================================== */

const PRODUCT_ASSET_ROOT = "/assets/product-assets";
const SOLUTION_ASSET_ROOT = "/assets/soloution-assets";

const image = (src, alt) => ({ src, alt });

export const PRODUCT_PAGE_ASSETS = {
  "digital-commerce-software": {
    hero: image(
      `${PRODUCT_ASSET_ROOT}/digital-commerce-hero.png`,
      "Digital commerce analytics and storefront workspace",
    ),
    side: image(
      `${PRODUCT_ASSET_ROOT}/digital-commerce-side.png`,
      "Digital commerce reporting workspace",
    ),
  },
  "task-management-portal": {
    hero: image(
      `${PRODUCT_ASSET_ROOT}/task-management-hero.png`,
      "Task management dashboard and project timeline workspace",
    ),
    side: image(
      `${PRODUCT_ASSET_ROOT}/task-management-side.png`,
      "Task reporting workspace",
    ),
  },
  "employee-management-onboarding-portal": {
    hero: image(
      `${PRODUCT_ASSET_ROOT}/employee-management-hero.png`,
      "Employee onboarding and workforce management workspace",
    ),
    side: image(
      `${PRODUCT_ASSET_ROOT}/employee-management-side.png`,
      "Employee reporting workspace",
    ),
  },
};

export const SOLUTION_PAGE_ASSETS = {
  "crm-integration": {
    hero: image(
      `${SOLUTION_ASSET_ROOT}/crm-hero.png`,
      "CRM integration workspace",
    ),
    ctaPerson: image(
      `${SOLUTION_ASSET_ROOT}/crm-women.png`,
      "CRM specialist using an integrated customer platform",
    ),
    footer: image(
      `${SOLUTION_ASSET_ROOT}/crm-footer.png`,
      "CRM customer-relationship workspace",
    ),
  },
  "erp-integration": {
    hero: image(
      `${SOLUTION_ASSET_ROOT}/erp-hero.png`,
      "ERP integration platform",
    ),
    side: image(
      `${SOLUTION_ASSET_ROOT}/erp-side.png`,
      "ERP planning workspace",
    ),
    footer: image(
      `${SOLUTION_ASSET_ROOT}/erp-footer.png`,
      "Team reviewing an ERP system",
    ),
  },
  "cloud-devops": {
    hero: image(
      `${SOLUTION_ASSET_ROOT}/cloud-hero.png`,
      "Cloud infrastructure and DevOps workspace",
    ),
    side: image(
      `${SOLUTION_ASSET_ROOT}/cloud-side.png`,
      "Cloud infrastructure planning",
    ),
    footerUp: image(
      `${SOLUTION_ASSET_ROOT}/cloud-side-2.png`,
      "Cloud and DevOps workflow",
    ),
    footer: image(
      `${SOLUTION_ASSET_ROOT}/cloud-footer.png`,
      "Cloud engineering team collaborating",
    ),
  },
  "reports-data-analysis": {
    hero: image(
      `${SOLUTION_ASSET_ROOT}/data-analysis-hero.png`,
      "Business data analysis dashboard",
    ),
    side: image(
      `${SOLUTION_ASSET_ROOT}/data-analysis-side.png`,
      "Data analyst reviewing a report",
    ),
    footerUp: image(
      `${SOLUTION_ASSET_ROOT}/data-analysis-footer-up.png`,
      "Business intelligence reporting workspace",
    ),
    footer: image(
      `${SOLUTION_ASSET_ROOT}/data-analysis-footer.png`,
      "Data analysis and reporting team",
    ),
  },
  "api-integration": {
    hero: image(
      `${SOLUTION_ASSET_ROOT}/api-hero.png`,
      "Secure API integration workspace",
    ),
    side: image(
      `${SOLUTION_ASSET_ROOT}/api-side.png`,
      "API integration workflow",
    ),
    footer: image(
      `${SOLUTION_ASSET_ROOT}/api-footer.png`,
      "Connected digital services",
    ),
  },
};
