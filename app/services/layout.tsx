import ServiceNav from './components/ServiceNav';

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceNav />
      <main>{children}</main>
    </>
  );
}
