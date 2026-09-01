import LegalPolicyPage from "@/app/main-website-components/LegalPolicyPage/LegalPolicyPage";
import { buildPageMetadata } from "@/app/_lib/metadata";

export const metadata = buildPageMetadata({
  title: "Terms & Conditions",
  canonical: "/legal/terms-and-conditions",
  description:
    "Read the terms governing access to the TekCorp website, content, enquiries, and professional services.",
});

/*
 * EDITABLE TERMS & CONDITIONS CONTENT
 * -----------------------------------
 * Update the text in this object whenever the website or service terms change.
 * The shared LegalPolicyPage component controls presentation only.
 *
 * Have legal counsel review these terms before relying on them for a new
 * product, jurisdiction, payment model, or category of service.
 */
const termsAndConditions = {
  slug: "terms-and-conditions",
  variant: "terms",
  eyebrow: "Website & Service Terms",
  title: "Terms & Conditions",
  summary:
    "These Terms & Conditions govern access to TekCorp's website and explain the general rules that apply when you contact us, review our content, or engage our professional services.",
  lastUpdated: "September 1, 2026",
  heroNote:
    "Using this website means you agree to these terms. Project-specific proposals, order forms, and signed agreements add to or replace relevant website terms.",
  overviewItems: [
    "Website use must be lawful and respectful",
    "TekCorp content and branding remain protected",
    "Signed service agreements control project delivery",
  ],
  contactText:
    "Contact us if you have a question about these terms or need the contractual documents that apply to a particular TekCorp service or product.",
  sections: [
    {
      id: "acceptance",
      title: "Acceptance of these terms",
      paragraphs: [
        "By accessing or using this website, you agree to these Terms & Conditions and our Privacy Policy. If you do not agree, you should stop using the website.",
        "If you use the website on behalf of a company or another organization, you confirm that you are authorized to act for that organization in relation to the use of the website.",
      ],
    },
    {
      id: "website-purpose",
      title: "Website purpose and information",
      paragraphs: [
        "This website provides general information about TekCorp, our capabilities, products, projects, and ways to contact us. Website content is provided for general business information and does not by itself create a client, advisory, employment, partnership, or fiduciary relationship.",
        "We try to keep website information accurate and useful, but content may be incomplete, become outdated, or contain errors. Features, descriptions, availability, and pricing may change without notice.",
      ],
    },
    {
      id: "service-engagements",
      title: "Proposals and service engagements",
      paragraphs: [
        "A website enquiry, meeting, estimate, or proposal request does not require either party to proceed. A project begins only when the applicable proposal, order form, statement of work, or agreement has been accepted and any required initial payment or onboarding condition has been completed.",
        "Project scope, responsibilities, delivery assumptions, timelines, fees, intellectual property, acceptance, support, and cancellation terms may be set out in separate written documents. Those documents control where they conflict with these general website terms.",
      ],
    },
    {
      id: "acceptable-use",
      title: "Acceptable use",
      paragraphs: [
        "You may use the website only for lawful purposes and in a way that does not damage, disable, overload, interfere with, or compromise the website or another person's use of it.",
      ],
      items: [
        "Do not attempt unauthorized access to accounts, servers, systems, source code, or restricted areas.",
        "Do not introduce malware, harmful code, automated abuse, scraping that disrupts service, or security-testing activity without written permission.",
        "Do not impersonate another person, submit misleading information, or use the website to violate another party's rights.",
        "Do not copy, republish, resell, or commercially exploit website content except with permission or as allowed by law.",
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual property",
      paragraphs: [
        "Unless otherwise stated, the website, visual design, text, graphics, software, code, trademarks, logos, and other site content are owned by or licensed to TekCorp and are protected by applicable intellectual-property laws.",
        "You may view and temporarily download website material for legitimate internal evaluation. No ownership rights are transferred, and any broader reproduction, modification, distribution, public display, or commercial use requires prior written permission.",
      ],
    },
    {
      id: "client-materials",
      title: "Information and materials you provide",
      paragraphs: [
        "You are responsible for ensuring that information and materials you provide are accurate, lawful, and supplied with the permissions needed for TekCorp to review or use them for the requested purpose.",
        "Unless a separate confidentiality agreement applies, avoid submitting trade secrets, regulated data, passwords, complete payment credentials, or other highly sensitive information through ordinary website forms or unsolicited email.",
      ],
    },
    {
      id: "third-party-services",
      title: "Third-party links and services",
      paragraphs: [
        "The website may reference or link to third-party websites, platforms, tools, integrations, or content. Those services are controlled by their respective providers and may be subject to separate terms, privacy notices, pricing, and availability.",
        "A link or reference does not mean TekCorp controls or guarantees the third party. You should review the third party's terms before using its service.",
      ],
    },
    {
      id: "disclaimers",
      title: "Disclaimers",
      paragraphs: [
        "To the extent permitted by law, the website is provided on an “as available” basis without warranties that it will always be uninterrupted, error-free, secure, or suitable for a particular purpose.",
        "Case studies, examples, estimates, and performance discussions are contextual and do not guarantee that another project or business will achieve the same result. Professional decisions should be based on the facts and written terms of the specific engagement.",
      ],
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of liability",
      paragraphs: [
        "To the fullest extent permitted by applicable law, TekCorp will not be liable for indirect, incidental, special, consequential, or punitive loss arising solely from use of, or inability to use, this website.",
        "Liability connected with paid services or products is governed by the applicable proposal, order form, product terms, or signed agreement. Nothing in these terms excludes liability that cannot legally be excluded or limited.",
      ],
    },
    {
      id: "suspension-and-termination",
      title: "Suspension and termination",
      paragraphs: [
        "We may restrict or suspend access to the website where reasonably necessary for maintenance, security, legal compliance, misuse prevention, or protection of TekCorp and other users.",
        "Termination or suspension of a paid service is governed by the applicable agreement, including provisions that continue after termination such as payment, confidentiality, intellectual property, limitations, and dispute terms.",
      ],
    },
    {
      id: "governing-terms",
      title: "Governing terms and disputes",
      paragraphs: [
        "The governing law, venue, and dispute process for a client engagement will be stated in the applicable signed agreement or order form. Those agreed provisions take priority for that engagement.",
        "For website-only matters where no separate agreement exists, applicable governing-law and jurisdiction questions will be determined according to TekCorp's contracting entity, the nature of the matter, and mandatory law.",
      ],
    },
    {
      id: "changes-and-severability",
      title: "Changes, severability, and entire understanding",
      paragraphs: [
        "We may update these terms as our website, services, or legal requirements change. Updated terms become effective when posted with the revised date, unless another effective date is stated.",
        "If a provision is found unenforceable, the remaining provisions continue to apply to the extent permitted by law. These website terms, together with referenced policies and any applicable written agreement, form the relevant understanding for their respective subject matter.",
      ],
    },
  ],
};

export default function TermsAndConditionsRoute() {
  return <LegalPolicyPage policy={termsAndConditions} />;
}
