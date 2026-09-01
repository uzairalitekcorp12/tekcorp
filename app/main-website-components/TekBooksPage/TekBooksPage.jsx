import "../CapabilityFoundation/CapabilityFoundation.css";
import "./TekBooksPage.css";
import "./TekBooksPage.polish.css";

import Link from "next/link";
import { ArrowUpRight, BarChart3, BookOpen, Check, FileText, Receipt, Users } from "lucide-react";
import CapabilityMedia from "../CapabilityMedia/CapabilityMedia";

const modules = [
  ["Sales & Invoices", "Create customer invoices, track payments and keep receivables visible.", Receipt],
  ["Purchases & Expenses", "Capture supplier activity and everyday business expenses in one place.", FileText],
  ["Contacts", "Keep customer and supplier records connected to the transactions behind them.", Users],
  ["Books & Reporting", "Understand balances, movement and business performance through structured reports.", BookOpen],
  ["Management View", "See the financial pulse of the business without digging through disconnected spreadsheets.", BarChart3],
];

export default function TekBooksPage() {
  return (
    <div className="cap-page tekbooks-page">
      <section className="tekbooks-hero" aria-labelledby="tekbooks-title">
        <div className="cap-shell tekbooks-hero__grid">
          <div data-reveal="left">
            <span className="cap-kicker">Bookkeeping software for growing SMEs</span>
            <h1 id="tekbooks-title" className="cap-heading">Keep the books clear without making finance feel complicated.</h1>
            <p className="cap-copy">TekBooks brings customers, suppliers, invoices, expenses and reporting into one practical bookkeeping workspace designed for small and growing businesses.</p>
            <div className="tekbooks-hero__actions"><Link href="/contact" className="cap-button">Request a product demo <ArrowUpRight aria-hidden="true" size={13} /></Link><span className="cap-chip">Built for everyday SME finance</span></div>
            <div className="tekbooks-hero__proof"><div><strong>One</strong><span>financial workspace</span></div><div><strong>Clear</strong><span>transaction history</span></div><div><strong>Ready</strong><span>for reporting</span></div></div>
          </div>
          <CapabilityMedia alt="Tekcorp TekBooks bookkeeping dashboard" className="tekbooks-hero__media" label="TekBooks dashboard" priority src="/assets/Product-assets/TekBooks/ui-workspace-v2.png" />
        </div>
      </section>

      <section className="tekbooks-modules" aria-labelledby="tekbooks-modules-title"><div className="cap-shell"><header><span className="cap-kicker">Everything connected to the transaction</span><h2 id="tekbooks-modules-title" className="cap-heading">A practical finance workspace for the work SMEs do every day.</h2></header><div className="tekbooks-modules__grid">{modules.map(([title, text, Icon], index) => <article key={title} className={index === 0 ? "is-featured" : ""}><span className="tekbooks-modules__icon"><Icon aria-hidden="true" size={18} /></span><em>0{index + 1}</em><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="tekbooks-flow cap-dark" aria-labelledby="tekbooks-flow-title"><div className="cap-shell"><div className="tekbooks-flow__head"><div><span className="cap-kicker">From activity to financial visibility</span><h2 id="tekbooks-flow-title" className="cap-heading cap-heading--white">Keep the business story connected from transaction to report.</h2></div><p className="cap-copy">A simple operating flow helps teams spend less time reconciling disconnected records and more time understanding what the numbers mean.</p></div><div className="tekbooks-flow__rail">{["Customer / Supplier", "Invoice / Expense", "Payment / Settlement", "Ledger Movement", "Business Report"].map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong>{index < 4 ? <i aria-hidden="true">→</i> : null}</div>)}</div></div></section>

      <section className="tekbooks-dashboard" aria-labelledby="tekbooks-dashboard-title"><div className="cap-shell tekbooks-dashboard__grid">
        <CapabilityMedia alt="Tekcorp TekBooks financial reporting dashboard" className="tekbooks-dashboard__media" label="Financial visibility" src="/assets/Product-assets/TekBooks/ui-workspace-v2.png" />
        <div data-reveal="right"><span className="cap-kicker">See the business without spreadsheet archaeology</span><h2 id="tekbooks-dashboard-title" className="cap-heading">Turn daily bookkeeping into a clearer management view.</h2><p className="cap-copy">TekBooks is designed to keep records structured as the business operates, making it easier to review what is owed, what has been paid and how activity is moving.</p><ul>{["Customer and supplier activity", "Invoice and expense history", "Outstanding amounts", "Business-level transaction visibility", "Reporting-ready records"].map((item) => <li key={item}><Check aria-hidden="true" size={13} />{item}</li>)}</ul></div>
      </div></section>

      <section className="tekbooks-sme" aria-labelledby="tekbooks-sme-title"><div className="cap-shell"><header><span className="cap-kicker">Built around SME reality</span><h2 id="tekbooks-sme-title" className="cap-heading">Useful enough for finance. Simple enough for everyday operations.</h2></header><div className="tekbooks-sme__grid"><article><span>01</span><strong>Less fragmentation</strong><p>Bring core bookkeeping activity into one connected product.</p></article><article><span>02</span><strong>Better discipline</strong><p>Keep transactions attached to the customer, supplier and business event behind them.</p></article><article><span>03</span><strong>Clearer decisions</strong><p>Make routine financial information easier to review and discuss.</p></article></div></div></section>

      <section className="tekbooks-cta" aria-labelledby="tekbooks-cta-title"><div className="cap-shell tekbooks-cta__panel"><div><span className="cap-kicker">Want to see TekBooks in action?</span><h2 id="tekbooks-cta-title" className="cap-heading">Explore a bookkeeping system designed around the way small businesses actually operate.</h2></div><Link href="/contact" className="cap-button">Request TekBooks demo <ArrowUpRight aria-hidden="true" size={13} /></Link></div></section>
    </div>
  );
}
