import LegalPolicyPage from "@/app/main-website-components/LegalPolicyPage/LegalPolicyPage";
import { buildPageMetadata } from "@/app/_lib/metadata";

export const metadata = buildPageMetadata({
  title: "Refund Policy",
  canonical: "/legal/refund-policy",
  description:
    "Review TekCorp's approach to cancellations, project payments, digital products, and refund requests.",
});

/*
 * EDITABLE REFUND POLICY CONTENT
 * ------------------------------
 * Update the text in this object whenever commercial terms change. The shared
 * LegalPolicyPage component controls presentation only.
 *
 * Signed proposals, order forms, and client agreements should be reviewed
 * alongside this website policy. Have legal counsel approve material changes.
 */
const refundPolicy = {
  slug: "refund-policy",
  variant: "refund",
  eyebrow: "Payments & Cancellations",
  title: "Refund Policy",
  summary:
    "This Refund Policy explains how TekCorp LLC reviews cancellation and refund requests for professional services, project work, digital products, and related charges.",
  lastUpdated: "September 1, 2026",
  heroNote:
    "Refund eligibility depends on the service ordered, work already completed, committed third-party costs, and the terms accepted for the engagement.",
  overviewItems: [
    "Signed project terms take priority",
    "Completed and committed work is accounted for",
    "Valid billing errors are reviewed promptly",
  ],
  contactText:
    "Send your order, invoice, or project reference with a short explanation of the request. Our team will review it against the applicable agreement and work completed.",
  sections: [
    {
      id: "scope-and-priority",
      title: "Scope and priority of agreed terms",
      paragraphs: [
        "This policy provides general website guidance for refund and cancellation requests. A signed proposal, statement of work, order form, subscription plan, product agreement, or other written contract may contain service-specific payment and cancellation terms.",
        "Where a written agreement contains different terms, that agreement controls for the relevant engagement. Nothing in this policy limits rights that cannot lawfully be excluded.",
      ],
    },
    {
      id: "before-work-begins",
      title: "Cancellation before work begins",
      paragraphs: [
        "If you cancel in writing before TekCorp begins work, we will review prepaid amounts for a possible refund. Any approved amount may be reduced by non-recoverable payment fees, discovery already performed, reserved resources, purchased materials, licenses, or third-party commitments made for the project.",
        "A project is considered started when research, planning, design, development, setup, procurement, consulting, or another agreed activity has begun.",
      ],
    },
    {
      id: "work-in-progress",
      title: "Projects and work in progress",
      paragraphs: [
        "Once work has started, fees attributable to work completed, time reserved, deliverables produced, and costs committed are generally not refundable. If a project ends early, TekCorp will review the engagement and identify any unused prepaid portion that may remain after those amounts are accounted for.",
        "Deposits or booking payments identified as non-refundable in an accepted proposal or agreement remain subject to those accepted terms.",
      ],
    },
    {
      id: "milestones-and-deliverables",
      title: "Milestones, approvals, and delivered work",
      paragraphs: [
        "Payments linked to an approved milestone, accepted deliverable, completed service period, or released production work are normally non-refundable because the related work has been performed.",
        "Concerns about a deliverable should be raised within the review period stated in the applicable agreement. Where appropriate, TekCorp may first correct an agreed defect or complete an outstanding requirement before considering another remedy.",
      ],
    },
    {
      id: "digital-products",
      title: "Digital products and subscriptions",
      paragraphs: [
        "Fees for digital products, hosted access, subscriptions, licenses, setup, or implementation may have separate cancellation and renewal rules shown at purchase or in the applicable product agreement.",
        "Once access has been provisioned, a license activated, implementation started, or a subscription period begun, amounts paid are generally non-refundable unless the accepted terms or applicable law provide otherwise.",
      ],
    },
    {
      id: "third-party-costs",
      title: "Third-party and pass-through costs",
      paragraphs: [
        "Domain registrations, hosting, advertising spend, software licenses, stock assets, contractors, platform charges, payment fees, and other third-party costs are refundable only if the provider returns those amounts to TekCorp.",
        "Where possible, we will explain material third-party commitments before they are incurred or identify them in the relevant proposal or invoice.",
      ],
    },
    {
      id: "billing-errors",
      title: "Duplicate, incorrect, or unauthorized charges",
      paragraphs: [
        "If you believe you were charged twice, charged an incorrect amount, or billed without authorization, contact us promptly with the invoice and transaction details. We will investigate the payment record and correct verified billing errors.",
        "Please avoid sending complete card or bank credentials by ordinary email. We may request information through a safer channel when payment verification is required.",
      ],
    },
    {
      id: "request-process",
      title: "How to request a refund",
      paragraphs: [
        "Submit the request in writing to the contact address below. Include the client or company name, invoice or order number, payment date, amount, service or product involved, and the reason for the request.",
        "We may request supporting information and will assess the request against the accepted terms, delivery records, completed work, and costs already incurred. Submitting a request does not guarantee approval.",
      ],
    },
    {
      id: "approved-refunds",
      title: "Approved refunds and processing",
      paragraphs: [
        "If a refund is approved, TekCorp will confirm the amount and intended payment method in writing. Refunds are normally returned through the original payment method where practical, but processing times depend on banks, card networks, payment processors, and currency arrangements.",
        "Any currency conversion difference, bank fee, or processor charge outside TekCorp's control may affect the final amount received.",
      ],
    },
    {
      id: "policy-updates",
      title: "Policy updates",
      paragraphs: [
        "We may update this policy when our products, payment methods, or commercial processes change. The version applying to a transaction will be considered alongside the terms accepted for that transaction and any mandatory legal rights.",
      ],
    },
  ],
};

export default function RefundPolicyRoute() {
  return <LegalPolicyPage policy={refundPolicy} />;
}
