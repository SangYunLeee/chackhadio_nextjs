import footerData from '@/data/footer.json';
interface FooterData {
  address: string;
  phone: string;
  email: string;
}

export default async function Footer() {
  const _footerData: FooterData = footerData;
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-200 py-8 mt-16">
      <div className="max-w-2xl mx-auto px-4 text-center text-gray-700 text-sm space-y-2">
        <div>{_footerData.address}</div>
        <div>전화: {_footerData.phone}</div>
        <div>
          이메일: <a href={`mailto:${_footerData.email}`} className="underline text-blue-600">{_footerData.email}</a>
        </div>
      </div>
    </footer>
  );
}