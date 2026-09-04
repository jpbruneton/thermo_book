import { notFound } from "next/navigation";

// Keep unmatched URLs inside the shared site document when using multiple
// root layouts. Known localized routes take precedence over this fallback.
export default function UnknownPage() {
  notFound();
}
