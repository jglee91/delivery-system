import Link from 'next/link';

interface AppLinkProps {
  href: string;
  label: string;
}

const AppLink: React.FC<AppLinkProps> = ({ href, label }) => (
  <Link href={href}>
    <a>{label}</a>
  </Link>
);

export default AppLink;
