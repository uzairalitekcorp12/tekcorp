"use client";

import "./ContactPage.css";

import {
  ArrowUpRight,
  Bot,
  Building2,
  CalendarClock,
  Check,
  CheckCircle2,
  ChevronDown,
  Code2,
  GraduationCap,
  Layers3,
  Mail,
  MessageSquareText,
  PenTool,
  Phone,
  Search,
  ShoppingBag,
  Smartphone,
  UserRound,
  WalletCards,
} from "lucide-react";

import {
  useActionState,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  submitContact,
} from "@/app/_actions/contact";


const initialSubmissionState = {
  ok: false,
  message: "",
};


/* ==========================================================================
   PROJECT SERVICES
   ========================================================================== */

const services = [
  {
    key: "website",
    title: "Website Development",
    description:
      "High-performance websites built around your brand, audience and growth goals.",
    icon: Code2,
  },
  {
    key: "software",
    title: "Custom Software",
    description:
      "Scalable platforms, internal tools and business systems tailored to your workflow.",
    icon: Layers3,
  },
  {
    key: "ai",
    title: "AI & Automation",
    description:
      "AI assistants, intelligent workflows and automation for repetitive business processes.",
    icon: Bot,
  },
  {
    key: "mobile",
    title: "Mobile Application",
    description:
      "Fast, intuitive mobile experiences designed for usability and long-term growth.",
    icon: Smartphone,
  },
  {
    key: "design",
    title: "UI/UX & Branding",
    description:
      "Clear digital experiences and brand systems built to feel modern and memorable.",
    icon: PenTool,
  },
  {
    key: "seo",
    title: "SEO & Growth",
    description:
      "Search visibility, content strategy and measurable digital growth support.",
    icon: Search,
  },
  {
    key: "ecommerce",
    title: "E-Commerce",
    description:
      "Conversion-focused stores, integrations and commerce experiences that scale.",
    icon: ShoppingBag,
  },
  {
    key: "edtech",
    title: "EdTech Platforms",
    description:
      "Learning portals, education software and digital classroom experiences.",
    icon: GraduationCap,
  },
];


const budgetOptions = [
  {
    value: "under-1000",
    label: "Under $1,000",
  },
  {
    value: "1000-3000",
    label: "$1,000 – $3,000",
  },
  {
    value: "3000-7500",
    label: "$3,000 – $7,500",
  },
  {
    value: "7500-15000",
    label: "$7,500 – $15,000",
  },
  {
    value: "15000-plus",
    label: "$15,000+",
  },
  {
    value: "not-sure",
    label: "Not sure yet",
  },
];


const timelineOptions = [
  {
    value: "asap",
    label: "As soon as possible",
  },
  {
    value: "within-one-month",
    label: "Within 1 month",
  },
  {
    value: "one-three-months",
    label: "1 – 3 months",
  },
  {
    value: "three-six-months",
    label: "3 – 6 months",
  },
  {
    value: "flexible",
    label: "Flexible / exploring",
  },
];


/* ==========================================================================
   COUNTRY CODES

   A complete country list is kept locally so the form does not depend on
   another package or external API just to render the WhatsApp/phone field.

   Some countries share calling codes (for example +1 and +7), which is valid.
   ========================================================================== */

const countryCodeOptions = [
  { iso: "AF", name: "Afghanistan", code: "+93" },
  { iso: "AL", name: "Albania", code: "+355" },
  { iso: "DZ", name: "Algeria", code: "+213" },
  { iso: "AD", name: "Andorra", code: "+376" },
  { iso: "AO", name: "Angola", code: "+244" },
  { iso: "AG", name: "Antigua and Barbuda", code: "+1-268" },
  { iso: "AR", name: "Argentina", code: "+54" },
  { iso: "AM", name: "Armenia", code: "+374" },
  { iso: "AU", name: "Australia", code: "+61" },
  { iso: "AT", name: "Austria", code: "+43" },
  { iso: "AZ", name: "Azerbaijan", code: "+994" },
  { iso: "BS", name: "Bahamas", code: "+1-242" },
  { iso: "BH", name: "Bahrain", code: "+973" },
  { iso: "BD", name: "Bangladesh", code: "+880" },
  { iso: "BB", name: "Barbados", code: "+1-246" },
  { iso: "BY", name: "Belarus", code: "+375" },
  { iso: "BE", name: "Belgium", code: "+32" },
  { iso: "BZ", name: "Belize", code: "+501" },
  { iso: "BJ", name: "Benin", code: "+229" },
  { iso: "BT", name: "Bhutan", code: "+975" },
  { iso: "BO", name: "Bolivia", code: "+591" },
  { iso: "BA", name: "Bosnia and Herzegovina", code: "+387" },
  { iso: "BW", name: "Botswana", code: "+267" },
  { iso: "BR", name: "Brazil", code: "+55" },
  { iso: "BN", name: "Brunei", code: "+673" },
  { iso: "BG", name: "Bulgaria", code: "+359" },
  { iso: "BF", name: "Burkina Faso", code: "+226" },
  { iso: "BI", name: "Burundi", code: "+257" },
  { iso: "CV", name: "Cabo Verde", code: "+238" },
  { iso: "KH", name: "Cambodia", code: "+855" },
  { iso: "CM", name: "Cameroon", code: "+237" },
  { iso: "CA", name: "Canada", code: "+1" },
  { iso: "CF", name: "Central African Republic", code: "+236" },
  { iso: "TD", name: "Chad", code: "+235" },
  { iso: "CL", name: "Chile", code: "+56" },
  { iso: "CN", name: "China", code: "+86" },
  { iso: "CO", name: "Colombia", code: "+57" },
  { iso: "KM", name: "Comoros", code: "+269" },
  { iso: "CG", name: "Congo", code: "+242" },
  { iso: "CD", name: "Congo, Democratic Republic of the", code: "+243" },
  { iso: "CR", name: "Costa Rica", code: "+506" },
  { iso: "CI", name: "Côte d’Ivoire", code: "+225" },
  { iso: "HR", name: "Croatia", code: "+385" },
  { iso: "CU", name: "Cuba", code: "+53" },
  { iso: "CY", name: "Cyprus", code: "+357" },
  { iso: "CZ", name: "Czechia", code: "+420" },
  { iso: "DK", name: "Denmark", code: "+45" },
  { iso: "DJ", name: "Djibouti", code: "+253" },
  { iso: "DM", name: "Dominica", code: "+1-767" },
  { iso: "DO", name: "Dominican Republic", code: "+1-809" },
  { iso: "EC", name: "Ecuador", code: "+593" },
  { iso: "EG", name: "Egypt", code: "+20" },
  { iso: "SV", name: "El Salvador", code: "+503" },
  { iso: "GQ", name: "Equatorial Guinea", code: "+240" },
  { iso: "ER", name: "Eritrea", code: "+291" },
  { iso: "EE", name: "Estonia", code: "+372" },
  { iso: "SZ", name: "Eswatini", code: "+268" },
  { iso: "ET", name: "Ethiopia", code: "+251" },
  { iso: "FJ", name: "Fiji", code: "+679" },
  { iso: "FI", name: "Finland", code: "+358" },
  { iso: "FR", name: "France", code: "+33" },
  { iso: "GA", name: "Gabon", code: "+241" },
  { iso: "GM", name: "Gambia", code: "+220" },
  { iso: "GE", name: "Georgia", code: "+995" },
  { iso: "DE", name: "Germany", code: "+49" },
  { iso: "GH", name: "Ghana", code: "+233" },
  { iso: "GR", name: "Greece", code: "+30" },
  { iso: "GD", name: "Grenada", code: "+1-473" },
  { iso: "GT", name: "Guatemala", code: "+502" },
  { iso: "GN", name: "Guinea", code: "+224" },
  { iso: "GW", name: "Guinea-Bissau", code: "+245" },
  { iso: "GY", name: "Guyana", code: "+592" },
  { iso: "HT", name: "Haiti", code: "+509" },
  { iso: "HN", name: "Honduras", code: "+504" },
  { iso: "HU", name: "Hungary", code: "+36" },
  { iso: "IS", name: "Iceland", code: "+354" },
  { iso: "IN", name: "India", code: "+91" },
  { iso: "ID", name: "Indonesia", code: "+62" },
  { iso: "IR", name: "Iran", code: "+98" },
  { iso: "IQ", name: "Iraq", code: "+964" },
  { iso: "IE", name: "Ireland", code: "+353" },
  { iso: "IL", name: "Israel", code: "+972" },
  { iso: "IT", name: "Italy", code: "+39" },
  { iso: "JM", name: "Jamaica", code: "+1-876" },
  { iso: "JP", name: "Japan", code: "+81" },
  { iso: "JO", name: "Jordan", code: "+962" },
  { iso: "KZ", name: "Kazakhstan", code: "+7" },
  { iso: "KE", name: "Kenya", code: "+254" },
  { iso: "KI", name: "Kiribati", code: "+686" },
  { iso: "KP", name: "Korea, North", code: "+850" },
  { iso: "KR", name: "Korea, South", code: "+82" },
  { iso: "XK", name: "Kosovo", code: "+383" },
  { iso: "KW", name: "Kuwait", code: "+965" },
  { iso: "KG", name: "Kyrgyzstan", code: "+996" },
  { iso: "LA", name: "Laos", code: "+856" },
  { iso: "LV", name: "Latvia", code: "+371" },
  { iso: "LB", name: "Lebanon", code: "+961" },
  { iso: "LS", name: "Lesotho", code: "+266" },
  { iso: "LR", name: "Liberia", code: "+231" },
  { iso: "LY", name: "Libya", code: "+218" },
  { iso: "LI", name: "Liechtenstein", code: "+423" },
  { iso: "LT", name: "Lithuania", code: "+370" },
  { iso: "LU", name: "Luxembourg", code: "+352" },
  { iso: "MG", name: "Madagascar", code: "+261" },
  { iso: "MW", name: "Malawi", code: "+265" },
  { iso: "MY", name: "Malaysia", code: "+60" },
  { iso: "MV", name: "Maldives", code: "+960" },
  { iso: "ML", name: "Mali", code: "+223" },
  { iso: "MT", name: "Malta", code: "+356" },
  { iso: "MH", name: "Marshall Islands", code: "+692" },
  { iso: "MR", name: "Mauritania", code: "+222" },
  { iso: "MU", name: "Mauritius", code: "+230" },
  { iso: "MX", name: "Mexico", code: "+52" },
  { iso: "FM", name: "Micronesia", code: "+691" },
  { iso: "MD", name: "Moldova", code: "+373" },
  { iso: "MC", name: "Monaco", code: "+377" },
  { iso: "MN", name: "Mongolia", code: "+976" },
  { iso: "ME", name: "Montenegro", code: "+382" },
  { iso: "MA", name: "Morocco", code: "+212" },
  { iso: "MZ", name: "Mozambique", code: "+258" },
  { iso: "MM", name: "Myanmar", code: "+95" },
  { iso: "NA", name: "Namibia", code: "+264" },
  { iso: "NR", name: "Nauru", code: "+674" },
  { iso: "NP", name: "Nepal", code: "+977" },
  { iso: "NL", name: "Netherlands", code: "+31" },
  { iso: "NZ", name: "New Zealand", code: "+64" },
  { iso: "NI", name: "Nicaragua", code: "+505" },
  { iso: "NE", name: "Niger", code: "+227" },
  { iso: "NG", name: "Nigeria", code: "+234" },
  { iso: "MK", name: "North Macedonia", code: "+389" },
  { iso: "NO", name: "Norway", code: "+47" },
  { iso: "OM", name: "Oman", code: "+968" },
  { iso: "PK", name: "Pakistan", code: "+92" },
  { iso: "PW", name: "Palau", code: "+680" },
  { iso: "PS", name: "Palestine", code: "+970" },
  { iso: "PA", name: "Panama", code: "+507" },
  { iso: "PG", name: "Papua New Guinea", code: "+675" },
  { iso: "PY", name: "Paraguay", code: "+595" },
  { iso: "PE", name: "Peru", code: "+51" },
  { iso: "PH", name: "Philippines", code: "+63" },
  { iso: "PL", name: "Poland", code: "+48" },
  { iso: "PT", name: "Portugal", code: "+351" },
  { iso: "QA", name: "Qatar", code: "+974" },
  { iso: "RO", name: "Romania", code: "+40" },
  { iso: "RU", name: "Russia", code: "+7" },
  { iso: "RW", name: "Rwanda", code: "+250" },
  { iso: "KN", name: "Saint Kitts and Nevis", code: "+1-869" },
  { iso: "LC", name: "Saint Lucia", code: "+1-758" },
  { iso: "VC", name: "Saint Vincent and the Grenadines", code: "+1-784" },
  { iso: "WS", name: "Samoa", code: "+685" },
  { iso: "SM", name: "San Marino", code: "+378" },
  { iso: "ST", name: "São Tomé and Príncipe", code: "+239" },
  { iso: "SA", name: "Saudi Arabia", code: "+966" },
  { iso: "SN", name: "Senegal", code: "+221" },
  { iso: "RS", name: "Serbia", code: "+381" },
  { iso: "SC", name: "Seychelles", code: "+248" },
  { iso: "SL", name: "Sierra Leone", code: "+232" },
  { iso: "SG", name: "Singapore", code: "+65" },
  { iso: "SK", name: "Slovakia", code: "+421" },
  { iso: "SI", name: "Slovenia", code: "+386" },
  { iso: "SB", name: "Solomon Islands", code: "+677" },
  { iso: "SO", name: "Somalia", code: "+252" },
  { iso: "ZA", name: "South Africa", code: "+27" },
  { iso: "SS", name: "South Sudan", code: "+211" },
  { iso: "ES", name: "Spain", code: "+34" },
  { iso: "LK", name: "Sri Lanka", code: "+94" },
  { iso: "SD", name: "Sudan", code: "+249" },
  { iso: "SR", name: "Suriname", code: "+597" },
  { iso: "SE", name: "Sweden", code: "+46" },
  { iso: "CH", name: "Switzerland", code: "+41" },
  { iso: "SY", name: "Syria", code: "+963" },
  { iso: "TW", name: "Taiwan", code: "+886" },
  { iso: "TJ", name: "Tajikistan", code: "+992" },
  { iso: "TZ", name: "Tanzania", code: "+255" },
  { iso: "TH", name: "Thailand", code: "+66" },
  { iso: "TL", name: "Timor-Leste", code: "+670" },
  { iso: "TG", name: "Togo", code: "+228" },
  { iso: "TO", name: "Tonga", code: "+676" },
  { iso: "TT", name: "Trinidad and Tobago", code: "+1-868" },
  { iso: "TN", name: "Tunisia", code: "+216" },
  { iso: "TR", name: "Türkiye", code: "+90" },
  { iso: "TM", name: "Turkmenistan", code: "+993" },
  { iso: "TV", name: "Tuvalu", code: "+688" },
  { iso: "UG", name: "Uganda", code: "+256" },
  { iso: "UA", name: "Ukraine", code: "+380" },
  { iso: "AE", name: "United Arab Emirates", code: "+971" },
  { iso: "GB", name: "United Kingdom", code: "+44" },
  { iso: "US", name: "United States", code: "+1" },
  { iso: "UY", name: "Uruguay", code: "+598" },
  { iso: "UZ", name: "Uzbekistan", code: "+998" },
  { iso: "VU", name: "Vanuatu", code: "+678" },
  { iso: "VA", name: "Vatican City", code: "+39-06" },
  { iso: "VE", name: "Venezuela", code: "+58" },
  { iso: "VN", name: "Vietnam", code: "+84" },
  { iso: "YE", name: "Yemen", code: "+967" },
  { iso: "ZM", name: "Zambia", code: "+260" },
  { iso: "ZW", name: "Zimbabwe", code: "+263" },
];


function isoToFlag(
  iso,
) {
  if (
    !iso ||
    iso.length !== 2
  ) {
    return "🌐";
  }

  return String.fromCodePoint(
    ...iso
      .toUpperCase()
      .split("")
      .map(
        (letter) =>
          127397 +
          letter.charCodeAt(
            0,
          ),
      ),
  );
}


/* ==========================================================================
   SHARED SELECT MENU
   ========================================================================== */

function SelectMenu({
  id,
  value,
  placeholder,
  options,
  onChange,
  icon: Icon,
  openMenu,
  setOpenMenu,
}) {
  const rootRef =
    useRef(null);

  const isOpen =
    openMenu === id;

  const selectedOption =
    options.find(
      (option) =>
        option.value === value,
    );


  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function closeOnOutside(
      event,
    ) {
      if (
        rootRef.current &&
        !rootRef.current.contains(
          event.target,
        )
      ) {
        setOpenMenu(
          null,
        );
      }
    }

    function closeOnEscape(
      event,
    ) {
      if (
        event.key === "Escape"
      ) {
        setOpenMenu(
          null,
        );
      }
    }

    document.addEventListener(
      "pointerdown",
      closeOnOutside,
    );

    document.addEventListener(
      "keydown",
      closeOnEscape,
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        closeOnOutside,
      );

      document.removeEventListener(
        "keydown",
        closeOnEscape,
      );
    };
  }, [
    isOpen,
    setOpenMenu,
  ]);


  return (
    <div
      ref={rootRef}
      className={[
        "tek-contact-select",
        isOpen
          ? "is-open"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <button
        className="tek-contact-select__trigger"
        type="button"
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={`${id}-options`}
        onClick={() =>
          setOpenMenu(
            isOpen
              ? null
              : id,
          )
        }
      >
        {Icon ? (
          <Icon
            className="tek-contact-select__leading-icon"
            size={17}
            strokeWidth={1.5}
            aria-hidden="true"
          />
        ) : null}

        <span
          className={[
            "tek-contact-select__value",
            selectedOption
              ? ""
              : "is-placeholder",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {selectedOption
            ? selectedOption.label
            : placeholder}
        </span>

        <ChevronDown
          className="tek-contact-select__chevron"
          size={16}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </button>


      <div
        className="tek-contact-select__menu"
        id={`${id}-options`}
        role="listbox"
        aria-label={placeholder}
      >
        <div className="tek-contact-select__options">
          {options.map(
            (option) => {
              const selected =
                option.value ===
                value;

              return (
                <button
                  key={option.value}
                  className={[
                    "tek-contact-select__option",
                    selected
                      ? "is-selected"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  type="button"
                  role="option"
                  aria-selected={
                    selected
                  }
                  onClick={() => {
                    onChange(
                      option.value,
                    );

                    setOpenMenu(
                      null,
                    );
                  }}
                >
                  <span>
                    {option.label}
                  </span>

                  <span
                    className="tek-contact-select__option-check"
                    aria-hidden="true"
                  >
                    <Check
                      size={13}
                      strokeWidth={2.2}
                    />
                  </span>
                </button>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
}


/* ==========================================================================
   COUNTRY SELECT
   ========================================================================== */

function CountrySelect({
  value,
  onChange,
  openMenu,
  setOpenMenu,
}) {
  const rootRef =
    useRef(null);

  const searchRef =
    useRef(null);

  const [
    query,
    setQuery,
  ] = useState("");

  const isOpen =
    openMenu ===
    "country-menu";

  const selectedCountry =
    countryCodeOptions.find(
      (country) =>
        country.iso === value,
    ) ||
    countryCodeOptions.find(
      (country) =>
        country.iso === "PK",
    );


  const filteredCountries =
    useMemo(() => {
      const cleanQuery =
        query
          .trim()
          .toLowerCase();

      if (!cleanQuery) {
        return countryCodeOptions;
      }

      return countryCodeOptions.filter(
        (country) => {
          const haystack =
            [
              country.name,
              country.code,
              country.iso,
            ]
              .join(" ")
              .toLowerCase();

          return haystack.includes(
            cleanQuery,
          );
        },
      );
    }, [
      query,
    ]);


  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const timer =
      window.setTimeout(
        () => {
          searchRef.current?.focus();
        },
        60,
      );

    function closeOnOutside(
      event,
    ) {
      if (
        rootRef.current &&
        !rootRef.current.contains(
          event.target,
        )
      ) {
        setQuery(
          "",
        );

        setOpenMenu(
          null,
        );
      }
    }

    function closeOnEscape(
      event,
    ) {
      if (
        event.key === "Escape"
      ) {
        setQuery(
          "",
        );

        setOpenMenu(
          null,
        );
      }
    }

    document.addEventListener(
      "pointerdown",
      closeOnOutside,
    );

    document.addEventListener(
      "keydown",
      closeOnEscape,
    );

    return () => {
      window.clearTimeout(
        timer,
      );

      document.removeEventListener(
        "pointerdown",
        closeOnOutside,
      );

      document.removeEventListener(
        "keydown",
        closeOnEscape,
      );
    };
  }, [
    isOpen,
    setOpenMenu,
  ]);


  return (
    <div
      ref={rootRef}
      className={[
        "tek-contact-country",
        isOpen
          ? "is-open"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <button
        className="tek-contact-country__trigger"
        type="button"
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls="country-menu-options"
        onClick={() => {
          if (isOpen) {
            setQuery(
              "",
            );
          }

          setOpenMenu(
            isOpen
              ? null
              : "country-menu",
          );
        }}
      >
        <span className="tek-contact-country__flag">
          {isoToFlag(
            selectedCountry.iso,
          )}
        </span>

        <span className="tek-contact-country__trigger-copy">
          <small>
            {selectedCountry.iso}
          </small>

          <strong>
            {selectedCountry.code}
          </strong>
        </span>

        <ChevronDown
          className="tek-contact-country__chevron"
          size={16}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </button>


      <div
        className="tek-contact-country__menu"
        id="country-menu-options"
        role="listbox"
        aria-label="Country calling code"
      >
        <div className="tek-contact-country__search">
          <Search
            size={15}
            strokeWidth={1.7}
            aria-hidden="true"
          />

          <input
            ref={searchRef}
            type="search"
            value={query}
            onChange={(
              event,
            ) =>
              setQuery(
                event.target.value,
              )
            }
            placeholder="Search country or code"
            aria-label="Search country or calling code"
          />
        </div>


        <div className="tek-contact-country__list">
          {filteredCountries.length ? (
            filteredCountries.map(
              (country) => {
                const selected =
                  country.iso ===
                  selectedCountry.iso;

                return (
                  <button
                    key={country.iso}
                    className={[
                      "tek-contact-country__option",
                      selected
                        ? "is-selected"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    type="button"
                    role="option"
                    aria-selected={
                      selected
                    }
                    onClick={() => {
                      onChange(
                        country.iso,
                      );

                      setQuery(
                        "",
                      );

                      setOpenMenu(
                        null,
                      );
                    }}
                  >
                    <span className="tek-contact-country__option-flag">
                      {isoToFlag(
                        country.iso,
                      )}
                    </span>

                    <span className="tek-contact-country__option-copy">
                      <strong>
                        {country.name}
                      </strong>

                      <small>
                        {country.iso}
                      </small>
                    </span>

                    <span className="tek-contact-country__option-code">
                      {country.code}
                    </span>

                    <span
                      className="tek-contact-country__option-check"
                      aria-hidden="true"
                    >
                      <Check
                        size={13}
                        strokeWidth={2.2}
                      />
                    </span>
                  </button>
                );
              },
            )
          ) : (
            <div className="tek-contact-country__empty">
              No matching country found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


export default function ContactPage() {
  const [
    selectedService,
    setSelectedService,
  ] = useState("website");

  const [
    budget,
    setBudget,
  ] = useState("");

  const [
    timeline,
    setTimeline,
  ] = useState("");

  const [
    countryIso,
    setCountryIso,
  ] = useState("PK");

  const [
    phoneNumber,
    setPhoneNumber,
  ] = useState("");

  const [
    openMenu,
    setOpenMenu,
  ] = useState(null);

  const [
    submissionState,
    formAction,
    isPending,
  ] = useActionState(
    submitContact,
    initialSubmissionState,
  );

  const submitted =
    submissionState.ok;


  const selectedServiceLabel =
    useMemo(() => {
      return (
        services.find(
          (service) =>
            service.key ===
            selectedService,
        )?.title ||
        "Website Development"
      );
    }, [
      selectedService,
    ]);


  const serviceSelectOptions =
    useMemo(
      () =>
        services.map(
          (service) => ({
            value:
              service.key,

            label:
              service.title,
          }),
        ),
      [],
    );


  const selectedCountry =
    useMemo(
      () =>
        countryCodeOptions.find(
          (country) =>
            country.iso ===
            countryIso,
        ) ||
        countryCodeOptions.find(
          (country) =>
            country.iso ===
            "PK",
        ),
      [
        countryIso,
      ],
    );


  const normalizedCallingCode =
    selectedCountry.code.replace(
      /-/g,
      "",
    );


  const fullPhoneNumber =
    phoneNumber
      ? `${normalizedCallingCode}${phoneNumber}`
      : "";


  function updateSelectedService(
    serviceKey,
  ) {
    setSelectedService(
      serviceKey,
    );
  }


  function handlePhoneChange(
    event,
  ) {
    const digitsOnly =
      event.target.value.replace(
        /\D/g,
        "",
      );

    setPhoneNumber(
      digitsOnly.slice(
        0,
        15,
      ),
    );
  }


  return (
    <section className="tek-contact-page">

      {/* ====================================================================
          HERO
          ==================================================================== */}

      <section
        className="tek-contact-hero"
        aria-labelledby="tek-contact-title"
      >
        <div
          className="tek-contact-hero__glow tek-contact-hero__glow--left"
          aria-hidden="true"
        />

        <div
          className="tek-contact-hero__glow tek-contact-hero__glow--right"
          aria-hidden="true"
        />


        <div className="tek-contact-shell">
          <div
            className="tek-contact-hero__content"
            data-reveal="up"
          >
            <p className="tek-contact-hero__eyebrow">
              Leading the way in IT solutions
            </p>


            <h1 id="tek-contact-title">
              Let&apos;s build your{" "}

              <span>
                Digital Product
              </span>
            </h1>


            <a
              className="tek-contact-hero__link"
              href="#project-details"
            >
              <span>
                TekCorp &gt; Contact Us
              </span>

              <ArrowUpRight
                size={15}
                strokeWidth={1.85}
              />
            </a>
          </div>
        </div>
      </section>


      {/* ====================================================================
          PROJECT BRIEF
          ==================================================================== */}

      <section
        className="tek-contact-brief"
        id="project-details"
        aria-labelledby="tek-contact-brief-title"
      >
        <div className="tek-contact-shell">

          <header
            className="tek-contact-brief__head"
            data-reveal="up"
          >
            <p>
              Hello
              <span aria-hidden="true">
                —
              </span>
            </p>


            <h2 id="tek-contact-brief-title">
              Let&apos;s talk about the details
            </h2>


            <span className="tek-contact-brief__description">
              Tell us what you&apos;re planning, what you need help with,
              and where you want your business or product to go next.
            </span>
          </header>


          {/* ================================================================
              SERVICE CARDS
              ================================================================ */}

          <div
            className="tek-contact-services"
            data-reveal="up"
          >
            <div className="tek-contact-services__heading">
              <span>
                You&apos;re interested in
              </span>

              <span
                className="tek-contact-services__heading-line"
                aria-hidden="true"
              />
            </div>


            <div
              className="tek-contact-services__grid"
              role="radiogroup"
              aria-label="Select the service you are interested in"
            >
              {services.map(
                (service) => {
                  const Icon =
                    service.icon;

                  const active =
                    selectedService ===
                    service.key;

                  return (
                    <button
                      key={service.key}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      className={[
                        "tek-contact-service",
                        active
                          ? "is-selected"
                          : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={() =>
                        updateSelectedService(
                          service.key,
                        )
                      }
                    >
                      <span className="tek-contact-service__top">
                        <span className="tek-contact-service__icon">
                          <Icon
                            size={18}
                            strokeWidth={1.7}
                          />
                        </span>

                        <span
                          className="tek-contact-service__check"
                          aria-hidden="true"
                        >
                          <Check
                            size={13}
                            strokeWidth={2.25}
                          />
                        </span>
                      </span>


                      <strong>
                        {service.title}
                      </strong>


                      <span className="tek-contact-service__copy">
                        {service.description}
                      </span>
                    </button>
                  );
                },
              )}
            </div>
          </div>


          {/* ================================================================
              FORM
              ================================================================ */}

          <div
            className="tek-contact-form-card"
            data-reveal="up"
          >
            <div className="tek-contact-form-card__head">
              <div>
                <p>
                  More about you
                  <span aria-hidden="true">
                    —
                  </span>
                </p>


                <h3>
                  Tell us about your project.
                </h3>
              </div>


              <div className="tek-contact-form-card__service">
                <span>
                  You selected
                </span>

                <strong>
                  {selectedServiceLabel}
                </strong>
              </div>
            </div>


            <form
              className="tek-contact-form"
              action={formAction}
              aria-busy={isPending}
              onSubmit={() =>
                setOpenMenu(null)
              }
            >
              <input
                type="hidden"
                name="source"
                value="contact-page"
              />

              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ display: "none" }}
              />

              <input
                type="hidden"
                name="service"
                value={selectedServiceLabel}
              />

              <input
                type="hidden"
                name="budget"
                value={budget}
              />

              <input
                type="hidden"
                name="timeline"
                value={timeline}
              />

              <input
                type="hidden"
                name="country"
                value={selectedCountry.name}
              />

              <input
                type="hidden"
                name="countryCode"
                value={selectedCountry.code}
              />

              <input
                type="hidden"
                name="fullPhone"
                value={fullPhoneNumber}
              />


              <div className="tek-contact-form__grid">

                {/* ==========================================================
                    SERVICE
                    ========================================================== */}

                <label className="tek-contact-field tek-contact-field--service">
                  <span className="tek-contact-field__label">
                    Select Service
                  </span>

                  <SelectMenu
                    id="service-menu"
                    value={selectedService}
                    placeholder="Select a service"
                    options={serviceSelectOptions}
                    onChange={
                      updateSelectedService
                    }
                    icon={Layers3}
                    openMenu={openMenu}
                    setOpenMenu={setOpenMenu}
                  />
                </label>


                {/* ==========================================================
                    NAME
                    ========================================================== */}

                <label className="tek-contact-field">
                  <span className="tek-contact-field__label">
                    Full Name
                  </span>

                  <span className="tek-contact-field__control">
                    <UserRound
                      size={17}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />

                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      autoComplete="name"
                      required
                    />
                  </span>
                </label>


                {/* ==========================================================
                    EMAIL
                    ========================================================== */}

                <label className="tek-contact-field">
                  <span className="tek-contact-field__label">
                    Email Address
                  </span>

                  <span className="tek-contact-field__control">
                    <Mail
                      size={17}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      autoComplete="email"
                      required
                    />
                  </span>
                </label>


                {/* ==========================================================
                    PHONE / WHATSAPP
                    ========================================================== */}

                <label className="tek-contact-field tek-contact-field--phone">
                  <span className="tek-contact-field__label">
                    Phone / WhatsApp
                  </span>

                  <span className="tek-contact-field__hint">
                    Select your country, then enter digits only.
                  </span>

                  <span className="tek-contact-phone">
                    <CountrySelect
                      value={countryIso}
                      onChange={(
                        iso,
                      ) => {
                        setCountryIso(
                          iso,
                        );
                      }}
                      openMenu={openMenu}
                      setOpenMenu={setOpenMenu}
                    />

                    <span className="tek-contact-field__control tek-contact-field__control--phone-number">
                      <input
                        type="tel"
                        name="phone"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={phoneNumber}
                        placeholder="3001234567"
                        autoComplete="tel-national"
                        maxLength={15}
                        aria-label="Phone or WhatsApp number, digits only"
                        onChange={
                          handlePhoneChange
                        }
                      />
                    </span>
                  </span>
                </label>


                {/* ==========================================================
                    COMPANY
                    ========================================================== */}

                <label className="tek-contact-field">
                  <span className="tek-contact-field__label">
                    Business / Company
                  </span>

                  <span className="tek-contact-field__control">
                    <Building2
                      size={17}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />

                    <input
                      type="text"
                      name="company"
                      placeholder="Company name"
                      autoComplete="organization"
                    />
                  </span>
                </label>


                {/* ==========================================================
                    BUDGET
                    ========================================================== */}

                <label className="tek-contact-field">
                  <span className="tek-contact-field__label">
                    Estimated Budget
                  </span>

                  <SelectMenu
                    id="budget-menu"
                    value={budget}
                    placeholder="Select budget range"
                    options={budgetOptions}
                    onChange={(
                      value,
                    ) => {
                      setBudget(
                        value,
                      );
                    }}
                    icon={WalletCards}
                    openMenu={openMenu}
                    setOpenMenu={setOpenMenu}
                  />
                </label>


                {/* ==========================================================
                    TIMELINE
                    ========================================================== */}

                <label className="tek-contact-field">
                  <span className="tek-contact-field__label">
                    Preferred Timeline
                  </span>

                  <SelectMenu
                    id="timeline-menu"
                    value={timeline}
                    placeholder="Select timeline"
                    options={timelineOptions}
                    onChange={(
                      value,
                    ) => {
                      setTimeline(
                        value,
                      );
                    }}
                    icon={CalendarClock}
                    openMenu={openMenu}
                    setOpenMenu={setOpenMenu}
                  />
                </label>


                {/* ==========================================================
                    MESSAGE
                    ========================================================== */}

                <label className="tek-contact-field tek-contact-field--message">
                  <span className="tek-contact-field__label">
                    Project Details
                  </span>

                  <span className="tek-contact-field__control tek-contact-field__control--textarea">
                    <MessageSquareText
                      size={18}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />

                    <textarea
                      name="message"
                      rows="6"
                      placeholder="Tell us about your idea, current challenge, goals and any important requirements..."
                      required
                    />
                  </span>
                </label>

              </div>


              {/* ============================================================
                  FORM ACTION
                  ============================================================ */}

              <div className="tek-contact-form__action">
                <p>
                  You&apos;re starting a conversation — no commitment,
                  no pressure. We&apos;ll review your brief and focus on
                  what can move your project forward.
                </p>


                <button
                  className={[
                    "tek-contact-form__submit",
                    submitted
                      ? "is-submitted"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  type="submit"
                  disabled={isPending}
                >
                  <span>
                    {isPending
                      ? "Saving your brief..."
                      : submitted
                      ? "Brief Received — Let's Build"
                      : "Get Started"}
                  </span>

                  {submitted ? (
                    <CheckCircle2
                      size={18}
                      strokeWidth={1.9}
                    />
                  ) : (
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.9}
                    />
                  )}
                </button>
              </div>


              {/* ============================================================
                  SUCCESS
                  ============================================================ */}

              {submitted && (
                <div
                  className="tek-contact-form__success"
                  role="status"
                  aria-live="polite"
                >
                  <span className="tek-contact-form__success-icon">
                    <CheckCircle2
                      size={19}
                      strokeWidth={1.8}
                    />
                  </span>

                  <span className="tek-contact-form__success-copy">
                    <small>
                      Project brief received
                    </small>

                    <strong>
                      You&apos;re on our radar — now we make the next move count.
                    </strong>

                    <span>
                      Your{" "}
                      <b>
                        {selectedServiceLabel}
                      </b>{" "}
                      brief is with us. We&apos;ll review the goals,
                      scope and priorities you shared, then come back
                      with a focused next step built around your business —
                      not a generic sales reply.
                    </span>
                  </span>
                </div>
              )}


              {!submitted &&
                submissionState.message && (
                  <div
                    className="tek-contact-form__success"
                    role="alert"
                    aria-live="assertive"
                  >
                    <span className="tek-contact-form__success-icon">
                      <MessageSquareText
                        size={19}
                        strokeWidth={1.8}
                      />
                    </span>

                    <span className="tek-contact-form__success-copy">
                      <small>
                        Submission not saved
                      </small>

                      <strong>
                        Please review your details and try again.
                      </strong>

                      <span>
                        {submissionState.message}
                      </span>
                    </span>
                  </div>
                )}

            </form>
          </div>

        </div>
      </section>

    </section>
  );
}
