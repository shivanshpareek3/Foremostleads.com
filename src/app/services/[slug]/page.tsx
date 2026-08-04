import ServiceClient from "./ServiceClient";
import { serviceContent } from "./data";

export function generateStaticParams() {
  return Object.keys(serviceContent).map((slug) => ({
    slug: slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  return <ServiceClient slug={params.slug} />;
}
